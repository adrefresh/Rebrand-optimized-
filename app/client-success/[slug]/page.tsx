
// // import ListenPerform from "@/app/components/listen";

// // import ListenPerform from "@/app/components/homePageComponents/we-listen";
// // import "./client-success.css";
// // import Link from "next/link";
// // import { notFound } from "next/navigation";

// // /* ================= TYPES ================= */
// // type Section = {
// //   heading: string;
// //   body?: string;
// //   bullets?: string[];
// // };

// // type CaseStudy = {
// //   title: string;
// //   subtitle: string;
// //   featureImage: string;
// //   sections: Section[];
// // };

// // /* ================= DATA ================= */
// // const DATA: Record<string, CaseStudy> = {
// //   "impression-to-invoice": {
// //     title:
// //       "From Impression to Invoice — Streamlining Campaign Operations",
// //     subtitle:
// //       "How operational precision helped a genealogy-focused ad network scale revenue, trust, and efficiency",
// //     featureImage:
// //       "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
// //     sections: [
// //       {
// //         heading: "Client",
// //         body:
// //           "A US-based programmatic display ad network operating in the genealogy domain, managing campaigns across multiple DSPs and premium supply partners.",
// //       },
// //       {
// //         heading: "The Business Context",
// //         body:
// //           "Operating in a high-intent vertical with over 300 million annual ad requests, the client faced increasing pressure to maintain billing accuracy, operational transparency, and advertiser trust while scaling revenue.",
// //       },
// //       {
// //         heading: "Operational Challenges",
// //         bullets: [
// //           "Discrepancies between planned and delivered impressions",
// //           "Manual reconciliation of delivery and billing data",
// //           "Delayed campaign pacing adjustments",
// //           "Frequent invoice disputes with advertisers and DSPs",
// //         ],
// //       },
// //       {
// //         heading: "Our Approach",
// //         body:
// //           "We embedded directly into the client’s ad operations workflow, introducing structured trafficking processes, automated delivery checks, and standardized reporting frameworks across all demand and supply partners.",
// //       },
// //       {
// //         heading: "Results Delivered",
// //         bullets: [
// //           "Invoice accuracy improved to 99.8%",
// //           "Billing disputes reduced by 92%",
// //           "Faster campaign setup and optimization cycles",
// //           "Improved advertiser confidence and retention",
// //         ],
// //       },
// //       {
// //         heading: "Key Takeaway",
// //         body:
// //           "Operational discipline and transparent reporting can transform billing from a friction point into a competitive advantage.",
// //       },
// //     ],
// //   },

// //   "transition-enablers": {
// //     title:
// //       "Transition Enablers in a Complex Organizational Shift",
// //     subtitle:
// //       "Supporting enterprise restructuring with operational continuity and platform stability",
// //     featureImage:
// //       "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
// //     sections: [
// //       {
// //         heading: "Client",
// //         body:
// //           "A large enterprise undergoing acquisition-led restructuring, impacting internal teams, vendors, and operational workflows.",
// //       },
// //       {
// //         heading: "The Business Context",
// //         body:
// //           "Following multiple acquisitions, the organization faced fragmented ownership of ad platforms, undocumented workflows, and increasing dependency on external vendors.",
// //       },
// //       {
// //         heading: "Operational Challenges",
// //         bullets: [
// //           "Loss of institutional platform knowledge",
// //           "Inconsistent campaign execution standards",
// //           "High risk of operational downtime during transition",
// //           "Limited internal documentation",
// //         ],
// //       },
// //       {
// //         heading: "Our Role",
// //         body:
// //           "We acted as the operational backbone—maintaining continuity across platforms, documenting workflows, and ensuring campaigns continued without disruption during internal restructuring.",
// //       },
// //       {
// //         heading: "Outcomes",
// //         bullets: [
// //           "Zero campaign downtime during transition",
// //           "Stabilized reporting and optimization cadence",
// //           "Clear documentation enabling internal team handover",
// //         ],
// //       },
// //       {
// //         heading: "Key Takeaway",
// //         body:
// //           "Strong operational stewardship preserves trust, performance, and continuity during periods of organizational change.",
// //       },
// //     ],
// //   },
// // };

