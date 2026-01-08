// // "use client";

// // import { useRouter } from "next/navigation";
// // import ListenPerform from "../components/homePageComponents/we-listen";


// // const caseStudies = [
// //   {
// //     slug: "impression-to-invoice",
// //     title: "From Impression to Invoice — Streamlining Campaign Operations",
// //     excerpt:
// //       "How a US-based genealogy-focused programmatic ad network improved billing accuracy, reduced disputes, and scaled operations across 300M+ impressions annually.",
// //     image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
// //   },
// //   {
// //     slug: "transition-enablers",
// //     title: "Transition Enablers in a Complex Organizational Shift",
// //     excerpt:
// //       "Supporting a large enterprise through acquisition-led restructuring by becoming the backbone of platform knowledge and operational continuity.",
// //     image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
// //   },
// // ];

// // export default function ClientSuccessPage() {
// //   const router = useRouter();
// //   const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

// //   return (
// //     <>
// //       {/* ================= HERO ================= */}
// //       <section className="relative w-screen h-[80vh] ml-[calc(50%-50vw)] flex items-center justify-center overflow-hidden">
// //         <video
// //           className="absolute inset-0 w-full h-full object-cover"
// //           autoPlay
// //           muted
// //           loop
// //           playsInline
// //           src={`${basePath}/images/about-page-videos-images/2.mp4`}
// //         />

// //         {/* BLACK 60% OVERLAY */}
// //         <div className="absolute inset-0 bg-black/65" />

// //         <div className="relative z-10 text-center text-white">
// //           <h1 className="text-[64px] font-black max-[900px]:text-[42px]">
// //             Client Success
// //           </h1>
// //           <p className="mt-2 text-lg opacity-90">
// //             Real-world outcomes powered by operational excellence
// //           </p>
// //         </div>
// //       </section>

// //       {/* ================= HEADER ================= */}
// //       <section className="max-w-[1200px] mx-auto text-center mt-[1%] mb-[5%] px-4">
// //         <h2 className="text-[5rem] font-black mb-5 max-[900px]:text-[3rem]">
// //           Case Studies
// //         </h2>
// //         <p className="text-[20px] leading-[1.7] text-[#555] max-w-[900px] mx-auto">
// //           A closer look at how operational precision, platform expertise, and
// //           execution excellence translate into measurable business impact.
// //           <br />
// //           Each engagement reflects a distinct challenge solved through disciplined
// //           media operations.
// //         </p>
// //       </section>

// //       {/* ================= CASE STUDIES ================= */}
// //       <section className="max-w-[1200px] mx-auto px-4 py-5">
// //         {caseStudies.map((cs, i) => (
// //           <div key={cs.slug} className="relative">
// //             <div
// //               onClick={() => router.push(`/client-success/${cs.slug}`)}
// //               className={`
// //                 grid grid-cols-2 gap-[60px] items-center cursor-pointer
// //                 transition-transform duration-300 hover:scale-[1.02]
// //                 max-[900px]:grid-cols-1 max-[900px]:gap-[40px]
// //                 ${i % 2 !== 0 ? "direction-rtl" : ""}
// //               `}
// //             >
// //               {/* TEXT */}
// //               <div className={`${i % 2 !== 0 ? "direction-ltr text-right" : ""}`}>
// //                 <h2 className="text-[30px] font-extrabold mb-4">
// //                   {cs.title}
// //                 </h2>
// //                 <p className="text-[17px] leading-[1.7] text-[#444] max-w-[480px]">
// //                   {cs.excerpt}
// //                 </p>
// //               </div>

// //               {/* IMAGE */}
// //               <div className="max-w-[420px] rounded-[18px] overflow-hidden max-[900px]:max-w-full">
// //                 <img
// //                   src={cs.image}
// //                   alt={cs.title}
// //                   className="w-full h-[300px] object-cover transition-transform duration-500 hover:scale-[1.08]"
// //                 />
// //               </div>
// //             </div>

// //             {/* DIVIDER */}
// //             {i !== caseStudies.length - 1 && (
// //               <div className="my-[80px] h-px w-full bg-gradient-to-r from-transparent via-[#dcdcdc] to-transparent" />
// //             )}
// //           </div>
// //         ))}
// //       </section>

