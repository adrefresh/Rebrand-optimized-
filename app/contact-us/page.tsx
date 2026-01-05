// // // "use client";

// // // import { useState } from "react";
// // // import PrecisionSection from "../components/contact-us-components/Precesion-section";


// // // export default function ContactPage() {
// // //   const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

// // //   const [form, setForm] = useState({
// // //     name: "",
// // //     email: "",
// // //     phone: "",
// // //     company: "",
// // //     subject: "",
// // //     message: "",
// // //   });

// // //   const [status, setStatus] = useState<null | string>(null);

// // //   function handleChange(
// // //     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
// // //   ) {
// // //     setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
// // //   }

// // //   function handleSubmit(e: React.FormEvent) {
// // //     e.preventDefault();
// // //     setStatus("sending");

// // //     setTimeout(() => {
// // //       setStatus("sent");
// // //       setForm({
// // //         name: "",
// // //         email: "",
// // //         phone: "",
// // //         company: "",
// // //         subject: "",
// // //         message: "",
// // //       });
// // //       setTimeout(() => setStatus(null), 2000);
// // //     }, 900);
// // //   }

// // //   const locations = [
// // //     {
// // //       country: "India",
// // //       city: "Hyderabad",
// // //       address: (
// // //         <>
// // //           5th Floor Gutenberg IT Park,
// // //           <br />
// // //           Hyderabad – 500084
// // //         </>
// // //       ),
// // //       map: "india.png",
// // //     },
// // //     {
// // //       country: "U.S.A.",
// // //       city: "Delaware",
// // //       address: (
// // //         <>
// // //           1209 Orange Street,
// // //           <br />
// // //           Wilmington, DE 19801
// // //         </>
// // //       ),
// // //       map: "usa.avif",
// // //     },
// // //     {
// // //       country: "Canada",
// // //       city: "Ontario",
// // //       address: (
// // //         <>
// // //           Downtown Toronto,
// // //           <br />
// // //           Ontario – M5H
// // //         </>
// // //       ),
// // //       map: "canada.png",
// // //     },
// // //     {
// // //       country: "Australia",
// // //       city: "Sydney",
// // //       address: (
// // //         <>
// // //           Business District,
// // //           <br />
// // //           NSW – 2000
// // //         </>
// // //       ),
// // //       map: "aus.jpg",
// // //     },
// // //   ];

// // //   return (
// // //     <main>
// // //       {/* ================= HERO ================= */}
// // //       {/* ================= HERO ================= */}
// // // <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
// // //   {/* VIDEO */}
// // //   <video
// // //     className="absolute inset-0 w-full h-full object-cover z-[1]"
// // //     src={`${basePath}/images/contact-us-images-videos/3.mp4`}
// // //     autoPlay
// // //     loop
// // //     muted
// // //     playsInline
// // //   />

// // //   {/* 🔥 BLACK OVERLAY */}
// // //   <div className="absolute inset-0 z-[2] bg-black/2" />

// // //   {/* OPTIONAL DEPTH (MATCHES PREMIUM HEROES) */}
// // //   <div className="absolute inset-0 z-[3] bg-gradient-to-b from-black/50 via-black/40 to-black/70" />

// // //   {/* TEXT */}
// // //   <h1 className="relative z-[5] text-[5rem] font-black text-white max-[768px]:text-[3rem]">
// // //     CONTACT US
// // //   </h1>
// // // </section>

// // // <PrecisionSection/>

// // //       {/* ================= CONTACT GRID ================= */}
// // //       <section
// // //         className="
// // //           w-[80vw]
// // //           mx-auto
// // //           grid
// // //           grid-cols-[1.3fr_1fr]
// // //           gap-[80px]
// // //           pb-[120px]
// // //           max-[900px]:grid-cols-1
// // //         "
// // //       >
// // //         {/* LEFT */}
// // //         <div>
// // //           <h1 className="text-4xl font-bold">Our Global Presence</h1>
// // //           <p className="mt-2 text-gray-600">
// // //             Strategically located to support clients worldwide.
// // //           </p>

// // //           <div
// // //             className="
// // //               grid
// // //               grid-cols-2
// // //               gap-5
// // //               mt-8
// // //               max-[900px]:grid-cols-1
// // //             "
// // //           >
// // //             {locations.map((loc) => (
// // //               <div key={loc.country}>
// // //                 <h2 className="mb-2 font-semibold text-[3rem]">{loc.country}</h2>