// // /* ✅ REQUIRED FOR output: "export" */
// // export function generateStaticParams() {
// //   return Object.keys(DATA).map((slug) => ({ slug }));
// // }

// // /* ================= PAGE ================= */
// // export default async function ClientSuccessDetail({
// //   params,
// // }: {
// //   params: Promise<{ slug: string }>;
// // }) {
// //   const { slug } = await params;
// //   const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "/rebrand";

// //   const data = DATA[slug];
// //   if (!data) notFound();

// //   const slugs = Object.keys(DATA);
// //   const index = slugs.indexOf(slug);

// //   return (
// //     <>
// //       {/* ================= HERO ================= */}
// //       <section
// //         className="cs-hero"
// //         style={{
// //           ["--hero-pattern" as any]: `url(${basePath}/images/service-page-images-videos/GrayOutline.svg)`,
// //         }}
// //       >
// //         <h1 className="cs-hero-title">{data.title}</h1>
// //       </section>

// //       {/* ================= CONTENT ================= */}
// //       <div className="cs-wrap">
// //         <p className="cs-subtitle">{data.subtitle}</p>

// //         <section className="cs-image">
// //           <img src={data.featureImage} alt={data.title} />
// //         </section>

// //         {data.sections.map((s, i) => (
// //           <section key={i} className="cs-section">
// //             <h2>{s.heading}</h2>
// //             {s.body && <p>{s.body}</p>}
// //             {s.bullets && (
// //               <ul>
// //                 {s.bullets.map((b, idx) => (
// //                   <li key={idx}>{b}</li>
// //                 ))}
// //               </ul>
// //             )}
// //           </section>
// //         ))}

// //         {/* ================= PAGINATION ================= */}
// //         <nav className="cs-pagination">
// //           {index > 0 ? (
// //             <Link href={`/client-success/${slugs[index - 1]}`}>
// //               ← Previous
// //             </Link>
// //           ) : (
// //             <span className="disabled">← Previous</span>
// //           )}

// //           {index < slugs.length - 1 ? (
// //             <Link href={`/client-success/${slugs[index + 1]}`}>
// //               Next →
// //             </Link>
// //           ) : (
// //             <span className="disabled">Next →</span>
// //           )}
// //         </nav>
// //         <div style={{marginTop:"5%",marginBottom:"-3.5%"}}>

// //          <ListenPerform/>
// //         </div>
       
// //       </div>
// //     </>
// //   );
// // }


// // import type { Metadata } from "next";
// // import ListenPerform from "@/app/components/homePageComponents/we-listen";
// // import "./client-success.css";
// // import Link from "next/link";
// // import { notFound } from "next/navigation";

// // /* ================= TYPES ================= */
// // type Section = {
// //   heading: string;
// //   body?: string;
// //   bullets?: string[];
// // };

// // type CaseStudy = {
// //   title: string;
// //   subtitle: string;
// //   featureImage: string;
// //   sections: Section[];
// // };

// // /* ================= DATA ================= */
// // const DATA: Record<string, CaseStudy> = {
// //   "impression-to-invoice": {
// //     title:
// //       "From Impression to Invoice — Streamlining Campaign Operations",
// //     subtitle:
// //       "How operational precision helped a genealogy-focused ad network scale revenue, trust, and efficiency",
// //     featureImage:
// //       "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
// //     sections: [
// //       {
// //         heading: "Client",
// //         body:
// //           "A US-based programmatic display ad network operating in the genealogy domain, managing campaigns across multiple DSPs and premium supply partners.",
// //       },
// //       {
// //         heading: "The Business Context",
// //         body:
// //           "Operating in a high-intent vertical with over 300 million annual ad requests, the client faced increasing pressure to maintain billing accuracy, operational transparency, and advertiser trust while scaling revenue.",
// //       },
// //       {
// //         heading: "Operational Challenges",
// //         bullets: [
// //           "Discrepancies between planned and delivered impressions",
// //           "Manual reconciliation of delivery and billing data",
// //           "Delayed campaign pacing adjustments",
// //           "Frequent invoice disputes with advertisers and DSPs",
// //         ],
// //       },
// //       {
// //         heading: "Our Approach",
// //         body:
// //           "We embedded directly into the client’s ad operations workflow, introducing structured trafficking processes, automated delivery checks, and standardized reporting frameworks across all demand and supply partners.",
// //       },
// //       {
// //         heading: "Results Delivered",
// //         bullets: [
// //           "Invoice accuracy improved to 99.8%",
// //           "Billing disputes reduced by 92%",
// //           "Faster campaign setup and optimization cycles",
// //           "Improved advertiser confidence and retention",
// //         ],
// //       },
// //       {
// //         heading: "Key Takeaway",
// //         body:
// //           "Operational discipline and transparent reporting can transform billing from a friction point into a competitive advantage.",
// //       },
// //     ],
// //   },

