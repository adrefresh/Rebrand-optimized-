

// "use client";

// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { IoIosArrowDown } from "react-icons/io";
// import { useRouter } from "next/navigation";

// import WhiteLogo from "@/public/images/HeaderImages/White.png";
// import colorLogo from "@/public/images/HeaderImages/second.svg";

// export default function Header() {
//   const router = useRouter();

//   const [showNav, setShowNav] = useState(true);
//   const lastScrollY = useRef(0); // ✅ optimized
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isLogoHovered, setIsLogoHovered] = useState(false);
//   const [open, setOpen] = useState(false);

//   const ticking = useRef(false);

//   const closeMenu = () => {
//     setMenuOpen(false);
//     setIsLogoHovered(false);
//     setOpen(false);
//   };

//   // ✅ instant navigation
//   const navigate = (path: string) => {
//     closeMenu();
//     router.push(path);
//   };

//   const mobileOpen = (e: React.MouseEvent) => {
//     e.stopPropagation();
//     setOpen(prev => !prev);
//   };

//   // ✅ Safari + mobile optimized scroll
//   useEffect(() => {
//     if (menuOpen) return;

//     const handleScroll = () => {
//       const current = window.scrollY;

//       if (!ticking.current) {
//         ticking.current = true;

//         requestAnimationFrame(() => {
//           setShowNav(current < lastScrollY.current || current < 50);
//           setScrolled(current > 50);
//           lastScrollY.current = current;
//           ticking.current = false;
//         });
//       }
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [menuOpen]);

//   const isWhiteNav = scrolled || isLogoHovered || menuOpen;

//   return (
//     <>
//       {/* NAVBAR */}
//       <header
//         onMouseEnter={() => setIsLogoHovered(true)}
//         onMouseLeave={() => setIsLogoHovered(false)}
//         className={`
//           fixed top-0 left-0 w-screen px-2.5 py-4 sm:py-[20px]
//           z-[999999]
//           transition-[background,transform] duration-300
//           ${showNav ? "translate-y-0" : "-translate-y-[110%]"}
//           ${isWhiteNav ? "bg-white backdrop-blur-[14px]" : "bg-transparent"}
//         `}
//       >
//         <div className="mx-auto max-w-350 px-4 sm:px-6 md:px-8 lg:px-10 flex items-center justify-between">
//           {/* LOGO */}
//           <Link href="/" aria-label="Go to Home" prefetch>
//             <div className="w-42.5 h-10 flex items-center">
//               <div className="relative w-30 sm:w-35 md:w-40 lg:w-42.5 h-[40px]">
//   <Image
//     src={isWhiteNav ? colorLogo : WhiteLogo}
//     alt="Logo"
//     fill
  
//     className="object-contain"
//   />
// </div>
//             </div>
//           </Link>

//           {/* HAMBURGER */}
//           {!menuOpen && (
//             <div
//               onClick={() => setMenuOpen(true)}
//               className="flex flex-col gap-1.5 cursor-pointer z-[999999]"
//             >
//               <span
//                 className={`w-[26px] sm:w-[28px] h-0.75 transition-all duration-300 ${
//                   isWhiteNav ? "bg-black" : "bg-white"
//                 }`}
//               />
//               <span
//                 className={`w-6.5 sm:w-7 h-0.75transition-all duration-300 ${
//                   isWhiteNav ? "bg-black" : "bg-white"
//                 }`}
//               />
//               <span
//                 className={`w-6.5 sm:w-7 h-0.75 transition-all duration-300 ${
//                   isWhiteNav ? "bg-black" : "bg-white"
//                 }`}
//               />
//             </div>
//           )}
//         </div>
//       </header>

//       {/* BACKDROP */}
//       <div
//         onClick={closeMenu}
//         className={`
//           fixed inset-0 z-999998ransition-all duration-350 
//           ${
//             menuOpen
//               ? "backdrop-blur-[5px] bg-black/25 pointer-events-auto"
//               : "pointer-events-none"
//           }
//         `}
//       />