// // //                 <div
// // //                   className="
// // //                     relative
// // //                     h-[260px]
// // //                     rounded-[20px]
// // //                     bg-cover
// // //                     bg-center
// // //                     overflow-hidden
// // //                   "
// // //                   style={{
// // //                     backgroundImage: `url(${basePath}/map/${loc.map})`,
// // //                   }}
// // //                 >
// // //                   <div className="absolute inset-0 bg-white/85 z-10" />

// // //                   <div
// // //                     className="
// // //                       absolute
// // //                       inset-0
// // //                       z-20
// // //                       flex
// // //                       flex-col
// // //                       items-center
// // //                       justify-center
// // //                       text-center
// // //                     "
// // //                   >
// // //                     <strong>{loc.city}</strong>
// // //                     <p>{loc.address}</p>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>

// // //         {/* RIGHT FORM */}
// // //         <div>
// // //           <div className="w-[30vw] max-[900px]:w-full">
// // //             <h1 className="text-[4rem] font-bold mb-6">
// // //               Drop Us a Message
// // //             </h1>

// // //             <form
// // //               onSubmit={handleSubmit}
// // //               className="flex flex-col gap-[14px]"
// // //             >
// // //               {[
// // //                 { name: "name", placeholder: "Your Name*", required: true },
// // //                 { name: "email", placeholder: "Email*", type: "email", required: true },
// // //                 { name: "phone", placeholder: "Phone*", required: true },
// // //                 { name: "company", placeholder: "Company" },
// // //                 { name: "subject", placeholder: "Subject*", required: true },
// // //               ].map((field) => (
// // //                 <input
// // //                   key={field.name}
// // //                   {...field}
// // //                   value={(form as any)[field.name]}
// // //                   onChange={handleChange}
// // //                   className="
// // //                     px-[14px]
// // //                     py-[12px]
// // //                     rounded-md
// // //                     border
// // //                     border-[#ddd]
// // //                     text-[15px]
// // //                   "
// // //                 />
// // //               ))}

// // //               <textarea
// // //                 name="message"
// // //                 value={form.message}
// // //                 onChange={handleChange}
// // //                 placeholder="Message"
// // //                 rows={6}
// // //                 className="
// // //                   px-[14px]
// // //                   py-[12px]
// // //                   rounded-md
// // //                   border
// // //                   border-[#ddd]
// // //                   text-[15px]
// // //                   resize-y
// // //                 "
// // //               />

// // //               <button
// // //                 type="submit"
// // //                 className="
// // //                   mt-[6px]
// // //                   bg-black
// // //                   text-white
// // //                   py-[14px]
// // //                   rounded-md
// // //                   text-[15px]
// // //                   font-semibold
// // //                   transition
// // //                   hover:bg-[#222]
// // //                 "
// // //               >
// // //                 {status === "sending" ? "Sending..." : "Send Message"}
// // //               </button>
// // //             </form>

// // //             {/* SOCIAL */}
            
// // //           </div>
// // //         </div>
// // //       </section>
// // //     </main>
// // //   );
// // // }

// // "use client";

// // import { useState } from "react";
// // import PrecisionSection from "../components/contact-us-components/Precesion-section";
// // import type { Metadata } from "next";


// // export const metadata: Metadata = {
// //   title: "Contact AdRefresh | Get in Touch With Our Global Team",
// //   description:
// //     "Contact AdRefresh to discuss programmatic advertising, ad operations, and digital marketing solutions. Our global team is ready to help you scale.",

// //   alternates: {
// //     canonical: "https://www.adrefresh.com/contact-us",
// //   },

// //   openGraph: {
// //     title: "Contact AdRefresh",
// //     description:
// //       "Reach out to AdRefresh for expert programmatic advertising, ad operations, and digital marketing support.",
// //     url: "https://www.adrefresh.com/contact-us",
// //     siteName: "AdRefresh",
// //     images: [
// //       {
// //         url: "https://www.adrefresh.com/og/contact.png",
// //         width: 1200,
// //         height: 630,
// //         alt: "Contact AdRefresh",
// //       },
// //     ],
// //     locale: "en_US",
// //     type: "website",
// //   },

// //   twitter: {
// //     card: "summary_large_image",
// //     title: "Contact AdRefresh",
// //     description:
// //       "Get in touch with AdRefresh for digital marketing and ad operations solutions.",
// //     images: ["https://www.adrefresh.com/og/contact.png"],
// //   },

// //   robots: {
// //     index: true,
// //     follow: true,
// //   },
// // };
// // export default function ContactPage() {
// //   const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

// //   const [form, setForm] = useState({
// //     name: "",
// //     email: "",
// //     phone: "",
// //     company: "",
// //     subject: "",
// //     message: "",
// //   });

// //   const [status, setStatus] = useState(null);

// //   function handleChange(e) {
// //     setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
// //   }

