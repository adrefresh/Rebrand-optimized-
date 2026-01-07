
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
//     { name: "LinkedIn Ads", img: `${BASE_PATH}/images/platform-experience-images/LinkedinAds.png` },

//     { name: "IAS", img: `${BASE_PATH}/images/platform-experience-images/integraladscience.png` },
//     { name: "Human", img: `${BASE_PATH}/images/platform-experience-images/HUMAN.jpg` },
//     { name: "Google Ad Manager", img: `${BASE_PATH}/images/platform-experience-images/googleadmanager.png` },
//     { name: "Google Ads", img: `${BASE_PATH}/images/platform-experience-images/GAds.png` },

//     { name: "DV360", img: `${BASE_PATH}/images/platform-experience-images/dv360.png` },
//     { name: "Amazon Ads", img: `${BASE_PATH}/images/platform-experience-images/amazonads.webp` },
//     { name: "Adobe Ads", img: `${BASE_PATH}/images/platform-experience-images/Adobe_Advertising_Cloud.png` },
//     { name: "Adform", img: `${BASE_PATH}/images/platform-experience-images/Adform.png` },
//   ];

//   const line1 = platforms.slice(0, 10);
//   const line2 = platforms.slice(10, 20);
//   const line3 = platforms.slice(28);

//   return (
//     <section className="relative w-full overflow-hidden bg-white py-10">
//       <div className="pointer-events-none relative">
//         <Marquee items={line1} top="mt-[10px]" />
//         <Marquee items={line2} top="mt-[50px]" reverse />
//         <Marquee items={line3} top="mt-[50px]" />
//       </div>

//       {/* MARQUEE ANIMATIONS */}
//       <style jsx global>{`
//         @keyframes marquee {
//           from {
//             transform: translateX(0);
//           }
//           to {
//             transform: translateX(-50%);
//           }
//         }

//         @keyframes marquee-reverse {
//           from {
//             transform: translateX(-50%);
//           }
//           to {
//             transform: translateX(0);
//           }
//         }

//         .animate-marquee {
//           animation: marquee 60s linear infinite;
//           will-change: transform;
//         }

//         .animate-marquee-reverse {
//           animation: marquee-reverse 60s linear infinite;
//           will-change: transform;
//         }
//       `}</style>
//     </section>
//   );
// }

// /* ---------------- MARQUEE ---------------- */

// function Marquee({
//   items,
//   reverse,
//   top,
// }: {
//   items: { name: string; img: string }[];
//   reverse?: boolean;
//   top: string;
// }) {
//   const animation = reverse
//     ? "animate-marquee-reverse"
//     : "animate-marquee";

