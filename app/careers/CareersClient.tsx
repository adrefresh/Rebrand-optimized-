"use client";

import dynamic from "next/dynamic";

/* =========================
   HEAVY (DYNAMIC)
========================= */

// Heavy hero
const CareersHero = dynamic(
  () => import("../components/careers-components/careershero"),
  {
    ssr: false,
    loading: () => (
      <div className="h-[60vh] w-full bg-neutral-200" />
    ),
  }
);

// Heavy path section
const PathSection = dynamic(
  () => import("../components/careers-components/Pathsection"),
  { ssr: false }
);

/* =========================
   LIGHT / NORMAL
========================= */

import PatternBackground from "../components/careers-components/patternbg";
import CareersClient from "../components/careers-components/jobs";

export default function CareersClientPage() {
  return (
    <main className="bg-[#fafafa] text-[#111] overflow-x-hidden">
      {/* HERO (dynamic, heavy) */}
      <CareersHero />

      {/* OPTIONAL BACKGROUND */}
      {/* <PatternBackground /> */}

      {/* HEAVY SECTION */}
      <PathSection />

      {/* CLIENT-SIDE JOB LIST */}
      <CareersClient />
    </main>
  );
}
