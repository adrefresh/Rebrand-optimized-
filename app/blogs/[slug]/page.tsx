// import Link from "next/link";
// import Image from "next/image";
// import { notFound } from "next/navigation";
// import blogsData from "../../json-data/blogs.json";

// // ─── Types ────────────────────────────────────────────────
// type ContentBlock =
//   | { type: "paragraph"; text: string }
//   | { type: "heading"; text: string }
//   | { type: "callout"; text: string };

// type Blog = {
//   slug: string;
//   title: string;
//   excerpt: string;
//   category: string;
//   date: string;
//   readTime: string;
//   author: { name: string; role: string; avatar: string };
//   coverImage: string;
//   tags: string[];
//   content: ContentBlock[];
// };

// // ─── Static Params (required for output: "export") ────────
// export function generateStaticParams() {
//   return (blogsData as Blog[]).map((blog) => ({ slug: blog.slug }));
// }

// // ─── SEO Metadata ─────────────────────────────────────────
// export async function generateMetadata({ params }: { params: { slug: string } }) {
//   const blog = (blogsData as Blog[]).find((b) => b.slug === params.slug);
//   if (!blog) return {};
//   return {
//     title: `${blog.title} | AdRefresh Blog`,
//     description: blog.excerpt,
//     openGraph: {
//       title: blog.title,
//       description: blog.excerpt,
//       images: [{ url: blog.coverImage }],
//     },
//   };
// }

// // ─── Helpers ──────────────────────────────────────────────
// function formatDate(d: string) {
//   return new Date(d).toLocaleDateString("en-IN", {
//     day: "numeric",
//     month: "long",
//     year: "numeric",
//   });
// }

// function estimateReadingProgress(blocks: ContentBlock[]) {
//   const total = blocks.filter((b) => b.type === "heading").length;
//   return total;
// }

// // ─── Content Renderer ─────────────────────────────────────
// function RenderContent({ blocks }: { blocks: ContentBlock[] }) {
//   return (
//     <div className="space-y-0">
//       {blocks.map((block, i) => {
//         if (block.type === "heading") {
//           return (
//             <h2
//               key={i}
//               className="text-[#1C1C1C] font-black text-2xl md:text-3xl mt-10 mb-4 leading-snug"
//             >
//               {block.text}
//             </h2>
//           );
//         }
//         if (block.type === "callout") {
//           return (
//             <div
//               key={i}
//               className="my-8 border-l-4 border-[#813DFF] bg-[#EDE5FF] rounded-r-2xl px-6 py-5"
//             >
//               <p className="text-[#1C1C1C] font-semibold text-base md:text-lg leading-relaxed italic">
//                 "{block.text}"
//               </p>
//             </div>
//           );
//         }
//         return (
//           <p
//             key={i}
//             className="text-[#565656] text-base md:text-lg leading-[1.8] mb-5"
//           >
//             {block.text}
//           </p>
//         );
//       })}
//     </div>
//   );
// }

// // ─── Related Card ─────────────────────────────────────────
// function RelatedCard({ blog }: { blog: Blog }) {
//   return (
//     <Link
//       href={`/blogs/${blog.slug}`}
//       className="group flex gap-4 rounded-2xl border border-[#DADADA] hover:border-[#813DFF]/50 bg-white p-4 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(129,61,255,0.1)]"
//     >
//       <div className="relative w-24 h-20 rounded-xl overflow-hidden flex-shrink-0">
//         <Image
//           src={blog.coverImage}
//           alt={blog.title}
//           fill
//           sizes="96px"
//           className="object-cover group-hover:scale-105 transition-transform duration-300"
//         />
//       </div>
//       <div className="flex flex-col justify-between min-w-0">
//         <span className="text-[10px] font-bold tracking-widest uppercase text-[#813DFF]">
//           {blog.category}
//         </span>
//         <h4 className="text-[#1C1C1C] font-bold text-sm leading-snug line-clamp-2 group-hover:text-[#813DFF] transition-colors">
//           {blog.title}
//         </h4>
//         <span className="text-[#949494] text-xs">{blog.readTime}</span>
//       </div>
//     </Link>
//   );
// }

// // ─── Page ─────────────────────────────────────────────────


//   const sectionCount = estimateReadingProgress(blog.content);

//   return (
//     <main className="min-h-screen bg-white">

