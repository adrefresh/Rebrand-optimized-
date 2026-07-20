// // import Link from "next/link";
// // import Image from "next/image";
// // import { notFound } from "next/navigation";
// // import blogsData from "../../json-data/blogs.json";
// // import ListenPerform from "@/app/components/homePageComponents/we-listen";
// // import { generateWebPageSchema } from "@/libraries/schema/webPageSchema";

// // // ─── Types ────────────────────────────────────────────────
// // type ContentBlock =
// //   | { type: "paragraph"; text: string }
// //   | { type: "heading"; text: string }
// //   | { type: "callout"; text: string };

// // type Blog = {
// //   slug: string;
// //   title: string;
// //   excerpt: string;
// //   category: string;
// //   date: string;
// //   readTime: string;
// //   author: { name: string; role: string; avatar: string };
// //   coverImage: string;
// //   tags: string[];
// //   content: ContentBlock[];
// // };

// // // ─── Static Params ────────────────────────────────────────
// // export function generateStaticParams() {
// //   return (blogsData as Blog[]).map((blog) => ({ slug: blog.slug }));
// // }

// // // ─── SEO Metadata ─────────────────────────────────────────
// // export async function generateMetadata({
// //   params,
// // }: {
// //   params: Promise<{ slug: string }>;
// // }) {
// //   const { slug } = await params;
// //   const blog = (blogsData as Blog[]).find((b) => b.slug === slug);
// //   if (!blog) return {};
// //   return {
// //     title: `${blog.title} | AdRefresh Blog`,
// //     description: blog.excerpt,
// //     openGraph: {
// //       title: blog.title,
// //       description: blog.excerpt,
// //       images: [{ url: blog.coverImage }],
// //     },
// //   };
// // }

// // // ─── Helpers ──────────────────────────────────────────────
// // function formatDate(d: string) {
// //   return new Date(d).toLocaleDateString("en-IN", {
// //     day: "numeric",
// //     month: "long",
// //     year: "numeric",
// //   });
// // }

// // // ─── Content Renderer ─────────────────────────────────────
// // function RenderContent({ blocks }: { blocks: ContentBlock[] }) {
// //   return (
// //     <div>
// //       {blocks.map((block, i) => {
// //         if (block.type === "heading") {
// //           return (
// //             <h2
// //               key={i}
// //               className="text-[#1C1C1C] font-black text-2xl md:text-[1.75rem] mt-10 mb-4 leading-snug"
// //             >
// //               {block.text}
// //             </h2>
// //           );
// //         }
// //         if (block.type === "callout") {
// //           return (
// //             <div
// //               key={i}
// //               className="my-8 relative pl-6 pr-5 py-5"
// //             >
// //               {/* left accent bar */}
// //               <span className="absolute left-0 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-[#813DFF] to-[#DFFA33]" />
// //               <p className="text-[#1C1C1C] font-semibold text-base md:text-lg leading-relaxed italic">
// //                 "{block.text}"
// //               </p>
// //             </div>
// //           );
// //         }
// //         return (
// //           <p key={i} className="text-[#565656] text-base md:text-[1.05rem] leading-[1.85] mb-5">
// //             {block.text}
// //           </p>
// //         );
// //       })}
// //     </div>
// //   );
// // }

// // // ─── Related Card ─────────────────────────────────────────
// // function RelatedCard({ blog }: { blog: Blog }) {
// //   return (
// //     <Link
// //       href={`/blogs/${blog.slug}`}
// //       className="group flex gap-4 rounded-2xl border border-[#EBEBEB] hover:border-[#813DFF]/40 bg-white p-4 transition-all duration-300 hover:shadow-[0_4px_24px_rgba(129,61,255,0.10)]"
// //     >
// //       <div className="relative w-20 h-16 rounded-xl overflow-hidden flex-shrink-0">
// //       <Image
// //   src={blog.coverImage}
// //   alt={blog.title}
// //   fill
// //   priority
// //   quality={100}
// //   sizes="100vw"
// //   className="object-cover"
// // />
// //       </div>
// //       <div className="flex flex-col justify-between min-w-0 py-0.5">
// //         <span className="text-[10px] font-bold tracking-widest uppercase text-[#813DFF]">
// //           {blog.category}
// //         </span>
// //         <h4 className="text-[#1C1C1C] font-bold text-sm leading-snug line-clamp-2 group-hover:text-[#813DFF] transition-colors">
// //           {blog.title}
// //         </h4>
// //         <span className="text-[#ADADAD] text-xs">{formatDate(blog.date)}</span>
// //       </div>
// //     </Link>
// //   );
// // }

