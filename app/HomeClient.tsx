// "use client";

// import Hero from "./components/homePageComponents/Hero";
// import ListenPerform from "./components/homePageComponents/we-listen";
// import dynamic from "next/dynamic";

// /* =========================
//    LAZY LOADED SECTIONS
// ========================= */

// const About = dynamic(
//   () => import("./components/homePageComponents/adrexiansabout"),
//   { ssr: false }
// );

// const Features = dynamic(
//   () => import("./components/homePageComponents/Mme"),
//   { ssr: false }
// );

// const Flexibility = dynamic(
//   () => import("./components/homePageComponents/platformExperience"),
//   { ssr: false }
// );

// const Section7 = dynamic(
//   () => import("./components/homePageComponents/platformsMarquee"),
//   { ssr: false }
// );

// const CustomizedWorkflow = dynamic(
//   () => import("./components/homePageComponents/Why-us"),
//   { ssr: false }
// );

// const CaseHeader = dynamic(
//   () => import("./components/homePageComponents/case-header"),
//   { ssr: false }
// );

// const Services = dynamic(
//   () => import("./components/homePageComponents/services-section"),
//   { ssr: false }
// );

// /* =========================
//    COMPONENT
// ========================= */

// export default function HomeClient() {
//   return (
//     <main className="relative w-full overflow-x-hidden">

//       {/* HERO FIRST FOR LCP */}
//       <Hero />

//       {/* BELOW THE FOLD SECTIONS */}
//       <About />
//       <Features />
//       <Flexibility />
//       <Section7 />
//       <CustomizedWorkflow />
//       <CaseHeader />
//       <Services />

//       {/* LISTEN & PERFORM */}
//    <div className="mb-[-162] md:mb-[-2]">
//   <ListenPerform />
// </div>
//       {/* SCROLL TARGET */}
//       <section id="prev-section" className="h-px w-full" />

//     </main>
//   );
// }
"use client";

import Hero from "./components/homePageComponents/Hero";
import ListenPerform from "./components/homePageComponents/we-listen";
import dynamic from "next/dynamic";

const About = dynamic(() =>
  import("./components/homePageComponents/adrexiansabout")
);

const Features = dynamic(() =>
  import("./components/homePageComponents/Mme")
);

const Flexibility = dynamic(() =>
  import("./components/homePageComponents/platformExperience")
);

const Section7 = dynamic(() =>
  import("./components/homePageComponents/platformsMarquee")
);

const CustomizedWorkflow = dynamic(() =>
  import("./components/homePageComponents/Why-us")
);

const CaseHeader = dynamic(() =>
  import("./components/homePageComponents/case-header")
);

const Services = dynamic(() =>
  import("./components/homePageComponents/services-section")
);

export default function HomeClient() {
  return (
    <main className="relative w-full overflow-x-hidden">

      {/* HERO FIRST */}
      <Hero />

      {/* BELOW THE FOLD */}
      <About />
      <Features />
      <Flexibility />
      <Section7 />
      <CustomizedWorkflow />
      <CaseHeader />
      <Services />

      <ListenPerform />

      {/* <section id="prev-section" className="h-px w-full" /> */}

    </main>
  );
}