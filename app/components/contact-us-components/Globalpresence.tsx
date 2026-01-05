// "use client";

// export default function GlobalPresence() {
//   const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

//   const locations = [
//     {
//       country: "India",
//       city: "Hyderabad",
//       address: (
//         <>
//           5th Floor Gutenberg IT Park,
//           <br />
//           Hyderabad – 500084
//         </>
//       ),
//       map: "india.png",
//     },
//     {
//       country: "U.S.A.",
//       city: "Delaware",
//       address: (
//         <>
//           1209 Orange Street,
//           <br />
//           Wilmington, DE 19801
//         </>
//       ),
//       map: "usa.png",
//     },
//     {
//       country: "Canada",
//       city: "Ontario",
//       address: (
//         <>
//           Downtown Toronto,
//           <br />
//           Ontario – M5H
//         </>
//       ),
//       map: "canada.png",
//     },
//     {
//       country: "Australia",
//       city: "Sydney",
//       address: (
//         <>
//           Business District,
//           <br />
//           NSW – 2000
//         </>
//       ),
//       map: "aus.png",
//     },
//   ];

//   return (
//     /* ================= GLOBAL PRESENCE ================= */
//     <section
//       className="
//         relative
//         w-screen
//         ml-[calc(50%-50vw)]
//         py-[70px]
//       "
//     >
//       <div className="max-w-[1400px] mx-auto px-[5vw]">
//         {/* TITLE */}
//         <h1 className="mb-[48px] text-[3.2rem] font-black text-black">
//           Our Global Presence
//         </h1>

//         {/* MAP STRIP (OUTLINE ONLY) */}
//         <div
//           className="
//             flex items-start justify-between
//             gap-[60px]
//             max-[1100px]:flex-wrap
//             max-[768px]:flex-col
//           "
//         >
//           {locations.map((loc) => (
//             <div
//               key={loc.country}
//               className="
//                 flex flex-col items-center
//                 text-center
//                 flex-1
//                 min-w-[220px]
//               "
//             >
//               {/* MAP OUTLINE (NO CUTTING) */}
//               <div
//                 className="
//                   w-full
//                   max-w-[260px]
//                   h-[160px]
//                   flex items-center justify-center
//                   mb-4
//                 "
//               >
//                 <img
//                   src={`${basePath}/map/${loc.map}`}
//                   alt={loc.country}
//                   className="
//                     max-w-full
//                     max-h-full
//                     object-contain
//                   "
//                 />
//               </div>

//               {/* DETAILS */}
//               <h2 className="text-[1.4rem] font-bold text-black">
//                 {loc.country}
//               </h2>
//               <p className="mt-1 text-[15px] font-semibold text-black">
//                 {loc.city}
//               </p>
//               <p className="mt-1 text-[14px] leading-relaxed text-black max-w-[260px]">
//                 {loc.address}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// export default function GlobalPresence() {
//   const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

//   const locations = [
//     {
//       country: "India",
//       city: "Hyderabad",
//       address: (
//         <>
//           5th Floor Gutenberg IT Park,
//           <br />
//           Hyderabad – 500084
//         </>
//       ),
//       map: "india.png",
//     },
//     {
//       country: "U.S.A.",
//       city: "Delaware",
//       address: (
//         <>
//           1209 Orange Street,
//           <br />
//           Wilmington, DE 19801
//         </>
//       ),
//       map: "usa.png",
//     },
//     {
//       country: "Canada",
//       city: "Ontario",
//       address: (
//         <>
//           Downtown Toronto,
//           <br />
//           Ontario – M5H
//         </>
//       ),
//       map: "canada.png",
//     },
//     {
//       country: "Australia",
//       city: "Sydney",
//       address: (
//         <>
//           Business District,
//           <br />
//           NSW – 2000
//         </>
//       ),
//       map: "aus.png",
//     },
//   ];

//   return (
//     <section className="relative py-20">
//       <div className="mx-auto max-w-[1400px] px-6">
//         {/* TITLE */}
//         <h1 className="mb-16 text-center text-[2.4rem] sm:text-[2.8rem] lg:text-[3.2rem] font-black text-black">
//           Our Global Presence
//         </h1>

//         {/* LOCATIONS GRID */}
//         <div
//           className="
//             grid
//             grid-cols-1
//             sm:grid-cols-2
//             lg:grid-cols-4
//             gap-y-16
//             gap-x-10
//             place-items-center
//              bg-white
//                py-16
//           "
//         >
//           {locations.map((loc) => (
//             <div
//               key={loc.country}
//               className="
//                 flex
//                 flex-col
//                 items-center
//                 text-center
//                 max-w-[280px]
//               "
//             >
//               {/* MAP IMAGE */}
//               <div className="mb-5 h-[160px] w-full flex items-center justify-center">
//                 <img
//                   src={`${basePath}/map/${loc.map}`}
//                   alt={loc.country}
//                   className="h-full w-auto object-contain"
//                 />
//               </div>

//               {/* TEXT */}
//               <h2 className="text-[1.35rem] font-bold text-black">
//                 {loc.country}
//               </h2>

//               <p className="mt-1 text-[15px] font-semibold text-black">
//                 {loc.city}
//               </p>

