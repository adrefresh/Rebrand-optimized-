
// // // "use client";

// // // import Image from "next/image";
// // // import WhitePml from "@/public/images/FooterImages/whitePML.png";
// // // import Soc from "@/public/images/FooterImages/SOC2.svg";
// // // import iso from "@/public/images/FooterImages/iso2001.png";

// // // export default function Footer() {
// // //   return (
// // //     <footer
// // //       className="
// // //         w-screen
// // //         ml-[calc(50%-50vw)]
// // //         relative
// // //         text-black
// // //         bg-[linear-gradient(to_bottom,#565656_0%,#949494_100%)]

// // //         pt-[60px] pb-[40px]
// // //         max-[900px]:pt-[48px]
// // //         max-[480px]:pt-[40px]
// // //       "
// // //     >
// // //       {/* WRAPPER */}
// // //       <div
// // //         className="
// // //           relative
// // //           max-w-[1400px]
// // //           mx-auto
// // //           grid
// // //           grid-cols-[1.2fr_1fr_1fr]
// // //           items-center
// // //           gap-[40px]
// // //           px-[40px]

// // //           max-[1200px]:gap-[32px]
// // //           max-[1024px]:px-[32px]

// // //           max-[900px]:grid-cols-1
// // //           max-[900px]:text-center
// // //           max-[900px]:gap-[24px]
// // //           max-[900px]:px-[24px]
// // //         "
// // //       >
// // //         {/* LEFT — LOGO */}
// // //         <div className="flex items-center max-[900px]:justify-center">
// // //           <Image
// // //             src={WhitePml}
// // //             alt="AdRefresh Logo"
// // //             width={160}
// // //             height={90}
// // //             className="
// // //               w-[160px]
// // //               h-auto
// // //               object-contain
// // //               block

// // //               max-[1200px]:w-[150px]
// // //               max-[1024px]:w-[140px]

// // //               max-[900px]:w-[40vw]
// // //               max-[900px]:max-w-[180px]

// // //               max-[480px]:w-[46vw]
// // //             "
// // //           />
// // //         </div>

// // //         {/* CENTER — ISO */}
// // //         <div className="flex justify-center items-center">
// // //           <div
// // //             className="
// // //               flex
// // //               gap-[20px]
// // //               items-center
// // //               justify-center

// // //               max-[1024px]:gap-[16px]
// // //               max-[480px]:gap-[14px]
// // //             "
// // //           >
// // //             <Image
// // //               src={iso}
// // //               alt="ISO Certification"
// // //               width={120}
// // //               height={80}
// // //               className="
// // //                 w-[120px]
// // //                 h-[80px]
// // //                 object-contain

// // //                 max-[1024px]:w-[110px] max-[1024px]:h-[72px]
// // //                 max-[900px]:w-[104px]  max-[900px]:h-[68px]
// // //                 max-[480px]:w-[92px]   max-[480px]:h-[60px]
// // //               "
// // //             />

// // //             <Image
// // //               src={Soc}
// // //               alt="SOC Certification"
// // //               width={120}
// // //               height={80}
// // //               className="
// // //                 w-[120px]
// // //                 h-[80px]
// // //                 object-contain

// // //                 max-[1024px]:w-[110px] max-[1024px]:h-[72px]
// // //                 max-[900px]:w-[104px]  max-[900px]:h-[68px]
// // //                 max-[480px]:w-[92px]   max-[480px]:h-[60px]
// // //               "
// // //             />
// // //           </div>
// // //         </div>

// // //         {/* RIGHT — SOCIAL */}
// // //         <div className="flex items-center justify-center">
// // //           <div
// // //             className="
// // //               flex
// // //               gap-[12px]
// // //               items-center
// // //               justify-center

// // //               max-[480px]:gap-[10px]
// // //             "
// // //             role="navigation"
// // //             aria-label="social links"
// // //           >
// // //             {["f", "𝕏", "in", "▶"].map((icon, i) => (
// // //               <a
// // //                 key={i}
// // //                 href="#"
// // //                 className="
// // //                   inline-flex
// // //                   items-center
// // //                   justify-center
// // //                   rounded-full
// // //                   bg-white
// // //                   text-black
// // //                   font-bold
// // //                   no-underline
// // //                   transition-all
// // //                   duration-200

