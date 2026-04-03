
export default function PrecisionSectionAdOps() {
  return (
    <section
      className="
        relative
        w-screen

        py-16
        sm:py-19
        md:py-23

        flex
        justify-center
        text-center
        overflow-hidden
        bg-[#F2F2F2]
        mt-9
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

          px-[3px]
          sm:px-2
          md:px-1
        "
      >
        <h2
          className="
            text-black
            font-black
            mb-5
            leading-tight
            break-words
            hyphens-auto
          text-[1.6rem]
            sm:text-[1.9rem]
            md:text-[2rem]
            lg:text-[2.2rem]
            xl:text-[2.5rem]
          "
        >
          Data Driven Strategies for Scalable, Measurable Business Growth
        </h2>

        <p
          className="
            text-black
            mx-auto
            
            leading-relaxed
            max-w-[900px]
            break-words
            text-[18px]
            text-[18px]
            sm:text-[18px]
            md:text-[20px]
            lg:text-[24px]
            xl:text-[28px]
          "
        >
           We build strategy-driven digital campaigns using data, creativity, and
         modern tools to attract audiences, generate leads, and increase
        conversions.
        </p>
      </div>
    </section>
  );
}
