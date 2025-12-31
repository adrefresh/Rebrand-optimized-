// "use client";

// const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

// export default function Section7() {
//   const platforms = [
//     { name: "YouTube", img: `${BASE_PATH}/images/platform-experience-images/youtubeads.jpg` },
//     { name: "Yelp", img: `${BASE_PATH}/images/platform-experience-images/YelpAds.png` },
//     { name: "Xandr", img: `${BASE_PATH}/images/platform-experience-images/xandr.webp` },
//     { name: "X Ads", img: `${BASE_PATH}/images/platform-experience-images/xads.jpg` },
//     { name: "Verve", img: `${BASE_PATH}/images/platform-experience-images/verve.jpg` },
//     { name: "TikTok", img: `${BASE_PATH}/images/platform-experience-images/tiktok.png` },
//   ];

//   const double = platforms.concat(platforms);

//   return (
//     <section className="relative w-screen overflow-hidden bg-white py-5 text-center">
//       {/* MARQUEE */}
//       <div className="pointer-events-none absolute inset-0 opacity-[0.22]">
//         {[1, 2, 3].map((line) => (
//           <div
//             key={line}
//             className={`w-full overflow-hidden whitespace-nowrap ${
//               line === 1 ? "mt-[10px]" : line === 2 ? "mt-[55px]" : "mt-[100px]"
//             }`}
//           >
//             {/* 🔥 TRACK */}
//             <div
//               className="inline-flex min-w-max gap-[80px]"
//               style={{
//                 animation: "scroll 100s linear infinite",
//                 animationDirection: line === 2 ? "reverse" : "normal",
//               }}
//             >
//               {double.map((p, i) => (
//                 <img
//                   key={i}
//                   src={p.img}
//                   alt={p.name}
//                   className="h-[45px] opacity-95 grayscale md:h-[32px]"
//                 />
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* CENTER CONTENT */}
//       <div className="relative z-10 mt-10 flex flex-col items-center">
//         <svg
//           className="mb-2 h-[110px] w-[150px] animate-[spin_14s_linear_infinite] md:h-[70px] md:w-[70px]"
//           viewBox="0 0 64 64"
//         >
//           <circle cx="32" cy="32" r="30" fill="none" stroke="black" strokeWidth="2" />
//           <ellipse cx="32" cy="32" rx="12" ry="30" fill="none" stroke="black" strokeWidth="2" />
//           <ellipse cx="32" cy="32" rx="22" ry="30" fill="none" stroke="black" strokeWidth="1.5" />
//           <line x1="2" y1="32" x2="62" y2="32" stroke="black" strokeWidth="2" />
//         </svg>

//         <h1 className="text-[34px] font-black leading-[1.1] md:text-[24px]">
//           NOT YOUR AVERAGE <br />
//           DIGITAL MARKETING <br />
//           AGENCY
//         </h1>
//       </div>

//       {/* KEYFRAMES */}
//       <style jsx global>{`
//         @keyframes scroll {
//           from {
//             transform: translateX(0);
//           }
//           to {
//             transform: translateX(-50%);
//           }
//         }
//       `}</style>
//     </section>
//   );
// }


// "use client";

// const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

// export default function Section7() {
//   const platforms = [
//     { name: "YouTube", img: `${BASE_PATH}/images/platform-experience-images/youtubeads.jpg` },
//     { name: "Yelp", img: `${BASE_PATH}/images/platform-experience-images/YelpAds.png` },
//     { name: "Xandr", img: `${BASE_PATH}/images/platform-experience-images/xandr.webp` },
//     { name: "X Ads", img: `${BASE_PATH}/images/platform-experience-images/xads.jpg` },

//     { name: "Verve", img: `${BASE_PATH}/images/platform-experience-images/verve.jpg` },
//     { name: "TikTok", img: `${BASE_PATH}/images/platform-experience-images/tiktok.png` },
//     { name: "The Trade Desk", img: `${BASE_PATH}/images/platform-experience-images/TheTradeDesk.png` },
//     { name: "The Media Trust", img: `${BASE_PATH}/images/platform-experience-images/themediatrust.png` },

