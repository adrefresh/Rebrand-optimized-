// "use client";

// import { useState } from "react";
// import PrecisionSection from "../contact-us-components/Precesion-section";

// export default function ContactClient() {
//   const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     company: "",
//     subject: "",
//     message: "",
//   });

//   const [status, setStatus] = useState<string | null>(null);

//   function handleChange(
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) {
//     setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
//   }
// async function handleSubmit(e: React.FormEvent) {
//   e.preventDefault();
//   setStatus("sending");

//   try {
//     const res = await fetch("/rebrand/api/contact", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(form),
//     });

//     if (!res.ok) throw new Error("Failed");

//     setStatus("sent");
//     setForm({
//       name: "",
//       email: "",
//       phone: "",
//       company: "",
//       subject: "",
//       message: "",
//     });

//     setTimeout(() => setStatus(null), 2000);
//   } catch {
//     setStatus("error");
//   }
// }


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
//     <>
//       {/* ================= HERO ================= */}
//       <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
//         <video
//           className="absolute inset-0 w-full h-full object-cover z-[1]"
//           src={`${basePath}/images/contact-us-images-videos/3.mp4`}
//           autoPlay
//           loop
//           muted
//           playsInline
//         />

//         <div className="absolute inset-0 z-[2] " />
//         <div className="absolute inset-0 z-[3] bg-gradient-to-b from-black/10 via-black/40 to-black/50" />

//         <h1 className="relative z-[5] text-[5rem] font-black text-white max-[768px]:text-[3rem]">
//           CONTACT US
//         </h1>
//       </section>

//       {/* PRECISION SECTION */}
//       <PrecisionSection />

//       {/* ================= CONTACT GRID ================= */}
//       <section
//         className="
//           w-[80vw]
//           mx-auto
//           grid
//           grid-cols-[1.3fr_1fr]
//           gap-[80px]
//           pb-[120px]
//           max-[900px]:grid-cols-1
//           mt-[5%]
//         "
//       >
//         {/* LEFT */}
//         <div>
//           <h1 className="text-4xl font-bold">Our Global Presence</h1>
//           <p className="mt-2 text-gray-600">
//             Strategically located to support clients worldwide.
//           </p>

//           <div className="grid grid-cols-2 gap-5 mt-8 max-[900px]:grid-cols-1">
//             {locations.map((loc) => (
//               <div key={loc.country}>
//                 <h2 className="mb-2 font-semibold text-[3rem] text-center">
//                   {loc.country}
//                 </h2>

//                 <div
//                   className="relative h-[260px] rounded-[20px] bg-cover bg-center overflow-hidden"
//                   style={{
//                     backgroundImage: `url(${basePath}/map/${loc.map})`,
//                   }}
//                 >
//                   <div className="absolute inset-0 z-10 bg-[rgba(218,218,218,0.7)]" />

//                   <div className="absolute inset-0 z-20 flex items-center justify-center px-6">
//                     <div className=" rounded-2xl px-6 py-5 text-center  max-w-[85%]">
//                       <h3 className="text-xl font-bold tracking-tight">
//                         {loc.city}
//                       </h3>
//                       <p className="mt-1 text-sm leading-relaxed text-gray-700">
//                         {loc.address}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* RIGHT FORM */}
//         <div>
//           <div className="w-[30vw] max-[900px]:w-full">
//             <h1 className="text-[4rem] font-bold mb-6">
//               Drop Us a Message
//             </h1>

//             <form
//               onSubmit={handleSubmit}
//               className="flex flex-col gap-[14px]"
//             >
//               {[
//                 { name: "name", placeholder: "Your Name*", required: true },
//                 {
//                   name: "email",
//                   placeholder: "Email*",
//                   type: "email",
//                   required: true,
//                 },
//                 { name: "phone", placeholder: "Phone*", required: true },
//                 { name: "company", placeholder: "Company" },
//                 { name: "subject", placeholder: "Subject*", required: true },
//               ].map((field) => (
//                 <input
//                   key={field.name}
//                   {...field}
//                   value={form[field.name as keyof typeof form]}
//                   onChange={handleChange}
//                   className="px-[14px] py-[12px] rounded-md border border-[#ddd] text-[15px]"
//                 />
//               ))}

//               <textarea
//                 name="message"
//                 value={form.message}
//                 onChange={handleChange}
//                 placeholder="Message"
//                 rows={6}
//                 className="px-[14px] py-[12px] rounded-md border border-[#ddd] text-[15px] resize-y"
//               />

//               <button
//                 type="submit"
//                 className="mt-[6px] bg-black text-white py-[14px] rounded-md text-[15px] font-semibold transition hover:bg-[#222]"
//               >
//                 {status === "sending" ? "Sending..." : "Send Message"}
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

"use client";

import React, { useState } from "react";
import PrecisionSection from "../contact-us-components/Precesion-section";

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
};

