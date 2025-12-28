"use client";

import {
  Layers,
  Settings,
  TrendingUp,
  LineChart,
  Headphones,
  Wrench,
} from "lucide-react";





import PrecisionSectionGray from "../../components/service-page-components/precesion-section-serv";
import ZigZagSections from "../../components/service-page-components/zig-zag-section";
import AdOpsContactHero2 from "../../components/service-page-components/adops-contact-hero";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function AdOpsPageWithVideo() {
  return (
    <>
      {/* ============================================================
          🌟 SECTION 1 — FULLSCREEN VIDEO HERO
      ============================================================ */}
     <section
  className="
    relative
    w-screen
    h-[89vh]
    max-[768px]:h-[50vh]
    overflow-hidden
    flex
    items-center
    mb-[-2.5%]
    justify-center
  
  "
  style={{ marginLeft: "calc(50% - 50vw)" }}
>
  {/* VIDEO */}
  <video
    className="absolute inset-0 w-full h-full object-cover z-[1] mb-[-10%]"
    src={`${basePath}/images/about-page-videos-images/Adopsbg.mp4`}
    autoPlay
    muted
    loop
    playsInline
  />

  {/* 🔥 BLACK OVERLAY */}
  <div className="absolute inset-0 z-[2] bg-black/35" />

  {/* (OPTIONAL BUT RECOMMENDED) GRADIENT DEPTH */}
  <div className="absolute inset-0 z-[3] bg-gradient-to-b from-black/50 via-black/40 to-black/70" />

  {/* TEXT */}
  <div className="relative z-[5] text-center">
    <h1
      className="
        text-white
        font-black
        tracking-[1px]
        text-[4rem]
        max-[768px]:text-[2.5rem]
      "
    >
      AD OPERATIONS
    </h1>
  </div>
</section>

      {/* ============================================================
          🌟 SECTION 2 — CONTENT BLOCKS
      ============================================================ */}
      <section
        className="
          w-screen
          bg-white
          pt-[120px]
          pb-[160px]
        "
        style={{ marginLeft: "calc(50% - 50vw)" }}
      >
        {/* Precision Section */}
        <div className="-mt-[9%]">
        <PrecisionSectionGray/>
        </div>

        <br />

        {/* ZigZag Content */}
        <div className="-mt-[5%]">
     <ZigZagSections/>
        </div>

        {/* CTA Hero */}
        <div className="-mb-[10%]">
          <br />
   <AdOpsContactHero2/>
        </div>
      </section>
    </>
  );
}