//               <p className="mt-1 text-[14px] leading-relaxed text-black">
//                 {loc.address}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

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
    <section className="relative py-20">
      <div className="mx-auto max-w-[1400px] px-6">
        {/* TITLE */}
        
        <h1 className="mb-16 text-center text-[2.4rem] sm:text-[2.8rem] lg:text-[3.2rem] font-black text-black">
          Our Global Presence
          
        </h1>
       
        {/* LOCATIONS GRID */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-y-16
            gap-x-10
            place-items-center
          "
        >
          {locations.map((loc) => (
            <div
              key={loc.country}
              className="
                flex
                flex-col
                items-center
                text-center
                max-w-[280px]

                bg-gray-200       /* ✅ gray background */
                rounded-xl
                px-6 py-8
              "
            >
              {/* MAP IMAGE */}
          <img
  src={`${basePath}/map/${loc.map}`}
  className="h-full w-auto object-contain mix-blend-multiply"
/>



              {/* TEXT */}
              <h2 className="text-[2.5rem] font-bold text-black">
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

// "use client";

// export default function GlobalPresence() {
//   const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

//   const locations = [
//     {
//       country: "India",
//       city: "Hyderabad",
//       address: (
//         <>
//           5th Floor Gutenberg IT Park,
//           <br />
//           Hyderabad – 500084
//         </>
//       ),
//       map: "india.png",
//     },
//     {
//       country: "U.S.A.",
//       city: "Delaware",
//       address: (
//         <>
//           1209 Orange Street,
//           <br />
//           Wilmington, DE 19801
//         </>
//       ),
//       map: "usa.png",
//     },
//     {
//       country: "Canada",
//       city: "Ontario",
//       address: (
//         <>
//           Downtown Toronto,
//           <br />
//           Ontario – M5H
//         </>
//       ),
//       map: "canada.png",
//     },
//     {
//       country: "Australia",
//       city: "Sydney",
//       address: (
//         <>
//           Business District,
//           <br />
//           NSW – 2000
//         </>
//       ),
//       map: "aus.png",
//     },
//   ];

//   return (
//     <section
//       className="
//         relative
//         py-14          /* 📱 mobile */
//         sm:py-16
//         md:py-20
//         lg:py-24       /* 💻 desktop */
//       "
//     >
//       <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
//         {/* TITLE */}
//         {/* TITLE */}
// <h1
//   className="
//     mb-3 text-center font-black text-black

//     text-[2rem]        /* 📱 mobile */
//     sm:text-[2.4rem]
//     md:text-[2.8rem]
//     lg:text-[3.2rem]   /* 💻 desktop */
//   "
// >
//   Our Global Presence
// </h1>

// {/* DESCRIPTION */}
// <p
//   className="
//     mb-12
//     text-center
//     mx-auto
//     max-w-[720px]
//     text-gray-600

//     text-[14px]        /* 📱 mobile */
//     sm:text-[15px]
//     md:text-[16px]
//   "
// >
//   Strategically located across key global markets, our teams collaborate
//   seamlessly to support clients worldwide with local expertise and global
//   perspective.
// </p>


//         {/* LOCATIONS GRID */}
//         <div
//           className="
//             grid
//             grid-cols-1                /* 📱 mobile */
//             sm:grid-cols-2             /* 📱 tablet */
//             lg:grid-cols-4             /* 💻 desktop */
//             gap-y-10
//             gap-x-8
//             place-items-center
//           "
//         >
//           {locations.map((loc) => (
//             <div
//               key={loc.country}
//               className="
//                 flex flex-col items-center text-center

//                 w-full
//                 max-w-[280px]           /* 📱 mobile */
//                 lg:max-w-[300px]        /* 💻 desktop */

//                 bg-gray-200
//                 rounded-xl

//                 px-5 py-7               /* 📱 mobile */
//                 sm:px-6 sm:py-8
//               "
//             >
//               {/* MAP IMAGE */}
//               <div
//                 className="
//                   mb-4 flex items-center justify-center

//                   h-[120px]             /* 📱 mobile */
//                   sm:h-[140px]
//                   lg:h-[160px]           /* 💻 desktop */
//                 "
//               >
//                 <img
//                   src={`${basePath}/map/${loc.map}`}
//                   alt={loc.country}
//                   className="
//                     h-full w-auto object-contain
//                     mix-blend-multiply
//                   "
//                 />
//               </div>

//               {/* TEXT */}
//               <h2
//                 className="
//                   font-bold text-black

//                   text-[1.6rem]          /* 📱 mobile */
//                   sm:text-[1.9rem]
//                   lg:text-[2.2rem]
//                 "
//               >
//                 {loc.country}
//               </h2>

//               <p
//                 className="
//                   mt-1 font-semibold text-black

//                   text-[14px]            /* 📱 mobile */
//                   sm:text-[15px]
//                 "
//               >
//                 {loc.city}
//               </p>

//               <p
//                 className="
//                   mt-1 leading-relaxed text-black

//                   text-[13px]            /* 📱 mobile */
//                   sm:text-[14px]
//                 "
//               >
//                 {loc.address}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
