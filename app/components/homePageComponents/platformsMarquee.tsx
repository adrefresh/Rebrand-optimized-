

"use client";
import Image from "next/image";
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Section7() {
const platforms = [
  { name: "logo1", img: `${BASE_PATH}/images/platform-experience-images/logo1.png` },
  { name: "logo2", img: `${BASE_PATH}/images/platform-experience-images/logo2.png` },
  { name: "logo3", img: `${BASE_PATH}/images/platform-experience-images/logo3.png` },
  { name: "logo4", img: `${BASE_PATH}/images/platform-experience-images/logo4.png` },

  { name: "logo5", img: `${BASE_PATH}/images/platform-experience-images/logo5.png` },
  { name: "logo6", img: `${BASE_PATH}/images/platform-experience-images/logo6.png` },
  { name: "logo7", img: `${BASE_PATH}/images/platform-experience-images/logo7.png` },

  { name: "logo8", img: `${BASE_PATH}/images/platform-experience-images/logo8.png` },
  { name: "logo9", img: `${BASE_PATH}/images/platform-experience-images/logo9.png` },
  { name: "logo10", img: `${BASE_PATH}/images/platform-experience-images/logo10.png` },
  { name: "logo11", img: `${BASE_PATH}/images/platform-experience-images/logo11.png` },

  { name: "logo12", img: `${BASE_PATH}/images/platform-experience-images/logo12.png` },
  { name: "logo13", img: `${BASE_PATH}/images/platform-experience-images/logo13.png` },
  { name: "logo14", img: `${BASE_PATH}/images/platform-experience-images/logo14.png` },

  { name: "logo15", img: `${BASE_PATH}/images/platform-experience-images/logo15.png` },
  { name: "logo16", img: `${BASE_PATH}/images/platform-experience-images/logo16.png` },
  { name: "logo17", img: `${BASE_PATH}/images/platform-experience-images/logo17.png` },
  { name: "logo18", img: `${BASE_PATH}/images/platform-experience-images/logo18.png` },
    { name: "logo35", img: `${BASE_PATH}/images/platform-experience-images/pmatic.png` },

  { name: "logo19", img: `${BASE_PATH}/images/platform-experience-images/logo19.png` },
  { name: "logo20", img: `${BASE_PATH}/images/platform-experience-images/logo20.png` },
  { name: "logo21", img: `${BASE_PATH}/images/platform-experience-images/logo21.png` },
  { name: "logo22", img: `${BASE_PATH}/images/platform-experience-images/logo22.png` },

  { name: "logo23", img: `${BASE_PATH}/images/platform-experience-images/logo23.png` },
  { name: "logo24", img: `${BASE_PATH}/images/platform-experience-images/logo24.png` },
  { name: "logo25", img: `${BASE_PATH}/images/platform-experience-images/logo25.png` },
  { name: "logo26", img: `${BASE_PATH}/images/platform-experience-images/logo26.png` },

  { name: "logo27", img: `${BASE_PATH}/images/platform-experience-images/logo27.png` },
  { name: "logo28", img: `${BASE_PATH}/images/platform-experience-images/logo28.png` },
  { name: "logo29", img: `${BASE_PATH}/images/platform-experience-images/logo29.png` },
  { name: "logo30", img: `${BASE_PATH}/images/platform-experience-images/logo30.png` },
   { name: "logo31", img: `${BASE_PATH}/images/platform-experience-images/logo31.png` },
  { name: "logo32", img: `${BASE_PATH}/images/platform-experience-images/logo32.png` },
  { name: "logo33", img: `${BASE_PATH}/images/platform-experience-images/logo33.png` },
  { name: "logo34", img: `${BASE_PATH}/images/platform-experience-images/logo34.png` },
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
                <div className="relative w-[120px] h-[60px]">
  <Image
    src={p.img}
    alt={p.name}
    fill
    className="
      object-contain
      grayscale
      opacity-[0.6]
      transition-opacity duration-300
      hover:opacity-100
    "
  />
</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
