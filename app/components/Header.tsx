// "use client";

// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// import WhiteLogo from "@/public/images/HeaderImages/White.png";
// import colorLogo from "@/public/images/HeaderImages/second.svg";

// export default function Header() {
//   const [showNav, setShowNav] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isLogoHovered, setIsLogoHovered] = useState(false);
//   const [servicesOpen, setServicesOpen] = useState(false);

//   const ticking = useRef(false);

//   const closeMenu = () => {
//     setMenuOpen(false);
//     setServicesOpen(false);
//     setIsLogoHovered(false);
//   };

//   useEffect(() => {
//     if (menuOpen) return;

//     const handleScroll = () => {
//       const current = window.scrollY;
//       if (!ticking.current) {
//         window.requestAnimationFrame(() => {
//           setShowNav(current <= lastScrollY);
//           setScrolled(current > 50);
//           setLastScrollY(current);
//           ticking.current = false;
//         });
//         ticking.current = true;
//       }
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY, menuOpen]);

//   const showColorLogo = scrolled || isLogoHovered || menuOpen;

//   return (
//     <>
//       {/* HEADER */}
//       <header
//         onMouseEnter={() => setIsLogoHovered(true)}
//         onMouseLeave={() => setIsLogoHovered(false)}
//         className={`
//           fixed top-0 left-0 w-screen px-2 py-5
//           z-[999999] transition-all duration-300
//           ${showNav ? "translate-y-0" : "-translate-y-full"}
//           ${scrolled || menuOpen ? "bg-white backdrop-blur-md" : "bg-transparent"}
//         `}
//       >
//         <div className="mx-auto max-w-[1400px] px-10 flex items-center justify-between">
//           {/* LOGO */}
//           <div className="w-[170px] h-[40px] flex items-center">
//             <Image
//               src={showColorLogo ? colorLogo : WhiteLogo}
//               alt="Logo"
//               width={170}
//               height={40}
//               className="w-[140px] sm:w-[160px] md:w-[170px] h-auto"
//             />
//           </div>

//           {/* HAMBURGER */}
//           {!menuOpen && (
//             <div
//               onClick={() => setMenuOpen(true)}
//               className="flex flex-col gap-1.5 cursor-pointer z-[999999]"
//             >
//               <span
//                 className={`w-7 h-[3px] transition ${
//                   scrolled ? "bg-black" : "bg-white"
//                 }`}
//               />
//               <span
//                 className={`w-7 h-[3px] transition ${
//                   scrolled ? "bg-black" : "bg-white"
//                 }`}
//               />
//               <span
//                 className={`w-7 h-[3px] transition ${
//                   scrolled ? "bg-black" : "bg-white"
//                 }`}
//               />
//             </div>
//           )}
//         </div>
//       </header>

//       {/* BACKDROP */}
//       <div
//         className={`
//           fixed inset-0 z-[999998] transition-all duration-300
//           ${menuOpen ? "backdrop-blur-md bg-black/25 pointer-events-auto" : "pointer-events-none"}
//         `}
//       />

//       {/* MENU */}
//       <aside
//         className={`
//           fixed top-0 right-0 h-screen
//           w-[30vw] max-md:w-[80vw]
//           bg-white/80 backdrop-blur-xl
//           z-[1000000] transition-transform duration-300
//           ${menuOpen ? "translate-x-0" : "translate-x-full"}
//         `}
//       >
//         {/* CLOSE */}
//         <button
//           onClick={closeMenu}
//           className="absolute top-9 right-9 w-8 h-8"
//         >
//           <span className="absolute w-8 h-[3px] bg-black rotate-45 top-3" />
//           <span className="absolute w-8 h-[3px] bg-black -rotate-45 top-3" />
//         </button>

//         {/* LINKS */}
//         <nav className="mt-28 pr-5 flex flex-col gap-2 text-right">
//           <Link onClick={closeMenu} href="/" className="text-[2.6rem] font-bold hover:text-[#813DFF]">
//             Home
//           </Link>

//           {/* SERVICES */}
//           <div className="flex flex-col items-end">
//             <button
//               onClick={() => setServicesOpen(!servicesOpen)}
//               className="flex items-center gap-2 text-[2.6rem] font-bold"
//             >
//               Services
//               <span
//                 className={`text-xl transition ${
//                   servicesOpen ? "rotate-180" : ""
//                 }`}
//               >
//                 ▾
//               </span>
//             </button>