//       {/* MENU */}
//       <aside
//         className={`
//           fixed top-0 right-0 h-screen
//           w-[90vw] sm:w-[80vw] md:w-[60vw] lg:w-[40vw] xl:w-[30vw]
//           bg-white/80 backdrop-blur-md
//           z-1000000
//           transition-transform duration-350
//           ${menuOpen ? "translate-x-0" : "translate-x-full"}
//         `}
//       >
//         {/* CLOSE */}
//         <button
//           onClick={closeMenu}
//           className="absolute top-6 sm:top-8.75 right-6 sm:right-8.75 w-8 h-8 cursor-pointer"
//         >
//           <span className="absolute top-1.25 w-8 h-0.75 bg-black rotate-45 rounded" />
//           <span className="absolute top-1.25 w-8 h-0.75 bg-black -rotate-45 rounded" />
//         </button>

//         {/* LINKS */}
//         <nav className="mt-22.5 sm:mt-27.5 pr-4 sm:pr-[20px] flex flex-col gap-3 sm:gap-[15px] text-right">
//           <Link
//             onClick={() => navigate("/")}
//             href="/"
//             prefetch
//             className="text-[1.4rem] sm:text-[1.6rem] md:text-[2.2rem] lg:text-[2.6rem] font-bold hover:text-[#813DFF]"
//           >
//             Home
//           </Link>

//           {/* SERVICES */}
//           <div className="flex flex-col items-end group w-full">
//             <div
//               onClick={mobileOpen}
//               className="flex items-center gap-2 text-[1.4rem] sm:text-[1.6rem] md:text-[2.2rem] lg:text-[2.6rem] font-bold cursor-pointer"
//             >
//               Services
//               <span className="text-[1.4rem] sm:text-[1.6rem] transition-transform duration-300 group-hover:rotate-180">
//                 <IoIosArrowDown />
//               </span>
//             </div>

//             <div
//               className={`
//                 ${open ? "flex" : "hidden"}
//                 group-hover:flex
//                 flex-col
//                 mt-2
//                 rounded-md
//                 px-4
//                 py-3
//                 text-right
//                 w-fit
//               `}
//             >
//               <Link
//                 onClick={() => navigate("/services/digital-marketing")}
//                 href="/services/digital-marketing"
//                 prefetch
//                 className="text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] lg:text-[1.5rem] font-medium hover:text-[#813DFF]"
//               >
//                 Digital Marketing
//               </Link>

//               <Link
//                 onClick={() => navigate("/services/ad-operations")}
//                 href="/services/ad-operations"
//                 prefetch
//                 className="mt-2 text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] lg:text-[1.5rem] font-medium hover:text-[#813DFF]"
//               >
//                 Advertising Operations
//               </Link>
//             </div>
//           </div>

//           <Link onClick={() => navigate("/client-success")} href="/client-success" prefetch className="text-[1.4rem] sm:text-[1.6rem] md:text-[2.2rem] lg:text-[2.6rem] font-bold hover:text-[#813DFF]">
//             Client Success
//           </Link>

//           <Link onClick={() => navigate("/about-us")} href="/about-us" prefetch className="text-[1.4rem] sm:text-[1.6rem] md:text-[2.2rem] lg:text-[2.6rem] font-bold hover:text-[#813DFF]">
//             About Us
//           </Link>

//           <Link onClick={() => navigate("/contact-us")} href="/contact-us" prefetch className="text-[1.4rem] sm:text-[1.6rem] md:text-[2.2rem] lg:text-[2.6rem] font-bold hover:text-[#813DFF]">
//             Contact
//           </Link>

//           <Link onClick={() => navigate("/careers")} href="/careers" prefetch className="text-[1.4rem] sm:text-[1.6rem] md:text-[2.2rem] lg:text-[2.6rem] font-bold hover:text-[#813DFF]">
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
import { useRouter } from "next/navigation";

import WhiteLogo from "@/public/images/HeaderImages/White.png";
import colorLogo from "@/public/images/HeaderImages/second.svg";