// // // ─── Page ─────────────────────────────────────────────────
// // export default async function BlogDetailPage({
// //   params,
// // }: {
// //   params: Promise<{ slug: string }>;
// // }) {
// //   const { slug } = await params;
// //   const blog = (blogsData as Blog[]).find((b) => b.slug === slug);
// //   if (!blog) notFound();

// //   const moreBlogs = (blogsData as Blog[])
// //     .filter((b) => b.slug !== slug)
// //     .slice(0, 3);

// //   const webPageSchema = generateWebPageSchema({
// //     url: `https://www.adrefresh.com/blogs/${slug}/`,
// //     title: `${blog.title} | AdRefresh Blog`,
// //     description: blog.excerpt,
// //   });

// //   return (
// //     <main className="min-h-screen bg-white">
// //       <script
// //         type="application/ld+json"
// //         dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
// //       />

// //       {/* ══════════════════════════════════════════
// //           HERO — deep purple gradient, full-bleed
// //           navbar is transparent so this gives it
// //           a visible dark background to sit on
// //       ══════════════════════════════════════════ */}
// //       <section className="relative overflow-hidden bg-[#3d08a1]">

// //         {/* decorative radial glow */}
// //         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-[#813DFF]/20 blur-[120px] pointer-events-none" />

// //         {/* subtle grid texture */}
// //         <div
// //           className="absolute inset-0 opacity-[0.04]"
// //           style={{
// //             backgroundImage:
// //               "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
// //             backgroundSize: "40px 40px",
// //           }}
// //         />

// //         <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 lg:px-16 pt-32 pb-0">

// //           {/* back link */}
// //           <Link
// //             href="/blogs"
// //             className="inline-flex items-center gap-2 text-white/50 hover:text-[#DFFA33] text-sm font-semibold transition-colors duration-200 mb-8"
// //           >
// //             <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
// //               <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
// //             </svg>
// //             Back to Blogs
// //           </Link>

// //           {/* category pill */}
// //           <div className="mb-5">
// //             <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase bg-[#813DFF]/30 text-[#C9A8FF] border border-[#813DFF]/40">
// //               {blog.category}
// //             </span>
// //           </div>

// //           {/* title */}
// //           <h1 className="text-white font-black text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.06] mb-6 max-w-4xl">
// //             {blog.title}
// //           </h1>

// //           {/* excerpt */}
// //           <p className="text-white/55 text-base md:text-xl max-w-2xl mb-10 leading-relaxed">
// //             {blog.excerpt}
// //           </p>

// //           {/* author strip */}
// //           {/* <div className="flex flex-wrap items-center gap-4 pb-10 border-b border-white/10">
// //             <Image
// //               src={blog.author.avatar}
// //               alt={blog.author.name}
// //               width={46}
// //               height={46}
// //               className="rounded-full border-2 border-[#813DFF]"
// //             />
// //             <div>
// //               <p className="text-white font-bold text-sm">{blog.author.name}</p>
// //               <p className="text-white/40 text-xs">{blog.author.role}</p>
// //             </div>
// //             <span className="hidden sm:block w-px h-7 bg-white/15" />
// //             <p className="text-white/40 text-sm">{formatDate(blog.date)}</p>
// //           </div> */}

// //           {/* cover image — floats up from hero into content */}
// //           <div className="relative w-full h-[220px] sm:h-[360px] md:h-[460px] lg:h-[520px] rounded-t-3xl overflow-hidden border-2 border-white mt-10">
// //             <Image
// //               src={blog.coverImage}
// //               alt={blog.title}
// //               fill
// //               sizes="(max-width:768px) 100vw, 1200px"
// //               className="object-cover"
// //               priority

// //             />
// //             {/* fade into white below */}
// //             <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/10 to-transparent" />
// //           </div>
// //         </div>
// //       </section>

// //       {/* ══════════════════════════════════════════
// //           BODY — white bg, article + sidebar
// //       ══════════════════════════════════════════ */}
// //       <section className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16 py-14 grid grid-cols-1 lg:grid-cols-[1fr_296px] gap-12 xl:gap-16">

// //         {/* ── Article ── */}
// //         <article className="min-w-0">

