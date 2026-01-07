"use client";

import dynamic from "next/dynamic";

/* =========================
   DYNAMIC (HEAVY)
========================= */

// Heavy hero
const AboutHero = dynamic(
  () => import("../components/about-us-page-components/abouthero"),
  {
    ssr: false,
    loading: () => (
      <div className="h-[60vh] w-full bg-neutral-200" />
    ),
  }
);

// Heavy listen section
const ListenPerform = dynamic(
  () => import("../components/homePageComponents/we-listen"),
  { ssr: false }
);

/* =========================
   NORMAL / LIGHT
========================= */

import AboutAdRefresh from "../components/about-us-page-components/About-Adrefresh";
import AboutVisionMission from "../components/about-us-page-components/mission-vision";
import VisionMission from "../components/about-us-page-components/vision";
import MissionVisionSection from "../components/about-us-page-components/CardsMission";

export default function AboutClient() {
  return (
    <main className="relative w-full overflow-x-hidden">
      {/* HERO (dynamic, heavy) */}
      <AboutHero />

      {/* CONTENT */}
      <AboutAdRefresh />
      <AboutVisionMission />
      <VisionMission />
      <MissionVisionSection />

      {/* HEAVY SECTION */}
      <ListenPerform />
    </main>
  );
}