// //       {/* ================= FOOTER SECTION ================= */}
// //       <div className="mt-[5%]">
// //       <ListenPerform/>
// //       </div>

// //       {/* RTL HELPERS */}
// //       <style jsx global>{`
// //         .direction-rtl {
// //           direction: rtl;
// //         }
// //         .direction-ltr {
// //           direction: ltr;
// //         }
// //       `}</style>
// //     </>
// //   );
// // }


// // "use client";

// // import { useRouter } from "next/navigation";
// // import ListenPerform from "../components/homePageComponents/we-listen";

// // const caseStudies = [
// //   {
// //     slug: "impression-to-invoice",
// //     title: "From Impression to Invoice — Streamlining Campaign Operations",
// //     excerpt:
// //       "How a US-based genealogy-focused programmatic ad network improved billing accuracy, reduced disputes, and scaled operations across 300M+ impressions annually.",
// //     image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
// //   },
// //   {
// //     slug: "transition-enablers",
// //     title: "Transition Enablers in a Complex Organizational Shift",
// //     excerpt:
// //       "Supporting a large enterprise through acquisition-led restructuring by becoming the backbone of platform knowledge and operational continuity.",
// //     image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
// //   },
// // ];

// // export default function ClientSuccessPage() {
// //   const router = useRouter();
// //   const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

// //   return (
// //     <>
// //       {/* ================= HERO ================= */}
// //       <section className="relative w-screen h-[80vh] ml-[calc(50%-50vw)] flex items-center justify-center overflow-hidden">
// //         <video
// //           className="absolute inset-0 w-full h-full object-cover"
// //           autoPlay
// //           muted
// //           loop
// //           playsInline
// //           src={`${basePath}/images/about-page-videos-images/2.mp4`}
// //         />

// //         {/* BLACK OVERLAY */}
// //         <div className="absolute inset-0 bg-black/65" />

// //         <div className="relative z-10 text-center text-white">
// //           <h1 className="text-[64px] font-black max-[900px]:text-[42px]">
// //             Client Success
// //           </h1>
// //           <p className="mt-2 text-lg opacity-90">
// //             Real-world outcomes powered by operational excellence
// //           </p>
// //         </div>
// //       </section>
// //  <div className="relative w-full h-[19vh] mb-6 overflow-hidden">
// //           <div
// //             className="absolute inset-0 bg-repeat-x opacity-[0.95]"
// //             style={{
// //               backgroundImage: `url(/rebrand/images/service-page-images-videos/GrayOutline.svg)`,
// //               backgroundSize: "450px",
// //                   transform: "rotate(180deg)",
// //     transformOrigin: "center",
   
// //               maskImage:
// //                 "linear-gradient(to bottom, transparent, black 45%, black 85%, transparent)",
// //               WebkitMaskImage:
// //                 "linear-gradient(to bottom, transparent, black 45%, black 85%, transparent)",
// //             }}
// //           />
// //         </div>
// //       {/* ================= HEADER ================= */}
// //       <section className="relative max-w-[1200px] mx-auto text-center mt-[-5%] mb-[5%] px-4 overflow-hidden">
// //         <h2 className="text-[5rem] font-black mb-5 max-[900px]:text-[3rem] relative z-10">
// //           Case Studies
// //         </h2>

// //         {/* ===== HORIZONTAL PATTERN STRIP ===== */}
       

// //         <p className="text-[20px] leading-[1.7] text-[#555] max-w-[900px] mx-auto relative z-10">
// //           A closer look at how operational precision, platform expertise, and
// //           execution excellence translate into measurable business impact.
// //           <br />
// //           Each engagement reflects a distinct challenge solved through disciplined
// //           media operations.
// //         </p>
// //       </section>

// //       {/* ================= CASE STUDIES ================= */}
// //       <section className="max-w-[1200px] mx-auto px-4 py-5">
// //         {caseStudies.map((cs, i) => (
// //           <div key={cs.slug} className="relative">
// //             <div
// //               onClick={() => router.push(`/client-success/${cs.slug}`)}
// //               className={`
// //                 grid grid-cols-2 gap-[60px] items-center cursor-pointer
// //                 transition-transform duration-300 hover:scale-[1.02]
// //                 max-[900px]:grid-cols-1 max-[900px]:gap-[40px]
// //                 ${i % 2 !== 0 ? "direction-rtl" : ""}
// //               `}
// //             >
// //               {/* TEXT */}
// //               <div className={`${i % 2 !== 0 ? "direction-ltr text-right" : ""}`}>
// //                 <h2 className="text-[30px] font-extrabold mb-4">
// //                   {cs.title}
// //                 </h2>
// //                 <p className="text-[17px] leading-[1.7] text-[#444] max-w-[480px]">
// //                   {cs.excerpt}
// //                 </p>
// //               </div>

