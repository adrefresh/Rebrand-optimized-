

"use client";

import Image from "next/image";
import WhitePml from "@/public/images/FooterImages/whitePML.png";
import Soc from "@/public/images/FooterImages/soc.webp";
import iso from "@/public/images/FooterImages/iso.webp";

import { Mail, Facebook, Linkedin, Instagram, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-screen ml-[calc(50%-50vw)] bg-[linear-gradient(to_bottom,#565656_0%,#949494_100%)] text-white">
      
      {/* ================= GRID ================= */}
      <div
        className="
          relative mx-auto max-w-[1400px]
          px-[80px] py-[60px]
          grid grid-cols-4 gap-[60px]
          max-[1024px]:grid-cols-2
          max-[640px]:grid-cols-1
        "
      >
        {/* ================= 1. LOGO ONLY ================= */}
        <div className="relative flex items-center max-[640px]:justify-center">
     <Image
  src={WhitePml}
  alt="LogoS"
  className="w-[180px] h-auto object-contain"
/>

          {/* VERTICAL LINE */}
          <div
            className="
              absolute
              right-[-30px]
              top-1/2
              -translate-y-1/2
              h-[70%]
              w-[2px]
              bg-white/40
              hidden
              md:block
            "
          />
        </div>

        {/* ================= 2. ISO CERTIFICATES ================= */}
        <div className="flex items-center gap-10 max-[640px]:justify-center">
  <Image
  src={iso}
  alt="ISO"
  className="w-[120px] h-auto object-contain"

/>

<Image
  src={Soc}
  alt="SOC"
  className="w-[80px] h-auto object-contain"
  
/>
</div>


        {/* ================= 3. LOCATIONS (ALWAYS 2x2) ================= */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 text-sm sm:text-base leading-relaxed">

          <div className="flex items-center gap-2 sm:gap-3">
            <MapPin className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-[35px] lg:h-[35px] shrink-0" />
            <span>India</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <MapPin className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-[35px] lg:h-[35px] shrink-0" />
            <span>Australia</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <MapPin className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-[35px] lg:h-[35px] shrink-0" />
            <span>USA</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <MapPin className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-[35px] lg:h-[35px] shrink-0" />
            <span>Canada</span>
          </div>

        </div>

        {/* ================= 4. MAIL + SOCIAL ICONS ================= */}
        <div className="flex flex-col gap-6 max-[640px]:items-center mt-2">

          {/* MAIL ROW */}
          <div className="flex items-center gap-4">
           
            <span className="text-base tracking-wide ">Follow Us :</span>
          </div>

          {/* SOCIAL ICONS ROW */}
     <div className="flex items-center gap-6">

  {/* FACEBOOK */}
  <a
    className="social fb focus:outline-none focus:ring-2 focus:ring-white"
    href="https://www.facebook.com/adrefreshmedia"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="AdRefresh Facebook page"
    title="Facebook"
  >
    <span className="sr-only">Facebook</span>
    <Facebook size={28} />
  </a>

  {/* X (TWITTER) */}
  <a
    className="social x focus:outline-none focus:ring-2 focus:ring-white"
    href="https://x.com/AdRefresh"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="AdRefresh X profile"
    title="X"
  >
    <span className="sr-only">X</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-[18px] h-[18px] fill-current"
    >
      <path d="M18.244 2H21.78l-7.71 8.81L23 22h-7.08l-5.53-7.19L4.64 22H1.1l8.25-9.43L1 2h7.26l5 6.54L18.24 2z" />
    </svg>
  </a>

  {/* LINKEDIN */}
  <a
    className="social in focus:outline-none focus:ring-2 focus:ring-white"
    href="https://www.linkedin.com/company/adrefreshmedia/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="AdRefresh LinkedIn profile"
    title="LinkedIn"
  >
    <span className="sr-only">LinkedIn</span>
    <Linkedin size={28} />
  </a>

  {/* INSTAGRAM */}
  <a
    className="social insta focus:outline-none focus:ring-2 focus:ring-white"
    href="https://www.instagram.com/adrefreshmedia/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="AdRefresh Instagram page"
    title="Instagram"
  >
    <span className="sr-only">Instagram</span>
    <Instagram size={28} />
  </a>

</div>

        </div>
      </div>

      {/* ================= DIVIDER ================= */}
      <div className="mx-auto h-[2px] w-[90%] bg-white/30" />

      {/* ================= COPYRIGHT ================= */}
     {/* ================= LEGAL LINKS ================= */}
<div className="py-4 text-center text-sm opacity-90 flex flex-col gap-2 items-center">

  <div className="flex gap-4 flex-wrap justify-center">
   
  </div>

  <div className="opacity-80">  <a href="/privacy-policy" className="hover:underline">
      Privacy Policy
    </a> &nbsp;
   | &nbsp;
    &copy; {new Date().getFullYear()} AdRefresh. All Rights Reserved.
  </div>
</div>


      {/* ================= STYLES ================= */}
      <style>{`
        .social {
          width: 52px;
          height: 52px;
          border-radius: 9999px;
          background: white;
          color: black;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.25s ease;
        }

        .social:hover {
          animation: bounce 0.5s ease;
          color: white;
        }

        .fb:hover { background: #1877f2; }
        .x:hover { background: #000; }
        .in:hover { background: #0a66c2; }

        .insta:hover {
          background: radial-gradient(
            circle at 30% 107%,
            #fdf497 0%,
            #fdf497 5%,
            #fd5949 45%,
            #d6249f 60%,
            #285aeb 90%
          );
        }

        @keyframes bounce {
          0% { transform: translateY(0); }
          30% { transform: translateY(-6px); }
          60% { transform: translateY(2px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </footer>
  );
}
