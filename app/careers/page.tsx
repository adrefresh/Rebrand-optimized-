
import type { Metadata } from "next";

import CareersHero from "../components/careers-components/careershero";
import PathSection from "../components/careers-components/Pathsection";
// import PatternBackground from "../components/careers-components/patternbg";
import CareersClient from "../components/careers-components/jobs";


export const metadata: Metadata = {
  title: "Careers at AdRefresh | Join Our Digital Marketing & Ad Ops Team",
  description:
    "Explore exciting career opportunities at AdRefresh. Join our digital marketing, ad operations, and development teams in Hyderabad.",

  alternates: {
    canonical: "https://www.adrefresh.com/careers",
  },

  openGraph: {
    title: "Careers at AdRefresh",
    description:
      "Join AdRefresh and build your career with experts in digital marketing, ad operations, and technology.",
    url: "https://www.adrefresh.com/careers",
    siteName: "AdRefresh",
    images: [
      {
        url: "https://www.adrefresh.com/og/careers.png",
        width: 1200,
        height: 630,
        alt: "Careers at AdRefresh",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Careers at AdRefresh",
    description:
      "Build your future with AdRefresh. Explore open roles in marketing, development, and ad operations.",
    images: ["https://www.adrefresh.com/og/careers.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function CareersPage() {
  return (
    <main className="bg-[#fafafa] text-[#111]">
          
      <CareersHero />
  
   
       {/* <PatternBackground /> */}
      
      <PathSection />

      {/* CLIENT SIDE JOB LIST */}
     <CareersClient/>
    
    </main>
  );
}