// //               {/* IMAGE */}
// //               <div className="max-w-[420px] rounded-[18px] overflow-hidden max-[900px]:max-w-full">
// //                 <img
// //                   src={cs.image}
// //                   alt={cs.title}
// //                   className="w-full h-[300px] object-cover transition-transform duration-500 hover:scale-[1.08]"
// //                 />
// //               </div>
// //             </div>

// //             {/* DIVIDER */}
// //             {i !== caseStudies.length - 1 && (
// //               <div className="my-[80px] h-px w-full bg-gradient-to-r from-transparent via-[#dcdcdc] to-transparent" />
// //             )}
// //           </div>
// //         ))}
// //       </section>

// //       {/* ================= FOOTER SECTION ================= */}
// //       <div className="mt-[5%]">
// //         <ListenPerform />
// //       </div>

// //       {/* ================= RTL HELPERS ================= */}
// //       <style jsx global>{`
// //         .direction-rtl {
// //           direction: rtl;
// //         }
// //         .direction-ltr {
// //           direction: ltr;
// //         }
// //       `}</style>
// //     </>
// //   );
// // }

// // "use client";

// // import Head from "next/head";
// // import { useRouter } from "next/navigation";
// // import ListenPerform from "../components/homePageComponents/we-listen";

// // const caseStudies = [
// //   {
// //     slug: "impression-to-invoice",
// //     title: "From Impression to Invoice — Streamlining Campaign Operations",
// //     excerpt:
// //       "How a US-based genealogy-focused programmatic ad network improved billing accuracy, reduced disputes, and scaled operations across 300M+ impressions annually.",
// //     image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
// //   },
// //   {
// //     slug: "transition-enablers",
// //     title: "Transition Enablers in a Complex Organizational Shift",
// //     excerpt:
// //       "Supporting a large enterprise through acquisition-led restructuring by becoming the backbone of platform knowledge and operational continuity.",
// //     image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
// //   },
// // ];

// // export default function ClientSuccessPage() {
// //   const router = useRouter();
// //   const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

// //   return (
// //     <>
// //       {/* ================= SEO (CAREERS STYLE) ================= */}
// //       <Head>
// //         <title>Client Success | AdRefresh Case Studies</title>

// //         <meta
// //           name="description"
// //           content="Explore real-world client success stories from AdRefresh. Discover how operational excellence in programmatic advertising delivers measurable business impact."
// //         />

// //         <meta
// //           name="keywords"
// //           content="AdRefresh client success, case studies, programmatic advertising results, ad operations success stories"
// //         />

// //         <meta name="robots" content="index, follow" />

// //         <link
// //           rel="canonical"
// //           href="https://www.adrefresh.com/client-success"
// //         />

// //         {/* Open Graph */}
// //         <meta property="og:title" content="Client Success | AdRefresh" />
// //         <meta
// //           property="og:description"
// //           content="A closer look at how AdRefresh drives measurable outcomes through disciplined media operations and platform expertise."
// //         />
// //         <meta
// //           property="og:url"
// //           content="https://www.adrefresh.com/client-success"
// //         />
// //         <meta property="og:site_name" content="AdRefresh" />
// //         <meta property="og:type" content="website" />
// //         <meta
// //           property="og:image"
// //           content="https://www.adrefresh.com/og/client-success.png"
// //         />

// //         {/* Twitter */}
// //         <meta name="twitter:card" content="summary_large_image" />
// //         <meta name="twitter:title" content="Client Success | AdRefresh" />
// //         <meta
// //           name="twitter:description"
// //           content="Real-world outcomes powered by operational excellence at AdRefresh."
// //         />
// //         <meta
// //           name="twitter:image"
// //           content="https://www.adrefresh.com/og/client-success.png"
// //         />
// //       </Head>

