

import type { Metadata } from "next";
// import ContactClient from "../components/contact-us-components/contact-maps";
import GlobalPresence from "../components/contact-us-components/Globalpresence";
import ContactHero from "../components/contact-us-components/contact-hero";
import ContactForm from "../components/contact-us-components/contact-form";
import PrecisionSection from "../components/contact-us-components/Precesion-section";

export const metadata: Metadata = {
  title: "Contact AdRefresh | Get in Touch With Our Global Team",
  description:
    "Contact AdRefresh to discuss programmatic advertising, ad operations, and digital marketing solutions.",
  alternates: {
    canonical: "https://www.adrefresh.com/contact-us",
  },
};

export default function ContactPage() {
  return (
    <main className="relative bg-[#fafafa] text-[#111]">
      {/* <ContactClient /> */}
      <ContactHero/>
      <PrecisionSection/>
      <GlobalPresence />
      <ContactForm/>
    </main>
  );
}