// //           {/* decorative accent line above content */}
// //           <div className="flex items-center gap-3 mb-8">
// //             <span className="w-8 h-[3px] rounded-full bg-[#813DFF]" />
// //             <span className="w-3 h-[3px] rounded-full bg-[#DFFA33]" />
// //           </div>

// //           <RenderContent blocks={blog.content} />

// //           {/* Tags */}
// //           <div className="mt-14 pt-8 border-t border-[#EBEBEB]">
// //             <p className="text-[11px] font-bold tracking-widest uppercase text-[#ADADAD] mb-3">Topics</p>
// //             <div className="flex flex-wrap gap-2">
// //               {blog.tags.map((tag) => (
// //                 <span
// //                   key={tag}
// //                   className="px-3 py-1.5 rounded-full border border-[#813DFF]/25 bg-[#F3EEFF] text-[#813DFF] text-xs font-semibold"
// //                 >
// //                   #{tag}
// //                 </span>
// //               ))}
// //             </div>
// //           </div>

// //           {/* Author Bio */}
// //           <div className="mt-10 rounded-2xl overflow-hidden border border-[#EBEBEB]">
// //             {/* purple top stripe */}
// //             <div className="h-1.5 bg-gradient-to-r from-[#813DFF] via-[#A86EFF] to-[#DFFA33]" />
// //             <div className="p-6 flex flex-col sm:flex-row items-start gap-5 bg-[#FAFAFA]">
// //               <Image
// //                 src={blog.author.avatar}
// //                 alt={blog.author.name}
// //                 width={64}
// //                 height={64}
// //                 className="rounded-full flex-shrink-0 border-2 border-[#813DFF]"
// //               />
// //               <div>
// //                 <p className="text-[#1C1C1C] font-black text-base mb-0.5">{blog.author.name}</p>
// //                 <p className="text-[#813DFF] text-xs font-bold mb-2">{blog.author.role} at AdRefresh</p>
// //                 <p className="text-[#565656] text-sm leading-relaxed">
// //                   Helping brands navigate the intersection of data, creative, and media strategy. Passionate about building advertising systems that create real competitive advantage.
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //         </article>

// //         {/* ── Sidebar ── */}
// //         <aside className="flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">

// //           {/* CTA Card */}
// //           <div className="rounded-2xl overflow-hidden">
// //             {/* yellow accent top */}
// //             <div className="h-1.5 bg-[#DFFA33]" />
// //             <div className="bg-[#1A0F2E] p-6 text-white">
// //               <p className="text-[11px] font-bold tracking-widest uppercase text-white/40 mb-2">Work With Us</p>
// //               <h3 className="font-black text-xl leading-snug mb-3">
// //                 Turn these insights into real results.
// //               </h3>
// //               <p className="text-white/60 text-sm mb-6 leading-relaxed">
// //                 AdRefresh builds media strategies that compound. Let's talk about your brand.
// //               </p>
// //               <Link
// //                 href="/contact-us"
// //                 className="block text-center bg-[#813DFF] text-white font-black py-3 px-5 rounded-full text-sm hover:bg-[#6B2FD9] transition-colors duration-200"
// //               >
// //                 Get In Touch →
// //               </Link>
// //             </div>
// //           </div>

// //           {/* Divider label */}
// //           <div className="flex items-center gap-3">
// //             <span className="flex-1 h-px bg-[#EBEBEB]" />
// //             <span className="text-[11px] font-bold tracking-widest uppercase text-[#ADADAD]">More Insights</span>
// //             <span className="flex-1 h-px bg-[#EBEBEB]" />
// //           </div>

// //           {/* Related Posts */}
// //           {moreBlogs.length > 0 && (
// //             <div className="space-y-3">
// //               {moreBlogs.map((b) => (
// //                 <RelatedCard key={b.slug} blog={b} />
// //               ))}
// //             </div>
// //           )}

// //           {/* All articles link */}
// //           <Link
// //             href="/blogs"
// //             className="inline-flex items-center justify-center gap-2 border border-[#813DFF]/30 text-[#813DFF] text-sm font-bold py-3 px-5 rounded-full hover:bg-[#F3EEFF] transition-colors duration-200"
// //           >
// //             View all articles →
// //           </Link>
// //         </aside>
// //       </section>

// //       {/* ── Bottom CTA ── */}
// //       <section className="mb-0">
// //         <ListenPerform />
// //       </section>