// //       {/* ================= HERO ================= */}
// //       <section className="relative w-screen h-[80vh] ml-[calc(50%-50vw)] flex items-center justify-center overflow-hidden">
// //         <video
// //           className="absolute inset-0 w-full h-full object-cover"
// //           autoPlay
// //           muted
// //           loop
// //           playsInline
// //           src={`${basePath}/images/about-page-videos-images/2.mp4`}
// //         />

// //         <div className="absolute inset-0 bg-black/65" />

// //         <div className="relative z-10 text-center text-white">
// //           <h1 className="text-[64px] font-black max-[900px]:text-[42px]">
// //             Client Success
// //           </h1>
// //           <p className="mt-2 text-lg opacity-90">
// //             Real-world outcomes powered by operational excellence
// //           </p>
// //         </div>
// //       </section>

// //       {/* ===== REST OF YOUR CODE UNCHANGED ===== */}
// //       {/* (Everything below remains EXACTLY the same) */}

// //       <div className="relative w-full h-[19vh] mb-6 overflow-hidden">
// //         <div
// //           className="absolute inset-0 bg-repeat-x opacity-[0.95]"
// //           style={{
// //             backgroundImage: `url(/rebrand/images/service-page-images-videos/GrayOutline.svg)`,
// //             backgroundSize: "450px",
// //             transform: "rotate(180deg)",
// //             transformOrigin: "center",
// //             maskImage:
// //               "linear-gradient(to bottom, transparent, black 45%, black 85%, transparent)",
// //             WebkitMaskImage:
// //               "linear-gradient(to bottom, transparent, black 45%, black 85%, transparent)",
// //           }}
// //         />
// //       </div>

// //       {/* ================= HEADER ================= */}
// //       <section className="relative max-w-[1200px] mx-auto text-center mt-[-5%] mb-[5%] px-4 overflow-hidden">
// //         <h2 className="text-[5rem] font-black mb-5 max-[900px]:text-[3rem] relative z-10">
// //           Case Studies
// //         </h2>

// //         <p className="text-[20px] leading-[1.7] text-[#555] max-w-[900px] mx-auto relative z-10">
// //           A closer look at how operational precision, platform expertise, and
// //           execution excellence translate into measurable business impact.
// //           <br />
// //           Each engagement reflects a distinct challenge solved through disciplined
// //           media operations.
// //         </p>
// //       </section>

// //       {/* ================= CASE STUDIES ================= */}
// //       <section className="max-w-[1200px] mx-auto px-4 py-5">
// //         {caseStudies.map((cs, i) => (
// //           <div key={cs.slug} className="relative">
// //             <div
// //               onClick={() => router.push(`/client-success/${cs.slug}`)}
// //               className={`
// //                 grid grid-cols-2 gap-[60px] items-center cursor-pointer
// //                 transition-transform duration-300 hover:scale-[1.02]
// //                 max-[900px]:grid-cols-1 max-[900px]:gap-[40px]
// //                 ${i % 2 !== 0 ? "direction-rtl" : ""}
// //               `}
// //             >
// //               <div className={`${i % 2 !== 0 ? "direction-ltr text-right" : ""}`}>
// //                 <h2 className="text-[30px] font-extrabold mb-4">
// //                   {cs.title}
// //                 </h2>
// //                 <p className="text-[17px] leading-[1.7] text-[#444] max-w-[480px]">
// //                   {cs.excerpt}
// //                 </p>
// //               </div>

// //               <div className="max-w-[420px] rounded-[18px] overflow-hidden max-[900px]:max-w-full">
// //                 <img
// //                   src={cs.image}
// //                   alt={cs.title}
// //                   className="w-full h-[300px] object-cover transition-transform duration-500 hover:scale-[1.08]"
// //                 />
// //               </div>
// //             </div>

// //             {i !== caseStudies.length - 1 && (
// //               <div className="my-[80px] h-px w-full bg-gradient-to-r from-transparent via-[#dcdcdc] to-transparent" />
// //             )}
// //           </div>
// //         ))}
// //       </section>

// //       <div className="mt-[5%]">
// //         <ListenPerform />
// //       </div>

// //       <style jsx global>{`
// //         .direction-rtl {
// //           direction: rtl;
// //         }
// //         .direction-ltr {
// //           direction: ltr;
// //         }
// //       `}</style>
// //     </>
// //   );
// // }