export default function ContactClient() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "sending" | "sent" | "error" | null
  >(null);

  /* ================= HANDLERS ================= */

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/rebrand/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("sent");
      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
      });

      setTimeout(() => setStatus(null), 2000);
    } catch {
      setStatus("error");
    }
  }

  /* ================= LOCATIONS ================= */

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
    <>
      {/* ================= HERO ================= */}
{/* ================= HERO ================= */}
<section
  className="
    relative flex items-center justify-center overflow-hidden
    h-[60vh]        /* 📱 mobile */
    sm:h-[90vh]     /* 💻 tablet & above */
  "
>
  <video
    className="absolute inset-0 w-full h-full object-cover z-[1]"
    src={`${basePath}/images/contact-us-images-videos/3.mp4`}
    autoPlay
    loop
    muted
    playsInline
  />

  <div className="absolute inset-0 z-[3] bg-gradient-to-b from-black/10 via-black/40 to-black/50" />

  <h1 className="relative z-[5] text-[5rem] font-black text-white max-[768px]:text-[3rem]">
    CONTACT US
  </h1>
</section>


      {/* ================= PRECISION ================= */}
      <PrecisionSection />

      {/* ================= CONTACT GRID ================= */}
      <section
        className="
          w-[80vw]
          mx-auto
          grid
          grid-cols-[1.3fr_1fr]
          gap-[80px]
          pb-[120px]
          max-[900px]:grid-cols-1
          mt-[5%]
        "
      >
        {/* LEFT */}
        <div>
          <h2 className="text-4xl font-bold">Our Global Presence</h2>
          <p className="mt-2 text-gray-600">
            Strategically located to support clients worldwide.
          </p>

          <div className="grid grid-cols-2 gap-5 mt-8 max-[900px]:grid-cols-1">
            {locations.map((loc) => (
              <div key={loc.country}>
                <h3 className="mb-2 font-semibold text-[3rem] text-center">
                  {loc.country}
                </h3>

                <div
                  className="relative h-[260px] rounded-[20px] bg-cover bg-center overflow-hidden"
                  style={{
                    backgroundImage: `url(${basePath}/map/${loc.map})`,
                  }}
                >
                  <div className="absolute inset-0 z-10 bg-[rgba(218,218,218,0.7)]" />

                  <div className="absolute inset-0 z-20 flex items-center justify-center px-6">
                    <div className="rounded-2xl px-6 py-5 text-center max-w-[85%]">
                      <h4 className="text-xl font-bold">{loc.city}</h4>
                      <p className="mt-1 text-sm text-gray-700">
                        {loc.address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT FORM */}
        <div>
          <div className="w-[30vw] max-[900px]:w-full">
            <h2 className="text-[4rem] font-bold mb-6">
              Drop Us a Message
            </h2>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-[14px]"
            >
              {[
                { name: "name", placeholder: "Your Name*", required: true },
                {
                  name: "email",
                  placeholder: "Email*",
                  type: "email",
                  required: true,
                },
                { name: "phone", placeholder: "Phone*", required: true },
                { name: "company", placeholder: "Company" },
                { name: "subject", placeholder: "Subject*", required: true },
              ].map((field) => (
                <input
                  key={field.name}
                  {...field}
                  value={form[field.name as keyof FormState]}
                  onChange={handleChange}
                  className="px-[14px] py-[12px] rounded-md border border-[#ddd] text-[15px]"
                />
              ))}

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message"
                rows={6}
                className="px-[14px] py-[12px] rounded-md border border-[#ddd] text-[15px] resize-y"
              />

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-[6px] bg-black text-white py-[14px] rounded-md text-[15px] font-semibold transition hover:bg-[#222] disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {status === "sent" && (
                <p className="text-green-600 text-sm">
                  Message sent successfully!
                </p>
              )}

              {status === "error" && (
                <p className="text-red-600 text-sm">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