// //   function handleSubmit(e) {
// //     e.preventDefault();
// //     setStatus("sending");

// //     setTimeout(() => {
// //       setStatus("sent");
// //       setForm({
// //         name: "",
// //         email: "",
// //         phone: "",
// //         company: "",
// //         subject: "",
// //         message: "",
// //       });
// //       setTimeout(() => setStatus(null), 2000);
// //     }, 900);
// //   }

// //   const locations = [
// //     {
// //       country: "India",
// //       city: "Hyderabad",
// //       address: (
// //         <>
// //           5th Floor Gutenberg IT Park,
// //           <br />
// //           Hyderabad – 500084
// //         </>
// //       ),
// //       map: "india.png",
// //     },
// //     {
// //       country: "U.S.A.",
// //       city: "Delaware",
// //       address: (
// //         <>
// //           1209 Orange Street,
// //           <br />
// //           Wilmington, DE 19801
// //         </>
// //       ),
// //       map: "usa.avif",
// //     },
// //     {
// //       country: "Canada",
// //       city: "Ontario",
// //       address: (
// //         <>
// //           Downtown Toronto,
// //           <br />
// //           Ontario – M5H
// //         </>
// //       ),
// //       map: "canada.png",
// //     },
// //     {
// //       country: "Australia",
// //       city: "Sydney",
// //       address: (
// //         <>
// //           Business District,
// //           <br />
// //           NSW – 2000
// //         </>
// //       ),
// //       map: "aus.jpg",
// //     },
// //   ];

// //   return (
// //     <main>
// //       {/* ================= HERO ================= */}
// //       <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
// //         <video
// //           className="absolute inset-0 w-full h-full object-cover z-[1]"
// //           src={`${basePath}/images/contact-us-images-videos/3.mp4`}
// //           autoPlay
// //           loop
// //           muted
// //           playsInline
// //         />

// //         <div className="absolute inset-0 z-[2] bg-black/20" />
// //         <div className="absolute inset-0 z-[3] bg-gradient-to-b from-black/50 via-black/40 to-black/70" />

// //         <h1 className="relative z-[5] text-[5rem] font-black text-white max-[768px]:text-[3rem]">
// //           CONTACT US
// //         </h1>
// //       </section>

// //       <PrecisionSection />

// //       {/* ================= CONTACT GRID ================= */}
// //       <section
// //         className="
// //           w-[80vw]
// //           mx-auto
// //           grid
// //           grid-cols-[1.3fr_1fr]
// //           gap-[80px]
// //           pb-[120px]
// //           max-[900px]:grid-cols-1
// //           mt-[5%]
// //         "
// //       >
// //         {/* LEFT */}
// //         <div>
// //           <h1 className="text-4xl font-bold">Our Global Presence</h1>
// //           <p className="mt-2 text-gray-600">
// //             Strategically located to support clients worldwide.
// //           </p>

// //           <div
// //             className="
// //               grid
// //               grid-cols-2
// //               gap-5
// //               mt-8
// //               max-[900px]:grid-cols-1
// //             "
// //           >
// //             {locations.map((loc) => (
// //               <div key={loc.country}>
// //                 <h2 className="mb-2 font-semibold text-[3rem]">
// //                   {loc.country}
// //                 </h2>

// //                 <div
// //                   className="
// //                     relative
// //                     h-[260px]
// //                     rounded-[20px]
// //                     bg-cover
// //                     bg-center
// //                     overflow-hidden
// //                   "
// //                   style={{
// //                     backgroundImage: `url(${basePath}/map/${loc.map})`,
// //                   }}
// //                 >
// //                   {/* subtle map overlay */}
// //                   <div className="absolute inset-0 z-10 bg-[rgba(218,218,218,0.7)]" />

// //                   {/* centered card */}
// //                   <div
// //                     className="
// //                       absolute
// //                       inset-0
// //                       z-20
// //                       flex
// //                       items-center
// //                       justify-center
// //                       px-6
// //                     "
// //                   >
// //                     <div
// //                       className="
// //                         bg-white/80
// //                         backdrop-blur-md
// //                         rounded-2xl
// //                         px-6
// //                         py-5
// //                         text-center
// //                       shadow-[0_20px_60px_rgba(0,0,0,0.15)]
// //                         max-w-[85%]
// //                       "
// //                     >
// //                       <h3 className="text-xl font-bold tracking-tight">
// //                         {loc.city}
// //                       </h3>

// //                       <p className="mt-1 text-sm leading-relaxed text-gray-700">
// //                         {loc.address}
// //                       </p>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* RIGHT FORM */}
// //         <div>
// //           <div className="w-[30vw] max-[900px]:w-full">
// //             <h1 className="text-[4rem] font-bold mb-6">
// //               Drop Us a Message
// //             </h1>