// //     </main>
// //   );
// // }
// import Link from "next/link";
// import Image from "next/image";
// import { notFound } from "next/navigation";
// import blogsData from "../../json-data/blogs.json";
// import ListenPerform from "@/app/components/homePageComponents/we-listen";
// import { generateWebPageSchema } from "@/libraries/schema/webPageSchema";

// // ─── Types ────────────────────────────────────────────────
// type ContentBlock =
//   | { type: "paragraph"; text: string }
//   | { type: "heading"; text: string }
//   | { type: "callout"; text: string };

// // A content-array entry that carries a dynamic sidebar CTA instead of article copy
// type CTABlock = {
//   cta: string;
//   text: string;
// };

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
//   content: (ContentBlock | CTABlock)[];
// };

// // ─── Static Params ────────────────────────────────────────
// export function generateStaticParams() {
//   return (blogsData as Blog[]).map((blog) => ({ slug: blog.slug }));
// }

// // ─── SEO Metadata ─────────────────────────────────────────
// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { slug } = await params;
//   const blog = (blogsData as Blog[]).find((b) => b.slug === slug);
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

// // Detects a { cta, text } entry inside a blog's content array
// function isCTABlock(block: ContentBlock | CTABlock): block is CTABlock {
//   return "cta" in block;
// }

// // ─── Content Renderer ─────────────────────────────────────
// function RenderContent({ blocks }: { blocks: ContentBlock[] }) {
//   return (
//     <div>
//       {blocks.map((block, i) => {
//         if (block.type === "heading") {
//           return (
//             <h2
//               key={i}
//               className="text-[#1C1C1C] font-black text-2xl md:text-[1.75rem] mt-10 mb-4 leading-snug"
//             >
//               {block.text}
//             </h2>
//           );
//         }
//         if (block.type === "callout") {
//           return (
//             <div
//               key={i}
//               className="my-8 relative pl-6 pr-5 py-5"
//             >
//               {/* left accent bar */}
//               <span className="absolute left-0 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-[#813DFF] to-[#DFFA33]" />
//               <p className="text-[#1C1C1C] font-semibold text-base md:text-lg leading-relaxed italic">
//                 "{block.text}"
//               </p>
//             </div>
//           );
//         }
//         return (
//           <p key={i} className="text-[#565656] text-base md:text-[1.05rem] leading-[1.85] mb-5">
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
//       className="group flex gap-4 rounded-2xl border border-[#EBEBEB] hover:border-[#813DFF]/40 bg-white p-4 transition-all duration-300 hover:shadow-[0_4px_24px_rgba(129,61,255,0.10)]"
//     >
//       <div className="relative w-20 h-16 rounded-xl overflow-hidden flex-shrink-0">
//       <Image
//   src={blog.coverImage}
//   alt={blog.title}
//   fill
//   priority
//   quality={100}
//   sizes="100vw"
//   className="object-cover"
// />
//       </div>
//       <div className="flex flex-col justify-between min-w-0 py-0.5">
//         <span className="text-[10px] font-bold tracking-widest uppercase text-[#813DFF]">
//           {blog.category}
//         </span>
//         <h4 className="text-[#1C1C1C] font-bold text-sm leading-snug line-clamp-2 group-hover:text-[#813DFF] transition-colors">
//           {blog.title}
//         </h4>
//         <span className="text-[#ADADAD] text-xs">{formatDate(blog.date)}</span>
//       </div>
//     </Link>
//   );
// }

// // ─── Page ─────────────────────────────────────────────────
// export default async function BlogDetailPage({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { slug } = await params;
//   const blog = (blogsData as Blog[]).find((b) => b.slug === slug);
//   if (!blog) notFound();

//   const moreBlogs = (blogsData as Blog[])
//     .filter((b) => b.slug !== slug)
//     .slice(0, 3);

//   // Pull the dynamic CTA entry (if any) out of the content array so it isn't
//   // rendered as a stray paragraph, and use it to drive the sidebar CTA card.
//   const ctaBlock = blog.content.find(isCTABlock);
//   const articleBlocks = blog.content.filter(
//     (b): b is ContentBlock => !isCTABlock(b)
//   );

//   const webPageSchema = generateWebPageSchema({
//     url: `https://www.adrefresh.com/blogs/${slug}/`,
//     title: `${blog.title} | AdRefresh Blog`,
//     description: blog.excerpt,
//   });