// //   "transition-enablers": {
// //     title:
// //       "Transition Enablers in a Complex Organizational Shift",
// //     subtitle:
// //       "Supporting enterprise restructuring with operational continuity and platform stability",
// //     featureImage:
// //       "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
// //     sections: [
// //       {
// //         heading: "Client",
// //         body:
// //           "A large enterprise undergoing acquisition-led restructuring, impacting internal teams, vendors, and operational workflows.",
// //       },
// //       {
// //         heading: "The Business Context",
// //         body:
// //           "Following multiple acquisitions, the organization faced fragmented ownership of ad platforms, undocumented workflows, and increasing dependency on external vendors.",
// //       },
// //       {
// //         heading: "Operational Challenges",
// //         bullets: [
// //           "Loss of institutional platform knowledge",
// //           "Inconsistent campaign execution standards",
// //           "High risk of operational downtime during transition",
// //           "Limited internal documentation",
// //         ],
// //       },
// //       {
// //         heading: "Our Role",
// //         body:
// //           "We acted as the operational backbone—maintaining continuity across platforms, documenting workflows, and ensuring campaigns continued without disruption during internal restructuring.",
// //       },
// //       {
// //         heading: "Outcomes",
// //         bullets: [
// //           "Zero campaign downtime during transition",
// //           "Stabilized reporting and optimization cadence",
// //           "Clear documentation enabling internal team handover",
// //         ],
// //       },
// //       {
// //         heading: "Key Takeaway",
// //         body:
// //           "Strong operational stewardship preserves trust, performance, and continuity during periods of organizational change.",
// //       },
// //     ],
// //   },
// // };

// // /* ================= SEO (SERVER SIDE) ================= */
// // export async function generateMetadata({
// //   params,
// // }: {
// //   params: { slug: string };
// // }): Promise<Metadata> {
// //   const baseUrl = "https://www.adrefresh.com";
// //   const data = DATA[params.slug];

// //   if (!data) {
// //     return {
// //       title: "Client Success | AdRefresh",
// //       description:
// //         "Explore how AdRefresh delivers operational excellence across programmatic advertising and ad operations.",
// //       robots: { index: true, follow: true },
// //     };
// //   }

// //   return {
// //     title: `${data.title} | Client Success – AdRefresh`,
// //     description: data.subtitle,

// //     alternates: {
// //       canonical: `${baseUrl}/client-success/${params.slug}`,
// //     },

// //     openGraph: {
// //       title: `${data.title} | AdRefresh`,
// //       description: data.subtitle,
// //       url: `${baseUrl}/client-success/${params.slug}`,
// //       siteName: "AdRefresh",
// //       images: [
// //         {
// //           url: data.featureImage,
// //           width: 1200,
// //           height: 630,
// //           alt: data.title,
// //         },
// //       ],
// //       type: "article",
// //     },

// //     twitter: {
// //       card: "summary_large_image",
// //       title: `${data.title} | AdRefresh`,
// //       description: data.subtitle,
// //       images: [data.featureImage],
// //     },

// //     robots: {
// //       index: true,
// //       follow: true,
// //     },
// //   };
// // }

// // /* ================= STATIC PARAMS ================= */
// // export function generateStaticParams() {
// //   return Object.keys(DATA).map((slug) => ({ slug }));
// // }