// // //                   w-[36px] h-[36px]
// // //                   text-[14px]

// // //                   hover:-translate-y-[2px]

// // //                   max-[900px]:w-[40px]
// // //                   max-[900px]:h-[40px]
// // //                   max-[900px]:text-[16px]

// // //                   max-[480px]:w-[36px]
// // //                   max-[480px]:h-[36px]
// // //                   max-[480px]:text-[14px]
// // //                 "
// // //               >
// // //                 {icon}
// // //               </a>
// // //             ))}
// // //           </div>
// // //         </div>

// // //         {/* VERTICAL LINE */}
// // //         <div
// // //           aria-hidden="true"
// // //           className="
// // //             absolute
// // //             left-[calc(100%/3.6)]
// // //             top-[-32px]
// // //             bottom-[60px]
// // //             w-[2px]
// // //             h-[130px]
// // //             bg-black/35
// // //             z-[5]

// // //             max-[1200px]:left-[calc(100%/3.4)]
// // //             max-[1024px]:left-[calc(100%/3.3)]
// // //             max-[900px]:hidden
// // //           "
// // //         />
// // //       </div>

// // //       {/* HORIZONTAL LINE */}
// // //       <div
// // //         aria-hidden="true"
// // //         className="
// // //           mx-auto
// // //           my-[20px]
// // //           h-[2px]
// // //           bg-black/35

// // //           w-[70%]
// // //           max-[900px]:w-[85%]
// // //           max-[480px]:w-[90%]
// // //         "
// // //       />

// // //       {/* BOTTOM TEXT */}
// // //       <div
// // //         className="
// // //           text-center
// // //           opacity-[0.85]

// // //           text-[14px]
// // //           max-[480px]:text-[13px]

// // //           pb-[8px]
// // //         "
// // //       >
// // //         © {new Date().getFullYear()} AdRefresh. All Rights Reserved.
// // //       </div>
// // //     </footer>
// // //   );
// // // }

// // // "use client";

// // // import Image from "next/image";
// // // import WhitePml from "@/public/images/FooterImages/whitePML.png";
// // // import Soc from "@/public/images/FooterImages/SOC2.svg";
// // // import iso from "@/public/images/FooterImages/iso2001.png";

// // // import {
// // //   Mail,
// // //   Facebook,
// // //   Twitter,
// // //   Linkedin,
// // //   Instagram,
// // // } from "lucide-react";

// // // export default function Footer() {
// // //   return (
// // //     <footer className="w-screen ml-[calc(50%-50vw)] bg-[linear-gradient(to_bottom,#565656_0%,#949494_100%)] text-white">
// // //       {/* ================= GRID ================= */}
// // //       <div
// // //         className="
// // //           relative mx-auto max-w-[1400px]
// // //           px-[40px] py-[20px]
// // //           grid grid-cols-4 gap-[40px]

// // //           max-[1024px]:grid-cols-2
// // //           max-[640px]:grid-cols-1
// // //         "
// // //       >
// // //         {/* ================= 1. LOGO ================= */}
// // //         <div className="flex flex-col gap-6 max-[640px]:items-center ">
// // //           <Image
// // //             src={WhitePml}
// // //             alt="AdRefresh"
// // //             width={110}
// // //             height={90}
// // //             className="w-[150px] object-contain ml-0 md:ml-10"
          
// // //           />

// // //           <div className="flex gap-4">
// // //             <Image src={iso} alt="ISO" width={120} height={60} />
// // //             <Image src={Soc} alt="SOC" width={90} height={60} />
// // //           </div>
// // //         </div>

// // //         {/* ================= 2. LOCATIONS ================= */}
// // //         <div className="flex flex-col gap-6 text-sm leading-relaxed">
// // //           <div>
// // //             <h1 className="font-bold mb-1">INDIA</h1>
// // //             <p className="opacity-90">
// // //               Hyderabad <br />
// // //               1102D, Manjeera Trinity Corporate <br />
// // //               Kukatpally, HYD 500072
// // //             </p>
// // //           </div>

