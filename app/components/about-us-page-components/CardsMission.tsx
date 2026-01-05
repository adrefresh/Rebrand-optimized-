// "use client";

// import { Target, Lightbulb } from "lucide-react";

// type CardProps = {
//   title: string;
//   description: string;
//   number: string;
//   color: "yellow" | "blue";
//   icon: React.ReactNode;
// };

// function InfoCard({
//   title,
//   description,
//   number,
//   color,
//   icon,
// }: CardProps) {
//   const styles = {
//     yellow: {
//       base: "bg-[#F5B335]",
//       badge: "bg-[#F5B335]",
//       shadow: "shadow-[0_18px_0_#E0A52F]",
//     },
//     blue: {
//       base: "bg-[#3B6EDC]",
//       badge: "bg-[#3B6EDC]",
//       shadow: "shadow-[0_18px_0_#2F5EC2]",
//     },
//   };

//   return (
//     <div className="relative w-[280px]">
//       {/* Card */}
//       <div
//         className={`
//           relative z-10
//           rounded-[18px]
//           bg-white
//           px-6 py-8
//           text-center
//           ${styles[color].shadow}
//         `}
//       >
//         {/* Icon */}
//         <div className="mb-4 flex justify-center text-gray-700">
//           {icon}
//         </div>

//         {/* Title */}
//         <h3 className="mb-2 text-[18px] font-extrabold uppercase tracking-wide">
//           {title}
//         </h3>

//         {/* Description */}
//         <p className="text-[14px] text-gray-500 leading-relaxed">
//           {description}
//         </p>
//       </div>

//       {/* Bottom Base */}
//       <div
//         className={`
//           absolute -bottom-4 left-1/2
//           h-[38px] w-[120px]
//           -translate-x-1/2
//           rounded-b-[16px]
//           ${styles[color].base}
//         `}
//       />

//       {/* Number Badge */}
//       <div
//         className={`
//           absolute -bottom-6 left-1/2
//           z-20
//           flex h-[46px] w-[46px]
//           -translate-x-1/2
//           items-center justify-center
//           rounded-full
//           text-[14px] font-bold text-white
//           ${styles[color].badge}
//         `}
//       >
//         {number}
//       </div>
//     </div>
//   );
// }

// export default function MissionVision() {
//   return (
//     <section className="flex flex-wrap justify-center gap-40 py-30 bg-[#F6F7F9]">
//       <InfoCard
//         title="Mission"
//         description="Our mission is to deliver performance-driven digital marketing solutions using smart AI, automation, and expert execution. We focus on sustainable growth through tailored strategies, high-quality delivery, real-time support, and continuous improvement."
//         number="01"
//         color="yellow"
//         icon={<Target size={52} />}
        
//       />

//       <InfoCard
//         title="Vision"
//         description="To be a trusted leader in digital marketing empowering brands to grow with AI-driven technology, skilled talent, We envision a future where businesses of all sizes can scale effortlessly through intelligent automation, transparent processes, and measurable, high-impact results. "
//         number="02"
//         color="blue"
//         icon={<Lightbulb size={52} />}
//       />
//     </section>
//   );
// }

// "use client";

// import { Target, Lightbulb } from "lucide-react";

// type CardProps = {
//   title: string;
//   desc: string;
//   index: string;
//   theme: "yellow" | "blue";
//   icon: React.ReactNode;
// };

// const themeMap = {
//   yellow: {
//     plate: "bg-[#F4B22C]",
//     plateDark: "bg-[#E0A326]",
//   },
//   blue: {
//     plate: "bg-[#3F6FD6]",
//     plateDark: "bg-[#315FC0]",
//   },
// };

// function ExactCard({ title, desc, index, theme, icon }: CardProps) {
//   return (
    
//     <div >
//     <div className="relative w-[350px]">
//       {/* ================= CARD ================= */}
//       <div className="relative z-20 rounded-[18px] bg-gradient-to-b from-[#f3f3f3] to-white px-8 py-10 shadow-[0_18px_35px_rgba(0,0,0,0.12)]">
//         {/* icon */}
//         <div className="mb-5 flex justify-center text-gray-700">
//           {icon}
//         </div>