//   return (
//     <main className="min-h-screen bg-white">
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
//       />

//       {/* ══════════════════════════════════════════
//           HERO — deep purple gradient, full-bleed
//           navbar is transparent so this gives it
//           a visible dark background to sit on
//       ══════════════════════════════════════════ */}
//       <section className="relative overflow-hidden bg-[#3d08a1]">

//         {/* decorative radial glow */}
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-[#813DFF]/20 blur-[120px] pointer-events-none" />

//         {/* subtle grid texture */}
//         <div
//           className="absolute inset-0 opacity-[0.04]"
//           style={{
//             backgroundImage:
//               "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
//             backgroundSize: "40px 40px",
//           }}
//         />

//         <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 lg:px-16 pt-32 pb-0">

//           {/* back link */}
//           <Link
//             href="/blogs"
//             className="inline-flex items-center gap-2 text-white/50 hover:text-[#DFFA33] text-sm font-semibold transition-colors duration-200 mb-8"
//           >
//             <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//               <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//             </svg>
//             Back to articles
//           </Link>

//           {/* category pill */}
//           <div className="mb-5">
//             <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase bg-[#813DFF]/30 text-[#C9A8FF] border border-[#813DFF]/40">
//               {blog.category}
//             </span>
//           </div>

//           {/* title */}
//           <h1 className="text-white font-black text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.06] mb-6 max-w-4xl">
//             {blog.title}
//           </h1>

//           {/* excerpt */}
//           <p className="text-white/55 text-base md:text-xl max-w-2xl mb-10 leading-relaxed">
//             {blog.excerpt}
//           </p>

//           {/* author strip */}
//           {/* <div className="flex flex-wrap items-center gap-4 pb-10 border-b border-white/10">
//             <Image
//               src={blog.author.avatar}
//               alt={blog.author.name}
//               width={46}
//               height={46}
//               className="rounded-full border-2 border-[#813DFF]"
//             />
//             <div>
//               <p className="text-white font-bold text-sm">{blog.author.name}</p>
//               <p className="text-white/40 text-xs">{blog.author.role}</p>
//             </div>
//             <span className="hidden sm:block w-px h-7 bg-white/15" />
//             <p className="text-white/40 text-sm">{formatDate(blog.date)}</p>
//           </div> */}

//           {/* cover image — floats up from hero into content */}
//           <div className="relative w-full h-[220px] sm:h-[340px] md:h-[400px] lg:h-[580px] rounded-t-3xl overflow-hidden border-1 border-white mt-10">
//             <Image
//               src={blog.coverImage}
//               alt={blog.title}
//               fill
//               sizes="(max-width:768px) 100vw, 1200px"
//               className="object-cover"
//               priority

//             />
//             {/* fade into white below */}
//             <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/10 to-transparent" />
//           </div>
//         </div>
//       </section>

//       {/* ══════════════════════════════════════════
//           BODY — white bg, article + sidebar
//       ══════════════════════════════════════════ */}
//       <section className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16 py-14 grid grid-cols-1 lg:grid-cols-[1fr_296px] gap-12 xl:gap-16">

//         {/* ── Article ── */}
//         <article className="min-w-0">

//           {/* decorative accent line above content */}
//           <div className="flex items-center gap-3 mb-8">
//             <span className="w-8 h-[3px] rounded-full bg-[#813DFF]" />
//             <span className="w-3 h-[3px] rounded-full bg-[#DFFA33]" />
//           </div>

//           <RenderContent blocks={articleBlocks} />

//           {/* Tags */}
//           <div className="mt-14 pt-8 border-t border-[#EBEBEB]">
//             <p className="text-[11px] font-bold tracking-widest uppercase text-[#ADADAD] mb-3">Topics</p>
//             <div className="flex flex-wrap gap-2">
//               {blog.tags.map((tag) => (
//                 <span
//                   key={tag}
//                   className="px-3 py-1.5 rounded-full border border-[#813DFF]/25 bg-[#F3EEFF] text-[#813DFF] text-xs font-semibold"
//                 >
//                   #{tag}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* Author Bio */}
//           <div className="mt-10 rounded-2xl overflow-hidden border border-[#EBEBEB]">
//             {/* purple top stripe */}
//             <div className="h-1.5 bg-gradient-to-r from-[#813DFF] via-[#A86EFF] to-[#DFFA33]" />
//             <div className="p-6 flex flex-col sm:flex-row items-start gap-5 bg-[#FAFAFA]">
//               <Image
//                 src={blog.author.avatar}
//                 alt={blog.author.name}
//                 width={64}
//                 height={64}
//                 className="rounded-full flex-shrink-0 border-2 border-[#813DFF]"
//               />
//               <div>
//                 <p className="text-[#1C1C1C] font-black text-base mb-0.5">{blog.author.name}</p>
//                 <p className="text-[#813DFF] text-xs font-bold mb-2">{blog.author.role} at AdRefresh</p>
//                 <p className="text-[#565656] text-sm leading-relaxed">
//                   Helping brands navigate the intersection of data, creative, and media strategy. Passionate about building advertising systems that create real competitive advantage.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </article>

//         {/* ── Sidebar ── */}
//         <aside className="flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">

//           {/* CTA Card */}
//           <div className="rounded-2xl overflow-hidden">
//             {/* yellow accent top */}
//             <div className="h-1.5 bg-[#DFFA33]" />
//             <div className="bg-[#1A0F2E] p-6 text-white">
//               <p className="text-[11px] font-bold tracking-widest uppercase text-white/40 mb-2">Work With Us</p>
//               <h3 className="font-black text-xl leading-snug mb-3">
//                 {ctaBlock?.cta ?? "Turn these insights into real results."}
//               </h3>
//               <p className="text-white/60 text-sm mb-6 leading-relaxed">
//                 {ctaBlock?.text ?? "AdRefresh builds media strategies that compound. Let's talk about your brand."}
//               </p>
//               <Link
//                 href="/contact-us"
//                 className="block text-center bg-[#813DFF] text-white font-black py-3 px-5 rounded-full text-sm hover:bg-[#6B2FD9] transition-colors duration-200"
//               >
//                 Get In Touch →
//               </Link>
//             </div>
//           </div>

//           {/* Divider label */}
//           <div className="flex items-center gap-3">
//             <span className="flex-1 h-px bg-[#EBEBEB]" />
//             <span className="text-[11px] font-bold tracking-widest uppercase text-[#ADADAD]">More Insights</span>
//             <span className="flex-1 h-px bg-[#EBEBEB]" />
//           </div>

//           {/* Related Posts */}
//           {moreBlogs.length > 0 && (
//             <div className="space-y-3">
//               {moreBlogs.map((b) => (
//                 <RelatedCard key={b.slug} blog={b} />
//               ))}
//             </div>
//           )}

//           {/* All articles link */}
//           <Link
//             href="/blogs"
//             className="inline-flex items-center justify-center gap-2 border border-[#813DFF]/30 text-[#813DFF] text-sm font-bold py-3 px-5 rounded-full hover:bg-[#F3EEFF] transition-colors duration-200"
//           >
//             View all articles →
//           </Link>
//         </aside>
//       </section>

//       {/* ── Bottom CTA ── */}
//       <section className="mb-0">
//         <ListenPerform />
//       </section>

//     </main>
//   );
// }
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import blogsData from "../../json-data/blogs.json";
import ListenPerform from "@/app/components/homePageComponents/we-listen";
import { generateWebPageSchema } from "@/libraries/schema/webPageSchema";

// ─── Types ────────────────────────────────────────────────
type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "callout"; text: string };