// // /* ================= PAGE ================= */
// // export default async function ClientSuccessDetail({
// //   params,
// // }: {
// //   params: Promise<{ slug: string }>;
// // }) {
// //   const { slug } = await params;
// //   const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "/rebrand";

// //   const data = DATA[slug];
// //   if (!data) notFound();

// //   const slugs = Object.keys(DATA);
// //   const index = slugs.indexOf(slug);

// //   return (
// //     <>
// //       {/* ================= HERO ================= */}
// //       <section
// //         className="cs-hero"
// //         style={{
// //           ["--hero-pattern" as any]: `url(${basePath}/images/service-page-images-videos/GrayOutline.svg)`,
// //         }}
// //       >
// //         <h1 className="cs-hero-title">{data.title}</h1>
// //       </section>

// //       {/* ================= CONTENT ================= */}
// //       <div className="cs-wrap">
// //         <p className="cs-subtitle">{data.subtitle}</p>

// //         <section className="cs-image">
// //           <img src={data.featureImage} alt={data.title} />
// //         </section>

// //         {data.sections.map((s, i) => (
// //           <section key={i} className="cs-section">
// //             <h2>{s.heading}</h2>
// //             {s.body && <p>{s.body}</p>}
// //             {s.bullets && (
// //               <ul>
// //                 {s.bullets.map((b, idx) => (
// //                   <li key={idx}>{b}</li>
// //                 ))}
// //               </ul>
// //             )}
// //           </section>
// //         ))}

// //         {/* ================= PAGINATION ================= */}
// //         <nav className="cs-pagination">
// //           {index > 0 ? (
// //             <Link href={`/client-success/${slugs[index - 1]}`}>
// //               ← Previous
// //             </Link>
// //           ) : (
// //             <span className="disabled">← Previous</span>
// //           )}

// //           {index < slugs.length - 1 ? (
// //             <Link href={`/client-success/${slugs[index + 1]}`}>
// //               Next →
// //             </Link>
// //           ) : (
// //             <span className="disabled">Next →</span>
// //           )}
// //         </nav>

// //         <div style={{ marginTop: "5%", marginBottom: "-3.5%" }}>
// //           <ListenPerform />
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// // import type { Metadata } from "next";
// // import ListenPerform from "@/app/components/homePageComponents/we-listen";
// // import "./client-success.css";
// // import Link from "next/link";
// // import { notFound } from "next/navigation";

// // import DATA from "../../json-data/case-studies.json";


// // /* ================= TYPES ================= */
// // type Section = {
// //   heading: string;
// //   body?: string;
// //   bullets?: string[];
// // };

// // type CaseStudy = {
// //   title: string;
// //   subtitle: string;
// //   featureImage: string;
// //   sections: Section[];
// // };

// // /* ================= SEO ================= */
// // export async function generateMetadata({
// //   params,
// // }: {
// //   params: { slug: string };
// // }): Promise<Metadata> {
// //   const baseUrl = "https://www.adrefresh.com";
// //   const data = (DATA as Record<string, CaseStudy>)[params.slug];

// //   if (!data) {
// //     return {
// //       title: "Client Success | AdRefresh",
// //       description:
// //         "Explore how AdRefresh delivers operational excellence across programmatic advertising and ad operations.",
// //       robots: { index: true, follow: true },
// //     };
// //   }

// //   return {
// //     title: `${data.title} | Client Success – AdRefresh`,
// //     description: data.subtitle,
// //     alternates: {
// //       canonical: `${baseUrl}/client-success/${params.slug}`,
// //     },
// //     openGraph: {
// //       title: `${data.title} | AdRefresh`,
// //       description: data.subtitle,
// //       url: `${baseUrl}/client-success/${params.slug}`,
// //       siteName: "AdRefresh",
// //       images: [
// //         {
// //           url: data.featureImage,
// //           width: 1200,
// //           height: 630,
// //           alt: data.title,
// //         },
// //       ],
// //       type: "article",
// //     },
// //     twitter: {
// //       card: "summary_large_image",
// //       title: `${data.title} | AdRefresh`,
// //       description: data.subtitle,
// //       images: [data.featureImage],
// //     },
// //     robots: {
// //       index: true,
// //       follow: true,
// //     },
// //   };
// // }

