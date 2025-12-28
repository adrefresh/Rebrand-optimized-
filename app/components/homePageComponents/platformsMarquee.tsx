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

    { name: "Forensiq", img: `${BASE_PATH}/images/platform-experience-images/forensiq.png` },
    { name: "DV360", img: `${BASE_PATH}/images/platform-experience-images/dv360.png` },
    { name: "DoubleVerify", img: `${BASE_PATH}/images/platform-experience-images/doubleverify.png` },
    { name: "Comscore", img: `${BASE_PATH}/images/platform-experience-images/comscore.png` },

    { name: "CM360", img: `${BASE_PATH}/images/platform-experience-images/cm360.png` },
    { name: "Aniview", img: `${BASE_PATH}/images/platform-experience-images/aniview.webp` },
    { name: "Amazon Ads", img: `${BASE_PATH}/images/platform-experience-images/amazonads.webp` },
    { name: "AdSecure", img: `${BASE_PATH}/images/platform-experience-images/adsecure.webp` },

    { name: "Adobe Ads", img: `${BASE_PATH}/images/platform-experience-images/Adobe_Advertising_Cloud.png` },
    { name: "Adform", img: `${BASE_PATH}/images/platform-experience-images/Adform.png` },
  ];

  const double = platforms.concat(platforms);

  return (
    <section className="relative w-screen overflow-hidden bg-white py-6 text-center mb-10">
      {/* MARQUEE BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.22]">
        {[1, 2, 3].map((line) => (
          <div
            key={line}
            className={`w-full overflow-hidden whitespace-nowrap ${
              line === 1 ? "mt-[10px]" : line === 2 ? "mt-[55px]" : "mt-[100px]"
            }`}
          >
            <div
              className={`flex min-w-max gap-[80px] ${
                line === 2
                  ? "animate-[scroll_90s_linear_infinite_reverse]"
                  : "animate-[scroll_90s_linear_infinite]"
              }`}
            >
              {double.map((p, i) => (
                <img
                  key={i}
                  src={p.img}
                  alt={p.name}
                  className="h-[45px] opacity-95 grayscale md:h-[32px]"
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CENTER CONTENT */}
      <div className="relative z-10 mt-12 flex flex-col items-center">
        {/* GLOBE */}
        <svg
          className="mb-3 h-[110px] w-[150px] animate-[spin_14s_linear_infinite] md:h-[70px] md:w-[70px]"
          viewBox="0 0 64 64"
        >
          <circle cx="32" cy="32" r="30" fill="none" stroke="black" strokeWidth="2" />
          <ellipse cx="32" cy="32" rx="12" ry="30" fill="none" stroke="black" strokeWidth="2" />
          <ellipse cx="32" cy="32" rx="22" ry="30" fill="none" stroke="black" strokeWidth="1.5" />
          <line x1="2" y1="32" x2="62" y2="32" stroke="black" strokeWidth="2" />
        </svg>

        {/* TITLE */}
        <h1 className="text-[34px] font-black leading-[1.1] md:text-[24px]">
          NOT YOUR AVERAGE <br />
          DIGITAL MARKETING <br />
          AGENCY
        </h1>
      </div>

      {/* KEYFRAMES */}
      <style jsx global>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