//     { name: "SpringServe", img: `${BASE_PATH}/images/platform-experience-images/SpringServe.png` },
//     { name: "Snapchat", img: `${BASE_PATH}/images/platform-experience-images/Snapchat.png` },
//     { name: "Salesforce", img: `${BASE_PATH}/images/platform-experience-images/salesforce.jpg` },
//     { name: "SA360", img: `${BASE_PATH}/images/platform-experience-images/sa360.png` },

//     { name: "Reddit", img: `${BASE_PATH}/images/platform-experience-images/Reddit.png` },
//     { name: "Quantcast", img: `${BASE_PATH}/images/platform-experience-images/quantcast.png` },
//     { name: "PubMatic", img: `${BASE_PATH}/images/platform-experience-images/pubmatic.svg` },
//     { name: "Pixalate", img: `${BASE_PATH}/images/platform-experience-images/pixalate.webp` },

//     { name: "Pinterest", img: `${BASE_PATH}/images/platform-experience-images/pinterest.png` },
//     { name: "Operative", img: `${BASE_PATH}/images/platform-experience-images/operative.png` },
//     { name: "OpenX", img: `${BASE_PATH}/images/platform-experience-images/OpenX.png` },
//     { name: "MOAT", img: `${BASE_PATH}/images/platform-experience-images/moat.jpg` },

//     { name: "Microsoft Ads", img: `${BASE_PATH}/images/platform-experience-images/microsoftads.png` },
//     { name: "Meta", img: `${BASE_PATH}/images/platform-experience-images/Meta.png` },
//     { name: "Magnite", img: `${BASE_PATH}/images/platform-experience-images/Magnite.png` },
//     { name: "LinkedIn Ads", img: `${BASE_PATH}/images/platform-experience-images/LinkedInAds.png` },

//     { name: "IAS", img: `${BASE_PATH}/images/platform-experience-images/integralscience.png` },
//     { name: "Human", img: `${BASE_PATH}/images/platform-experience-images/HUMAN.jpg` },
//     { name: "Google Ad Manager", img: `${BASE_PATH}/images/platform-experience-images/googleadmanager.png` },
//     { name: "Google Ads", img: `${BASE_PATH}/images/platform-experience-images/GAds.png` },

//     { name: "Forensiq", img: `${BASE_PATH}/images/platform-experience-images/forensiq.png` },
//     { name: "DV360", img: `${BASE_PATH}/images/platform-experience-images/dv360.png` },
//     { name: "DoubleVerify", img: `${BASE_PATH}/images/platform-experience-images/doubleverify.png` },
//     { name: "Comscore", img: `${BASE_PATH}/images/platform-experience-images/comscore.png` },

//     { name: "CM360", img: `${BASE_PATH}/images/platform-experience-images/cm360.png` },
//     { name: "Aniview", img: `${BASE_PATH}/images/platform-experience-images/aniview.webp` },
//     { name: "Amazon Ads", img: `${BASE_PATH}/images/platform-experience-images/amazonads.webp` },
//     { name: "AdSecure", img: `${BASE_PATH}/images/platform-experience-images/adsecure.webp` },

//     { name: "Adobe Ads", img: `${BASE_PATH}/images/platform-experience-images/Adobe_Advertising_Cloud.png` },
//     { name: "Adform", img: `${BASE_PATH}/images/platform-experience-images/Adform.png` },
//   ];

//   const double = platforms.concat(platforms);