// // /* ================= STATIC PARAMS ================= */
// // export function generateStaticParams() {
// //   return Object.keys(DATA).map((slug) => ({ slug }));
// // }

// // /* ================= PAGE ================= */
// // export default async function ClientSuccessDetail({
// //   params,
// // }: {
// //   params: Promise<{ slug: string }>;
// // }) {
// //   const { slug } = await params;
// //   const basePath = process.env.NEXT_PUBLIC_BASE_PATH;

// //   const data = (DATA as Record<string, CaseStudy>)[slug];
// //   if (!data) notFound();

// //   const slugs = Object.keys(DATA);
// //   const index = slugs.indexOf(slug);

// //   return (
// //     <>
// //       <section
// //         className="cs-hero"
// //         style={{
// //           ["--hero-pattern" as any]: `url(/images/service-page-images-videos/GrayOutline.svg)`,
// //         }}
// //       >
// //         <h1 className="cs-hero-title" style={{color:"black"}}>{data.title}</h1>
// //       </section>

// //       <div className="cs-wrap">
// //         <p className="cs-subtitle">{data.subtitle}</p>

// //         <section className="cs-image">
// //           <img src={data.featureImage} alt={data.title} />
// //         </section>

// //         {data.sections.map((s, i) => (
// //           <section key={i} className="cs-section">
          
// //             <h2 style={{marginTop:"4%"}}>{s.heading}</h2>
// //             {s.body && <p>{s.body}</p>}
// //             {s.bullets && (
// //               <ul>
// //                 {s.bullets.map((b, idx) => (
// //                   <li key={idx}>{b}</li>
// //                 ))}
// //               </ul>
// //             )}
// //           </section>
// //         ))}

// //         <nav className="cs-pagination">
// //           {index > 0 ? (
// //             <Link href={`/client-success/${slugs[index - 1]}`}>
// //               ← Previous
// //             </Link>
// //           ) : (
// //             <span className="disabled">← Previous</span>
// //           )}
// //           {index < slugs.length - 1 ? (
// //             <Link href={`/client-success/${slugs[index + 1]}`}>
// //               Next →
// //             </Link>
// //           ) : (
// //             <span className="disabled">Next →</span>
// //           )}
// //         </nav>

// //         <div
// //   className="
// //     mt-[5%]
// //     mb-[-10%]        /* 📱 mobile */
// //     sm:mb-[-3.7%]   /* 💻 tablet & up */
// //   "
// // >
// //   <ListenPerform />
// // </div>

// //       </div>
// //     </>
// //   );
// // }
// "use client";

// import caseStudiesData from "@/data/caseStudies.json";
// import { notFound } from "next/navigation";

// /* ================= STATIC PARAMS (REQUIRED FOR EXPORT) ================= */

// export function generateStaticParams() {
//   return caseStudiesData.case_studies.map((cs) => ({
//     slug: cs.slug,
//   }));
// }

// /* ================= PAGE ================= */

// export default function ClientDetail({ params }) {
//   const { slug } = params;

//   const caseStudy = caseStudiesData.case_studies.find(
//     (cs) => cs.slug === slug
//   );

//   if (!caseStudy) notFound();

//   return (
//     <main className="w-full max-w-5xl mx-auto px-6 py-16 space-y-16">
//       {/* ================= HERO ================= */}
//       <section className="space-y-4">
//         <h1 className="text-4xl font-bold leading-tight">
//           {caseStudy.title}
//         </h1>

//         {caseStudy.subtitle && (
//           <p className="text-xl text-gray-600">
//             {caseStudy.subtitle}
//           </p>
//         )}

//         {(caseStudy.client_type || caseStudy.industry) && (
//           <div className="flex flex-wrap gap-6 pt-4 text-sm text-gray-500">
//             {caseStudy.client_type && (
//               <span>
//                 <strong>Client:</strong> {caseStudy.client_type}
//               </span>
//             )}
//             {caseStudy.industry && (
//               <span>
//                 <strong>Industry:</strong> {caseStudy.industry}
//               </span>
//             )}
//           </div>
//         )}
//       </section>