//       {/* ── Back Bar ── */}
//       <div className="bg-[#1C1C1C] px-5 md:px-10 lg:px-16 pt-24 pb-6">
//         <div className="max-w-7xl mx-auto">
//           <Link
//             href="/blogs"
//             className="inline-flex items-center gap-2 text-white/60 hover:text-[#DFFA33] text-sm font-semibold transition-colors duration-200"
//           >
//             <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//               <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//             </svg>
//             Back to Insights
//           </Link>
//         </div>
//       </div>

//       {/* ── Hero ── */}
//       <section className="bg-[#1C1C1C] pb-0">
//         <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16">
//           {/* meta */}
//           <div className="flex flex-wrap items-center gap-3 mb-5">
//             <span className="px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-[#813DFF] text-white">
//               {blog.category}
//             </span>
//             <span className="text-white/40 text-xs">{sectionCount} sections</span>
//             <span className="text-white/40 text-xs">·</span>
//             <span className="text-white/40 text-xs">{blog.readTime}</span>
//           </div>

//           {/* title */}
//           <h1 className="text-white font-black text-3xl md:text-5xl lg:text-6xl leading-[1.05] mb-6 max-w-4xl">
//             {blog.title}
//           </h1>

//           {/* excerpt */}
//           <p className="text-white/60 text-base md:text-xl max-w-2xl mb-8 leading-relaxed">
//             {blog.excerpt}
//           </p>

//           {/* author + date */}
//           <div className="flex flex-wrap items-center gap-6 pb-8 border-b border-white/10">
//             <div className="flex items-center gap-3">
//               <Image
//                 src={blog.author.avatar}
//                 alt={blog.author.name}
//                 width={44}
//                 height={44}
//                 className="rounded-full border-2 border-[#813DFF]"
//               />
//               <div>
//                 <p className="text-white font-bold text-sm">{blog.author.name}</p>
//                 <p className="text-white/50 text-xs">{blog.author.role}</p>
//               </div>
//             </div>
//             <div className="w-px h-8 bg-white/10 hidden sm:block" />
//             <p className="text-white/50 text-sm">{formatDate(blog.date)}</p>
//           </div>

//           {/* cover image */}
//           <div className="relative w-full h-[260px] md:h-[420px] lg:h-[500px] rounded-t-3xl overflow-hidden mt-8">
//             <Image
//               src={blog.coverImage}
//               alt={blog.title}
//               fill
//               sizes="(max-width:768px) 100vw, 1200px"
//               className="object-cover"
//               priority
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent" />
//           </div>
//         </div>
//       </section>

//       {/* ── Body ── */}
//       <section className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16 py-14 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">

//         {/* Article Content */}
//         <article className="min-w-0">
//           <RenderContent blocks={blog.content} />

//           {/* Tags */}
//           <div className="mt-12 pt-8 border-t border-[#DADADA]">
//             <p className="text-xs font-bold tracking-widest uppercase text-[#949494] mb-3">Topics</p>
//             <div className="flex flex-wrap gap-2">
//               {blog.tags.map((tag) => (
//                 <span
//                   key={tag}
//                   className="px-3 py-1.5 rounded-full border border-[#813DFF]/30 bg-[#EDE5FF] text-[#813DFF] text-xs font-semibold"
//                 >
//                   #{tag}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* Author Bio Card */}
//           <div className="mt-10 rounded-2xl bg-[#F9F9F9] border border-[#DADADA] p-6 flex items-start gap-5">
//             <Image
//               src={blog.author.avatar}
//               alt={blog.author.name}
//               width={60}
//               height={60}
//               className="rounded-full flex-shrink-0 border-2 border-[#813DFF]"
//             />
//             <div>
//               <p className="text-[#1C1C1C] font-black text-base mb-0.5">{blog.author.name}</p>
//               <p className="text-[#813DFF] text-xs font-bold mb-2">{blog.author.role} at AdRefresh</p>
//               <p className="text-[#565656] text-sm leading-relaxed">
//                 Helping brands navigate the intersection of data, creative, and media strategy. Passionate about building advertising systems that create real competitive advantage.
//               </p>
//             </div>
//           </div>
//         </article>

//         {/* Sidebar */}
//         <aside className="space-y-8">