// // //           <div>
// // //             <h1 className="font-bold mb-1">USA</h1>
// // //             <p className="opacity-90">
// // //               Harvard <br />
// // //               PO Box 142 <br />
// // //               Harvard, MA 01451
// // //             </p>
// // //           </div>
// // //         </div>

// // //         {/* ================= 3. EMAIL ================= */}
// // //         <div className="relative flex items-center">
// // //           {/* vertical divider */}
// // //           <div className="absolute -left-[20px] top-0 h-full w-[2px] bg-white/30 max-[640px]:hidden" />

// // //           <div className="grid items-start gap-3">
// // //             <Mail size={52} />
// // //             <span className="text-sm tracking-wide">
// // //               contact@adrefresh.com
// // //             </span>
// // //           </div>
// // //         </div>

// // //         {/* ================= 4. SOCIAL ================= */}
// // //         <div className="flex items-center justify-start gap-4 max-[740px]:justify-center">
// // //           <a className="social fb" href="#"><Facebook size={28} /></a>
// // //         <a className="social x" href="#" aria-label="X">
// // //   <svg
// // //     xmlns="http://www.w3.org/2000/svg"
// // //     viewBox="0 0 24 24"
// // //     className="w-[18px] h-[18px] fill-current"
// // //   >
// // //     <path d="M18.244 2H21.78l-7.71 8.81L23 22h-7.08l-5.53-7.19L4.64 22H1.1l8.25-9.43L1 2h7.26l5 6.54L18.24 2z" />
// // //   </svg>
// // // </a>

// // //           <a className="social in" href="#"><Linkedin size={28} /></a>
// // //           <a className="social insta" href="#"><Instagram size={28} /></a>
// // //         </div>
// // //       </div>

// // //       {/* ================= DIVIDER ================= */}
// // //       <div className="mx-auto h-[2px] w-[90%] bg-white/30" />

// // //       {/* ================= COPYRIGHT ================= */}
// // //       <div className="py-4 text-center text-sm opacity-85">
// // //         © {new Date().getFullYear()} AdRefresh. All Rights Reserved.
// // //       </div>

// // //       {/* ================= STYLES ================= */}
// // //       <style>{`
// // //         .social {
// // //           width: 46px;
// // //           height: 46px;
// // //           border-radius: 9999px;
// // //           background: white;
// // //           color: black;
// // //           display: flex;
// // //           align-items: center;
// // //           justify-content: center;
// // //           transition: all 0.25s ease;
// // //         }

// // //         .social:hover {
// // //           animation: bounce 0.5s ease;
// // //           color: white;
// // //         }

// // //         .fb:hover {
// // //           background: #1877f2;
// // //         }

// // //         .x:hover {
// // //           background: #000;
// // //         }

// // //         .in:hover {
// // //           background: #0a66c2;
// // //         }

// // //         .insta:hover {
// // //           background: radial-gradient(
// // //             circle at 30% 107%,
// // //             #fdf497 0%,
// // //             #fdf497 5%,
// // //             #fd5949 45%,
// // //             #d6249f 60%,
// // //             #285aeb 90%
// // //           );
// // //         }

// // //         @keyframes bounce {
// // //           0% { transform: translateY(0); }
// // //           30% { transform: translateY(-6px); }
// // //           60% { transform: translateY(2px); }
// // //           100% { transform: translateY(0); }
// // //         }
// // //       `}</style>
// // //     </footer>
// // //   );
// // // }

// // "use client";

// // import Image from "next/image";
// // import WhitePml from "@/public/images/FooterImages/whitePML.png";
// // import Soc from "@/public/images/FooterImages/SOC2.svg";
// // import iso from "@/public/images/FooterImages/iso2001.png";

// // import { Mail, Facebook, Linkedin, Instagram } from "lucide-react";

// // export default function Footer() {
// //   return (
// //     <footer className="w-screen ml-[calc(50%-50vw)] bg-[linear-gradient(to_bottom,#565656_0%,#949494_100%)] text-white">
// //       {/* ================= GRID ================= */}
// //       <div
// //         className="
// //           relative mx-auto max-w-[1400px]
// //           px-[40px] py-[20px]
// //           grid grid-cols-4 gap-[40px]