// import type { Metadata } from "next";
// import Link from "next/link";
// import ListenPerform from "../components/homePageComponents/we-listen";
// import "./clientpage.css"
// /* ================= DATA ================= */
// const caseStudies = [
//   {
//     slug: "impression-to-invoice",
//     title: "From Impression to Invoice — Streamlining Campaign Operations",
//     excerpt:
//       "How a US-based genealogy-focused programmatic ad network improved billing accuracy, reduced disputes, and scaled operations across 300M+ impressions annually.",
//     image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
//   },
//   {
//     slug: "transition-enablers",
//     title: "Transition Enablers in a Complex Organizational Shift",
//     excerpt:
//       "Supporting a large enterprise through acquisition-led restructuring by becoming the backbone of platform knowledge and operational continuity.",
//     image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
//   },
// ];

// /* ================= SEO (SERVER SIDE) ================= */
// export const metadata: Metadata = {
//   title: "Client Success | AdRefresh Case Studies",
//   description:
//     "Explore real-world client success stories from AdRefresh. Discover how operational excellence in programmatic advertising delivers measurable business impact.",

//   alternates: {
//     canonical: "https://www.adrefresh.com/client-success",
//   },

//   openGraph: {
//     title: "Client Success | AdRefresh",
//     description:
//       "A closer look at how AdRefresh drives measurable outcomes through disciplined media operations and platform expertise.",
//     url: "https://www.adrefresh.com/client-success",
//     siteName: "AdRefresh",
//     images: [
//       {
//         url: "https://www.adrefresh.com/og/client-success.png",
//         width: 1200,
//         height: 630,
//         alt: "Client Success at AdRefresh",
//       },
//     ],
//     type: "website",
//   },

//   twitter: {
//     card: "summary_large_image",
//     title: "Client Success | AdRefresh",
//     description:
//       "Real-world outcomes powered by operational excellence at AdRefresh.",
//     images: ["https://www.adrefresh.com/og/client-success.png"],
//   },

//   robots: {
//     index: true,
//     follow: true,
//   },
// };

// /* ================= PAGE ================= */
// export default function ClientSuccessPage() {
//   const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

//   return (
//     <>
//       {/* ================= HERO ================= */}
//       <section className="relative w-screen h-[89vh] ml-[calc(50%-50vw)] flex items-center justify-center overflow-hidden">
//         <video
//           className="absolute inset-0 w-full h-full object-cover"
//           autoPlay
//           muted
//           loop
//           playsInline
//           src={`${basePath}/images/about-page-videos-images/2.mp4`}
//         />

//         <div className="absolute inset-0 bg-black/65" />

//         <div className="relative z-10 text-center text-white">
//           <h1 className="text-[64px] font-black max-[900px]:text-[42px]">
//             Client Success
//           </h1>
//           <p className="mt-2 text-lg opacity-90">
//             Real-world outcomes powered by operational excellence
//           </p>
//         </div>
//       </section>

//       {/* ================= PATTERN STRIP ================= */}
//       <div className="relative w-full h-[17vh] mb-6 overflow-hidden">
//         <div
//           className="absolute inset-0 bg-repeat-x opacity-[0.95]"
//           style={{
//             backgroundImage:
//               "url(/rebrand/images/service-page-images-videos/GrayOutline.svg)",
//             backgroundSize: "650px",
//             transform: "rotate(180deg)",
//             transformOrigin: "center",
//             maskImage:
//               "linear-gradient(to bottom, transparent, black 45%, black 85%, transparent)",
//             WebkitMaskImage:
//               "linear-gradient(to bottom, transparent, black 45%, black 85%, transparent)",
//           }}
//         />
//       </div>

//       {/* ================= HEADER ================= */}
//       <section className="relative max-w-[1200px] mx-auto text-center mt-[-5%] mb-[5%] px-4 overflow-hidden">
//         <h2 className="text-[5rem] font-black mb-5 max-[900px]:text-[3rem] relative z-10">
//           Case Studies
//         </h2>

//         <p className="text-[20px] leading-[1.7] text-[#555] max-w-[900px] mx-auto relative z-10">
//           A closer look at how operational precision, platform expertise, and
//           execution excellence translate into measurable business impact.
//           <br />
//           Each engagement reflects a distinct challenge solved through disciplined
//           media operations.
//         </p>
//       </section>