//   return (
//     <section className="relative w-screen overflow-hidden bg-white py-6 text-center mb-10">
//       {/* MARQUEE BACKGROUND */}
//       <div className="pointer-events-none absolute inset-0 opacity-[0.22]">
//         {[1, 2, 3].map((line) => (
//           <div
//             key={line}
//             className={`w-full overflow-hidden whitespace-nowrap ${
//               line === 1 ? "mt-[10px]" : line === 2 ? "mt-[55px]" : "mt-[100px]"
//             }`}
//           >
//             <div
//               className={`flex min-w-max gap-[80px] ${
//                 line === 2
//                   ? "animate-[scroll_90s_linear_infinite_reverse]"
//                   : "animate-[scroll_90s_linear_infinite]"
//               }`}
//             >
//               {double.map((p, i) => (
//                 <img
//                   key={i}
//                   src={p.img}
//                   alt={p.name}
//                   className="h-[45px] opacity-95 grayscale md:h-[32px]"
//                 />
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* CENTER CONTENT */}
//       <div className="relative z-10 mt-12 flex flex-col items-center">
//         {/* GLOBE */}
//         <svg
//           className="mb-3 h-[110px] w-[150px] animate-[spin_14s_linear_infinite] md:h-[70px] md:w-[70px]"
//           viewBox="0 0 64 64"
//         >
//           <circle cx="32" cy="32" r="30" fill="none" stroke="black" strokeWidth="2" />
//           <ellipse cx="32" cy="32" rx="12" ry="30" fill="none" stroke="black" strokeWidth="2" />
//           <ellipse cx="32" cy="32" rx="22" ry="30" fill="none" stroke="black" strokeWidth="1.5" />
//           <line x1="2" y1="32" x2="62" y2="32" stroke="black" strokeWidth="2" />
//         </svg>

//         {/* TITLE */}
//         <h1 className="text-[34px] font-black leading-[1.1] md:text-[24px]">
//           NOT YOUR AVERAGE <br />
//           DIGITAL MARKETING <br />
//           AGENCY
//         </h1>
//       </div>

//       {/* KEYFRAMES */}
//       <style jsx global>{`
//         @keyframes scroll {
//           from {
//             transform: translateX(0);
//           }
//           to {
//             transform: translateX(-50%);
//           }
//         }
//       `}</style>
//     </section>
//   );
// }

// "use client";

// const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

// export default function Section7() {
//   const platforms = [
//     { name: "YouTube", img: `${BASE_PATH}/images/platform-experience-images/youtubeads.jpg` },
//     { name: "Yelp", img: `${BASE_PATH}/images/platform-experience-images/YelpAds.png` },
//     { name: "Xandr", img: `${BASE_PATH}/images/platform-experience-images/xandr.webp` },
//     { name: "X Ads", img: `${BASE_PATH}/images/platform-experience-images/xads.jpg` },

//     { name: "Verve", img: `${BASE_PATH}/images/platform-experience-images/verve.jpg` },
//     { name: "TikTok", img: `${BASE_PATH}/images/platform-experience-images/tiktok.png` },
//     { name: "The Trade Desk", img: `${BASE_PATH}/images/platform-experience-images/TheTradeDesk.png` },
//     { name: "The Media Trust", img: `${BASE_PATH}/images/platform-experience-images/themediatrust.png` },

//     { name: "SpringServe", img: `${BASE_PATH}/images/platform-experience-images/SpringServe.png` },
//     { name: "Snapchat", img: `${BASE_PATH}/images/platform-experience-images/Snapchat.png` },
//     { name: "Salesforce", img: `${BASE_PATH}/images/platform-experience-images/salesforce.jpg` },
//     { name: "SA360", img: `${BASE_PATH}/images/platform-experience-images/sa360.png` },

//     { name: "Reddit", img: `${BASE_PATH}/images/platform-experience-images/Reddit.png` },
//     { name: "Quantcast", img: `${BASE_PATH}/images/platform-experience-images/quantcast.png` },
//     { name: "PubMatic", img: `${BASE_PATH}/images/platform-experience-images/pubmatic.svg` },
//     { name: "Pixalate", img: `${BASE_PATH}/images/platform-experience-images/pixalate.webp` },

