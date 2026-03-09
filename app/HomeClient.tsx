// // "use client";

// // import dynamic from "next/dynamic";

// // /* ===========================
// //    DYNAMIC IMPORTS (HEAVY)
// // =========================== */

// // const Hero = dynamic(
// //   () => import("./components/homePageComponents/Hero"),
// //   {
// //     ssr: false,
// //     loading: () => (
// //       <div className="h-[70vh] w-full" />
// //     ),
// //   }
// // );

// // const About = dynamic(
// //   () => import("./components/homePageComponents/adrexiansabout"),
// //   { ssr: false }
// // );

// // const Features = dynamic(
// //   () => import("./components/homePageComponents/Mme"),
// //   { ssr: false }
// // );

// // const Flexibility = dynamic(
// //   () => import("./components/homePageComponents/platformExperience"),
// //   { ssr: false }
// // );

// // const Section7 = dynamic(
// //   () => import("./components/homePageComponents/platformsMarquee"),
// //   { ssr: false }
// // );

// // const CustomizedWorkflow = dynamic(
// //   () => import("./components/homePageComponents/Why-us"),
// //   { ssr: false }
// // );

// // const CaseHeader = dynamic(
// //   () => import("./components/homePageComponents/case-header"),
// //   { ssr: false }
// // );

// // const Services = dynamic(
// //   () => import("./components/homePageComponents/services-section"),
// //   { ssr: false }
// // );

// // const ListenPerform = dynamic(
// //   () => import("./components/homePageComponents/we-listen"),
// //   { ssr: false }
// // );

// // /* ===========================
// //    CLIENT PAGE
// // =========================== */

// // export default function HomeClient() {
// //   return (
// //     <main className="relative w-full overflow-x-hidden">
// //       <Hero />
// //       <About />
// //       <Features />
// //       <Flexibility />
// //       <Section7 />
// //       <CustomizedWorkflow />
// //       <CaseHeader />
// //       <Services />

// //       <div className="mb-[-160px] sm:mb-[-2px]">
// //         <ListenPerform />
// //       </div>

// //       <section id="prev-section" className="h-[1px] w-full" />
// //     </main>
// //   );
// // }
// import dynamic from "next/dynamic";
// import ListenPerform from "./components/homePageComponents/we-listen";

// /* ===========================
//    DYNAMIC IMPORTS (SERVER SAFE)
// =========================== */

// const Hero = dynamic(() => import("./components/homePageComponents/Hero"));
// const About = dynamic(() => import("./components/homePageComponents/adrexiansabout"));
// const Features = dynamic(() => import("./components/homePageComponents/Mme"));
// const Flexibility = dynamic(() => import("./components/homePageComponents/platformExperience"));
// const Section7 = dynamic(() => import("./components/homePageComponents/platformsMarquee"));
// const CustomizedWorkflow = dynamic(() => import("./components/homePageComponents/Why-us"));
// const CaseHeader = dynamic(() => import("./components/homePageComponents/case-header"));
// const Services = dynamic(() => import("./components/homePageComponents/services-section"));

// /* ===========================
//    SERVER PAGE
// =========================== */

// export default function HomeClient() {
//   return (
//     <main className="relative w-full overflow-x-hidden">
//       <Hero />
//       <About />
//       <Features />
//       <Flexibility />
//       <Section7 />
//       <CustomizedWorkflow />
//       <CaseHeader />
//       <Services />

//       <div className="mb-[-160px] sm:mb-[-2px]">
//         <ListenPerform />
//       </div>

//       <section id="prev-section" className="h-[1px] w-full" />
//     </main>
//   );
// }
// HomeClient.tsx
// ✅ No "use client" directive — this is a React Server Component.
// Dynamic imports without ssr:false means Next.js still SSR-renders them
// at build time (static export), so HTML is populated before JS loads.
// Only truly interactive components (carousel, video) would need ssr:false.

import dynamic from "next/dynamic";

// Static sections — rendered at build time, no JS bundle penalty
// Using dynamic() here allows code-splitting per section (smaller initial JS)
// while still generating proper HTML for the static export.

const Hero = dynamic(() => import("./components/homePageComponents/Hero"));
const About = dynamic(() => import("./components/homePageComponents/adrexiansabout"));
const Features = dynamic(() => import("./components/homePageComponents/Mme"));
const Flexibility = dynamic(() => import("./components/homePageComponents/platformExperience"));
const Section7 = dynamic(() => import("./components/homePageComponents/platformsMarquee"));
const CustomizedWorkflow = dynamic(() => import("./components/homePageComponents/Why-us"));
const CaseHeader = dynamic(() => import("./components/homePageComponents/case-header"));
const Services = dynamic(() => import("./components/homePageComponents/services-section"));

// ListenPerform imported directly (not dynamic) since it's the last visible
// section and benefits from being in the main bundle for LCP.
import ListenPerform from "./components/homePageComponents/we-listen";

export default function HomeClient() {
  return (
    <main className="relative w-full overflow-x-hidden">
      <Hero />
      <About />
      <Features />
      <Flexibility />
      <Section7 />
      <CustomizedWorkflow />
      <CaseHeader />
      <Services />

      {/* 
        ⚠️ mb-[-160px] is a negative margin hack compensating for a gap
        between ListenPerform's bottom and the footer.
        TODO: Fix ListenPerform's padding/margin so this isn't needed.
        For now, keeping it to avoid visual regression.
      */}
      <div className="mb-[-160px] sm:mb-[-2px]">
        <ListenPerform />
      </div>

      {/* Spacer sentinel used by scroll-reveal observers */}
      <section id="prev-section" className="h-[1px] w-full" />
    </main>
  );
}
