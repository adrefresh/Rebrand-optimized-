
"use client";

import Hero from "./components/homePageComponents/Hero";
import ListenPerform from "./components/homePageComponents/we-listen";
import dynamic from "next/dynamic";

// ✅ PERF FIX: Added { ssr: false } to all below-the-fold dynamic imports.
// Without ssr:false, Next.js server-renders ALL these components into the initial
// HTML, sending a large HTML payload to mobile — even though the user can't see
// them yet. With ssr:false, they are skipped on the server and lazy-loaded on the
// client only when needed, reducing Time To First Byte (TTFB) and parse time on
// mobile significantly.
//
// Hero and ListenPerform are kept as direct imports (no dynamic) because:
// - Hero is the LCP element — must be in initial HTML
// - ListenPerform is already lightweight (no images)

const About = dynamic(
  () => import("./components/homePageComponents/adrexiansabout"),
  { ssr: false }
);

const Features = dynamic(
  () => import("./components/homePageComponents/Mme"),
  { ssr: false }
);

const Flexibility = dynamic(
  () => import("./components/homePageComponents/platformExperience"),
  { ssr: false }
);

const Section7 = dynamic(
  () => import("./components/homePageComponents/platformsMarquee"),
  { ssr: false }
);

const CustomizedWorkflow = dynamic(
  () => import("./components/homePageComponents/Why-us"),
  { ssr: false }
);

const CaseHeader = dynamic(
  () => import("./components/homePageComponents/case-header"),
  { ssr: false }
);

const Services = dynamic(
  () => import("./components/homePageComponents/services-section"),
  { ssr: false }
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

    </main>
  );
}