//       {/* ================= CASE STUDIES ================= */}
//       <section className="max-w-[1200px] mx-auto px-4 py-5">
//         {caseStudies.map((cs, i) => (
//           <div key={cs.slug} className="relative">
//             <Link
//               href={`/client-success/${cs.slug}`}
//               className={`
//                 grid grid-cols-2 gap-[60px] items-center cursor-pointer
//                 transition-transform duration-300 hover:scale-[1.02]
//                 max-[900px]:grid-cols-1 max-[900px]:gap-[40px]
//                 ${i % 2 !== 0 ? "direction-rtl" : ""}
//               `}
//             >
//               {/* TEXT */}
//               <div className={`${i % 2 !== 0 ? "direction-ltr text-right" : ""}`}>
//                 <h2 className="text-[30px] font-extrabold mb-4">
//                   {cs.title}
//                 </h2>
//                 <p className="text-[17px] leading-[1.7] text-[#444] max-w-[480px]">
//                   {cs.excerpt}
//                 </p>
//               </div>

//               {/* IMAGE */}
//               <div className="max-w-[420px] rounded-[18px] overflow-hidden max-[900px]:max-w-full">
//                 <img
//                   src={cs.image}
//                   alt={cs.title}
//                   className="w-full h-[300px] object-cover transition-transform duration-500 hover:scale-[1.08]"
//                 />
//               </div>
//             </Link>

//             {i !== caseStudies.length - 1 && (
//               <div className="my-[80px] h-px w-full bg-gradient-to-r from-transparent via-[#dcdcdc] to-transparent" />
//             )}
//           </div>
//         ))}
//       </section>

//       {/* ================= FOOTER ================= */}
//       <div className="mt-[5%]">
//         <ListenPerform />
//       </div>

//       {/* ================= RTL HELPERS ================= */}
    
//     </>
//   );
// }

import type { Metadata } from "next";
import Link from "next/link";
import ListenPerform from "../components/homePageComponents/we-listen";
import "./clientpage.css";

/* ================= DATA ================= */
const caseStudies = [
  {
    slug: "impression-to-invoice",
    title: "From Impression to Invoice Streamlining Campaign Operations",
    excerpt:
      "How a US-based genealogy-focused programmatic ad network improved billing accuracy, reduced disputes, and scaled operations across 300M+ impressions annually.",
    image: "/images/careers-images/1.jpg",
  },
  {
    slug: "transition-enablers",
    title: "Transition Enablers in a Complex Organizational Shift",
    excerpt:
      "Supporting a large enterprise through acquisition-led restructuring by becoming the backbone of platform knowledge and operational continuity.",
    image: "/images/careers-images/4.jpg",
  },
  {
    slug: "audience-infrastructure-fmcg",
    title: "Turning Data into Campaign Results",
    excerpt:
      "How behind-the-scenes audience infrastructure enabled a global FMCG brand to activate high-quality segments across 100+ websites and DSPs.",
    image: "/images/careers-images/careers2.jpeg",
  },
  {
    slug: "uae-media-execution",
    title: "Driving Performance Across Sectors in the UAE",
    excerpt:
      "End-to-end paid media execution for corporate services and lifestyle retail brands, optimized for the UAE’s unique market dynamics.",
    image: "/images/careers-images/careers3.jpeg",
  },
  {
    slug: "luxury-retail-digital-strategy",
    title: "Redefining Digital Strategy for a Luxury Appliance Retailer",
    excerpt:
      "How a premium kitchen appliance brand reduced acquisition costs, increased showroom visits, and attracted high-value customers.",
    image: "/images/careers-images/5.jpg",
  },
  {
    slug: "global-news-monetization",
    title: "Scalable Monetization for a Global News Publisher",
    excerpt:
      "Precision programmatic operations driving higher eCPMs, improved fill rates, and accurate billing across a massive news publisher ecosystem.",
    image: "/images/careers-images/1.jpg",
  },
];


/* ================= SEO ================= */
export const metadata: Metadata = {
  title: "Client Success | AdRefresh Case Studies",
  description:
    "Explore real-world client success stories from AdRefresh. Discover how operational excellence delivers measurable business impact.",
  alternates: {
    canonical: "https://www.adrefresh.com/client-success",
  },
};

