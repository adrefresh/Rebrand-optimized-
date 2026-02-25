
// "use client";
// import Link from "next/link";

// export default function AdOpsContactHero2() {
//   return (
//     <section
//       className="
//         relative
//         w-screen
//         ml-[calc(50%-50vw)]
//         overflow-hidden
//         text-center
//         px-5
//         py-[90px]
//         max-[1024px]:py-[80px]
//         max-[768px]:py-[70px]
//         max-[480px]:py-[60px]

//         bg-[linear-gradient(135deg,#B9CF29_0%,#9BAD23_100%)]
//       "
//     >
//       {/* LEFT LIME LOGO */}
//       <div
//         className="
//           pointer-events-none
//           absolute
//           top-[-17px]
//           left-[50px]
//           z-[1]
//           h-[70vh]
//           w-[32vw]
//           bg-contain
//           bg-no-repeat
//           bg-center
//           opacity-[0.18]

//           max-[1280px]:w-[38vw]
//           max-[1024px]:w-[45vw]
//           max-[900px]:left-0
//           max-[900px]:w-full
//           max-[900px]:h-[40%]
//           max-[900px]:opacity-[0.35]
//         "
//         style={{
//           backgroundImage:
//             "url(/images/service-page-images-videos/IconmarkLimeYellow.png)",
//         }}
//       />

//       {/* RIGHT LIME OUTLINE */}
//       <div
//         className="
//           pointer-events-none
//           absolute
//           top-1/2
//           right-[-10%]
//           z-[1]
//           h-full
//           w-full
//           -translate-y-1/2
//           bg-no-repeat
//           bg-right
//           bg-[length:70%]
//           opacity-[0.15]

//           max-[1280px]:bg-[length:80%]
//           max-[1024px]:bg-[length:90%]
//           max-[900px]:top-auto
//           max-[900px]:bottom-0
//           max-[900px]:translate-y-0
//           max-[900px]:h-[40%]
//           max-[900px]:opacity-[0.28]
//         "
//         style={{
//           backgroundImage:
//             "url(/images/service-page-images-videos/Lmoutline.svg)",
//         }}
//       />

//       {/* CONTENT */}
//       <div className="relative z-[5] mx-auto max-w-[940px]">
//         <h1
//           className="
//             mb-[18px]
//             text-[44px]
//             font-black
//             text-[#1c1c1c]
//             mr-[-50%]

//             max-[1280px]:text-[40px]
//             max-[1024px]:text-[36px]
//             max-[900px]:mr-0
//             max-[768px]:text-[32px]
//             max-[600px]:text-[28px]
//           "
//         >
//               Let’s Build Smarter <br /> Digital Growth Together 

//         </h1>

//         <p
//           className="
//             mb-[28px]
//             text-[18px]
//             text-[#1c1c1c]
//             opacity-95
//             mr-[-50%]

//             max-[1024px]:text-[17px]
//             max-[900px]:mr-0
//             max-[768px]:text-[16px]
//             max-[600px]:text-[15px]
//           "
//         >

// Connect with our experts to discuss your goals, challenges, and the <br />right digital strategies for measurable, scalable results. 
//         </p>

//         <Link
//   href="/contact-us"
//   className="
//     inline-flex items-center justify-center
//     rounded-full
//     border border-black
//     px-[36px] py-[14px]
//     text-[17px] text-black
//     transition
//     hover:bg-white

//     mr-[-50%]

//     max-[1024px]:mr-[-20%]
//     max-[900px]:mr-0
//     max-[900px]:mx-auto

//     max-[600px]:px-[28px]
//     max-[600px]:py-[12px]
//     max-[600px]:text-[16px]
//   "
// >
//   Request a Consultation
// </Link>
//       </div>
//     </section>
//   );
// }
"use client";
import Link from "next/link";

export default function AdOpsContactHero2() {
  return (
    <section
      className="
        relative
        w-screen
        ml-[calc(50%-50vw)]
        overflow-hidden
        text-center
        px-5
        py-[90px]
        max-[1024px]:py-[80px]
        max-[768px]:py-[70px]
        max-[480px]:py-[60px]

        bg-[linear-gradient(135deg,#B9CF29_0%,#9BAD23_100%)]
      "
    >
      {/* LEFT LIME LOGO — FIXED ALIGNMENT */}
      <div
        className="
          pointer-events-none
          absolute
          top-0
          bottom-0
          left-[50px]
          z-[1]
          w-[32vw]
          opacity-[0.18]

          max-[1280px]:w-[38vw]
          max-[1024px]:w-[45vw]
          max-[900px]:left-0
          max-[900px]:w-full
          max-[900px]:h-[40%]
          max-[900px]:opacity-[0.35]
        "
        style={{
          backgroundImage:
            "url(/images/service-page-images-videos/IconmarkLimeYellow.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      />

      {/* RIGHT LIME OUTLINE */}
      <div
        className="
          pointer-events-none
          absolute
          top-1/2
          right-[-10%]
          z-[1]
          h-full
          w-full
          -translate-y-1/2
          bg-no-repeat
          bg-right
          bg-[length:70%]
          opacity-[0.15]

          max-[1280px]:bg-[length:80%]
          max-[1024px]:bg-[length:90%]
          max-[900px]:top-auto
          max-[900px]:bottom-0
          max-[900px]:translate-y-0
          max-[900px]:h-[40%]
          max-[900px]:opacity-[0.28]
        "
        style={{
          backgroundImage:
            "url(/images/service-page-images-videos/Lmoutline.svg)",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-[5] mx-auto max-w-[940px]">
        <h1
          className="
            mb-[18px]
            text-[44px]
            font-black
            text-[#1c1c1c]
            mr-[-50%]

            max-[1280px]:text-[40px]
            max-[1024px]:text-[36px]
            max-[900px]:mr-0
            max-[768px]:text-[32px]
            max-[600px]:text-[28px]
          "
        >
          Let’s Build Smarter <br /> Digital Growth Together
        </h1>

        <p
          className="
            mb-[28px]
            text-[18px]
            text-[#1c1c1c]
            opacity-95
            mr-[-50%]

            max-[1024px]:text-[17px]
            max-[900px]:mr-0
            max-[768px]:text-[16px]
            max-[600px]:text-[15px]
          "
        >
          Connect with our experts to discuss your goals, challenges, and the <br />
          right digital strategies for measurable, scalable results.
        </p>

        <Link
          href="/contact-us"
          className="
            inline-flex items-center justify-center
            rounded-full
            border border-black
            px-[36px] py-[14px]
            text-[17px] text-black
            transition
            hover:bg-white

            mr-[-50%]

            max-[1024px]:mr-[-20%]
            max-[900px]:mr-0
            max-[900px]:mx-auto

            max-[600px]:px-[28px]
            max-[600px]:py-[12px]
            max-[600px]:text-[16px]
          "
        >
          Request a Consultation
        </Link>
      </div>
    </section>
  );
}