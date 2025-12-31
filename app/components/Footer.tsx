
// // "use client";
// // import Image from "next/image";
// // import WhitePml from "@/public/images/FooterImages/whitePML.png"
// // import Soc from "@/public/images/FooterImages/SOC2.svg";
// // import iso from "@/public/images/FooterImages/iso2001.png"
// // // import pLookup from "@/public/images/FooterImages/plockup.png"
// // export default function Footer() {
// //   // const basePath=process.env.NEXT_PUBLIC_BASE_PATH

// //   return (
// //     <footer className="footer">
// //       <div className="footer-wrapper">
// //         {/* LEFT — BRAND LOGO */}
// //         <div className="footer-left">
// //           <Image
// //   src={WhitePml}
// //   alt="AdRefresh Logo"
// //   width={160}
// //   height={90}
// //   className="brand-logo"
// // />

// //         </div>

// //         {/* CENTER — ISO CERTIFICATES */}
// //         <div className="footer-center" aria-label="ISO certificates">
// //           <div className="iso-wrap">
// //      <Image
// //   src={iso}
// //   alt="ISO 1"
// //   width={120}
// //   height={80}
// //   className="iso-logo"
// // />

// // <Image
// //   src={Soc}
// //   alt="ISO 2"
// //   width={120}
// //   height={80}
// //   className="iso-logo"
// // />

// //           </div>
// //         </div>

// //         {/* RIGHT — SOCIAL ICONS */}
// //         <div className="footer-right">
// //           <div className="social-icons" role="navigation" aria-label="social links">
// //             <a href="#" aria-label="facebook">f</a>
// //             <a href="#" aria-label="x">𝕏</a>
// //             <a href="#" aria-label="linkedin">in</a>
// //             <a href="#" aria-label="youtube">▶</a>
// //           </div>
// //         </div>

// //         {/* VERTICAL LINE */}
// //         <div className="vertical-line" aria-hidden="true"></div>
// //       </div>

// //       <div className="horizontal-line" aria-hidden="true"></div>

// //       <div className="footer-bottom">© {new Date().getFullYear()} AdRefresh. All Rights Reserved.</div>

// //       <style jsx>{`
// //         .footer {
// //           width: 100vw;
// //           margin-left: calc(50% - 50vw);
// //           padding-top: 60px;
// //           padding-bottom: 40px;
// //          background: linear-gradient(
// //   to bottom,
// //   #565656 0%,

// //   #949494 100%
// // );

// //           color: black;
// //           position: relative;
// //         }

// //         .footer-wrapper {
// //           max-width: 1400px;
// //           margin: auto;
// //           display: grid;
// //           grid-template-columns: 1.2fr 1fr 1fr;
// //           align-items: center;
// //           gap: 40px;
// //           padding: 0 40px;
// //           position: relative;
// //         }

// //         /* vertical line sits between left and center columns visually */
// //         .vertical-line {
// //           position: absolute;
// //           left: calc(100% / 3.6); /* tuned so it sits after left column */
// //           top: 10px;
// //           bottom: 60px;
// //           width: 2px;
// //           height:90px;
// //           background: rgba(0, 0, 0, 0.35);
// //           z-index: 5;
// //         }

// //         /* LEFT LOGO */
// //         .footer-left {
// //           display: flex;
// //           align-items: center;
// //         }

// //         .brand-logo {
// //           width: 160px;         /* fixed visual size but responsive below */
// //           max-width: 30vw;
// //           height: auto;
// //           object-fit: contain;
// //           display: block;
// //         }

// //         /* CENTER ISO BLOCK */
// //         .footer-center {
// //           display: flex;
// //           justify-content: center;
// //           align-items: center;
// //         }

// //         /* wrap the iso logos so they behave as a single centered block */
// //         .iso-wrap {
// //           display: flex;
// //           gap: 20px;
// //           align-items: center;
// //           justify-content: center;
// //         }

// //         /* make both iso logos identical size */
// //         .iso-logo {
// //           width: 120px;
// //           height: 80px;
// //           object-fit: contain;
// //           display: block;
// //         }