// A content-array entry that carries a dynamic sidebar CTA instead of article copy
type CTABlock = {
  cta: string;
  text: string;
};

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
  content: (ContentBlock | CTABlock)[];
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

// Detects a { cta, text } entry inside a blog's content array
function isCTABlock(block: ContentBlock | CTABlock): block is CTABlock {
  return "cta" in block;
}

// ─── Content Renderer ─────────────────────────────────────
function RenderContent({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div>
      {blocks.map((block, i) => {
        if (block.type === "heading") {
          return (
            <h2
              key={i}
              className="text-[#1C1C1C] font-black text-2xl md:text-[1.75rem] mt-10 mb-4 leading-snug"
            >
              {block.text}
            </h2>
          );
        }
        if (block.type === "callout") {
          return (
            <div
              key={i}
              className="my-8 relative pl-6 pr-5 py-5"
            >
              {/* left accent bar */}
              <span className="absolute left-0 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-[#813DFF] to-[#DFFA33]" />
              <p className="text-[#1C1C1C] font-semibold text-base md:text-lg leading-relaxed italic">
                "{block.text}"
              </p>
            </div>
          );
        }
        return (
          <p key={i} className="text-[#565656] text-base md:text-[1.05rem] leading-[1.85] mb-5">
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
      className="group flex gap-4 rounded-2xl border border-[#EBEBEB] hover:border-[#813DFF]/40 bg-white p-4 transition-all duration-300 hover:shadow-[0_4px_24px_rgba(129,61,255,0.10)]"
    >
      <div className="relative w-20 h-16 rounded-xl overflow-hidden flex-shrink-0">
      <Image
  src={blog.coverImage}
  alt={blog.title}
  fill
  priority
  quality={100}
  sizes="100vw"
  className="object-cover"
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

  // Pull the dynamic CTA entry (if any) out of the content array so it isn't
  // rendered as a stray paragraph, and use it to drive the sidebar CTA card.
  const ctaBlock = blog.content.find(isCTABlock);
  const articleBlocks = blog.content.filter(
    (b): b is ContentBlock => !isCTABlock(b)
  );

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
      <section className="relative overflow-hidden bg-[#3d08a1]">

        {/* decorative radial glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-[#813DFF]/20 blur-[120px] pointer-events-none" />

     {/* subtle grid texture */}
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

        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 lg:px-16 pt-32 pb-0">

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
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase bg-[#813DFF]/30 text-[#C9A8FF] border border-[#813DFF]/40">
              {blog.category}
            </span>
          </div>

          {/* title */}
          <h1 className="text-white font-black text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.06] mb-6 max-w-4xl">
            {blog.title}
          </h1>

          {/* excerpt */}
          <p className="text-white/55 text-base md:text-xl max-w-2xl mb-10 leading-relaxed">
            {blog.excerpt}
          </p>

          {/* author strip */}
          {/* <div className="flex flex-wrap items-center gap-4 pb-10 border-b border-white/10">
            <Image
              src={blog.author.avatar}
              alt={blog.author.name}
              width={46}
              height={46}
              className="rounded-full border-2 border-[#813DFF]"
            />
            <div>
              <p className="text-white font-bold text-sm">{blog.author.name}</p>
              <p className="text-white/40 text-xs">{blog.author.role}</p>
            </div>
            <span className="hidden sm:block w-px h-7 bg-white/15" />
            <p className="text-white/40 text-sm">{formatDate(blog.date)}</p>
          </div> */}

          {/* cover image — floats up from hero into content */}
          <div className="relative w-full h-[220px] sm:h-[340px] md:h-[400px] lg:h-[580px] rounded-t-3xl overflow-hidden border-1 border-white mt-10">
            <Image
              src={blog.coverImage}
              alt={blog.title}
              fill
              sizes="(max-width:768px) 100vw, 1200px"
              className="object-cover"
              priority

            />
            {/* fade into white below */}
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/10 to-transparent" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BODY — white bg, article + sidebar
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden max-w-7xl mx-auto px-5 md:px-10 lg:px-16 py-14 grid grid-cols-1 lg:grid-cols-[1fr_296px] gap-12 xl:gap-16">

        {/* Pattern background */}
        <div
          aria-hidden="true"
          className="
            absolute inset-0 -z-10
            opacity-[0.5]
            bg-repeat
            bg-[url('/images/service-page-images-videos/GrayOutline.svg')]
            bg-[length:180px] sm:bg-[length:240px] md:bg-[length:300px] lg:bg-[length:360px] xl:bg-[length:420px]
          "
        />

        {/* ── Article ── */}
        <article className="min-w-0">

          {/* decorative accent line above content */}
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-[3px] rounded-full bg-[#813DFF]" />
            <span className="w-3 h-[3px] rounded-full bg-[#DFFA33]" />
          </div>

          <RenderContent blocks={articleBlocks} />

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
            <div className="p-6 flex flex-col sm:flex-row items-start gap-5 bg-[#FAFAFA]">
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
                {ctaBlock?.cta ?? "Turn these insights into real results."}
              </h3>
              <p className="text-white/60 text-sm mb-6 leading-relaxed">
                {ctaBlock?.text ?? "AdRefresh builds media strategies that compound. Let's talk about your brand."}
              </p>
              <Link
                href="/contact-us"
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

      {/* ── Bottom CTA ── */}
      <section className="mb-0">
        <ListenPerform />
      </section>

    </main>
  );
}