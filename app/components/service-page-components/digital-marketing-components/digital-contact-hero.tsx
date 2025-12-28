"use client";

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

        bg-[linear-gradient(135deg,#B9CF29_0%,#9BAD23_100%)]
      "
    >
      {/* LEFT LIME LOGO */}
      <div
        className="
          pointer-events-none
          absolute
          top-[25px]
          left-[50px]
          z-[1]
          h-[70vh]
          w-[32vw]
          bg-contain
          bg-no-repeat
          bg-center
          opacity-[0.18]

          max-[900px]:w-full
          max-[900px]:h-[40%]
          max-[900px]:opacity-[0.4]
        "
        style={{
          backgroundImage:
            "url(/rebrand/images/service-page-images-videos/IconmarkLimeYellow.png)",
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

          max-[900px]:top-auto
          max-[900px]:bottom-0
          max-[900px]:translate-y-0
          max-[900px]:h-[40%]
          max-[900px]:opacity-[0.28]
        "
        style={{
          backgroundImage:
            "url(/rebrand/images/service-page-images-videos/Lmoutline.svg)",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-[5] mx-auto max-w-[940px]">
        <h1
          className="
            mb-[18px]
            text-[52px]
            font-black
            text-[#1c1c1c]
            mr-[-50%]

            max-[900px]:text-[36px]
            max-[600px]:text-[28px]
          "
        >
        Precision and Performance Through Transformative Advertising Operations 
        </h1>

        <p
          className="
            mb-[28px]
            text-[18px]
            text-[#1c1c1c]
            opacity-95
            mr-[-50%]
          "
        >
          Get expert media operations services to improve campaign effectiveness
          <br />
          and overall ad performance.
        </p>

        <button
          className="
            rounded-full
            border
            border-black
            px-[36px]
            py-[14px]
            text-[17px]
            text-black
            transition
            hover:bg-white
            mr-[-50%]
          "
        >
          Request a Consultation
        </button>
      </div>
    </section>
  );
}