// //         /* SOCIAL MEDIA */
// //         .footer-right {
// //           display: flex;
// //           align-items: center;
// //           justify-content: center; /* ensures icons centered in column */
// //         }

// //         .social-icons {
// //           display: flex;
// //           gap: 12px;
// //           justify-content: center;
// //           align-items: center;
// //         }

// //         .social-icons a {
// //           width: 36px;
// //           height: 36px;
// //           line-height: 36px;
// //           border-radius: 50%;
// //           background: white;
// //           display: inline-flex;
// //           justify-content: center;
// //           align-items: center;
// //           color: black;
// //           font-size: 14px;
// //           font-weight: 700;
// //           transition: 0.18s;
// //           text-decoration: none;
// //         }

// //         .social-icons a:hover {
// //           background: white;
// //           color: black;
// //           transform: translateY(-2px);
// //         }

// //         /* 70% WIDTH HORIZONTAL LINE (centered) */
// //         .horizontal-line {
// //           width: 70%;
// //           height: 2px;
// //           background: rgba(0, 0, 0, 0.35);
// //           margin: 40px auto 20px auto;
// //           display: block;
// //         }

// //         .footer-bottom {
// //           text-align: center;
// //           font-size: 14px;
// //           opacity: 0.85;
// //         }

// //         /* ================== TABLET ================== */
// //         @media (max-width: 1024px) {
// //           .iso-logo {
// //             width: 110px;
// //             height: 72px;
// //           }

// //           .brand-logo {
// //             width: 140px;
// //           }

// //           .vertical-line {
// //             left: calc(100% / 3.3);
// //           }
// //         }

// //         /* ================== MOBILE ================== */
// //         @media (max-width: 900px) {
// //           .footer-wrapper {
// //             grid-template-columns: 1fr;
// //             text-align: center;
// //             padding: 0 24px;
// //             gap: 20px;
// //           }

// //           .vertical-line {
// //             display: none;
// //           }

// //           .brand-logo {
// //             margin: 0 auto;
// //             width: 36vw;
// //             max-width: 180px;
// //           }

// //           /* center iso block and make sure logos are equal size */
// //           .footer-center {
// //             padding: 0;
// //           }

// //           .iso-wrap {
// //             gap: 16px;
// //           }

// //           .iso-logo {
// //             width: 110px;
// //             height: 70px;
// //           }

// //           .horizontal-line {
// //             width: 85%;
// //           }

// //           .social-icons a {
// //             width: 40px;
// //             height: 40px;
// //             line-height: 40px;
// //             font-size: 16px;
// //           }

// //           .footer-right {
// //             margin-bottom: 8px;
// //           }
// //         }

// //         /* small mobiles */
// //         @media (max-width: 480px) {
// //           .iso-logo {
// //             width: 92px;
// //             height: 60px;
// //           }

// //           .brand-logo {
// //             width: 46vw;
// //           }

// //           .social-icons {
// //             gap: 10px;
// //           }

// //           .social-icons a {
// //             width: 36px;
// //             height: 36px;
// //             line-height: 36px;
// //             font-size: 14px;
// //           }

// //           .horizontal-line {
// //             width: 90%;
// //           }
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

// export default function Footer() {
//   return (
//     <footer
//       className="
//         w-screen
//         ml-[calc(50%-50vw)]
//         pt-[60px] pb-[40px]
//         relative
//         text-black
//         bg-[linear-gradient(to_bottom,#565656_0%,#949494_100%)]
//       "
//     >
//       {/* WRAPPER */}
//       <div
//         className="
//           relative
//           max-w-[1400px]
//           mx-auto
//           grid
//           grid-cols-[1.2fr_1fr_1fr]
//           items-center
//           gap-[40px]
//           px-[40px]

//           max-[900px]:grid-cols-1
//           max-[900px]:text-center
//           max-[900px]:px-[24px]
//           max-[900px]:gap-[20px]
//         "
//       >
//         {/* LEFT — LOGO */}
//         <div className="flex items-center max-[900px]:justify-center">
//           <Image
//             src={WhitePml}
//             alt="AdRefresh Logo"
//             width={160}
//             height={90}
//             className="
//               w-[160px]
//               max-w-[30vw]
//               h-auto
//               object-contain
//               block