//   return (
//     <div className={`w-full overflow-hidden ${top}`}>
//       <div className={`flex w-max ${animation}`}>
//         {[0, 1].map((copy) => (
//           <div key={copy} className="flex gap-[70px] pr-[70px]">
//             {items.map((p, i) => (
//               <img
//                 key={`${copy}-${i}`}
//                 src={p.img}
//                 alt={p.name}
//                 className="
//                   w-[120px] h-[44px]
//                   object-contain
//                   grayscale
//                   opacity-[0.6]
//                   md:w-[110px] md:h-[40px]
//                   max-[768px]:w-[96px]
//                   max-[768px]:h-[34px]
//                 "
//               />
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Section7() {
const platforms = [
  { name: "DV360", img: `${BASE_PATH}/images/platform-experience-images/dv360.webp` },
  // { name: "Freshworks", img: `${BASE_PATH}/images/platform-experience-images/freshworks.webp` },
  { name: "Google Ads", img: `${BASE_PATH}/images/platform-experience-images/gads.webp` },
  { name: "Google Ad Manager", img: `${BASE_PATH}/images/platform-experience-images/googleadmanager.webp` },
  { name: "HUMAN", img: `${BASE_PATH}/images/platform-experience-images/HUMAN.webp` },
  { name: "Integral Ad Science", img: `${BASE_PATH}/images/platform-experience-images/integraladscience.webp` },
  { name: "LinkedIn Ads", img: `${BASE_PATH}/images/platform-experience-images/LinkedInAds.webp` },
  { name: "Magnite", img: `${BASE_PATH}/images/platform-experience-images/Magnite.webp` },
  { name: "Meta", img: `${BASE_PATH}/images/platform-experience-images/Meta.webp` },
  { name: "Microsoft Ads", img: `${BASE_PATH}/images/platform-experience-images/microsoftads.webp` },
  { name: "MOAT", img: `${BASE_PATH}/images/platform-experience-images/moat.webp` },

  { name: "OpenX", img: `${BASE_PATH}/images/platform-experience-images/openx.webp` },
  { name: "Operative", img: `${BASE_PATH}/images/platform-experience-images/operative.webp` },
  { name: "Pinterest", img: `${BASE_PATH}/images/platform-experience-images/pinterest.webp` },
  { name: "Pixalate", img: `${BASE_PATH}/images/platform-experience-images/pixelate.webp` },
  { name: "Quantcast", img: `${BASE_PATH}/images/platform-experience-images/quantcast.webp` },
  { name: "Reddit", img: `${BASE_PATH}/images/platform-experience-images/reddit.webp` },
  { name: "Salesforce", img: `${BASE_PATH}/images/platform-experience-images/sales-force.webp` },
  { name: "Search Ads 360", img: `${BASE_PATH}/images/platform-experience-images/search.webp` },
  { name: "Snapchat", img: `${BASE_PATH}/images/platform-experience-images/Snapchat.webp` },
  { name: "SpringServe", img: `${BASE_PATH}/images/platform-experience-images/SpringServe.webp` },

  { name: "The Media Trust", img: `${BASE_PATH}/images/platform-experience-images/themediatrust.webp` },
  { name: "The Trade Desk", img: `${BASE_PATH}/images/platform-experience-images/TheTradeDesk.webp` },
  { name: "TikTok", img: `${BASE_PATH}/images/platform-experience-images/tiktok.webp` },
  { name: "Verve", img: `${BASE_PATH}/images/platform-experience-images/verve.webp` },
  { name: "X Ads", img: `${BASE_PATH}/images/platform-experience-images/xads.webp` },
  { name: "Xandr", img: `${BASE_PATH}/images/platform-experience-images/xandr.webp` },
  { name: "Yelp", img: `${BASE_PATH}/images/platform-experience-images/YelpAds.webp` },
  { name: "YouTube", img: `${BASE_PATH}/images/platform-experience-images/youtubeads.webp` },
];


  const line1 = platforms.slice(0, 10);
  const line2 = platforms.slice(10, 20);
  const line3 = platforms.slice(20,30);

  return (
    <section className="relative w-full overflow-hidden bg-white py-10">
      <div className="pointer-events-none relative">
        <Marquee items={line1} top="mt-[10px]" />
        <Marquee items={line2} top="mt-[50px]" reverse />
        <Marquee items={line3} top="mt-[50px]" />
      </div>

      <style jsx global>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
          will-change: transform;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 60s linear infinite;
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
}: {
  items: { name: string; img: string }[];
  reverse?: boolean;
  top: string;
}) {
  const animation = reverse ? "animate-marquee-reverse" : "animate-marquee";

  return (
    <div className={`w-full overflow-hidden ${top}`}>
      <div className={`flex w-max ${animation}`}>
        {[0, 1].map((copy) => (
          <div key={copy} className="flex gap-[70px] pr-[70px]">
            {items.map((p, i) => (
              <div
                key={`${copy}-${i}`}
                className="
                  flex items-center justify-center
                  w-[140px] h-[56px]
                  md:w-[130px] md:h-[52px]
                  max-[768px]:w-[110px]
                  max-[768px]:h-[44px]
                "
              >
                <img
                  src={p.img}
                  alt={p.name}
                  className="
                    max-w-full max-h-full
                    object-contain

                    grayscale
                    opacity-[0.6]

                    transition duration-300
                    hover:opacity-100
                  "
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
