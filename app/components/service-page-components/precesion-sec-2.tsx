
// "use client";

export default function PrecisionSectionAdOps() {
  return (
    <section
      className="
        relative
        w-screen
        h-[65vh]           /* MOBILE reduced */
        min-h-[60vh]      /* MOBILE reduced */
        flex
        items-center
        justify-center
        text-center
        overflow-hidden
        bg-[#F2F2F2]
        mt-6              /* MOBILE reduced */
        py-6              /* MOBILE reduced */

        md:h-[75vh]
        md:min-h-[70vh]
        md:mt-14
        md:py-12
      "
    >
      {/* BACKGROUND */}
      <div
        className="absolute inset-0 z-0 bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage:
            "url('/images/service-page-images-videos/Gray-Dual.svg')",
        }}
      />

      {/* SHADE */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.18), rgba(0,0,0,0.08))",
        }}
      />

      {/* LIGHT WASH */}
      <div className="absolute inset-0 z-[2] bg-white/10" />

      {/* CONTENT */}
      <div
        className="
          relative
          z-[10]
          max-w-[1100px]
          w-full
          px-4            /* MOBILE reduced */
          sm:px-10
          md:px-14
          lg:px-20
        "
      >
        <h2
          className="
            text-black
            font-black
            mb-4            /* MOBILE reduced */
            leading-tight
            break-words
            hyphens-auto
            text-[1.4rem]  /* MOBILE reduced */
            sm:text-[1.9rem]
            md:text-[2.1rem]
            lg:text-[2.3rem]
            xl:text-[2.6rem]
          "
        >
          Precision and Performance Through Transformative Advertising Operations
        </h2>

        <p
          className="
            text-black
            mx-auto
            leading-relaxed
            max-w-[900px]
            break-words
            text-[16px]     /* MOBILE reduced */
            sm:text-[18px]
            md:text-[20px]
            lg:text-[24px]
            xl:text-[28px]
            mt-2           /* MOBILE reduced */
          "
        >
          We power advertising operations through structured execution, accurate
          trafficking, advanced tracking, and continuous monitoring to ensure
          efficiency, compliance, and measurable performance.
        </p>
      </div>
    </section>
  );
}