//         {/* title */}
//         <h3 className="mb-3 text-center text-[18px] font-extrabold tracking-widest text-gray-800">
//           {title}
//         </h3>

//         {/* desc */}
//         <p className="text-center text-[14px] leading-relaxed text-gray-500">
//           {desc}
//         </p>
//       </div>

//       {/* ================= SIDE CURVES ================= */}
//       <div
//         className={`
//           absolute bottom-[38px] left-[-18px]
//           h-[92px] w-[26px]
//           rounded-r-full
//           ${themeMap[theme].plate}
//         `}
//       />
//       <div
//         className={`
//           absolute bottom-[38px] right-[-18px]
//           h-[92px] w-[26px]
//           rounded-l-full
//           ${themeMap[theme].plate}
//         `}
//       />

//       {/* ================= BOTTOM PLATE ================= */}
//       <div
//         className={`
//           absolute bottom-0 left-1/2
//           h-[48px] w-[400px]
//           -translate-x-1/2
//           rounded-b-[22px]
//           ${themeMap[theme].plate}
//           shadow-[inset_0_-6px_0_rgba(0,0,0,0.12)]
//         `}
//       />

//       {/* ================= NUMBER BADGE ================= */}
//       <div
//         className={`
//           absolute bottom-[-14px] left-1/2
//           z-30
//           h-[36px] w-[400px]
//           -translate-x-1/2
//           rounded-[12px]
//           ${themeMap[theme].plateDark}
//           flex items-center justify-center
//           text-[14px] font-bold text-white
//         `}
//       >
//         {index}
//       </div>
//     </div>
//     </div>
//   );
 
// }


// export default function MissionVisionExact() {
//   return (
//     <section className="flex flex-wrap justify-center gap-46 bg-black py-14">
//       <ExactCard
//         title="MISSION"
//         desc="Our mission is to deliver performance-driven digital marketing solutions using smart AI, automation, and expert execution. We focus on sustainable growth through tailored strategies, high-quality delivery, real-time support, and continuous improvement. "
//         index="01"
//         theme="yellow"
//         icon={<Target size={62} />}
//       />

//       <ExactCard
//         title="VISION"
//         desc=" To be a trusted leader in digital marketing empowering brands to grow with AI-driven technology, skilled talent, and data-backed strategies. We envision a future where businesses of all sizes can scale effortlessly through intelligent automation, transparent processes, and measurable, high-impact results."
//         index="02"
//         theme="blue"
//         icon={<Lightbulb size={62} />}
//       />
//     </section>
   
//   );
// }

// "use client";

// import { Target, Lightbulb } from "lucide-react";

// const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

// /* =========================================================
//    EXACT CARD (INLINE — NOT SEPARATE FILE)
// ========================================================= */
// type CardProps = {
//   title: string;
//   desc: string;
//   index: string;
//   theme: "yellow" | "blue";
//   icon: React.ReactNode;
// };

// function ExactCard({ title, desc, index, theme, icon }: CardProps) {
//   const colors = {
//     yellow: {
//       plate: "bg-[#F4B22C]",
//       plateDark: "bg-[#E0A326]",
//     },
//     blue: {
//       plate: "bg-[#3F6FD6]",
//       plateDark: "bg-[#315FC0]",
//     },
//   };

//   return (
//     <div className="relative w-[290px]">
//       {/* CARD BODY */}
//       <div className="relative z-20 rounded-[18px] bg-gradient-to-b from-[#f2f2f2] to-white px-8 py-10 shadow-[0_18px_35px_rgba(0,0,0,0.12)]">
//         <div className="mb-5 flex justify-center text-gray-700">
//           {icon}
//         </div>

//         <h3 className="mb-3 text-center text-[18px] font-extrabold tracking-widest text-gray-800">
//           {title}
//         </h3>

//         <p className="text-center text-[14px] leading-relaxed text-gray-500">
//           {desc}
//         </p>
//       </div>

//       {/* SIDE CURVES */}
//       <div
//         className={`absolute bottom-[38px] left-[-18px] h-[92px] w-[26px] rounded-r-full ${colors[theme].plate}`}
//       />
//       <div
//         className={`absolute bottom-[38px] right-[-18px] h-[92px] w-[26px] rounded-l-full ${colors[theme].plate}`}
//       />