export default function Header() {
  const router = useRouter();

  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(0); // ✅ optimized
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const [open, setOpen] = useState(false);

  const ticking = useRef(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setIsLogoHovered(false);
    setOpen(false);
  };

  // ✅ instant navigation
  const navigate = (path: string) => {
    closeMenu();
    router.push(path);
  };

  const mobileOpen = (e: React.MouseEvent) => {
    e.stopPropagation();
    setOpen(prev => !prev);
  };

  // ✅ Safari + mobile optimized scroll
  useEffect(() => {
    if (menuOpen) return;

    const handleScroll = () => {
      const current = window.scrollY;

      if (!ticking.current) {
        ticking.current = true;

        requestAnimationFrame(() => {
          setShowNav(current < lastScrollY.current || current < 50);
          setScrolled(current > 50);
          lastScrollY.current = current;
          ticking.current = false;
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

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
          <Link href="/" aria-label="Go to Home" prefetch>
            <div className="w-[170px] h-[40px] flex items-center">
              <div className="relative w-[120px] sm:w-[140px] md:w-[160px] lg:w-[170px] h-[40px]">
  <Image
    src={isWhiteNav ? colorLogo : WhiteLogo}
    alt="Logo"
    fill
  
    className="object-contain"
  />
</div>
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
          ${
            menuOpen
              ? "backdrop-blur-[5px] bg-black/25 pointer-events-auto"
              : "pointer-events-none"
          }
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
          className="absolute top-[24px] sm:top-[35px] right-[24px] sm:right-[35px] w-[32px] h-[32px] cursor-pointer"
        >
          <span className="absolute top-[5px] w-[32px] h-[3px] bg-black rotate-45 rounded" />
          <span className="absolute top-[5px] w-[32px] h-[3px] bg-black -rotate-45 rounded" />
        </button>

        {/* LINKS */}
        <nav className="mt-[90px] sm:mt-[110px] pr-4 sm:pr-[20px] flex flex-col gap-3 sm:gap-[15px] text-right">
          <Link
            onClick={() => navigate("/")}
            href="/"
            prefetch
            className="text-[1.4rem] sm:text-[1.6rem] md:text-[2.2rem] lg:text-[2.6rem] font-bold hover:text-[#813DFF]"
          >
            Home
          </Link>

          {/* SERVICES */}
          <div className="flex flex-col items-end group w-full">
            <div
              onClick={mobileOpen}
              className="flex items-center gap-2 text-[1.4rem] sm:text-[1.6rem] md:text-[2.2rem] lg:text-[2.6rem] font-bold cursor-pointer"
            >
              Services
              <span className="text-[1.4rem] sm:text-[1.6rem] transition-transform duration-300 group-hover:rotate-180">
                <IoIosArrowDown />
              </span>
            </div>

            <div
              className={`
                ${open ? "flex" : "hidden"}
                group-hover:flex
                flex-col
                mt-2
                rounded-md
                px-4
                py-3
                text-right
                w-fit
              `}
            >
              <Link
                onClick={() => navigate("/services/digital-marketing")}
                href="/services/digital-marketing"
                prefetch
                className="text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] lg:text-[1.5rem] font-medium hover:text-[#813DFF]"
              >
                Digital Marketing
              </Link>

              <Link
                onClick={() => navigate("/services/ad-operations")}
                href="/services/ad-operations"
                prefetch
                className="mt-2 text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] lg:text-[1.5rem] font-medium hover:text-[#813DFF]"
              >
                Advertising Operations
              </Link>
            </div>
          </div>

          <Link onClick={() => navigate("/client-success")} href="/client-success" prefetch className="text-[1.4rem] sm:text-[1.6rem] md:text-[2.2rem] lg:text-[2.6rem] font-bold hover:text-[#813DFF]">
            Client Success
          </Link>

          <Link onClick={() => navigate("/about-us")} href="/about-us" prefetch className="text-[1.4rem] sm:text-[1.6rem] md:text-[2.2rem] lg:text-[2.6rem] font-bold hover:text-[#813DFF]">
            About Us
          </Link>

          <Link onClick={() => navigate("/contact-us")} href="/contact-us" prefetch className="text-[1.4rem] sm:text-[1.6rem] md:text-[2.2rem] lg:text-[2.6rem] font-bold hover:text-[#813DFF]">
            Contact
          </Link>

          <Link onClick={() => navigate("/careers")} href="/careers" prefetch className="text-[1.4rem] sm:text-[1.6rem] md:text-[2.2rem] lg:text-[2.6rem] font-bold hover:text-[#813DFF]">
            Careers
          </Link>
        </nav>
      </aside>
    </>
  );
}