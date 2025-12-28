
import type { Metadata } from "next";
import Hero from "../components/homePageComponents/Hero";
import About from "../components/homePageComponents/adrexiansabout";
import Features from "../components/homePageComponents/Mme";
import Flexibility from "../components/homePageComponents/platformExperience";
import Section7 from "../components/homePageComponents/platformsMarquee";
import CustomizedWorkflow from "../components/homePageComponents/Why-us";
import Services from "../components/homePageComponents/services-section";
import CaseHeader from "../components/homePageComponents/case-header";
import ListenPerform from "../components/homePageComponents/we-listen";
import VisionMission from "../components/about-us-page-components/vision";


export const metadata: Metadata = {
  title: "AdRefresh – Programmatic Advertising & Ad Operations",
  description:
    "AdRefresh provides programmatic advertising, ad operations, and remote media teams that scale your business efficiently.",

  alternates: {
    canonical: "https://yourdomain.com/",
  },

  openGraph: {
    title: "AdRefresh – Programmatic Advertising & Ad Operations",
    description:
      "AdRefresh provides programmatic advertising, ad operations, and remote media teams that scale your business efficiently.",
    url: "https://yourdomain.com/",
    siteName: "AdRefresh",
    images: [
      {
        url: "https://yourdomain.com/og/home.png",
        width: 1200,
        height: 630,
        alt: "AdRefresh",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "AdRefresh – Programmatic Advertising & Ad Operations",
    description:
      "AdRefresh provides programmatic advertising, ad operations, and remote media teams that scale your business efficiently.",
    images: ["https://yourdomain.com/og/home.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function HomePage() {
  return (
    <main className="relative">
      {/* HERO */}
 
<Hero/>
       <About/>
       <Features/>
       <Flexibility/>
      <Section7/>
      <CustomizedWorkflow/>
     
      <CaseHeader/>
       <Services/>
       <ListenPerform/>
     
      {/* SCROLL TARGET */}
      <section id="prev-section">
        {/* Next section */}
 
      </section>
    </main>
  );
}