// //             <form
// //               onSubmit={handleSubmit}
// //               className="flex flex-col gap-[14px]"
// //             >
// //               {[
// //                 { name: "name", placeholder: "Your Name*", required: true },
// //                 { name: "email", placeholder: "Email*", type: "email", required: true },
// //                 { name: "phone", placeholder: "Phone*", required: true },
// //                 { name: "company", placeholder: "Company" },
// //                 { name: "subject", placeholder: "Subject*", required: true },
// //               ].map((field) => (
// //                 <input
// //                   key={field.name}
// //                   {...field}
// //                   value={form[field.name]}
// //                   onChange={handleChange}
// //                   className="
// //                     px-[14px]
// //                     py-[12px]
// //                     rounded-md
// //                     border
// //                     border-[#ddd]
// //                     text-[15px]
// //                   "
// //                 />
// //               ))}

// //               <textarea
// //                 name="message"
// //                 value={form.message}
// //                 onChange={handleChange}
// //                 placeholder="Message"
// //                 rows={6}
// //                 className="
// //                   px-[14px]
// //                   py-[12px]
// //                   rounded-md
// //                   border
// //                   border-[#ddd]
// //                   text-[15px]
// //                   resize-y
// //                 "
// //               />

// //               <button
// //                 type="submit"
// //                 className="
// //                   mt-[6px]
// //                   bg-black
// //                   text-white
// //                   py-[14px]
// //                   rounded-md
// //                   text-[15px]
// //                   font-semibold
// //                   transition
// //                   hover:bg-[#222]
// //                 "
// //               >
// //                 {status === "sending" ? "Sending..." : "Send Message"}
// //               </button>
// //             </form>
// //           </div>
// //         </div>
// //       </section>
// //     </main>
// //   );
// // }

// import type { Metadata } from "next";


// // import PrecisionSection from "../components/contact-us-components/Precesion-section";
// import ContactClient from "../components/contact-us-components/contact-maps";
// import GlobalPresence from "../components/contact-us-components/Globalpresence";




// export const metadata: Metadata = {
//   title: "Contact AdRefresh | Get in Touch With Our Global Team",
//   description:
//     "Contact AdRefresh to discuss programmatic advertising, ad operations, and digital marketing solutions. Our global team is ready to help you scale.",

//   alternates: {
//     canonical: "https://www.adrefresh.com/contact-us",
//   },

//   openGraph: {
//     title: "Contact AdRefresh",
//     description:
//       "Reach out to AdRefresh for expert programmatic advertising, ad operations, and digital marketing support.",
//     url: "https://www.adrefresh.com/contact-us",
//     siteName: "AdRefresh",
//     images: [
//       {
//         url: "https://www.adrefresh.com/og/contact.png",
//         width: 1200,
//         height: 630,
//         alt: "Contact AdRefresh",
//       },
//     ],
//     type: "website",
//   },

//   twitter: {
//     card: "summary_large_image",
//     title: "Contact AdRefresh",
//     description:
//       "Get in touch with AdRefresh for digital marketing and ad operations solutions.",
//     images: ["https://www.adrefresh.com/og/contact.png"],
//   },

//   robots: {
//     index: true,
//     follow: true,
//   },
// };

// export default function ContactPage() {
//   return (
//     <main className="relative bg-[#fafafa] text-[#111]">
//       {/* HERO */}
      

//       {/* PRECISION SECTION */}
//       {/* <PrecisionSection /> */}

//       {/* CLIENT SIDE FORM + LOCATIONS */}
//      <ContactClient/>
//      <br />
//    <GlobalPresence/>
//     </main>
//   );
// }

import type { Metadata } from "next";
import ContactClient from "../components/contact-us-components/contact-maps";
import GlobalPresence from "../components/contact-us-components/Globalpresence";
import ContactHero from "../components/contact-us-components/contact-hero";
import ContactForm from "../components/contact-us-components/contact-form";
import PrecisionSection from "../components/contact-us-components/Precesion-section";

export const metadata: Metadata = {
  title: "Contact AdRefresh | Get in Touch With Our Global Team",
  description:
    "Contact AdRefresh to discuss programmatic advertising, ad operations, and digital marketing solutions.",
  alternates: {
    canonical: "https://www.adrefresh.com/contact-us",
  },
};

export default function ContactPage() {
  return (
    <main className="relative bg-[#fafafa] text-[#111]">
      {/* <ContactClient /> */}
      <ContactHero/>
      <PrecisionSection/>
      <GlobalPresence />
      <ContactForm/>
    </main>
  );
}