//     { name: "Pinterest", img: `${BASE_PATH}/images/platform-experience-images/pinterest.png` },
//     { name: "Operative", img: `${BASE_PATH}/images/platform-experience-images/operative.png` },
//     { name: "OpenX", img: `${BASE_PATH}/images/platform-experience-images/OpenX.png` },
//     { name: "MOAT", img: `${BASE_PATH}/images/platform-experience-images/moat.jpg` },

//     { name: "Microsoft Ads", img: `${BASE_PATH}/images/platform-experience-images/microsoftads.png` },
//     { name: "Meta", img: `${BASE_PATH}/images/platform-experience-images/Meta.png` },
//     { name: "Magnite", img: `${BASE_PATH}/images/platform-experience-images/Magnite.png` },
//     { name: "LinkedIn Ads", img: `${BASE_PATH}/images/platform-experience-images/LinkedInAds.png` },

//     { name: "IAS", img: `${BASE_PATH}/images/platform-experience-images/integralscience.png` },
//     { name: "Human", img: `${BASE_PATH}/images/platform-experience-images/HUMAN.jpg` },
//     { name: "Google Ad Manager", img: `${BASE_PATH}/images/platform-experience-images/googleadmanager.png` },
//     { name: "Google Ads", img: `${BASE_PATH}/images/platform-experience-images/GAds.png` },

//     { name: "DV360", img: `${BASE_PATH}/images/platform-experience-images/dv360.png` },
//     { name: "Amazon Ads", img: `${BASE_PATH}/images/platform-experience-images/amazonads.webp` },
//     { name: "Adobe Ads", img: `${BASE_PATH}/images/platform-experience-images/Adobe_Advertising_Cloud.png` },
//     { name: "Adform", img: `${BASE_PATH}/images/platform-experience-images/Adform.png` },
//   ];

//   /* SPLIT INTO UNIQUE LINES */
//   const line1 = platforms.slice(0, 14);
//   const line2 = platforms.slice(14, 28);
//   const line3 = platforms.slice(28);

//   const repeat = (arr: typeof platforms) => arr.concat(arr);

//   return (
//     <section className="relative w-screen overflow-hidden bg-white py-6 text-center">
//       {/* MARQUEES */}
//       <div className="pointer-events-none absolute inset-0">
//         {/* LINE 1 */}
//         <Marquee
//           items={repeat(line1)}
//           reverse={false}
//           top="mt-[14px]"
//         />

//         {/* LINE 2 */}
//         <Marquee
//           items={repeat(line2)}
//           reverse
//           top="mt-[60px]"
//         />

//         {/* LINE 3 – DESKTOP ONLY */}
//         <div className="hidden md:block">
//           <Marquee
//             items={repeat(line3)}
//             reverse={false}
//             top="mt-[66px]"
//           />
//         </div>
//       </div>

//       {/* CENTER CONTENT */}
//       <div className="relative z-10 mt-16 flex flex-col items-center">
//         <svg
//           className="mb-3 h-[110px] w-[150px] animate-[spin_26s_linear_infinite] md:h-[70px] md:w-[70px]"
//           viewBox="0 0 64 64"
//         >
//           <circle cx="32" cy="32" r="30" fill="none" stroke="black" strokeWidth="2" />
//           <ellipse cx="32" cy="32" rx="12" ry="30" fill="none" stroke="black" strokeWidth="2" />
//           <ellipse cx="32" cy="32" rx="22" ry="30" fill="none" stroke="black" strokeWidth="1.5" />
//           <line x1="2" y1="32" x2="62" y2="32" stroke="black" strokeWidth="2" />
//         </svg>

//         <h1 className="text-[34px] font-black leading-[1.1] md:text-[24px]">
//           NOT YOUR AVERAGE <br />
//           DIGITAL MARKETING <br />
//           AGENCY
//         </h1>
//       </div>

