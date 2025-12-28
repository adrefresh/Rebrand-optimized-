"use client";

export default function AdOpsContactHero2() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <section
      className="
        relative
        w-screen
        overflow-hidden
        text-center
        py-[80px]
        px-10
        mb-[-11.6%]
      "
      style={{
        marginLeft: "calc(50% - 50vw)",
        background:
          "linear-gradient(135deg, #813DFF 0%, #813DFF 100%)",
      }}
    >
      {/* LEFT MASK LOGO */}
      <div
        className="
          absolute
          top-[-18px]
          left-[50px]
          w-[32vw]
          h-[85vh]
          z-[1]
          pointer-events-none
          opacity-[0.15]
          max-[900px]:w-full
          max-[900px]:h-[40%]
          max-[900px]:opacity-[0.16]
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

      {/* RIGHT OUTLINE PATTERN */}
      <div
        className="
          absolute
          top-1/2
         
          right-[-4%]
          -translate-y-1/2
          w-[95%]
          h-full
          z-[1]
          pointer-events-none
          opacity-[0.36]

          max-[900px]:top-auto
          max-[900px]:bottom-0
          max-[900px]:translate-y-0
          max-[900px]:w-full
          max-[900px]:h-[40%]
          max-[900px]:opacity-[0.28]
        "
        style={{
          backgroundImage: `url(${basePath}/images/service-page-images-videos/VvOutline.svg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "70%",
          backgroundPosition: "center right",
         
        }}
      />

      {/* CONTENT */}
      <div className="relative z-[5] max-w-[940px] mx-auto">
        <h1
          className="
            text-white
            font-black
            mb-[18px]
            mr-[-50%]

            text-[52px]
            max-[900px]:text-[36px]
            max-[600px]:text-[28px]
          "
        >
          Let’s Refine Your Advertising
          <br />
          Strategy for Greater Returns
        </h1>

        <p
          className="
            text-white
            opacity-[0.95]
            mb-[28px]
            mr-[-50%]
            text-[18px]
          "
        >
          Get expert media operations services to improve campaign effectiveness
          <br />
          and overall ad performance.
        </p>

        <button
          className="
            mr-[-50%]
            px-[36px]
            py-[14px]
            text-[17px]
            rounded-[40px]
            border
            border-black
            text-black
            bg-transparent
            transition
            hover:bg-white
          "
        >
          Request a Consultation
        </button>
      </div>
    </section>
  );
}