//           {/* CTA Card */}
//           <div className="rounded-2xl bg-[#813DFF] p-6 text-white sticky top-24">
//             <p className="text-xs font-bold tracking-widest uppercase text-white/60 mb-2">Work With Us</p>
//             <h3 className="font-black text-xl leading-snug mb-3">
//               Turn these insights into real results.
//             </h3>
//             <p className="text-white/80 text-sm mb-5 leading-relaxed">
//               AdRefresh builds media strategies that compound. Let's talk about your brand.
//             </p>
//             <Link
//               href="/contact-us"
//               className="block text-center bg-[#DFFA33] text-[#1C1C1C] font-black py-3 px-5 rounded-full text-sm hover:scale-[1.03] transition-transform duration-200"
//             >
//               Get In Touch →
//             </Link>
//           </div>

//           {/* Related Posts */}
//           {moreBlogs.length > 0 && (
//             <div>
//               <p className="text-xs font-bold tracking-widest uppercase text-[#949494] mb-4">More Insights</p>
//               <div className="space-y-3">
//                 {moreBlogs.map((b) => (
//                   <RelatedCard key={b.slug} blog={b} />
//                 ))}
//               </div>
//             </div>
//           )}
//         </aside>
//       </section>

//       {/* ── Bottom CTA ── */}
//       <section className="bg-[#1C1C1C] py-16 px-5 text-center">
//         <p className="text-white/50 text-xs font-bold tracking-widest uppercase mb-3">Keep reading</p>
//         <h2 className="text-white font-black text-3xl md:text-4xl mb-6">
//           More from <span className="text-[#DFFA33]">AdRefresh Insights</span>
//         </h2>
//         <Link
//           href="/blogs"
//           className="inline-block bg-white text-[#1C1C1C] font-black px-8 py-4 rounded-full text-base hover:bg-[#DFFA33] transition-colors duration-200"
//         >
//           ← All Articles
//         </Link>
//       </section>
//     </main>
//   );
// }
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import blogsData from "../../json-data/blogs.json";
import ListenPerform from "@/app/components/homePageComponents/we-listen";

// ─── Types ────────────────────────────────────────────────
type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "callout"; text: string };

type Blog = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: { name: string; role: string; avatar: string };
  coverImage: string;
  tags: string[];
  content: ContentBlock[];
};

// ─── Static Params ────────────────────────────────────────
export function generateStaticParams() {
  return (blogsData as Blog[]).map((blog) => ({ slug: blog.slug }));
}

// ─── SEO Metadata ─────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = (blogsData as Blog[]).find((b) => b.slug === slug);
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
  return new Date(d).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function estimateReadingProgress(blocks: ContentBlock[]) {
  return blocks.filter((b) => b.type === "heading").length;
}

// ─── Content Renderer ─────────────────────────────────────
function RenderContent({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="space-y-0">
      {blocks.map((block, i) => {
        if (block.type === "heading") {
          return (
            <h2
              key={i}
              className="text-[#1C1C1C] font-black text-2xl md:text-3xl mt-10 mb-4 leading-snug"
            >
              {block.text}
            </h2>
          );
        }
        if (block.type === "callout") {
          return (
            <div
              key={i}
              className="my-8 border-l-4 border-[#813DFF] bg-[#EDE5FF] rounded-r-2xl px-6 py-5"
            >
              <p className="text-[#1C1C1C] font-semibold text-base md:text-lg leading-relaxed italic">
                "{block.text}"
              </p>
            </div>
          );
        }
        return (
          <p
            key={i}
            className="text-[#565656] text-base md:text-lg leading-[1.8] mb-5"
          >
            {block.text}
          </p>
        );
      })}
    </div>
  );
}

// ─── Related Card ─────────────────────────────────────────
function RelatedCard({ blog }: { blog: Blog }) {
  return (
    <Link
      href={`/blogs/${blog.slug}`}
      className="group flex gap-4 rounded-2xl border border-[#DADADA] hover:border-[#813DFF]/50 bg-white p-4 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(129,61,255,0.1)]"
    >
      <div className="relative w-24 h-20 rounded-xl overflow-hidden flex-shrink-0">
        <Image
          src={blog.coverImage}
          alt={blog.title}
          fill
          sizes="96px"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="flex flex-col justify-between min-w-0">
        <span className="text-[10px] font-bold tracking-widest uppercase text-[#813DFF]">
          {blog.category}
        </span>
        <h4 className="text-[#1C1C1C] font-bold text-sm leading-snug line-clamp-2 group-hover:text-[#813DFF] transition-colors">
          {blog.title}
        </h4>
        <span className="text-[#949494] text-xs">{blog.readTime}</span>
      </div>
    </Link>
  );
}

