
// "use client";
// import { useRouter } from "next/navigation";

// export default function AdOpsContactHero2() {
//   const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
//   const router = useRouter();

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

//         bg-[linear-gradient(135deg,#813DFF_0%,#813DFF_100%)]
//       "
//     >
//       {/* LEFT PURPLE LOGO */}
//       <div
//         className="
//           pointer-events-none
//           absolute
//           top-[-17px]
//           left-[50px]
//           z-[1]
//           h-[70vh]
//           w-[32vw]
//           opacity-[0.18]

//           max-[1280px]:w-[38vw]
//           max-[1024px]:w-[45vw]
//           max-[900px]:left-0
//           max-[900px]:w-full
//           max-[900px]:h-[40%]
//           max-[900px]:opacity-[0.35]
//         "
//         style={{
//           backgroundColor: "#492391",
//           WebkitMaskImage: `url(${basePath}/images/service-page-images-videos/IconmarkVv.svg)`,
//           WebkitMaskRepeat: "no-repeat",
//           WebkitMaskSize: "contain",
//           WebkitMaskPosition: "center",
//           maskImage: `url(${basePath}/images/service-page-images-videos/IconmarkVv.svg)`,
//           maskRepeat: "no-repeat",
//           maskSize: "contain",
//           maskPosition: "center",
//         }}
//       />

//       {/* RIGHT PURPLE OUTLINE */}
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
//           backgroundImage: `url(${basePath}/images/service-page-images-videos/VvOutline.svg)`,
//         }}
//       />

//       {/* CONTENT */}
//       <div className="relative z-[5] mx-auto max-w-[940px]">
//         <h1
//           className="
//             mb-[18px]
//             text-[44px]
//             font-black
//             text-white
//             mr-[-50%]

//             max-[1280px]:text-[40px]
//             max-[1024px]:text-[36px]
//             max-[900px]:mr-0
//             max-[768px]:text-[32px]
//             max-[600px]:text-[28px]
//           "
//         >
//           Simplify Your Ad Operations <br /> with Expert Support
//         </h1>

//         <p
//           className="
//             mb-[28px]
//             text-[18px]
//             text-white
//             opacity-95
//             mr-[-50%]

//             max-[1024px]:text-[17px]
//             max-[900px]:mr-0
//             max-[768px]:text-[16px]
//             max-[600px]:text-[15px]
//           "
//         >
//           Talk to our specialists to streamline execution,
//           <br />
//           improve accuracy, and ensure your advertising operations run smoothly
//           at scale.
//         </p>

//         <button
//           onClick={() => router.push("/contact-us")}
//           className="
//             inline-flex items-center justify-center
//             rounded-full
//             border border-black
//             px-[36px] py-[14px]
//             text-[17px] text-black
//             bg-transparent
//             transition
//             hover:bg-white

//             mr-[-50%]

//             max-[1024px]:mr-[-20%]
//             max-[900px]:mr-0
//             max-[900px]:mx-auto

//             max-[600px]:px-[28px]
//             max-[600px]:py-[12px]
//             max-[600px]:text-[16px]
//           "
//         >
//           Request a Consultation
//         </button>
//       </div>
//     </section>
//   );
// }
// "use client";
import { useRouter } from "next/navigation";

export default function AdOpsContactHero2() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const router = useRouter();

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

        bg-[linear-gradient(135deg,#813DFF_0%,#813DFF_100%)]
      "
    >
      {/* LEFT PURPLE LOGO — FIXED ALIGNMENT */}
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
          backgroundColor: "#492391",
          WebkitMaskImage: `url(${basePath}/images/service-page-images-videos/IconmarkVv.svg)`,
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "contain",
          WebkitMaskPosition: "center",
          maskImage: `url(${basePath}/images/service-page-images-videos/IconmarkVv.svg)`,
          maskRepeat: "no-repeat",
          maskSize: "contain",
          maskPosition: "center",
        }}
      />

      {/* RIGHT PURPLE OUTLINE */}
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
          backgroundImage: `url(${basePath}/images/service-page-images-videos/VvOutline.svg)`,
        }}
      />

      {/* CONTENT */}
      <div className="relative z-[5] mx-auto max-w-[940px]">
        <h1
          className="
            mb-[18px]
            text-[44px]
            font-black
            text-white
            mr-[-50%]

            max-[1280px]:text-[40px]
            max-[1024px]:text-[36px]
            max-[900px]:mr-0
            max-[768px]:text-[32px]
            max-[600px]:text-[28px]
          "
        >
          Simplify Your Ad Operations <br /> with Expert Support
        </h1>

        <p
          className="
            mb-[28px]
            text-[18px]
            text-white
            opacity-95
            mr-[-50%]

            max-[1024px]:text-[17px]
            max-[900px]:mr-0
            max-[768px]:text-[16px]
            max-[600px]:text-[15px]
          "
        >
          Talk to our specialists to streamline execution,
          <br />
          improve accuracy, and ensure your advertising operations run smoothly
          at scale.
        </p>

        <button
          onClick={() => router.push("/contact-us")}
          className="
            inline-flex items-center justify-center
            rounded-full
            border border-black
            px-[36px] py-[14px]
            text-[17px] text-black
            bg-transparent
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
        </button>
      </div>
    </section>
  );
}