

// "use client";

// import Image from "next/image";
// import WhitePml from "@/public/images/FooterImages/whitePML.png";
// import Soc from "@/public/images/FooterImages/soc.webp";
// import iso from "@/public/images/FooterImages/iso.webp";

// import { Mail, Facebook, Linkedin, Instagram, MapPin } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="w-screen ml-[calc(50%-50vw)] bg-[linear-gradient(to_bottom,#565656_0%,#949494_100%)] text-white">
      
//       {/* ================= GRID ================= */}
//       <div
//         className="
//           relative mx-auto max-w-[1400px]
//           px-[80px] py-[60px]
//           grid grid-cols-4 gap-[60px]
//           max-[1024px]:grid-cols-2
//           max-[640px]:grid-cols-1
//         "
//       >
//         {/* ================= 1. LOGO ONLY ================= */}
//         <div className="relative flex items-center max-[640px]:justify-center">
//      <Image
//   src={WhitePml}
//   alt="LogoS"
//   className="w-[180px] h-auto object-contain"
// />

//           {/* VERTICAL LINE */}
//           <div
//             className="
//               absolute
//               right-[-30px]
//               top-1/2
//               -translate-y-1/2
//               h-[70%]
//               w-[2px]
//               bg-white/40
//               hidden
//               md:block
//             "
//           />
//         </div>

//         {/* ================= 2. ISO CERTIFICATES ================= */}
//         <div className="flex items-center gap-10 max-[640px]:justify-center">
//   <Image
//   src={iso}
//   alt="ISO"
//   className="w-[120px] h-auto object-contain"

// />

// <Image
//   src={Soc}
//   alt="SOC"
//   className="w-[80px] h-auto object-contain"
  
// />
// </div>


//         {/* ================= 3. LOCATIONS (ALWAYS 2x2) ================= */}
//         <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 text-sm sm:text-base leading-relaxed">

//           <div className="flex items-center gap-2 sm:gap-3">
//             <MapPin className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-[35px] lg:h-[35px] shrink-0" />
//             <span>India</span>
//           </div>

//           <div className="flex items-center gap-2 sm:gap-3">
//             <MapPin className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-[35px] lg:h-[35px] shrink-0" />
//             <span>Australia</span>
//           </div>

//           <div className="flex items-center gap-2 sm:gap-3">
//             <MapPin className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-[35px] lg:h-[35px] shrink-0" />
//             <span>USA</span>
//           </div>

//           <div className="flex items-center gap-2 sm:gap-3">
//             <MapPin className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-[35px] lg:h-[35px] shrink-0" />
//             <span>Canada</span>
//           </div>

//         </div>

//         {/* ================= 4. MAIL + SOCIAL ICONS ================= */}
//         <div className="flex flex-col gap-6 max-[640px]:items-center mt-2">

//           {/* MAIL ROW */}
//           <div className="flex items-center gap-4">
           
//             <span className="text-base tracking-wide ">Follow Us :</span>
//           </div>

//           {/* SOCIAL ICONS ROW */}
//      <div className="flex items-center gap-6">

//   {/* FACEBOOK */}
//   <a
//     className="social fb focus:outline-none focus:ring-2 focus:ring-white"
//     href="https://www.facebook.com/adrefreshmedia"
//     target="_blank"
//     rel="noopener noreferrer"
//     aria-label="AdRefresh Facebook page"
//     title="Facebook"
//   >
//     <span className="sr-only">Facebook</span>
//     <Facebook size={28} />
//   </a>

//   {/* X (TWITTER) */}
//   <a
//     className="social x focus:outline-none focus:ring-2 focus:ring-white"
//     href="https://x.com/AdRefresh"
//     target="_blank"
//     rel="noopener noreferrer"
//     aria-label="AdRefresh X profile"
//     title="X"
//   >
//     <span className="sr-only">X</span>
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 24 24"
//       className="w-[18px] h-[18px] fill-current"
//     >
//       <path d="M18.244 2H21.78l-7.71 8.81L23 22h-7.08l-5.53-7.19L4.64 22H1.1l8.25-9.43L1 2h7.26l5 6.54L18.24 2z" />
//     </svg>
//   </a>

//   {/* LINKEDIN */}
//   <a
//     className="social in focus:outline-none focus:ring-2 focus:ring-white"
//     href="https://www.linkedin.com/company/adrefreshmedia/"
//     target="_blank"
//     rel="noopener noreferrer"
//     aria-label="AdRefresh LinkedIn profile"
//     title="LinkedIn"
//   >
//     <span className="sr-only">LinkedIn</span>
//     <Linkedin size={28} />
//   </a>

//   {/* INSTAGRAM */}
//   <a
//     className="social insta focus:outline-none focus:ring-2 focus:ring-white"
//     href="https://www.instagram.com/adrefreshmedia/"
//     target="_blank"
//     rel="noopener noreferrer"
//     aria-label="AdRefresh Instagram page"
//     title="Instagram"
//   >
//     <span className="sr-only">Instagram</span>
//     <Instagram size={28} />
//   </a>

// </div>

//         </div>
//       </div>

//       {/* ================= DIVIDER ================= */}
//       <div className="mx-auto h-[2px] w-[90%] bg-white/30" />

