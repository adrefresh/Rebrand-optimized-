
"use client";

export default function GlobalPresence() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  const locations = [
    {
      country: "INDIA",
      city: "Hyderabad",
      address: (
        <>
          1102D, Manjeera Trinity Corporate
          <br />
          Kukatpally, HYD 500072
        </>
      ),
      map: "india.png",
      dot: { x: "42%", y: "62%" },
    },
    {
      country: "USA",
      city: "Harvard",
      address: (
        <>
          PO Box 142
          <br />
          Harvard, MA 01451
        </>
      ),
      map: "usa.png",
      dot: { x: "76%", y: "35%" },
    },
    {
      country: "CANADA",
      city: "Ontario",
      address: (
        <>
          300 Alton Towers Circle
          <br />
          Scarborough, ON M1V 4C7
        </>
      ),
      map: "canada.png",
      dot: { x: "53%", y: "66%" },
    },
    {
      country: "AUSTRALIA",
      city: "Sydney",
      address: (
        <>
          1 Daly Gld
          <br />
          Quakers Hill, NSW 2763
        </>
      ),
      map: "aus.png",
      dot: { x: "72%", y: "62%" },
    },
  ];

  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-[1400px] px-6">
        {/* TITLE */}
        <h1 className="mb-16 text-center text-[2.4rem] sm:text-[2.8rem] lg:text-[3.2rem] font-black text-black">
          Our Global Presence
        </h1>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-10">
          {locations.map((loc) => (
            <div
              key={loc.country}
              className="
                flex flex-col items-center text-center
                w-full max-w-[280px] mx-auto
                bg-gray-200 rounded-xl px-6 py-8
              "
            >
              {/* MAP CANVAS (LOCKED RATIO) */}
              <div className="relative w-full mb-5 aspect-[4/3]">
                <img
                  src={`${basePath}/map/${loc.map}`}
                  alt={loc.country}
                  className="
                    absolute inset-0
                    w-full h-full
                    object-contain
                    mix-blend-multiply
                  "
                />

                {/* RESPONSIVE DOT */}
                <span
                  className="
                    absolute
                    -translate-x-1/2 -translate-y-1/2
                    rounded-full
                    bg-[#492391]
                    h-[8px] w-[8px]
                    sm:h-[10px] sm:w-[10px]
                    lg:h-[12px] lg:w-[12px]
                  "
                  style={{
                    left: loc.dot.x,
                    top: loc.dot.y,
                  }}
                />
              </div>

              {/* TEXT */}
              <h2 className="text-[2.4rem] font-bold text-black">
                {loc.country}
              </h2>

              <p className="mt-1 text-[15px] font-semibold text-black">
                {loc.city}
              </p>

              <p className="mt-1 text-[14px] leading-relaxed text-black">
                {loc.address}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