//             {servicesOpen && (
//               <div className="mt-2 mr-2 flex flex-col">
//                 <Link
//                   onClick={closeMenu}
//                   href="/services/digitalmarketing"
//                   className="text-lg font-medium hover:text-[#813DFF]"
//                 >
//                   Digital Marketing
//                 </Link>
//                 <Link
//                   onClick={closeMenu}
//                   href="/services/adoperations"
//                   className="text-lg font-medium hover:text-[#813DFF]"
//                 >
//                   Ad Operations
//                 </Link>
//               </div>
//             )}
//           </div>

//           <Link onClick={closeMenu} href="/client-success" className="text-[2.6rem] font-bold hover:text-[#813DFF]">
//             Client Success
//           </Link>
//           <Link onClick={closeMenu} href="/about-us" className="text-[2.6rem] font-bold hover:text-[#813DFF]">
//             About Us
//           </Link>
//           <Link onClick={closeMenu} href="/contact" className="text-[2.6rem] font-bold hover:text-[#813DFF]">
//             Contact
//           </Link>
//           <Link onClick={closeMenu} href="/careers" className="text-[2.6rem] font-bold hover:text-[#813DFF]">
//             Careers
//           </Link>
//         </nav>
//       </aside>
//     </>
//   );
// }

// "use client";

// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// import WhiteLogo from "@/public/images/HeaderImages/White.png";
// import colorLogo from "@/public/images/HeaderImages/second.svg";

// export default function Header() {
//   const [showNav, setShowNav] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isLogoHovered, setIsLogoHovered] = useState(false);
//   const [servicesOpen, setServicesOpen] = useState(false);

//   const ticking = useRef(false);

//   const closeMenu = () => {
//     setMenuOpen(false);
//     setServicesOpen(false);
//     setIsLogoHovered(false);
//   };

//   useEffect(() => {
//     if (menuOpen) return;

//     const handleScroll = () => {
//       const current = window.scrollY;

//       if (!ticking.current) {
//         window.requestAnimationFrame(() => {
//           setShowNav(current <= lastScrollY);
//           setScrolled(current > 50);
//           setLastScrollY(current);
//           ticking.current = false;
//         });
//         ticking.current = true;
//       }
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY, menuOpen]);

//   /** 🔑 SINGLE SOURCE OF TRUTH (same as your CSS logic) */
//   const isWhiteNav = scrolled || isLogoHovered || menuOpen;

//   return (
//     <>
//       {/* NAVBAR */}
//       <header
//         onMouseEnter={() => setIsLogoHovered(true)}
//         onMouseLeave={() => setIsLogoHovered(false)}
//         className={`
//           fixed top-0 left-0 w-screen px-[10px] py-[20px]
//           z-[999999]
//           transition-[background,transform] duration-300
//           ${showNav ? "translate-y-0" : "-translate-y-[110%]"}
//           ${isWhiteNav ? "bg-white backdrop-blur-[14px]" : "bg-transparent"}
//         `}
//       >
//         <div className="mx-auto max-w-[1400px] px-[40px] flex items-center justify-between">
//           {/* LOGO */}
//           <div className="w-[170px] h-[40px] flex items-center">
//             <Image
//               src={isWhiteNav ? colorLogo : WhiteLogo}
//               alt="Logo"
//               width={170}
//               height={40}
//               className="w-[140px] sm:w-[160px] md:w-[170px] h-auto"
//             />
//           </div>

//           {/* HAMBURGER */}
//           {!menuOpen && (
//             <div
//               onClick={() => setMenuOpen(true)}
//               className="flex flex-col gap-[6px] cursor-pointer z-[999999]"
//             >
//               <span
//                 className={`w-[28px] h-[3px] transition-all duration-300 ${
//                   isWhiteNav ? "bg-black" : "bg-white"
//                 }`}
//               />
//               <span
//                 className={`w-[28px] h-[3px] transition-all duration-300 ${
//                   isWhiteNav ? "bg-black" : "bg-white"
//                 }`}
//               />
//               <span
//                 className={`w-[28px] h-[3px] transition-all duration-300 ${
//                   isWhiteNav ? "bg-black" : "bg-white"
//                 }`}
//               />
//             </div>
//           )}
//         </div>
//       </header>

//       {/* BACKDROP */}
//      <div
//   onClick={closeMenu}   // ✅ CLOSE ON OUTSIDE CLICK
//   className={`
//     fixed inset-0 z-[999998] transition-all duration-[350ms]
//     ${menuOpen ? "backdrop-blur-[5px] bg-black/25 pointer-events-auto" : "pointer-events-none"}
//   `}
// />