//       {/* ================= COPYRIGHT ================= */}
//      {/* ================= LEGAL LINKS ================= */}
// <div className="py-4 text-center text-sm opacity-90 flex flex-col gap-2 items-center">

//   <div className="flex gap-4 flex-wrap justify-center">
   
//   </div>

//   <div className="opacity-80">  <a href="/privacy-policy" className="hover:underline">
//       Privacy Policy
//     </a> &nbsp;
//    | &nbsp;
//     &copy; {new Date().getFullYear()} AdRefresh. All Rights Reserved.
//   </div>
// </div>


//       {/* ================= STYLES ================= */}
//       <style>{`
//         .social {
//           width: 52px;
//           height: 52px;
//           border-radius: 9999px;
//           background: white;
//           color: black;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           transition: all 0.25s ease;
//         }

//         .social:hover {
//           animation: bounce 0.5s ease;
//           color: white;
//         }

//         .fb:hover { background: #1877f2; }
//         .x:hover { background: #000; }
//         .in:hover { background: #0a66c2; }

//         .insta:hover {
//           background: radial-gradient(
//             circle at 30% 107%,
//             #fdf497 0%,
//             #fdf497 5%,
//             #fd5949 45%,
//             #d6249f 60%,
//             #285aeb 90%
//           );
//         }

//         @keyframes bounce {
//           0% { transform: translateY(0); }
//           30% { transform: translateY(-6px); }
//           60% { transform: translateY(2px); }
//           100% { transform: translateY(0); }
//         }
//       `}</style>
//     </footer>
//   );
// }
import Image from "next/image";
import Link from "next/link";
import WhitePml from "@/public/images/FooterImages/whitePML.png";
import Soc from "@/public/images/FooterImages/soc.webp";
import iso from "@/public/images/FooterImages/iso.webp";
import { MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-screen ml-[calc(50%-50vw)] bg-[linear-gradient(to_bottom,#565656_0%,#949494_100%)] text-white">

      {/* ================= GRID ================= */}
      <div className="relative mx-auto max-w-[1400px] px-[80px] py-[60px] grid grid-cols-4 gap-[60px] max-[1024px]:grid-cols-2 max-[640px]:grid-cols-1">

        {/* 1. LOGO */}
        <div className="relative flex items-center max-[640px]:justify-center">
          <Image
            src={WhitePml}
            alt="AdRefresh Logo"
            className="w-[180px] h-auto object-contain"
          />
          <div className="absolute right-[-30px] top-1/2 -translate-y-1/2 h-[70%] w-[2px] bg-white/40 hidden md:block" />
        </div>

        {/* 2. ISO / SOC CERTIFICATES */}
        <div className="flex items-center gap-10 max-[640px]:justify-center">
          <Image src={iso} alt="ISO Certified" className="w-[120px] h-auto object-contain" />
          <Image src={Soc} alt="SOC Certified" className="w-[80px] h-auto object-contain" />
        </div>

        {/* 3. LOCATIONS */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 text-sm sm:text-base leading-relaxed">
          {["India", "Australia", "USA", "Canada"].map((country) => (
            <div key={country} className="flex items-center gap-2 sm:gap-3">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-[35px] lg:h-[35px] shrink-0" />
              <span>{country}</span>
            </div>
          ))}
        </div>

        {/* 4. SOCIAL ICONS */}
        <div className="flex flex-col gap-6 max-[640px]:items-center mt-2">
          <span className="text-base tracking-wide">Follow Us :</span>

          <div className="flex items-center gap-6">

            {/* FACEBOOK */}
            <a
              className="footer-social fb"
              href="https://www.facebook.com/adrefreshmedia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="AdRefresh Facebook page"
            >
              <span className="sr-only">Facebook</span>
              {/* Facebook SVG — inline so no JS icon library needed */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
              </svg>
            </a>

            {/* X (TWITTER) */}
            <a
              className="footer-social x"
              href="https://x.com/AdRefresh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="AdRefresh X profile"
            >
              <span className="sr-only">X</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current">
                <path d="M18.244 2H21.78l-7.71 8.81L23 22h-7.08l-5.53-7.19L4.64 22H1.1l8.25-9.43L1 2h7.26l5 6.54L18.24 2z" />
              </svg>
            </a>

            {/* LINKEDIN */}
            <a
              className="footer-social in"
              href="https://www.linkedin.com/company/adrefreshmedia/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="AdRefresh LinkedIn profile"
            >
              <span className="sr-only">LinkedIn</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

            {/* INSTAGRAM */}
            <a
              className="footer-social insta"
              href="https://www.instagram.com/adrefreshmedia/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="AdRefresh Instagram page"
            >
              <span className="sr-only">Instagram</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
            </a>

          </div>
        </div>
      </div>

      {/* ================= DIVIDER ================= */}
      <div className="mx-auto h-[2px] w-[90%] bg-white/30" />

      {/* ================= COPYRIGHT ================= */}
      <div className="py-4 text-center text-sm opacity-90 flex flex-col gap-2 items-center">
        <div className="opacity-80">
          <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
          &nbsp;|&nbsp;
          &copy; {new Date().getFullYear()} AdRefresh. All Rights Reserved.
        </div>
      </div>

    </footer>
  );
}
