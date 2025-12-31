"use client";

export default function PrecisionSection() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH;

  return (
    <section
      className="
        relative
        min-h-[70vh]
        w-full
        flex
        justify-center
        text-center
        px-8 py-15
        max-[900px]:px-8 max-[900px]:py-16
        overflow-hidden
        bg-[#ededed]
       
      "
    >
      {/* OPACITY OVERLAY */}
      <div className="absolute inset-0 bg-[rgba(218,218,218,0.7)] z-0" />

      {/* PATTERN MASK LAYER */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundColor: "#cfcfcf",
          WebkitMaskImage: `url(${basePath}/images/contact-us-images-videos/GrayOutline.svg)`,
          WebkitMaskRepeat: "repeat",
          WebkitMaskSize: "800px auto",
          maskImage: `url(${basePath}/images/contact-us-images-videos/GrayOutline.svg)`,
          maskRepeat: "repeat",
          maskSize: "700px auto",
          opacity: 1.15,
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-[1100px] mx-auto flex flex-col justify-center">
        <h1
          className="
            text-black
            font-black
            text-[4rem]
            leading-[1.2]
            mb-3
            mt-7
            -mt-[1%]
            max-[900px]:text-[32px]
          "
        >
          Precision and Profit with <br />
          Transformative Media Operations
        </h1>

        <p
          className="
            text-black
            text-[28px]
            leading-[1.6]
            max-w-[900px]
            mx-auto
            max-[900px]:text-[18px]
            max-[900px]:max-w-[95%]
          "
        >
          Effective management of advertising operations is crucial to maximizing
          revenue and achieving campaign success. MediaMint’s Media operations
          services cater to publishers
        </p>
      </div>
    </section>
  );
}