//       {/* BOTTOM BASE */}
//       <div
//         className={`absolute bottom-0 left-1/2 h-[48px] w-[190px] -translate-x-1/2 rounded-b-[22px] ${colors[theme].plate} shadow-[inset_0_-6px_0_rgba(0,0,0,0.15)]`}
//       />

//       {/* NUMBER BADGE */}
//       <div
//         className={`absolute bottom-[-14px] left-1/2 z-30 h-[36px] w-[64px] -translate-x-1/2 rounded-[12px] ${colors[theme].plateDark} flex items-center justify-center text-[14px] font-bold text-white`}
//       >
//         {index}
//       </div>
//     </div>
//   );
// }

// /* =========================================================
//    SECTION — SAME FILE
// ========================================================= */
// export default function MissionVisionSection() {
//   return (
//     <section
//       className="
//         relative flex w-full items-center justify-center
//         overflow-hidden bg-[#dadada]
//         px-5 py-5 sm:px-4 sm:py-8
//         md:px-8 md:py-10 lg:px-8 lg:py-14
//       "
//     >
//       {/* EXACT BACKGROUND PATTERN */}
//       <div
//         className="absolute inset-0 z-0"
//         style={{
//           backgroundImage: `url('${basePath}/images/service-page-images-videos/GrayOutline.svg')`,
//           backgroundRepeat: "repeat",
//           backgroundPosition: "0 0",
//           backgroundSize: "auto",
//           opacity: 0.35,
//         }}
//       />

//       {/* CONTENT */}
//       <div className="relative z-[2] flex flex-wrap justify-center gap-46">
//         <ExactCard
//           title="MISSION"
//           desc="Our mission is to deliver performance-driven digital marketing solutions using smart AI, automation, and expert execution. We focus on sustainable growth through tailored strategies, high-quality delivery, real-time support, and continuous improvement."
//           index="01"
//           theme="yellow"
//           icon={<Target size={62} />}
//         />

//         <ExactCard
//           title="VISION"
//           desc="To be a trusted leader in digital marketing empowering brands to grow with AI-driven technology, skilled talent. We envision a future where businesses of all sizes can scale effortlessly through intelligent automation, transparent processes, and measurable, high-impact results."
//           index="02"
//           theme="blue"
//           icon={<Lightbulb size={62} />}
//         />
//       </div>
//     </section>
//   );
// }

// "use client";

// import { Target, Lightbulb } from "lucide-react";

// const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

// /* =========================================================
//    CARD
// ========================================================= */
// type CardProps = {
//   title: string;
//   desc: string;
//   index: string;
//   theme: "yellow" | "blue";
//   icon: React.ReactNode;
// };

// function ExactCard({ title, desc, index, theme, icon }: CardProps) {
//   const colors = {
//     yellow: {
//       plate: "bg-[#F4B22C]",
//       plateDark: "bg-[#E0A326]",
//     },
//     blue: {
//       plate: "bg-[#3F6FD6]",
//       plateDark: "bg-[#315FC0]",
//     },
//   };

//   return (
//     <div className="relative w-[350px]">
//       {/* CARD BODY */}
//       <div
//         className="
//           relative z-20
//           min-h-[470px]          /* 🔑 FORCE SAME HEIGHT */
//           rounded-[18px]
//           bg-gradient-to-b from-[#f2f2f2] to-white
//           px-8 py-10
//           shadow-[0_18px_35px_rgba(0,0,0,0.12)]
//           flex flex-col items-center
//         "
//       >
//         {/* ICON */}
//         <div className="mb-6 flex h-[64px] items-center justify-center text-gray-700">
//           {icon}
//         </div>

//         {/* TITLE */}
//         <h3 className="mb-4 text-center text-[18px] font-extrabold tracking-widest text-gray-800">
//           {title}
//         </h3>

//         {/* TEXT */}
//         <p className="text-center text-[14px] leading-relaxed text-gray-500">
//           {desc}
//         </p>
//       </div>