// ─── Page ─────────────────────────────────────────────────
export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const blog = (blogsData as Blog[]).find((b) => b.slug === slug);
  if (!blog) notFound();

  const moreBlogs = (blogsData as Blog[])
    .filter((b) => b.slug !== slug)
    .slice(0, 3);

  const sectionCount = estimateReadingProgress(blog.content);

  return (
    <main className="min-h-screen bg-white">

      {/* ── Back Bar ── */}
      <div className="bg-[#1C1C1C] px-5 md:px-10 lg:px-16 pt-24 pb-6">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-white/60 hover:text-[#DFFA33] text-sm font-semibold transition-colors duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Insights
          </Link>
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="bg-[#1C1C1C] pb-0">
        <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16">
          {/* meta */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-[#813DFF] text-white">
              {blog.category}
            </span>
            <span className="text-white/40 text-xs">{sectionCount} sections</span>
            <span className="text-white/40 text-xs">·</span>
            <span className="text-white/40 text-xs">{blog.readTime}</span>
          </div>

          {/* title */}
          <h1 className="text-white font-black text-3xl md:text-5xl lg:text-6xl leading-[1.05] mb-6 max-w-4xl">
            {blog.title}
          </h1>

          {/* excerpt */}
          <p className="text-white/60 text-base md:text-xl max-w-2xl mb-8 leading-relaxed">
            {blog.excerpt}
          </p>

          {/* author + date */}
          <div className="flex flex-wrap items-center gap-6 pb-8 border-b border-white/10">
            <div className="flex items-center gap-3">
              <Image
                src={blog.author.avatar}
                alt={blog.author.name}
                width={44}
                height={44}
                className="rounded-full border-2 border-[#813DFF]"
              />
              <div>
                <p className="text-white font-bold text-sm">{blog.author.name}</p>
                <p className="text-white/50 text-xs">{blog.author.role}</p>
              </div>
            </div>
            <div className="w-px h-8 bg-white/10 hidden sm:block" />
            <p className="text-white/50 text-sm">{formatDate(blog.date)}</p>
          </div>

          {/* cover image */}
          <div className="relative w-full h-[260px] md:h-[420px] lg:h-[500px] rounded-t-3xl overflow-hidden mt-8">
            <Image
              src={blog.coverImage}
              alt={blog.title}
              fill
              sizes="(max-width:768px) 100vw, 1200px"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent" />
          </div>
        </div>
      </section>

      {/* ── Body ── */}
      <section className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16 py-14 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">

        {/* Article Content */}
        <article className="min-w-0">
          <RenderContent blocks={blog.content} />

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-[#DADADA]">
            <p className="text-xs font-bold tracking-widest uppercase text-[#949494] mb-3">Topics</p>
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full border border-[#813DFF]/30 bg-[#EDE5FF] text-[#813DFF] text-xs font-semibold"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Author Bio Card */}
          <div className="mt-10 rounded-2xl bg-[#F9F9F9] border border-[#DADADA] p-6 flex items-start gap-5">
            <Image
              src={blog.author.avatar}
              alt={blog.author.name}
              width={60}
              height={60}
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
        </article>

        {/* Sidebar */}
        <aside className="space-y-8">

          {/* CTA Card */}
          <div className="rounded-2xl bg-[#813DFF] p-6 text-white sticky top-24">
            <p className="text-xs font-bold tracking-widest uppercase text-white/60 mb-2">Work With Us</p>
            <h3 className="font-black text-xl leading-snug mb-3">
              Turn these insights into real results.
            </h3>
            <p className="text-white/80 text-sm mb-5 leading-relaxed">
              AdRefresh builds media strategies that compound. Let's talk about your brand.
            </p>
            <Link
              href="/contact-us"
              className="block text-center bg-[#DFFA33] text-[#1C1C1C] font-black py-3 px-5 rounded-full text-sm hover:scale-[1.03] transition-transform duration-200"
            >
              Get In Touch →
            </Link>
          </div>

          {/* Related Posts */}
          {moreBlogs.length > 0 && (
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-[#949494] mb-4">More Insights</p>
              <div className="space-y-3">
                {moreBlogs.map((b) => (
                  <RelatedCard key={b.slug} blog={b} />
                ))}
              </div>
            </div>
          )}
        </aside>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="bg-[#1C1C1C] py-16 px-5 text-center">
       <ListenPerform/>
      </section>
    </main>
  );
}
