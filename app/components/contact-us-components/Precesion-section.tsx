

"use client";

export default function PrecisionSection() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH;

  return (
    <section
      className="
        relative
        min-h-[65vh]
        w-full
        flex
        justify-center
        text-center
        px-8 py-8
        max-[900px]:px-8 max-[900px]:py-8
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
          WebkitMaskImage: `url(/images/contact-us-images-videos/GrayOutline.svg)`,
          WebkitMaskRepeat: "repeat",
          WebkitMaskSize: "700px auto",
          maskImage: `url(/images/contact-us-images-videos/GrayOutline.svg)`,
          maskRepeat: "repeat",
          maskSize: "700px auto",
          opacity: 1,
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-[1100px] mx-auto flex flex-col justify-center py-4">
        <h1
          className="
            text-black
            font-black
            leading-[1.15]
            mb-2
            text-[1.6rem]
            sm:text-[1.9rem]
            md:text-[2.1rem]
            lg:text-[2.3rem]
            xl:text-[2.6rem]
          "
        >
          Get in Touch With Our Experts
        </h1>

        <p
          className="
            text-black
            leading-[1.5]
            max-w-[850px]
            mx-auto
            mt-2
            text-[16px]
            sm:text-[17px]
            md:text-[20px]
            lg:text-[24px]
            xl:text-[26px]
          "
        >
          Have questions or need support with your digital operations?
Our team is here to guide you every step of the way.
We work closely with you to understand your goals.
And deliver solutions tailored to your business needs.
From improving performance to streamlining workflows,
we focus on driving real, measurable results.

        </p>
      </div>
    </section>
  );
}