//               max-[1024px]:w-[140px]
//               max-[900px]:mx-auto
//               max-[900px]:w-[36vw]
//               max-[900px]:max-w-[180px]
//               max-[480px]:w-[46vw]
//             "
//           />
//         </div>

//         {/* CENTER — ISO */}
//         <div className="flex justify-center items-center max-[900px]:p-0">
//           <div
//             className="
//               flex
//               gap-[20px]
//               items-center
//               justify-center

//               max-[900px]:gap-[16px]
//             "
//           >
//             <Image
//               src={iso}
//               alt="ISO 1"
//               width={120}
//               height={80}
//               className="
//                 w-[120px] h-[80px]
//                 object-contain block

//                 max-[1024px]:w-[110px]
//                 max-[1024px]:h-[72px]

//                 max-[900px]:w-[110px]
//                 max-[900px]:h-[70px]

//                 max-[480px]:w-[92px]
//                 max-[480px]:h-[60px]
//               "
//             />

//             <Image
//               src={Soc}
//               alt="ISO 2"
//               width={120}
//               height={80}
//               className="
//                 w-[120px] h-[80px]
//                 object-contain block

//                 max-[1024px]:w-[110px]
//                 max-[1024px]:h-[72px]

//                 max-[900px]:w-[110px]
//                 max-[900px]:h-[70px]

//                 max-[480px]:w-[92px]
//                 max-[480px]:h-[60px]
//               "
//             />
//           </div>
//         </div>

//         {/* RIGHT — SOCIAL */}
//         <div
//           className="
//             flex
//             items-center
//             justify-center
//             max-[900px]:mb-[8px]
//           "
//         >
//           <div
//             className="
//               flex
//               gap-[12px]
//               justify-center
//               items-center

//               max-[480px]:gap-[10px]
//             "
//             role="navigation"
//             aria-label="social links"
//           >
//             {["f", "𝕏", "in", "▶"].map((icon, i) => (
//               <a
//                 key={i}
//                 href="#"
//                 className="
//                   w-[36px] h-[36px]
//                   leading-[36px]
//                   rounded-full
//                   bg-white
//                   inline-flex
//                   justify-center
//                   items-center
//                   text-black
//                   text-[14px]
//                   font-bold
//                   transition-all
//                   duration-[180ms]
//                   no-underline

//                   hover:-translate-y-[2px]

//                   max-[900px]:w-[40px]
//                   max-[900px]:h-[40px]
//                   max-[900px]:leading-[40px]
//                   max-[900px]:text-[16px]

//                   max-[480px]:w-[36px]
//                   max-[480px]:h-[36px]
//                   max-[480px]:leading-[36px]
//                   max-[480px]:text-[14px]
//                 "
//               >
//                 {icon}
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* VERTICAL LINE */}
//         <div
//           aria-hidden="true"
//           className="
//             absolute
//             left-[calc(100%/3.6)]
//             top-[-32px]
//             bottom-[60px]
//             w-[2px]
//             h-[130px]
//             bg-black/35
//             z-[5]

//             max-[1024px]:left-[calc(100%/3.3)]
//             max-[900px]:hidden
//           "
//         />
//       </div>

//       {/* HORIZONTAL LINE */}
//       <div
//         aria-hidden="true"
//         className="
//           w-[70%]
//           h-[2px]
//           bg-black/35
//           my-[20px]
//           mx-auto

//           max-[900px]:w-[85%]
//           max-[480px]:w-[90%]
//         "
//       />

//       {/* BOTTOM TEXT */}
//       <div className="text-center text-[14px] opacity-[0.85] mb-[-2%]">
//         © {new Date().getFullYear()} AdRefresh. All Rights Reserved.
//       </div>
//     </footer>
//   );
// }
"use client";

import Image from "next/image";
import WhitePml from "@/public/images/FooterImages/whitePML.png";
import Soc from "@/public/images/FooterImages/SOC2.svg";
import iso from "@/public/images/FooterImages/iso2001.png";

