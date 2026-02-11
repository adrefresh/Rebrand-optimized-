
"use client";

import React from "react";
import { Target, Lightbulb } from "lucide-react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/* =========================================================
   CARD
========================================================= */
type CardProps = {
  title: string;
  desc: string;
  index: string;
  theme: "yellow" | "blue";
  icon: React.ReactNode;
};

function ExactCard({ title, desc, index, theme, icon }: CardProps) {
  const colors = {
    yellow: {
      plate: "bg-[#492391]",
      plateDark: "bg-[#D8F130]",
    },
    blue: {
      plate: "bg-[#492391]",
      plateDark: "bg-[#D8F130]",
    },
  };

  return (
    <div
      className="
        relative
        w-[92vw] max-w-[350px]
        sm:w-[320px]
        md:w-[340px]
        lg:w-[350px]
      "
    >
      {/* CARD BODY */}
      <div
        className="
          relative z-20
          min-h-[420px]
          sm:min-h-[440px]
          md:min-h-[460px]
          lg:min-h-[470px]
          rounded-[18px]
          bg-gradient-to-b from-[#f2f2f2] to-white
          px-6 sm:px-7 md:px-8
          py-8 sm:py-9 md:py-10
          shadow-[0_18px_35px_rgba(0,0,0,0.12)]
          flex flex-col items-center
        "
      >
        {/* ICON */}
        <div className="mb-5 sm:mb-6 flex h-[52px] sm:h-[60px] md:h-[64px] items-center justify-center text-gray-700">
          {icon}
        </div>

        {/* TITLE */}
        <h3 className="mb-4 text-center text-[16px] sm:text-[17px] md:text-[18px] font-extrabold tracking-widest text-gray-800">
          {title}
        </h3>

        {/* TEXT */}
        <p className="text-[15px] sm:text-[15.5px] md:text-[16px] leading-relaxed text-gray-500">
          {desc}
        </p>
      </div>

      {/* SIDE CURVES */}
      <div
        className={`
          absolute
          bottom-[60px] sm:bottom-[62px] md:bottom-[64px]
          left-[-14px] sm:left-[-16px] md:left-[-18px]
          h-[80px] sm:h-[86px] md:h-[92px]
          w-[22px] sm:w-[24px] md:w-[26px]
          rounded-r-full
          ${colors[theme].plate}
        `}
      />
      <div
        className={`
          absolute
          bottom-[60px] sm:bottom-[62px] md:bottom-[64px]
          right-[-14px] sm:right-[-16px] md:right-[-18px]
          h-[80px] sm:h-[86px] md:h-[92px]
          w-[22px] sm:w-[24px] md:w-[26px]
          rounded-l-full
          ${colors[theme].plate}
        `}
      />

      {/* BOTTOM BASE */}
      <div
        className={`
          absolute
          bottom-[22px] sm:bottom-[23px] md:bottom-[24px]
          left-1/2
          h-[44px] sm:h-[46px] md:h-[48px]
          w-[160px] sm:w-[175px] md:w-[190px]
          -translate-x-1/2
          rounded-b-[22px]
          ${colors[theme].plate}
          shadow-[inset_0_-6px_0_rgba(0,0,0,0.18)]
        `}
      />
    </div>
  );
}

/* =========================================================
   SECTION
========================================================= */
export default function MissionVisionSection() {
  return (
    <section
      className="
        relative
        flex w-full items-center justify-center
        overflow-hidden
        bg-[#F2F2F2]
        px-4 py-10
        sm:px-6 sm:py-10
        md:px-10 md:py-12
        lg:px-12 lg:py-16
      "
    >
      {/* PATTERN — FULL WIDTH & HEIGHT */}
      <div
        className="absolute inset-0 z-0 bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url('${basePath}/images/service-page-images-videos/GrayOutline.svg')`,
          opacity: 0.4,
        }}
      />

      {/* DIRECTIONAL SHADE OVERLAY */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.14), rgba(0,0,0,0.05))",
        }}
      />

      {/* LIGHT WASH */}
      <div className="absolute inset-0 z-[2] bg-white/15" />

      {/* CONTENT */}
      <div
        className="
          relative z-[10]
          flex flex-col gap-16
          sm:flex-row sm:flex-wrap sm:gap-24
          lg:gap-44
          justify-center
        "
      >
        <ExactCard
          title="MISSION"
          desc="Our mission is to deliver performance-driven digital marketing solutions using smart AI, automation, and expert execution. We focus on sustainable growth through tailored strategies, high-quality delivery, real-time support, and continuous improvement."
          index="01"
          theme="yellow"
          icon={<Target size={62} />}
        />

        <ExactCard
          title="VISION"
          desc="To be a trusted leader in digital marketing empowering brands to grow with AI-driven technology, skilled talent. We envision a future where businesses of all sizes can scale effortlessly through intelligent automation, transparent processes, and measurable, high-impact results."
          index="02"
          theme="blue"
          icon={<Lightbulb size={62} />}
        />
      </div>
    </section>
  );
}
