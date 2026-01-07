"use client";

import dynamic from "next/dynamic";

/* ===========================
   DYNAMIC IMPORTS (HEAVY)
=========================== */

const Hero = dynamic(
  () => import("./components/homePageComponents/Hero"),
  {
    ssr: false,
    loading: () => (
      <div className="h-[70vh] w-full" />
    ),
  }
);

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

const ListenPerform = dynamic(
  () => import("./components/homePageComponents/we-listen"),
  { ssr: false }
);

/* ===========================
   CLIENT PAGE
=========================== */

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

      <div className="mb-[-160px] sm:mb-[-2px]">
        <ListenPerform />
      </div>

      <section id="prev-section" className="h-[1px] w-full" />
    </main>
  );
}