export default function Footer() {
  return (
    <footer
      className="
        w-screen
        ml-[calc(50%-50vw)]
        relative
        text-black
        bg-[linear-gradient(to_bottom,#565656_0%,#949494_100%)]

        pt-[60px] pb-[40px]
        max-[900px]:pt-[48px]
        max-[480px]:pt-[40px]
      "
    >
      {/* WRAPPER */}
      <div
        className="
          relative
          max-w-[1400px]
          mx-auto
          grid
          grid-cols-[1.2fr_1fr_1fr]
          items-center
          gap-[40px]
          px-[40px]

          max-[1200px]:gap-[32px]
          max-[1024px]:px-[32px]

          max-[900px]:grid-cols-1
          max-[900px]:text-center
          max-[900px]:gap-[24px]
          max-[900px]:px-[24px]
        "
      >
        {/* LEFT — LOGO */}
        <div className="flex items-center max-[900px]:justify-center">
          <Image
            src={WhitePml}
            alt="AdRefresh Logo"
            width={160}
            height={90}
            className="
              w-[160px]
              h-auto
              object-contain
              block

              max-[1200px]:w-[150px]
              max-[1024px]:w-[140px]

              max-[900px]:w-[40vw]
              max-[900px]:max-w-[180px]

              max-[480px]:w-[46vw]
            "
          />
        </div>

        {/* CENTER — ISO */}
        <div className="flex justify-center items-center">
          <div
            className="
              flex
              gap-[20px]
              items-center
              justify-center

              max-[1024px]:gap-[16px]
              max-[480px]:gap-[14px]
            "
          >
            <Image
              src={iso}
              alt="ISO Certification"
              width={120}
              height={80}
              className="
                w-[120px]
                h-[80px]
                object-contain

                max-[1024px]:w-[110px] max-[1024px]:h-[72px]
                max-[900px]:w-[104px]  max-[900px]:h-[68px]
                max-[480px]:w-[92px]   max-[480px]:h-[60px]
              "
            />

            <Image
              src={Soc}
              alt="SOC Certification"
              width={120}
              height={80}
              className="
                w-[120px]
                h-[80px]
                object-contain

                max-[1024px]:w-[110px] max-[1024px]:h-[72px]
                max-[900px]:w-[104px]  max-[900px]:h-[68px]
                max-[480px]:w-[92px]   max-[480px]:h-[60px]
              "
            />
          </div>
        </div>

        {/* RIGHT — SOCIAL */}
        <div className="flex items-center justify-center">
          <div
            className="
              flex
              gap-[12px]
              items-center
              justify-center

              max-[480px]:gap-[10px]
            "
            role="navigation"
            aria-label="social links"
          >
            {["f", "𝕏", "in", "▶"].map((icon, i) => (
              <a
                key={i}
                href="#"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-black
                  font-bold
                  no-underline
                  transition-all
                  duration-200

                  w-[36px] h-[36px]
                  text-[14px]

                  hover:-translate-y-[2px]

                  max-[900px]:w-[40px]
                  max-[900px]:h-[40px]
                  max-[900px]:text-[16px]

                  max-[480px]:w-[36px]
                  max-[480px]:h-[36px]
                  max-[480px]:text-[14px]
                "
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* VERTICAL LINE */}
        <div
          aria-hidden="true"
          className="
            absolute
            left-[calc(100%/3.6)]
            top-[-32px]
            bottom-[60px]
            w-[2px]
            h-[130px]
            bg-black/35
            z-[5]

            max-[1200px]:left-[calc(100%/3.4)]
            max-[1024px]:left-[calc(100%/3.3)]
            max-[900px]:hidden
          "
        />
      </div>

      {/* HORIZONTAL LINE */}
      <div
        aria-hidden="true"
        className="
          mx-auto
          my-[20px]
          h-[2px]
          bg-black/35

          w-[70%]
          max-[900px]:w-[85%]
          max-[480px]:w-[90%]
        "
      />

      {/* BOTTOM TEXT */}
      <div
        className="
          text-center
          opacity-[0.85]

          text-[14px]
          max-[480px]:text-[13px]

          pb-[8px]
        "
      >
        © {new Date().getFullYear()} AdRefresh. All Rights Reserved.
      </div>
    </footer>
  );
}