// //           max-[1024px]:grid-cols-2
// //           max-[640px]:grid-cols-1
// //         "
// //       >
// //         {/* ================= 1. LOGO ONLY ================= */}
// //        {/* ================= 1. LOGO ONLY ================= */}
// // <div className="relative flex items-center max-[640px]:justify-center">
// //   <Image
// //     src={WhitePml}
// //     alt="AdRefresh"
// //     width={190}
// //     height={110}
// //     className="object-contain md:ml-10"
// //   />

// //   {/* VERTICAL LINE */}
// //   <div
// //     className="
// //       absolute
// //       right-[-20px]
// //       top-1/2
// //       -translate-y-1/2
// //       h-[70%]
// //       w-[2px]
// //       bg-white/40
// //       hidden
// //       md:block
// //     "
// //   />
// // </div>

// //         {/* ================= 2. ISO CERTIFICATES ================= */}
// //         <div className="flex items-center gap-6 max-[640px]:justify-center">
// //           <Image src={iso} alt="ISO" width={120} height={60} />
// //           <Image src={Soc} alt="SOC" width={90} height={60} />
// //         </div>

// //         {/* ================= 3. LOCATIONS + EMAIL ================= */}
// //         <div className="flex flex-col gap-6 text-sm leading-relaxed">
// //           <div>
// //             <h1 className="font-bold mb-1">INDIA</h1>
// //             <p className="opacity-90">
// //               Hyderabad <br />
// //               1102D, Manjeera Trinity Corporate <br />
// //               Kukatpally, HYD 500072
// //             </p>
// //           </div>

// //           <div>
// //             <h1 className="font-bold mb-1">USA</h1>
// //             <p className="opacity-90">
// //               Harvard <br />
// //               PO Box 142 <br />
// //               Harvard, MA 01451
// //             </p>
// //           </div>

// //           <div className="flex items-center gap-3 pt-2">
// //             <Mail size={24} />
// //             <span className="tracking-wide">contact@adrefresh.com</span>
// //           </div>
// //         </div>

// //         {/* ================= 4. SOCIAL ICONS ================= */}
// //         <div className="flex items-center gap-4 max-[640px]:justify-center">
// //           <a className="social fb" href="#"><Facebook size={28} /></a>

// //           <a className="social x" href="#" aria-label="X">
// //             <svg
// //               xmlns="http://www.w3.org/2000/svg"
// //               viewBox="0 0 24 24"
// //               className="w-[18px] h-[18px] fill-current"
// //             >
// //               <path d="M18.244 2H21.78l-7.71 8.81L23 22h-7.08l-5.53-7.19L4.64 22H1.1l8.25-9.43L1 2h7.26l5 6.54L18.24 2z" />
// //             </svg>
// //           </a>

// //           <a className="social in" href="#"><Linkedin size={28} /></a>
// //           <a className="social insta" href="#"><Instagram size={28} /></a>
// //         </div>
// //       </div>

// //       {/* ================= DIVIDER ================= */}
// //       <div className="mx-auto h-[2px] w-[90%] bg-white/30" />

// //       {/* ================= COPYRIGHT ================= */}
// //       <div className="py-4 text-center text-sm opacity-85">
// //         © {new Date().getFullYear()} AdRefresh. All Rights Reserved.
// //       </div>

// //       {/* ================= STYLES ================= */}
// //       <style>{`
// //         .social {
// //           width: 46px;
// //           height: 46px;
// //           border-radius: 9999px;
// //           background: white;
// //           color: black;
// //           display: flex;
// //           align-items: center;
// //           justify-content: center;
// //           transition: all 0.25s ease;
// //         }

// //         .social:hover {
// //           animation: bounce 0.5s ease;
// //           color: white;
// //         }

// //         .fb:hover { background: #1877f2; }
// //         .x:hover { background: #000; }
// //         .in:hover { background: #0a66c2; }

// //         .insta:hover {
// //           background: radial-gradient(
// //             circle at 30% 107%,
// //             #fdf497 0%,
// //             #fdf497 5%,
// //             #fd5949 45%,
// //             #d6249f 60%,
// //             #285aeb 90%
// //           );
// //         }