//       {/* KEYFRAMES */}
//       <style jsx global>{`
//         @keyframes scroll {
//           from {
//             transform: translateX(0);
//           }
//           to {
//             transform: translateX(-50%);
//           }
//         }
//       `}</style>
//     </section>
//   );
// }

// /* ---------------- MARQUEE COMPONENT ---------------- */

// function Marquee({
//   items,
//   reverse,
//   top,
// }: {
//   items: { name: string; img: string }[];
//   reverse?: boolean;
//   top: string;
// }) {
//   return (
//     <div className={`w-full overflow-hidden whitespace-nowrap ${top}`}>
//       <div
//         className={`
//           flex min-w-max
//           gap-[70px]
//           ${reverse
//             ? "animate-[scroll_90s_linear_infinite_reverse]"
//             : "animate-[scroll_90s_linear_infinite]"}
//         `}
//       >
//         {items.map((p, i) => (
//           <img
//             key={i}
//             src={p.img}
//             alt={p.name}
//             className="
//               h-[42px]
//               opacity-[0.9]
//               grayscale

//               md:h-[32px]

//               max-[768px]:h-[26px]
//               max-[768px]:opacity-100
//             "
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
"use client";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Section7() {
  const platforms = [
    { name: "YouTube", img: `${BASE_PATH}/images/platform-experience-images/youtubeads.jpg` },
    { name: "Yelp", img: `${BASE_PATH}/images/platform-experience-images/YelpAds.png` },
    { name: "Xandr", img: `${BASE_PATH}/images/platform-experience-images/xandr.webp` },
    { name: "X Ads", img: `${BASE_PATH}/images/platform-experience-images/xads.jpg` },

    { name: "Verve", img: `${BASE_PATH}/images/platform-experience-images/verve.jpg` },
    { name: "TikTok", img: `${BASE_PATH}/images/platform-experience-images/tiktok.png` },
    { name: "The Trade Desk", img: `${BASE_PATH}/images/platform-experience-images/TheTradeDesk.png` },
    { name: "The Media Trust", img: `${BASE_PATH}/images/platform-experience-images/themediatrust.png` },

    { name: "SpringServe", img: `${BASE_PATH}/images/platform-experience-images/SpringServe.png` },
    { name: "Snapchat", img: `${BASE_PATH}/images/platform-experience-images/Snapchat.png` },
    { name: "Salesforce", img: `${BASE_PATH}/images/platform-experience-images/salesforce.jpg` },
    { name: "SA360", img: `${BASE_PATH}/images/platform-experience-images/sa360.png` },

    { name: "Reddit", img: `${BASE_PATH}/images/platform-experience-images/Reddit.png` },
    { name: "Quantcast", img: `${BASE_PATH}/images/platform-experience-images/quantcast.png` },
    { name: "PubMatic", img: `${BASE_PATH}/images/platform-experience-images/pubmatic.svg` },
    { name: "Pixalate", img: `${BASE_PATH}/images/platform-experience-images/pixalate.webp` },

    { name: "Pinterest", img: `${BASE_PATH}/images/platform-experience-images/pinterest.png` },
    { name: "Operative", img: `${BASE_PATH}/images/platform-experience-images/operative.png` },
    { name: "OpenX", img: `${BASE_PATH}/images/platform-experience-images/OpenX.png` },
    { name: "MOAT", img: `${BASE_PATH}/images/platform-experience-images/moat.jpg` },

    { name: "Microsoft Ads", img: `${BASE_PATH}/images/platform-experience-images/microsoftads.png` },
    { name: "Meta", img: `${BASE_PATH}/images/platform-experience-images/Meta.png` },
    { name: "Magnite", img: `${BASE_PATH}/images/platform-experience-images/Magnite.png` },
    { name: "LinkedIn Ads", img: `${BASE_PATH}/images/platform-experience-images/LinkedInAds.png` },

    { name: "IAS", img: `${BASE_PATH}/images/platform-experience-images/integralscience.png` },
    { name: "Human", img: `${BASE_PATH}/images/platform-experience-images/HUMAN.jpg` },
    { name: "Google Ad Manager", img: `${BASE_PATH}/images/platform-experience-images/googleadmanager.png` },
    { name: "Google Ads", img: `${BASE_PATH}/images/platform-experience-images/GAds.png` },

    { name: "DV360", img: `${BASE_PATH}/images/platform-experience-images/dv360.png` },
    { name: "Amazon Ads", img: `${BASE_PATH}/images/platform-experience-images/amazonads.webp` },
    { name: "Adobe Ads", img: `${BASE_PATH}/images/platform-experience-images/Adobe_Advertising_Cloud.png` },
    { name: "Adform", img: `${BASE_PATH}/images/platform-experience-images/Adform.png` },
  ];

  const line1 = platforms.slice(0, 14);
  const line2 = platforms.slice(14, 28);
  const line3 = platforms.slice(28);

  return (
    <section className="relative w-screen overflow-hidden bg-white py-6 text-center">
      <div className="pointer-events-none absolute inset-0">
        <Marquee items={line1} top="mt-[14px]" />
        <Marquee items={line2} top="mt-[60px]" reverse />

        <div className="hidden md:block">
          <Marquee items={line3} top="mt-[66px]" speed="60s" />
        </div>
      </div>

      {/* CENTER CONTENT */}
      <div className="relative z-10 mt-16 flex flex-col items-center">
        <svg
          className="mb-3 h-[110px] w-[150px] animate-[spin_26s_linear_infinite] md:h-[70px] md:w-[70px]"
          viewBox="0 0 64 64"
        >
          <circle cx="32" cy="32" r="30" fill="none" stroke="black" strokeWidth="2" />
          <ellipse cx="32" cy="32" rx="12" ry="30" fill="none" stroke="black" strokeWidth="2" />
          <ellipse cx="32" cy="32" rx="22" ry="30" fill="none" stroke="black" strokeWidth="1.5" />
          <line x1="2" y1="32" x2="62" y2="32" stroke="black" strokeWidth="2" />
        </svg>

        <h1 className="text-[34px] font-black leading-[1.1] md:text-[24px]">
          NOT YOUR AVERAGE <br />
          DIGITAL MARKETING <br />
          AGENCY
        </h1>
      </div>

      {/* MARQUEE ANIMATIONS */}
      <style jsx global>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-reverse {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }

        .animate-marquee {
          animation: marquee 90s linear infinite;
          will-change: transform;
        }

        .animate-marquee-reverse {
          animation: marquee-reverse 90s linear infinite;
          will-change: transform;
        }

        .animate-marquee-fast {
          animation: marquee 60s linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
}

/* ---------------- MARQUEE ---------------- */

function Marquee({
  items,
  reverse,
  top,
  speed,
}: {
  items: { name: string; img: string }[];
  reverse?: boolean;
  top: string;
  speed?: "60s" | "90s";
}) {
  const animation =
    reverse
      ? "animate-marquee-reverse"
      : speed === "60s"
      ? "animate-marquee-fast"
      : "animate-marquee";

  return (
    <div className={`w-full overflow-hidden ${top}`}>
      <div className={`flex w-max ${animation}`}>
        {[0, 1].map((copy) => (
          <div key={copy} className="flex gap-[70px] pr-[70px]">
            {items.map((p, i) => (
              <img
                key={`${copy}-${i}`}
                src={p.img}
                alt={p.name}
                className="
                  w-[120px] h-[44px]
                  object-contain
                  grayscale
                  opacity-[0.6]

                  md:w-[110px] md:h-[40px]
                  max-[768px]:w-[96px]
                  max-[768px]:h-[34px]
                "
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
