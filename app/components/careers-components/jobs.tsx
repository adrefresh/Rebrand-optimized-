
"use client";

export default function CareersClient() {
  return (
    <>
      {/* ================= HEADING ================= */}
      <div className="mt-16 px-4 text-center sm:mt-20">
        <h1 className="font-extrabold text-[2.2rem] sm:text-[3rem] md:text-[4rem] lg:text-[3rem]">
          JOIN WITH US
        </h1>

        <p className="mt-2 text-gray-600 text-[0.95rem] sm:text-base">
          Explore exciting opportunities to grow your career with AdRefresh.
        </p>
      </div>

      {/* ================= KEKA JOBS ================= */}
      <section
        className="
          relative
          mx-auto
          max-w-6xl
          px-4
          pt-4           /* ✅ minimal spacing */
          pb-12
          sm:px-6
          overflow-hidden
          mt-5
        "
      >
        {/* KEKA IFRAME */}
        <iframe
          src="https://adrefresh.keka.com/careers/api/embedjobs/f67f9089-1c2c-4b65-be95-226a53932b93"
          title="AdRefresh Careers"
          loading="lazy"
          className="
            w-full
            border-none
            min-h-[250px]
            sm:min-h-[620px]
            md:min-h-[580px]
          "
        />

        {/* MASK BOTTOM KEKA FOOTER */}
      
      </section>
    </>
  );
}
