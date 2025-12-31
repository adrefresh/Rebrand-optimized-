"use client";

export default function GlobalPresence() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  const locations = [
    {
      country: "India",
      city: "Hyderabad",
      address: (
        <>
          5th Floor Gutenberg IT Park,
          <br />
          Hyderabad – 500084
        </>
      ),
      map: "india.png",
    },
    {
      country: "U.S.A.",
      city: "Delaware",
      address: (
        <>
          1209 Orange Street,
          <br />
          Wilmington, DE 19801
        </>
      ),
      map: "usa.png",
    },
    {
      country: "Canada",
      city: "Ontario",
      address: (
        <>
          Downtown Toronto,
          <br />
          Ontario – M5H
        </>
      ),
      map: "canada.png",
    },
    {
      country: "Australia",
      city: "Sydney",
      address: (
        <>
          Business District,
          <br />
          NSW – 2000
        </>
      ),
      map: "aus.png",
    },
  ];

  return (
    /* ================= GLOBAL PRESENCE ================= */
    <section
      className="
        relative
        w-screen
        ml-[calc(50%-50vw)]
        py-[70px]
      "
    >
      <div className="max-w-[1400px] mx-auto px-[5vw]">
        {/* TITLE */}
        <h1 className="mb-[48px] text-[3.2rem] font-black text-black">
          Our Global Presence
        </h1>

        {/* MAP STRIP (OUTLINE ONLY) */}
        <div
          className="
            flex items-start justify-between
            gap-[60px]
            max-[1100px]:flex-wrap
            max-[768px]:flex-col
          "
        >
          {locations.map((loc) => (
            <div
              key={loc.country}
              className="
                flex flex-col items-center
                text-center
                flex-1
                min-w-[220px]
              "
            >
              {/* MAP OUTLINE (NO CUTTING) */}
              <div
                className="
                  w-full
                  max-w-[260px]
                  h-[160px]
                  flex items-center justify-center
                  mb-4
                "
              >
                <img
                  src={`${basePath}/map/${loc.map}`}
                  alt={loc.country}
                  className="
                    max-w-full
                    max-h-full
                    object-contain
                  "
                />
              </div>

              {/* DETAILS */}
              <h2 className="text-[1.4rem] font-bold text-black">
                {loc.country}
              </h2>
              <p className="mt-1 text-[15px] font-semibold text-black">
                {loc.city}
              </p>
              <p className="mt-1 text-[14px] leading-relaxed text-black max-w-[260px]">
                {loc.address}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
