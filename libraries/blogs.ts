import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

// ─── Types ────────────────────────────────────────────────
export type BlogFrontmatter = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: { name: string; role: string; avatar: string };
  coverImage: string;
  tags: string[];
  ctaTitle?: string;
  ctaText?: string;
};

export type BlogPost = BlogFrontmatter & {
  contentHtml: string;
};

const BLOGS_DIR = path.join(process.cwd(), "app/content/blogs");

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
      return { slug, ...(data as Omit<BlogFrontmatter, "slug">) };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
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
    ...(data as Omit<BlogFrontmatter, "slug">),
  };
}
