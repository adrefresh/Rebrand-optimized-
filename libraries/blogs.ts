import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";
import { parseBlogDate } from "./date";

// ─── Types ────────────────────────────────────────────────
export type Author = { name: string; role: string; avatar: string };

export type BlogFrontmatter = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: Author;
  coverImage: string;
  // Optional CSS object-position value (e.g. "center top", "top") for the
  // feature-image crop anchor. Defaults to "center" if not set. Use this
  // when a specific image's important content (like title text) sits near
  // an edge and the default center-crop on mobile cuts into it — this is
  // scoped to a single post's frontmatter, so it never affects any other
  // post's crop behavior.
  coverImagePosition?: string;
  // "cover" (default) fills the box, cropping overflow. "contain" shows the
  // whole image with no cropping (may add letterbox space around it if the
  // image's own proportions don't match the box). Scoped per-post — leave
  // unset and every other post keeps its default cover behavior.
  coverImageFit?: "cover" | "contain";
  // Background color shown behind the image when coverImageFit is "contain"
  // and the image doesn't fully fill the box — defaults to white if unset.
  // Set this to match a dark image's own background so any leftover space
  // blends in instead of looking like a stray white gap.
  coverImageBg?: string;
  // Locks the feature-image box to the image's real aspect ratio (e.g.
  // "2 / 1"), overriding the shared fixed heights entirely at every
  // breakpoint. Use this when you know the exact source image dimensions —
  // it guarantees zero cropping and zero letterbox space, since the box
  // always matches the image's true shape instead of approximating it.
  coverImageAspect?: string;
  tags: string[];
  ctaTitle?: string;
  ctaText?: string;
};

export type BlogPost = BlogFrontmatter & {
  contentHtml: string;
};

const BLOGS_DIR = path.join(process.cwd(), "app/content/blogs");
const AUTHORS_FILE = path.join(process.cwd(), "app/content/authors.md");

// ─── Authors (shared across every post) ────────────────────
// authors.md is the single source of truth for BOTH employee details and
// which posts they wrote — a blog post's own .md file has no author field
// at all. Each author entry looks like:
//   sankeerth:
//     name: "Sankeerth"
//     role: "Subject Matter Expert"
//     avatar: "https://..."
//     posts:
//       - "real-time-bidding-rtb"
// To assign/reassign a post, move its slug between authors' `posts` lists
// here — nothing in the blog post file itself ever needs to change.
type AuthorEntry = Author & { posts?: string[] };

function getAuthorsData(): Record<string, AuthorEntry> {
  if (!fs.existsSync(AUTHORS_FILE)) return {};
  const raw = fs.readFileSync(AUTHORS_FILE, "utf8");
  const { data } = matter(raw);
  return data as Record<string, AuthorEntry>;
}

// Builds a slug -> Author lookup by inverting every author's `posts` list.
function getSlugToAuthorMap(): Record<string, Author> {
  const authors = getAuthorsData();
  const map: Record<string, Author> = {};

  for (const [key, entry] of Object.entries(authors)) {
    const { posts, ...authorFields } = entry;
    for (const slug of posts ?? []) {
      if (map[slug]) {
        console.warn(
          `[blogs] slug "${slug}" is listed under more than one author in authors.md (last one wins: "${key}")`
        );
      }
      map[slug] = authorFields;
    }
  }

  return map;
}

function resolveAuthor(slug: string): Author {
  const map = getSlugToAuthorMap();
  const found = map[slug];
  if (!found) {
    console.warn(
      `[blogs] "${slug}" isn't listed under any author's "posts" array in app/content/authors.md`
    );
    return { name: "", role: "", avatar: "" };
  }
  return found;
}

// ─── Slugs (for generateStaticParams) ──────────────────────
export function getBlogSlugs(): string[] {
  if (!fs.existsSync(BLOGS_DIR)) return [];
  return fs
    .readdirSync(BLOGS_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

// ─── Frontmatter only, for listing pages ───────────────────
export function getAllBlogsMeta(): BlogFrontmatter[] {
  return getBlogSlugs()
    .map((slug) => {
      const filePath = path.join(BLOGS_DIR, `${slug}.md`);
      const raw = fs.readFileSync(filePath, "utf8");
      const { data } = matter(raw);
      return {
        slug,
        ...(data as Omit<BlogFrontmatter, "slug" | "author">),
        author: resolveAuthor(slug),
      };
    })
    .sort((a, b) => parseBlogDate(b.date).getTime() - parseBlogDate(a.date).getTime());
}

// ─── Single post, frontmatter + rendered HTML body ─────────
export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
  const filePath = path.join(BLOGS_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  const processed = await remark().use(remarkGfm).use(remarkHtml).process(content);
  const contentHtml = processed.toString();

  return {
    slug,
    contentHtml,
    ...(data as Omit<BlogFrontmatter, "slug" | "author">),
    author: resolveAuthor(slug),
  };
}