//       {/* MENU */}
//       <aside
//         className={`
//           fixed top-0 right-0 h-screen
//           w-[30vw] max-md:w-[80vw]
//           bg-white/80 backdrop-blur-[12px]
//           z-[1000000]
//           transition-transform duration-[350ms]
//           ${menuOpen ? "translate-x-0" : "translate-x-full"}
//         `}
//       >
//         {/* CLOSE */}
//         <button
//           onClick={closeMenu}
//           className="absolute top-[35px] right-[35px] w-[32px] h-[32px]"
//         >
//           <span className="absolute top-[5px] w-[32px] h-[3px] bg-black rotate-45 rounded" />
//           <span className="absolute top-[5px] w-[32px] h-[3px] bg-black -rotate-45 rounded" />
//         </button>

//         {/* LINKS */}
//         <nav className="mt-[110px] pr-[20px] flex flex-col gap-[15px] text-right">
//           <Link onClick={closeMenu} href="/" className="text-[2.8rem] font-bold hover:text-[#813DFF]">
//             Home
//           </Link>

//           {/* SERVICES */}
//           <div className="flex flex-col items-end">
//             <button
//               onClick={() => setServicesOpen(v => !v)}
//               className="flex items-center gap-2 text-[2.8rem] font-bold"
//             >
//               Services
//               <span
//                 className={`text-[1.4rem] transition-transform duration-300 ${
//                   servicesOpen ? "rotate-180" : ""
//                 }`}
//               >
//                 ▾
//               </span>
//             </button>

//             {servicesOpen && (
//               <div className="mt-[6px] mr-[8px] flex flex-col">
//                 <Link onClick={closeMenu} href="/services/digital-marketing" className="text-[1.5rem] font-medium hover:text-[#813DFF]">
//                   Digital Marketing
//                 </Link>
//                 <Link onClick={closeMenu} href="/services/ad-operations" className="text-[1.5rem] font-medium hover:text-[#813DFF]">
//                   Ad Operations
//                 </Link>
//               </div>
//             )}
//           </div>

//           <Link onClick={closeMenu} href="/client-success" className="text-[2.8rem] font-bold hover:text-[#813DFF]">
//             Client Success
//           </Link>
//           <Link onClick={closeMenu} href="/about-us" className="text-[2.8rem] font-bold hover:text-[#813DFF]">
//             About Us
//           </Link>
//           <Link onClick={closeMenu} href="/contact-us" className="text-[2.8rem] font-bold hover:text-[#813DFF]">
//             Contact
//           </Link>
//           <Link onClick={closeMenu} href="/careers" className="text-[2.8rem] font-bold hover:text-[#813DFF]">
//             Careers
//           </Link>
//         </nav>
//       </aside>
//     </>
//   );
// }
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

import WhiteLogo from "@/public/images/HeaderImages/White.png";
import colorLogo from "@/public/images/HeaderImages/second.svg";