// //         @keyframes bounce {
// //           0% { transform: translateY(0); }
// //           30% { transform: translateY(-6px); }
// //           60% { transform: translateY(2px); }
// //           100% { transform: translateY(0); }
// //         }
// //       `}</style>
// //     </footer>
// //   );
// // }
// "use client";

// import Image from "next/image";
// import WhitePml from "@/public/images/FooterImages/whitePML.png";
// import Soc from "@/public/images/FooterImages/SOC2.svg";
// import iso from "@/public/images/FooterImages/iso2001.png";

// import { Mail, Facebook, Linkedin, Instagram, MapPin } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="w-screen ml-[calc(50%-50vw)] bg-[linear-gradient(to_bottom,#565656_0%,#949494_100%)] text-white">
//       {/* ================= GRID ================= */}
//       <div
//         className="
//           relative mx-auto max-w-[1400px]
//           px-[40px] py-[20px]
//           grid grid-cols-4 gap-[40px]

//           max-[1024px]:grid-cols-2
//           max-[640px]:grid-cols-1
//         "
//       >
//         {/* ================= 1. LOGO ONLY ================= */}
//         <div className="relative flex items-center max-[640px]:justify-center">
//           <Image
//             src={WhitePml}
//             alt="AdRefresh"
//             width={190}
//             height={110}
//             className="object-contain md:ml-10"
//           />

//           {/* VERTICAL LINE */}
//           <div
//             className="
//               absolute
//               right-[-20px]
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
//         <div className="flex items-center gap-6 max-[640px]:justify-center">
//           <Image src={iso} alt="ISO" width={120} height={60} />
//           <Image src={Soc} alt="SOC" width={90} height={60} />
//         </div>

//         {/* ================= 3. LOCATIONS ================= */}
//         <div className="flex flex-col gap-4 text-sm leading-relaxed">
//           <div className="flex items-center gap-2">
//             <MapPin size={20} />
//             <span>India</span>
//           </div>

//           <div className="flex items-center gap-2">
//             <MapPin size={20} />
//             <span>USA</span>
//           </div>

//           <div className="flex items-center gap-2">
//             <MapPin size={20} />
//             <span>Canada</span>
//           </div>

//           <div className="flex items-center gap-2">
//             <MapPin size={20} />
//             <span>Australia</span>
//           </div>
//         </div>

//         {/* ================= 4. SOCIAL ICONS + MAIL ================= */}
//         <div className="flex items-center gap-4 max-[640px]:justify-center">
//           {/* MAIL ICON */}
//           <a className="social mail" href="mailto:contact@adrefresh.com">
//             <Mail size={26} />
//           </a>

//           <a className="social fb" href="#"><Facebook size={28} /></a>

//           <a className="social x" href="#" aria-label="X">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//               className="w-[18px] h-[18px] fill-current"
//             >
//               <path d="M18.244 2H21.78l-7.71 8.81L23 22h-7.08l-5.53-7.19L4.64 22H1.1l8.25-9.43L1 2h7.26l5 6.54L18.24 2z" />
//             </svg>
//           </a>

//           <a className="social in" href="#"><Linkedin size={28} /></a>
//           <a className="social insta" href="#"><Instagram size={28} /></a>
//         </div>
//       </div>

//       {/* ================= DIVIDER ================= */}
//       <div className="mx-auto h-[2px] w-[90%] bg-white/30" />

//       {/* ================= COPYRIGHT ================= */}
//       <div className="py-4 text-center text-sm opacity-85">
//         © {new Date().getFullYear()} AdRefresh. All Rights Reserved.
//       </div>

//       {/* ================= STYLES ================= */}
//       <style>{`
//         .social {
//           width: 46px;
//           height: 46px;
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
//         .mail:hover { background: #e11d48; }

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

// "use client";

// import Image from "next/image";
// import WhitePml from "@/public/images/FooterImages/whitePML.png";
// import Soc from "@/public/images/FooterImages/socbro.png";
// import iso from "@/public/images/FooterImages/iso2.png";

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
//           <Image
//             src={WhitePml}
//             alt="AdRefresh"
//             width={190}
//             height={110}
//             className="object-contain md:ml-10"
//           />

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
//           <Image src={iso} alt="ISO" width={120} height={60} />
//           <Image src={Soc} alt="SOC" width={90} height={60} />
//         </div>