/* ================= PAGE ================= */
export default function ClientSuccessPage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <>
      {/* ================= HERO ================= */}
     {/* ================= HERO ================= */}
<section
  className="
    relative w-screen
    ml-[calc(50%-50vw)]
    flex items-center justify-center overflow-hidden
    h-[60vh]        /* 📱 mobile */
    sm:h-[88vh]     /* 💻 tablet & above */
  "
>
  <video
    className="absolute inset-0 w-full h-full object-cover"
    autoPlay
    muted
    loop
    playsInline
    src={`${basePath}/images/about-page-videos-images/clientvd.mp4`}
  />
  <div className="absolute inset-0 bg-black/65" />

  <div className="relative z-10 text-center text-white px-4">
     <h1
  className="
    mb-4
    font-extrabold
    tracking-wide
    text-center
    leading-[1.05]

    /* font sizes */
     text-[4rem]
              max-[1280px]:text-[3.4rem]
              max-[1024px]:text-[3rem]
              max-[768px]:text-[2.5rem]
              max-[480px]:text-[2.1rem]   /* 🖥 desktop */

    /* wrapping */
    whitespace-normal
    lg:whitespace-nowrap
  "
>
  CLIENT SUCCESS
</h1>

    <p className="mt-3 text-[clamp(1rem,2vw,1.25rem)] opacity-90">
      
    </p>
  </div>
</section>

      {/* ================= PATTERN STRIP ================= */}
      <div className="relative w-full h-[12vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-repeat-x opacity-[0.9]"
          style={{
            zIndex:-3,
            backgroundImage:
              "url(/images/service-page-images-videos/GrayOutline.svg)",
            backgroundSize: "750px",
            transform: "rotate(180deg)",
            maskImage:
              "linear-gradient(to bottom, transparent, black 40%, black 85%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 40%, black 85%, transparent)",
          }}
        />
      </div>

      {/* ================= HEADER ================= */}
      <section className="max-w-[1200px] mx-auto text-center px-4 mt-[-1%] mb-16">
        <h2 className="font-black text-[clamp(2.4rem,5vw,4rem)] mb-4">
          Case Studies
        </h2>
        <p className="text-[#555] text-[clamp(1rem,2vw,1.2rem)] max-w-[900px] mx-auto leading-relaxed">
          A closer look at how operational precision, platform expertise, and
          execution excellence translate into measurable business impact.
        </p>
      </section>

      {/* ================= CASE STUDIES ================= */}
      <section className="max-w-[1200px] mx-auto px-4 pb-20">
        {caseStudies.map((cs, i) => (
          <div key={cs.slug}>
            <Link
              href={`/client-success/${cs.slug}`}
              className={`
                grid gap-10 items-center
                md:grid-cols-2
                transition-transform hover:scale-[1.02]
                ${i % 2 !== 0 ? "direction-rtl" : ""}
              `}
            >
              {/* TEXT */}
              <div
                className={`${
                  i % 2 !== 0 ? "direction-ltr md:text-right" : ""
                }`}
              >
               <h3  className="
    text-left

    text-[1.4rem]
    sm:text-[1.6rem]
    md:text-[1.8rem]
    lg:text-[2rem]

    font-extrabold
    mb-3
  ">
  {cs.title}
</h3>

                <p className="text-[#444] text-[clamp(1rem,2vw,1.1rem)] leading-relaxed max-w-[480px]">
                  {cs.excerpt}
                </p>
              </div>

              {/* IMAGE */}
              <div className="rounded-[18px] overflow-hidden max-w-full">
                <img
                  src={cs.image}
                  alt={cs.title}
                  className="w-full h-[260px] md:h-[300px] object-cover transition-transform duration-500 hover:scale-[1.08]"
                />
              </div>
            </Link>

            {/* DIVIDER */}
            {i !== caseStudies.length - 1 && (
              <div className="my-16 h-px w-full bg-gradient-to-r from-transparent via-[#dcdcdc] to-transparent" />
            )}
          </div>
        ))}
      </section>

      {/* ================= FOOTER ================= */}
      <div className="mt-20">
        <ListenPerform />
      </div>
    </>
  );
}
