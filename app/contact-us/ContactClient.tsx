"use client";

import dynamic from "next/dynamic";

/* =========================
   HEAVY (DYNAMIC)
========================= */

// Heavy hero
const ContactHero = dynamic(
  () => import("../components/contact-us-components/contact-hero"),
  {
    ssr: false,
    loading: () => (
      <div className="h-[60vh] w-full bg-neutral-200" />
    ),
  }
);

// Heavy global presence (maps, observers, effects)
const GlobalPresence = dynamic(
  () => import("../components/contact-us-components/Globalpresence"),
  { ssr: false }
);

/* =========================
   LIGHT / NORMAL
========================= */

import PrecisionSection from "../components/contact-us-components/Precesion-section";
import ContactForm from "../components/contact-us-components/contact-form";
// Optional map client (keep commented if unused)
// import ContactClient from "../components/contact-us-components/contact-maps";

export default function ContactClientPage() {
  return (
    <main className="relative bg-[#fafafa] text-[#111] overflow-x-hidden">
      {/* HERO (dynamic, heavy) */}
      <ContactHero />

      {/* CONTENT */}
      <PrecisionSection />

      {/* HEAVY SECTION */}
      <GlobalPresence />

      {/* FORM */}
      <ContactForm />
    </main>
  );
}