//       {/* ================= SECTION-BASED CASE STUDIES ================= */}
//       {caseStudy.sections && (
//         <section className="space-y-12">
//           {caseStudy.sections.map((section, i) => (
//             <div key={i} className="space-y-4">
//               <h2 className="text-2xl font-semibold">
//                 {section.heading}
//               </h2>

//               {section.content && (
//                 <p className="text-gray-700 leading-relaxed">
//                   {section.content}
//                 </p>
//               )}

//               {section.bullets && (
//                 <ul className="list-disc pl-6 space-y-2 text-gray-700">
//                   {section.bullets.map((bullet, idx) => (
//                     <li key={idx}>{bullet}</li>
//                   ))}
//                 </ul>
//               )}

//               {section.subsections && (
//                 <div className="space-y-6 pt-4">
//                   {section.subsections.map((sub, j) => (
//                     <div key={j} className="space-y-2">
//                       <h3 className="text-lg font-semibold">
//                         {sub.title}
//                       </h3>
//                       <p className="text-gray-700">
//                         {sub.content}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               )}

//               {section.table && (
//                 <div className="overflow-x-auto pt-6">
//                   <table className="w-full border border-gray-200 text-sm">
//                     <thead className="bg-gray-100">
//                       <tr>
//                         {section.table.columns.map((col, c) => (
//                           <th
//                             key={c}
//                             className="border px-4 py-2 text-left font-semibold"
//                           >
//                             {col}
//                           </th>
//                         ))}
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {section.table.rows.map((row, r) => (
//                         <tr key={r}>
//                           {row.map((cell, k) => (
//                             <td
//                               key={k}
//                               className="border px-4 py-2"
//                             >
//                               {cell}
//                             </td>
//                           ))}
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               )}
//             </div>
//           ))}
//         </section>
//       )}

//       {/* ================= CLASSIC CASE STUDIES ================= */}
//       {!caseStudy.sections && (
//         <section className="space-y-12">
//           {caseStudy.background && (
//             <ContentBlock title="Background" text={caseStudy.background} />
//           )}

//           {caseStudy.challenge && (
//             <ContentBlock title="Challenge" text={caseStudy.challenge} />
//           )}

//           {caseStudy.role && (
//             <ContentBlock title="Our Role" text={caseStudy.role} />
//           )}

//           {caseStudy.solution && (
//             <ContentBlock title="Solution" text={caseStudy.solution} />
//           )}

//           {caseStudy.approach && (
//             <ListBlock title="Approach" items={caseStudy.approach} />
//           )}

//           {caseStudy.impact && (
//             <ListBlock title="Impact" items={caseStudy.impact} />
//           )}

//           {caseStudy.results && (
//             <ListBlock title="Results" items={caseStudy.results} />
//           )}

//           {caseStudy.conclusion && (
//             <ContentBlock title="Conclusion" text={caseStudy.conclusion} />
//           )}

//           {caseStudy.cta && (
//             <div className="pt-8">
//               <p className="text-lg font-semibold">
//                 {caseStudy.cta}
//               </p>
//             </div>
//           )}
//         </section>
//       )}
//     </main>
//   );
// }

// /* ================= REUSABLE BLOCKS ================= */

// function ContentBlock({ title, text }) {
//   return (
//     <div className="space-y-3">
//       <h2 className="text-2xl font-semibold">{title}</h2>
//       <p className="text-gray-700 leading-relaxed">{text}</p>
//     </div>
//   );
// }

// function ListBlock({ title, items }) {
//   return (
//     <div className="space-y-3">
//       <h2 className="text-2xl font-semibold">{title}</h2>
//       <ul className="list-disc pl-6 space-y-2 text-gray-700">
//         {items.map((item, i) => (
//           <li key={i}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// import caseStudiesData from "../../json-data/case-studies.json";
// import { notFound } from "next/navigation";
// import ClientDetail from "../../json-data/case-studies.json";

// /* REQUIRED FOR output: "export" */
// export function generateStaticParams() {
//   return caseStudiesData.case_studies.map((cs) => ({
//     slug: cs.slug,
//   }));
// }

// export default function Page({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   const caseStudy = caseStudiesData.case_studies.find(
//     (cs) => cs.slug === params.slug
//   );

//   if (!caseStudy) notFound();

//   return <ClientDetail caseStudy={caseStudy} />;
// }

import type { Metadata } from "next";
import ListenPerform from "@/app/components/homePageComponents/we-listen";
import "./client-success.css";
import Link from "next/link";
import { notFound } from "next/navigation";

import DATA from "../../json-data/case-studies.json";


/* ================= TYPES ================= */
type Section = {
  heading: string;
  body?: string;
  bullets?: string[];
};

type CaseStudy = {
  title: string;
  subtitle: string;
  featureImage: string;
  sections: Section[];
};

/* ================= SEO ================= */
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const baseUrl = "https://www.adrefresh.com";
  const data = (DATA as Record<string, CaseStudy>)[params.slug];

  if (!data) {
    return {
      title: "Client Success | AdRefresh",
      description:
        "Explore how AdRefresh delivers operational excellence across programmatic advertising and ad operations.",
      robots: { index: true, follow: true },
    };
  }

  return {
    title: `${data.title} | Client Success – AdRefresh`,
    description: data.subtitle,
    alternates: {
      canonical: `${baseUrl}/client-success/${params.slug}`,
    },
    openGraph: {
      title: `${data.title} | AdRefresh`,
      description: data.subtitle,
      url: `${baseUrl}/client-success/${params.slug}`,
      siteName: "AdRefresh",
      images: [
        {
          url: data.featureImage,
          width: 1200,
          height: 630,
          alt: data.title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${data.title} | AdRefresh`,
      description: data.subtitle,
      images: [data.featureImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

/* ================= STATIC PARAMS ================= */
export function generateStaticParams() {
  return Object.keys(DATA).map((slug) => ({ slug }));
}

/* ================= PAGE ================= */
export default async function ClientSuccessDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH;

  const data = (DATA as Record<string, CaseStudy>)[slug];
  if (!data) notFound();

  const slugs = Object.keys(DATA);
  const index = slugs.indexOf(slug);

  return (
    <>
      <section
        className="cs-hero"
        style={{
          ["--hero-pattern" as any]: `url(/images/service-page-images-videos/GrayOutline.svg)`,
        }}
      >
        <h1 className="cs-hero-title" style={{color:"black"}}>{data.title}</h1>
      </section>

      <div className="cs-wrap">
        {/* <p className="cs-subtitle">{data.subtitle}</p> */}

     {/* HERO IMAGE + FIRST SECTION */}
<section className="cs-hero mt-[-60px]">
  <div className="cs-grid">

    {/* Left Image */}
    <div className="cs-image">
      <img src={data.featureImage} alt={data.title} />
    </div>

    {/* Right Content (ONLY FIRST SECTION) */}
    <div className="cs-content">
      <h2>{data.sections[0].heading}</h2>
      <p>{data.sections[0].body}</p>
    </div>

  </div>
</section>


{/* REMAINING SECTIONS (START FROM 2nd) */}
{data.sections.slice(1).map((s, i) => (
  <section key={i} className="cs-section">
    <h2 style={{ marginTop: "4%" }}>{s.heading}</h2>

    {s.body && <p>{s.body}</p>}

    {s.bullets && (
      <ul>
        {s.bullets.map((b, idx) => (
          <li key={idx}>{b}</li>
        ))}
      </ul>
    )}
  </section>
))}

        <nav className="cs-pagination">
          {index > 0 ? (
            <Link href={`/client-success/${slugs[index - 1]}`}>
              ← Previous
            </Link>
          ) : (
            <span className="disabled">← Previous</span>
          )}
          {index < slugs.length - 1 ? (
            <Link href={`/client-success/${slugs[index + 1]}`}>
              Next →
            </Link>
          ) : (
            <span className="disabled">Next →</span>
          )}
        </nav>

        <div
  className="
    mt-[5%]
    md:mb-[-60px]
    
    mb-[20%]        /* 📱 mobile */
    sm:mb-[-3.7%]   /* 💻 tablet & up */
  "
>
  <ListenPerform />
</div>

      </div>
    </>
  );
}