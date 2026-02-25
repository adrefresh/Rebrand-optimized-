


const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function AboutAdRefresh() {
  return (
    <section
      className="
        relative
        w-screen
        overflow-hidden
        flex
        items-center
        justify-center
        text-center

        min-h-[60vh]
        md:min-h-[55vh]

        px-5 py-10
        sm:px-8 sm:py-14
        md:px-8 md:py-10
        lg:px-10 lg:py-14

        bg-[#F2F2F2]
      "
    >
      {/* PATTERN — FULL WIDTH & HEIGHT */}
      <div
        className="absolute inset-0 z-0 bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url('${basePath}/images/service-page-images-videos/GrayOutline.svg')`,
          opacity: 0.45,
        }}
      />

      {/* DIRECTIONAL SHADE OVERLAY */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.12), rgba(0,0,0,0.04))",
        }}
      />

      {/* LIGHT WASH */}
      <div className="absolute inset-0 z-[2] bg-white/15" />
 
      {/* CONTENT */}
      <div className="relative z-[10] mx-auto max-w-[1000px]">
        <h2
          className="
            mb-6
            font-black
            leading-[1.2]
            text-black

              text-[1.6rem]
            sm:text-[1.9rem]
            md:text-[2rem]
            lg:text-[2.2rem]
            xl:text-[2.5rem]
          "
        >
        WE ARE ADREXIANS
        </h2>

        <p
          className="
            mb-4
            leading-[1.7]
            text-black

           text-[18px]
            sm:text-[18px]
            md:text-[15px]
            lg:text-[24px]
            xl:text-[28px]
          "
        >
          Our clients describe us as connectors, innovators, and disruptors.
          Our services are future-led, customer-focused, and designed to help
          brands thrive in an ever-evolving marketing ecosystem.
        </p>

        <p
          className="
            leading-[1.7]
            text-black
 text-[18px]
            sm:text-[18px]
            md:text-[15px]
            lg:text-[24px]
            xl:text-[28px]
          "
        >
          AdRefresh delivers a complete range of ad operations for advertisers,
          publishers, agencies, and networks—powered by deep domain expertise
          and a highly responsive global team.
        </p>
      </div>
    </section>
  );
}
