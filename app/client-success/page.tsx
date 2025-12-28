// "use client";

// import { useRouter } from "next/navigation";
// import ListenPerform from "../components/homePageComponents/we-listen";


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

// export default function ClientSuccessPage() {
//   const router = useRouter();
//   const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

//   return (
//     <>
//       {/* ================= HERO ================= */}
//       <section className="relative w-screen h-[80vh] ml-[calc(50%-50vw)] flex items-center justify-center overflow-hidden">
//         <video
//           className="absolute inset-0 w-full h-full object-cover"
//           autoPlay
//           muted
//           loop
//           playsInline
//           src={`${basePath}/images/about-page-videos-images/2.mp4`}
//         />

//         {/* BLACK 60% OVERLAY */}
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

//       {/* ================= HEADER ================= */}
//       <section className="max-w-[1200px] mx-auto text-center mt-[1%] mb-[5%] px-4">
//         <h2 className="text-[5rem] font-black mb-5 max-[900px]:text-[3rem]">
//           Case Studies
//         </h2>
//         <p className="text-[20px] leading-[1.7] text-[#555] max-w-[900px] mx-auto">
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
//             <div
//               onClick={() => router.push(`/client-success/${cs.slug}`)}
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
//             </div>

//             {/* DIVIDER */}
//             {i !== caseStudies.length - 1 && (
//               <div className="my-[80px] h-px w-full bg-gradient-to-r from-transparent via-[#dcdcdc] to-transparent" />
//             )}
//           </div>
//         ))}
//       </section>

//       {/* ================= FOOTER SECTION ================= */}
//       <div className="mt-[5%]">
//       <ListenPerform/>
//       </div>

//       {/* RTL HELPERS */}
//       <style jsx global>{`
//         .direction-rtl {
//           direction: rtl;
//         }
//         .direction-ltr {
//           direction: ltr;
//         }
//       `}</style>
//     </>
//   );
// }
"use client";

import { useRouter } from "next/navigation";
import ListenPerform from "../components/homePageComponents/we-listen";

const caseStudies = [
  {
    slug: "impression-to-invoice",
    title: "From Impression to Invoice — Streamlining Campaign Operations",
    excerpt:
      "How a US-based genealogy-focused programmatic ad network improved billing accuracy, reduced disputes, and scaled operations across 300M+ impressions annually.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
  },
  {
    slug: "transition-enablers",
    title: "Transition Enablers in a Complex Organizational Shift",
    excerpt:
      "Supporting a large enterprise through acquisition-led restructuring by becoming the backbone of platform knowledge and operational continuity.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
  },
];

export default function ClientSuccessPage() {
  const router = useRouter();
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative w-screen h-[80vh] ml-[calc(50%-50vw)] flex items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src={`${basePath}/images/about-page-videos-images/2.mp4`}
        />

        {/* BLACK OVERLAY */}
        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 text-center text-white">
          <h1 className="text-[64px] font-black max-[900px]:text-[42px]">
            Client Success
          </h1>
          <p className="mt-2 text-lg opacity-90">
            Real-world outcomes powered by operational excellence
          </p>
        </div>
      </section>
 <div className="relative w-full h-[19vh] mb-6 overflow-hidden">
          <div
            className="absolute inset-0 bg-repeat-x opacity-[0.95]"
            style={{
              backgroundImage: `url(/rebrand/images/service-page-images-videos/GrayOutline.svg)`,
              backgroundSize: "450px",
                  transform: "rotate(180deg)",
    transformOrigin: "center",
   
              maskImage:
                "linear-gradient(to bottom, transparent, black 45%, black 85%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent, black 45%, black 85%, transparent)",
            }}
          />
        </div>
      {/* ================= HEADER ================= */}
      <section className="relative max-w-[1200px] mx-auto text-center mt-[-5%] mb-[5%] px-4 overflow-hidden">
        <h2 className="text-[5rem] font-black mb-5 max-[900px]:text-[3rem] relative z-10">
          Case Studies
        </h2>

        {/* ===== HORIZONTAL PATTERN STRIP ===== */}
       

        <p className="text-[20px] leading-[1.7] text-[#555] max-w-[900px] mx-auto relative z-10">
          A closer look at how operational precision, platform expertise, and
          execution excellence translate into measurable business impact.
          <br />
          Each engagement reflects a distinct challenge solved through disciplined
          media operations.
        </p>
      </section>

      {/* ================= CASE STUDIES ================= */}
      <section className="max-w-[1200px] mx-auto px-4 py-5">
        {caseStudies.map((cs, i) => (
          <div key={cs.slug} className="relative">
            <div
              onClick={() => router.push(`/client-success/${cs.slug}`)}
              className={`
                grid grid-cols-2 gap-[60px] items-center cursor-pointer
                transition-transform duration-300 hover:scale-[1.02]
                max-[900px]:grid-cols-1 max-[900px]:gap-[40px]
                ${i % 2 !== 0 ? "direction-rtl" : ""}
              `}
            >
              {/* TEXT */}
              <div className={`${i % 2 !== 0 ? "direction-ltr text-right" : ""}`}>
                <h2 className="text-[30px] font-extrabold mb-4">
                  {cs.title}
                </h2>
                <p className="text-[17px] leading-[1.7] text-[#444] max-w-[480px]">
                  {cs.excerpt}
                </p>
              </div>

              {/* IMAGE */}
              <div className="max-w-[420px] rounded-[18px] overflow-hidden max-[900px]:max-w-full">
                <img
                  src={cs.image}
                  alt={cs.title}
                  className="w-full h-[300px] object-cover transition-transform duration-500 hover:scale-[1.08]"
                />
              </div>
            </div>

            {/* DIVIDER */}
            {i !== caseStudies.length - 1 && (
              <div className="my-[80px] h-px w-full bg-gradient-to-r from-transparent via-[#dcdcdc] to-transparent" />
            )}
          </div>
        ))}
      </section>

      {/* ================= FOOTER SECTION ================= */}
      <div className="mt-[5%]">
        <ListenPerform />
      </div>

      {/* ================= RTL HELPERS ================= */}
      <style jsx global>{`
        .direction-rtl {
          direction: rtl;
        }
        .direction-ltr {
          direction: ltr;
        }
      `}</style>
    </>
  );
}