//       {/* SIDE CURVES — LOCKED */}
//       <div
//         className={`
//           absolute bottom-[64px]
//           left-[-18px]
//           h-[92px] w-[26px]
//           rounded-r-full
//           ${colors[theme].plate}
//         `}
//       />
//       <div
//         className={`
//           absolute bottom-[64px]
//           right-[-18px]
//           h-[92px] w-[26px]
//           rounded-l-full
//           ${colors[theme].plate}
//         `}
//       />

//       {/* BOTTOM BASE — SAME POSITION FOR ALL */}
//       <div
//         className={`
//           absolute bottom-[24px]
//           left-1/2
//           h-[48px] w-[190px]
//           -translate-x-1/2
//           rounded-b-[22px]
//           ${colors[theme].plate}
//           shadow-[inset_0_-6px_0_rgba(0,0,0,0.18)]
//         `}
//       />

//       {/* NUMBER BADGE — CENTERED */}
//       <div
//         className={`
//           absolute bottom-0
//           left-1/2
//           z-30
//           h-[36px] w-[64px]
//           -translate-x-1/2
//           rounded-[12px]
//           ${colors[theme].plateDark}
//           flex items-center justify-center
//           text-[14px] font-bold text-white
//         `}
//       >
//         {index}
//       </div>
//     </div>
//   );
// }

// /* =========================================================
//    SECTION
// ========================================================= */
// export default function MissionVisionSection() {
//   return (
//     <section
//       className="
//         relative flex w-full items-center justify-center
//         overflow-hidden bg-[#dadada]
//         px-5 py-10
//         sm:px-6 sm:py-12
//         md:px-10 md:py-16
//         lg:px-12 lg:py-20
//       "
//     >
//       {/* BACKGROUND PATTERN */}
//       <div
//         className="absolute inset-0 z-0"
//         style={{
//           backgroundImage: `url('${basePath}/images/service-page-images-videos/GrayOutline.svg')`,
//           backgroundRepeat: "repeat",
//           backgroundPosition: "0 0",
//           backgroundSize: "auto",
//           opacity: 0.35,
//         }}
//       />

//       {/* CONTENT */}
//       <div className="relative z-[2] flex flex-wrap justify-center gap-44">
//         <ExactCard
//           title="MISSION"
//           desc="Our mission is to deliver performance-driven digital marketing solutions using smart AI, automation, and expert execution. We focus on sustainable growth through tailored strategies, high-quality delivery, real-time support, and continuous improvement."
//           index="01"
//           theme="yellow"
//           icon={<Target size={62} />}
//         />

//         <ExactCard
//           title="VISION"
//           desc="To be a trusted leader in digital marketing empowering brands to grow with AI-driven technology, skilled talent. We envision a future where businesses of all sizes can scale effortlessly through intelligent automation, transparent processes, and measurable, high-impact results."
//           index="02"
//           theme="blue"
//           icon={<Lightbulb size={62} />}
//         />
//       </div>
//     </section>
//   );
// }
"use client";

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
      plate: "bg-[#F4B22C]",
      plateDark: "bg-[#E0A326]",
    },
    blue: {
      plate: "bg-[#3F6FD6]",
      plateDark: "bg-[#315FC0]",
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
        <p className="text-center text-[13px] sm:text-[13.5px] md:text-[14px] leading-relaxed text-gray-500">
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

      {/* NUMBER BADGE */}
      <div
        className={`
          absolute
          bottom-0
          left-1/2
          z-30
          h-[32px] sm:h-[34px] md:h-[36px]
          w-[56px] sm:w-[60px] md:w-[64px]
          -translate-x-1/2
          rounded-[12px]
          ${colors[theme].plateDark}
          flex items-center justify-center
          text-[13px] sm:text-[14px]
          font-bold text-white
        `}
      >
        {index}
      </div>
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
        relative flex w-full items-center justify-center
        overflow-hidden bg-[#dadada]
        px-4 py-10
        sm:px-6 sm:py-10
        md:px-10 md:py-12
        lg:px-12 lg:py-16
              "
    >
      {/* BACKGROUND PATTERN */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('${basePath}/images/service-page-images-videos/GrayOutline.svg')`,
          backgroundRepeat: "repeat",
          backgroundPosition: "0 0",
          backgroundSize: "800px",
          opacity: 0.35,
        }}
      />

      {/* CONTENT */}
      <div
        className="
          relative z-[2]
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