export default function Header() {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const ticking = useRef(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
    setIsLogoHovered(false);
  };

  useEffect(() => {
    if (menuOpen) return;

    const handleScroll = () => {
      const current = window.scrollY;

      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          setShowNav(current <= lastScrollY);
          setScrolled(current > 50);
          setLastScrollY(current);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, menuOpen]);

  const isWhiteNav = scrolled || isLogoHovered || menuOpen;

  return (
    <>
      {/* NAVBAR */}
      <header
        onMouseEnter={() => setIsLogoHovered(true)}
        onMouseLeave={() => setIsLogoHovered(false)}
        className={`
          fixed top-0 left-0 w-screen px-[10px] py-[16px] sm:py-[20px]
          z-[999999]
          transition-[background,transform] duration-300
          ${showNav ? "translate-y-0" : "-translate-y-[110%]"}
          ${isWhiteNav ? "bg-white backdrop-blur-[14px]" : "bg-transparent"}
        `}
      >
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-8 lg:px-[40px] flex items-center justify-between">
          {/* LOGO */}
          <Link href="/" aria-label="Go to Home">
  <div className="w-[170px] h-[40px] flex items-center">
            <Image
              src={isWhiteNav ? colorLogo : WhiteLogo}
              alt="Logo"
              width={170}
              height={40}
              className="w-[120px] sm:w-[140px] md:w-[160px] lg:w-[170px] h-auto"
            />
          </div>
</Link>
        

          {/* HAMBURGER */}
          {!menuOpen && (
            <div
              onClick={() => setMenuOpen(true)}
              className="flex flex-col gap-[6px] cursor-pointer z-[999999]"
            >
              <span
                className={`w-[26px] sm:w-[28px] h-[3px] transition-all duration-300 ${
                  isWhiteNav ? "bg-black" : "bg-white"
                }`}
              />
              <span
                className={`w-[26px] sm:w-[28px] h-[3px] transition-all duration-300 ${
                  isWhiteNav ? "bg-black" : "bg-white"
                }`}
              />
              <span
                className={`w-[26px] sm:w-[28px] h-[3px] transition-all duration-300 ${
                  isWhiteNav ? "bg-black" : "bg-white"
                }`}
              />
            </div>
          )}
        </div>
      </header>

      {/* BACKDROP */}
      <div
        onClick={closeMenu}
        className={`
          fixed inset-0 z-[999998] transition-all duration-[350ms]
          ${menuOpen ? "backdrop-blur-[5px] bg-black/25 pointer-events-auto" : "pointer-events-none"}
        `}
      />

      {/* MENU */}
      <aside
        className={`
          fixed top-0 right-0 h-screen
          w-[90vw] sm:w-[80vw] md:w-[60vw] lg:w-[40vw] xl:w-[30vw]
          bg-white/80 backdrop-blur-[12px]
          z-[1000000]
          transition-transform duration-[350ms]
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* CLOSE */}
        <button
          onClick={closeMenu}
          className="absolute top-[24px] sm:top-[35px] right-[24px] sm:right-[35px] w-[32px] h-[32px]"
        >
          <span className="absolute top-[5px] w-[32px] h-[3px] bg-black rotate-45 rounded" />
          <span className="absolute top-[5px] w-[32px] h-[3px] bg-black -rotate-45 rounded" />
        </button>

        {/* LINKS */}
        <nav className="mt-[90px] sm:mt-[110px] pr-4 sm:pr-[20px] flex flex-col gap-3 sm:gap-[15px] text-right">
          <Link
            onClick={closeMenu}
            href="/"
            className="text-[2rem] sm:text-[2rem] md:text-[2.4rem] lg:text-[2.8rem] font-bold hover:text-[#813DFF]"
          >
            Home
          </Link>

          {/* SERVICES */}
          <div className="flex flex-col items-end">
            <button
              onClick={() => setServicesOpen(v => !v)}
              className="flex items-center gap-2 text-[2rem] sm:text-[2rem] md:text-[2.4rem] lg:text-[2.8rem] font-bold hover:pointer"
            >
              Services 
              <span
                className={`text-[2rem] sm:text-[2rem] transition-transform duration-300 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              >
                <IoIosArrowDown />
              </span>
            </button>

            {servicesOpen && (
<div
    className="
      relative
      mt-[4px]
      mr-[4px]
      flex
      flex-col
      px-2
      py-2

    
    "
  >
                <Link
                  onClick={closeMenu}
                  href="/services/digital-marketing"
                  className="text-[1.5rem] sm:text-[1.25rem] md:text-[1.4rem] lg:text-[1.5rem] font-medium hover:text-[#813DFF]"
                >
                  Digital Marketing
                </Link>
                <Link
                  onClick={closeMenu}
                  href="/services/ad-operations"
                  className="text-[1.5rem] sm:text-[1.25rem] md:text-[1.4rem] lg:text-[1.5rem] font-medium hover:text-[#813DFF]"
                >
                  Advertising Operations
                </Link>
              </div>
            )}
          </div>

          <Link
            onClick={closeMenu}
            href="/client-success"
            className="text-[2rem] sm:text-[2rem] md:text-[2.4rem] lg:text-[2.8rem] font-bold hover:text-[#813DFF]"
          >
            Client Success
          </Link>

          <Link
            onClick={closeMenu}
            href="/about-us"
            className="text-[2rem] sm:text-[2rem] md:text-[2.4rem] lg:text-[2.8rem] font-bold hover:text-[#813DFF]"
          >
            About Us
          </Link>

          <Link
            onClick={closeMenu}
            href="/contact-us"
            className="text-[2rem] sm:text-[2rem] md:text-[2.4rem] lg:text-[2.8rem] font-bold hover:text-[#813DFF]"
          >
            Contact
          </Link>

          <Link
            onClick={closeMenu}
            href="/careers"
            className="text-[2rem] sm:text-[2rem] md:text-[2.4rem] lg:text-[2.8rem] font-bold hover:text-[#813DFF]"
          >
            Careers
          </Link>
        </nav>
      </aside>
    </>
  );
}
