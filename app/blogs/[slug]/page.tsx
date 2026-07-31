import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  getBlogSlugs,
  getBlogBySlug,
  getAllBlogsMeta,
  type BlogFrontmatter,
} from "@/libraries/blogs";
import { parseBlogDate } from "@/libraries/date";
import ListenPerform from "@/app/components/homePageComponents/we-listen";
import { generateWebPageSchema } from "@/libraries/schema/webPageSchema";

// ─── Static Params ────────────────────────────────────────
export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

// ─── SEO Metadata ─────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  if (!blog) return {};
  return {
    title: `${blog.title} | AdRefresh Blog`,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      images: [{ url: blog.coverImage }],
    },
  };
}

// ─── Helpers ──────────────────────────────────────────────
function formatDate(d: string) {
  return parseBlogDate(d).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// ─── Related Card ─────────────────────────────────────────
function RelatedCard({ blog }: { blog: BlogFrontmatter }) {
  return (
    <Link
      href={`/blogs/${blog.slug}`}
      className="group flex gap-4 rounded-2xl border border-[#EBEBEB] hover:border-[#813DFF]/40 bg-white p-4 transition-all duration-300 hover:shadow-[0_4px_24px_rgba(129,61,255,0.10)]"
    >
      <div
        className="relative w-20 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-[#F3EEFF]"
        style={blog.coverImageBg ? { backgroundColor: blog.coverImageBg } : undefined}
      >
        <Image
          src={blog.coverImage}
          alt={blog.title}
          fill
          priority
          quality={100}
          sizes="100vw"
          className={blog.coverImageFit === "contain" ? "object-contain" : "object-cover"}
          style={{ objectPosition: blog.coverImagePosition ?? "center" }}
        />
      </div>
      <div className="flex flex-col justify-between min-w-0 py-0.5">
        <span className="text-[10px] font-bold tracking-widest uppercase text-[#813DFF]">
          {blog.category}
        </span>
        <h4 className="text-[#1C1C1C] font-bold text-sm leading-snug line-clamp-2 group-hover:text-[#813DFF] transition-colors">
          {blog.title}
        </h4>
        <span className="text-[#ADADAD] text-xs">{formatDate(blog.date)}</span>
      </div>
    </Link>
  );
}

// Tailwind arbitrary-variant classes applied to the rendered Markdown HTML,
// matching the look of the old heading/paragraph/list/table/callout blocks.
const PROSE_CLASSES = `
  [&_h2]:text-[#1C1C1C] [&_h2]:font-black [&_h2]:text-2xl md:[&_h2]:text-[1.75rem] [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:leading-snug
  [&_p]:text-[#565656] [&_p]:text-base md:[&_p]:text-[1.05rem] [&_p]:leading-[1.3] [&_p]:mb-5
  [&_ul]:list-disc [&_ul]:list-outside [&_ul]:pl-6 [&_ul]:mb-6 [&_ul]:space-y-2 [&_ul_li]:marker:text-[#813DFF]
  [&_li]:text-[#565656] [&_li]:text-base md:[&_li]:text-[1.05rem] [&_li]:leading-relaxed
  [&_table]:w-full [&_table]:border-collapse [&_table]:text-sm md:[&_table]:text-[0.95rem] [&_table]:my-8 [&_table]:block [&_table]:overflow-x-auto [&_table]:rounded-2xl [&_table]:border [&_table]:border-[#EBEBEB]
  [&_thead]:bg-[#F3EEFF]
  [&_th]:text-left [&_th]:font-black [&_th]:text-[#1C1C1C] [&_th]:px-4 [&_th]:py-3 [&_th]:border-b [&_th]:border-[#EBEBEB] [&_th]:whitespace-nowrap
  [&_td]:px-4 [&_td]:py-3 [&_td]:border-b [&_td]:border-[#EBEBEB] [&_td]:text-[#565656] [&_td]:align-top
  [&_blockquote]:my-8 [&_blockquote]:relative [&_blockquote]:pl-6 [&_blockquote]:pr-5 [&_blockquote]:py-5 [&_blockquote]:border-l-4 [&_blockquote]:border-[#813DFF] [&_blockquote]:text-[#1C1C1C] [&_blockquote]:font-semibold [&_blockquote]:text-base md:[&_blockquote]:text-lg [&_blockquote]:leading-relaxed [&_blockquote]:italic [&_blockquote_p]:mb-0
`;

// ─── Page ─────────────────────────────────────────────────
export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  if (!blog) notFound();

  const moreBlogs = getAllBlogsMeta()
    .filter((b) => b.slug !== slug)
    .slice(0, 3);

  const webPageSchema = generateWebPageSchema({
    url: `https://www.adrefresh.com/blogs/${slug}/`,
    title: `${blog.title} | AdRefresh Blog`,
    description: blog.excerpt,
  });

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      {/* ══════════════════════════════════════════
          HERO — deep purple gradient, full-bleed
          navbar is transparent so this gives it
          a visible dark background to sit on
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#5B2FD1]">

        {/* decorative radial glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-[#813DFF]/20 blur-[120px] pointer-events-none" />

        {/* GrayOutline pattern texture */}
        <div
          aria-hidden="true"
          className="
            absolute inset-0
            opacity-[0.18]
            brightness-0
            bg-repeat
            bg-[url('/images/service-page-images-videos/GrayOutline.svg')]
            bg-[length:320px] sm:bg-[length:400px] md:bg-[length:480px] lg:bg-[length:560px]
          "
        />

        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 lg:px-16 pt-20 sm:pt-32 pb-[120px] sm:pb-[190px] md:pb-[230px] lg:pb-[280px] xl:pb-[310px]">

          {/* back link */}
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-white/50 hover:text-[#DFFA33] text-sm font-semibold transition-colors duration-200 mb-8"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to articles
          </Link>

          {/* category pill */}
          <div className="mb-5">
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase bg-black/50 text-[#C9A8FF] border border-[#813DFF]/40">
              {blog.category}
            </span>
          </div>

          {/* title */}
          <h1 className="text-white font-black text-2xl sm:text-3xl md:text-4xl lg:text-[2.8rem] leading-[1.1] mb-6 max-w-4xl">
            {blog.title}
          </h1>

          {/* excerpt */}
          <p className="text-white/55 text-sm md:text-lg max-w-2xl leading-relaxed mb-4">
            {blog.excerpt}
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FEATURE IMAGE — embossed / overlay card that
          straddles the hero and the body section. Desktop
          (sm/md/lg/xl) keeps the original fixed pixel
          heights/margins untouched. Only the base (mobile)
          rule uses a fluid aspect-ratio height so the whole
          image shows without cropping on small screens.
      ══════════════════════════════════════════ */}
      <div className="relative z-20 max-w-6xl mx-auto px-5 md:px-10 lg:px-0 -mt-[160px] sm:-mt-[230px] md:-mt-[270px] lg:-mt-[320px] xl:-mt-[350px] mb-2">
        <div
          className={
            blog.coverImageAspect
              ? "relative w-full rounded-[1.75rem] sm:rounded-[2rem] overflow-hidden border-1 border-white shadow-[0_25px_70px_-15px_rgba(61,8,161,0.45)] mt-10 bg-white"
              : "relative w-full aspect-[16/9] sm:aspect-auto sm:h-[380px] md:h-[460px] lg:h-[560px] xl:h-[620px] rounded-[1.75rem] sm:rounded-[2rem] overflow-hidden border-1 border-white shadow-[0_25px_70px_-15px_rgba(61,8,161,0.45)] mt-10 bg-white"
          }
          style={{
            aspectRatio: blog.coverImageAspect || undefined,
            backgroundColor: blog.coverImageBg || undefined,
          }}
        >
          <Image
            src={blog.coverImage}
            alt={blog.title}
            fill
            sizes="(max-width:768px) 100vw, 1200px"
            className={blog.coverImageFit === "contain" ? "object-contain" : "object-cover"}
            style={{ objectPosition: blog.coverImagePosition ?? "center" }}
            priority
          />
        </div>
      </div>

      {/* ══════════════════════════════════════════
          BODY — plain white, article + sidebar
      ══════════════════════════════════════════ */}
      <div className="relative bg-white">
        <section className="relative max-w-7xl mx-auto px-5 md:px-10 lg:px-16 py-14 grid grid-cols-1 lg:grid-cols-[1fr_296px] gap-12 xl:gap-16">

          {/* ── Article ── */}
          <article className="min-w-0">

            {/* decorative accent line above content */}
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-[3px] rounded-full bg-[#813DFF]" />
              <span className="w-3 h-[3px] rounded-full bg-[#DFFA33]" />
            </div>

            {/* Markdown body, rendered to HTML at build time by remark
                and styled via the Tailwind arbitrary-variant classes above */}
            <div
              className={PROSE_CLASSES}
              dangerouslySetInnerHTML={{ __html: blog.contentHtml }}
            />

            {/* Tags */}
            <div className="mt-14 pt-8 border-t border-[#EBEBEB]">
              <p className="text-[11px] font-bold tracking-widest uppercase text-[#ADADAD] mb-3">Topics</p>
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full border border-[#813DFF]/25 bg-[#F3EEFF] text-[#813DFF] text-xs font-semibold"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author Bio */}
            <div className="mt-10 rounded-2xl overflow-hidden border border-[#EBEBEB]">
              {/* purple top stripe */}
              <div className="h-1.5 bg-gradient-to-r from-[#813DFF] via-[#A86EFF] to-[#DFFA33]" />
              <div className="p-6 flex flex-col sm:flex-row items-start gap-5 bg-white">
                <Image
                  src={blog.author.avatar}
                  alt={blog.author.name}
                  width={64}
                  height={64}
                  className="rounded-full flex-shrink-0 border-2 border-[#813DFF]"
                />
                <div>
                  <p className="text-[#1C1C1C] font-black text-base mb-0.5">{blog.author.name}</p>
                  <p className="text-[#813DFF] text-xs font-bold mb-2">{blog.author.role} at AdRefresh</p>
                  <p className="text-[#565656] text-sm leading-relaxed">
                    Helping brands navigate the intersection of data, creative, and media strategy. Passionate about building advertising systems that create real competitive advantage.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* ── Sidebar ── */}
          <aside className="flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">

            {/* CTA Card */}
            <div className="rounded-2xl overflow-hidden">
              {/* yellow accent top */}
              <div className="h-1.5 bg-[#DFFA33]" />
              <div className="bg-[#1A0F2E] p-6 text-white">
                <p className="text-[11px] font-bold tracking-widest uppercase text-white/40 mb-2">Work With Us</p>
                <h3 className="font-black text-xl leading-snug mb-3">
                  {blog.ctaTitle ?? "Turn these insights into real results."}
                </h3>
                <p className="text-white/60 text-sm mb-6 leading-relaxed">
                  {blog.ctaText ?? "AdRefresh builds media strategies that compound. Let's talk about your brand."}
                </p>
                <Link
                  href="/contact-us#form"
                  className="block text-center bg-[#813DFF] text-white font-black py-3 px-5 rounded-full text-sm hover:bg-[#6B2FD9] transition-colors duration-200"
                >
                  Get In Touch →
                </Link>
              </div>
            </div>

            {/* Divider label */}
            <div className="flex items-center gap-3">
              <span className="flex-1 h-px bg-[#EBEBEB]" />
              <span className="text-[11px] font-bold tracking-widest uppercase text-[#ADADAD]">More Insights</span>
              <span className="flex-1 h-px bg-[#EBEBEB]" />
            </div>

            {/* Related Posts */}
            {moreBlogs.length > 0 && (
              <div className="space-y-3">
                {moreBlogs.map((b) => (
                  <RelatedCard key={b.slug} blog={b} />
                ))}
              </div>
            )}

            {/* All articles link */}
            <Link
              href="/blogs"
              className="inline-flex items-center justify-center gap-2 border border-[#813DFF]/30 text-[#813DFF] text-sm font-bold py-3 px-5 rounded-full hover:bg-[#F3EEFF] transition-colors duration-200"
            >
              View all articles →
            </Link>
          </aside>
        </section>
      </div>

      {/* ── Bottom CTA ── */}
      <section className="mb-0">
        <ListenPerform />
      </section>

    </main>
  );
}


// dhh