//         {/* ================= 3. LOCATIONS (ALWAYS 2x2) ================= */}
//         {/* ================= 3. LOCATIONS (Responsive 2x2) ================= */}
// <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 text-sm sm:text-base leading-relaxed">

//   <div className="flex items-center gap-2 sm:gap-3">
//     <MapPin className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-[35px] lg:h-[35px] shrink-0" />
//     <span>India</span>
//   </div>

//   <div className="flex items-center gap-2 sm:gap-3">
//     <MapPin className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-[35px] lg:h-[35px] shrink-0" />
//     <span>Australia</span>
//   </div>

//   <div className="flex items-center gap-2 sm:gap-3">
//     <MapPin className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-[35px] lg:h-[35px] shrink-0" />
//     <span>USA</span>
//   </div>

//   <div className="flex items-center gap-2 sm:gap-3">
//     <MapPin className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-[35px] lg:h-[35px] shrink-0" />
//     <span>Canada</span>
//   </div>

// </div>

//         {/* ================= 4. MAIL + SOCIAL ICONS ================= */}
//         <div className="flex flex-col gap-6 max-[640px]:items-center">

//           {/* MAIL ROW */}
//           <div className="flex items-center gap-4">
//             <Mail size={35} />
//             <span className="text-base tracking-wide">contact@adrefresh.com</span>
//           </div>

//           {/* SOCIAL ICONS ROW */}
//           <div className="flex items-center gap-6">
//             <a className="social fb" href="https://www.facebook.com/adrefreshmedia"><Facebook size={28} /></a>

//             <a className="social x" href="#" aria-label="X">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 className="w-[18px] h-[18px] fill-current"
//               >
//                 <path d="M18.244 2H21.78l-7.71 8.81L23 22h-7.08l-5.53-7.19L4.64 22H1.1l8.25-9.43L1 2h7.26l5 6.54L18.24 2z" />
//               </svg>
//             </a>

//             <a className="social in" href="https://www.linkedin.com/company/adrefreshmedia/"><Linkedin size={28} /></a>
//             <a className="social insta" href="https://www.instagram.com/adrefreshmedia/"><Instagram size={28} /></a>
//           </div>
//         </div>
//       </div>

//       {/* ================= DIVIDER ================= */}
//       <div className="mx-auto h-[2px] w-[90%] bg-white/30" />

//       {/* ================= COPYRIGHT ================= */}
//       <div className="py-6 text-center text-sm opacity-85">
//         © {new Date().getFullYear()} AdRefresh. All Rights Reserved.
//       </div>

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

"use client";

import Image from "next/image";
import WhitePml from "@/public/images/FooterImages/whitePML.png";
import Soc from "@/public/images/FooterImages/socbroo.png";
import iso from "@/public/images/FooterImages/isobro.png";

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
            alt="AdRefresh"
            width={190}
            height={110}
            className="object-contain md:ml-10"
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
    width={120}
    height={60}
    className="object-contain"
  />
  <Image
    src={Soc}
    alt="SOC"
    width={80}
    height={40}
    className="object-contain"
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
            <a className="social fb" href="https://www.facebook.com/adrefreshmedia"><Facebook size={28} /></a>

            <a className="social x" href="#" aria-label="X">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-[18px] h-[18px] fill-current"
              >
                <path d="M18.244 2H21.78l-7.71 8.81L23 22h-7.08l-5.53-7.19L4.64 22H1.1l8.25-9.43L1 2h7.26l5 6.54L18.24 2z" />
              </svg>
            </a>

            <a className="social in" href="https://www.linkedin.com/company/adrefreshmedia/"><Linkedin size={28} /></a>
            <a className="social insta" href="https://www.instagram.com/adrefreshmedia/"><Instagram size={28} /></a>
          </div>
        </div>
      </div>

      {/* ================= DIVIDER ================= */}
      <div className="mx-auto h-[2px] w-[90%] bg-white/30" />

      {/* ================= COPYRIGHT ================= */}
      <div className="py-6 text-center text-sm opacity-85">
        © {new Date().getFullYear()} AdRefresh. All Rights Reserved.
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
