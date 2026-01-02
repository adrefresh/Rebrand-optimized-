// "use client";

// import React, { useState } from "react";

// type FormState = {
//   name: string;
//   email: string;
//   phone: string;
//   company: string;
//   subject: string;
//   message: string;
// };

// export default function ContactForm() {
//   const [form, setForm] = useState<FormState>({
//     name: "",
//     email: "",
//     phone: "",
//     company: "",
//     subject: "",
//     message: "",
//   });

//   const [status, setStatus] = useState<
//     "sending" | "sent" | "error" | null
//   >(null);

//   function handleChange(
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   }

//   async function handleSubmit(e: React.FormEvent) {
//     e.preventDefault();
//     setStatus("sending");

//     try {
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });

//       if (!res.ok) throw new Error();

//       setStatus("sent");
//       setForm({
//         name: "",
//         email: "",
//         phone: "",
//         company: "",
//         subject: "",
//         message: "",
//       });

//       setTimeout(() => setStatus(null), 2000);
//     } catch {
//       setStatus("error");
//     }
//   }

//   return (
//     <section className="w-[80vw] mx-auto mt-[6%] pb-[120px]">
//       <h2 className="text-[4rem] font-bold mb-10 text-center">
//         Drop Us a Message
//       </h2>

//       <form
//         onSubmit={handleSubmit}
//         className="
//           grid grid-cols-2 gap-6
//           max-[768px]:grid-cols-1
//         "
//       >
//         {/* ROW 1 */}
//         <input
//           name="name"
//           placeholder="Your Name*"
//           required
//           value={form.name}
//           onChange={handleChange}
//           className="px-4 py-3 rounded-md border border-[#ddd]"
//         />

//         <input
//           name="email"
//           type="email"
//           placeholder="Email*"
//           required
//           value={form.email}
//           onChange={handleChange}
//           className="px-4 py-3 rounded-md border border-[#ddd]"
//         />

//         {/* ROW 2 */}
//         <input
//           name="phone"
//           placeholder="Phone*"
//           required
//           value={form.phone}
//           onChange={handleChange}
//           className="px-4 py-3 rounded-md border border-[#ddd]"
//         />

//         <input
//           name="company"
//           placeholder="Company"
//           value={form.company}
//           onChange={handleChange}
//           className="px-4 py-3 rounded-md border border-[#ddd]"
//         />

//         {/* ROW 3 – FULL WIDTH */}
//         <input
//           name="subject"
//           placeholder="Subject*"
//           required
//           value={form.subject}
//           onChange={handleChange}
//           className="col-span-2 px-4 py-3 rounded-md border border-[#ddd] max-[768px]:col-span-1"
//         />

//         {/* ROW 4 – FULL WIDTH */}
//         <textarea
//           name="message"
//           placeholder="Message"
//           rows={6}
//           value={form.message}
//           onChange={handleChange}
//           className="col-span-2 px-4 py-3 rounded-md border border-[#ddd] resize-y max-[768px]:col-span-1"
//         />

//         {/* BUTTON */}
//         <button
//           type="submit"
//           disabled={status === "sending"}
//           className="
//             col-span-2
//             bg-black text-white py-4 rounded-md
//             font-semibold transition hover:bg-[#222]
//             disabled:opacity-60
//             max-[768px]:col-span-1
//           "
//         >
//           {status === "sending" ? "Sending..." : "Send Message"}
//         </button>

//         {/* STATUS */}
//         {status === "sent" && (
//           <p className="col-span-2 text-green-600 text-sm text-center">
//             Message sent successfully!
//           </p>
//         )}

//         {status === "error" && (
//           <p className="col-span-2 text-red-600 text-sm text-center">
//             Something went wrong. Please try again.
//           </p>
//         )}
//       </form>
//     </section>
//   );
// }
"use client";

import React, { useState } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
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

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();

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

  return (
    <section
      className="
        mx-auto

        w-[92vw]          /* 📱 mobile */
        sm:w-[88vw]
        md:w-[80vw]       /* 📱 tablet */
        lg:w-[70vw]       /* 💻 laptop */
        xl:w-[65vw]       /* 🖥 desktop */

        mt-12
        sm:mt-16
        pb-24
      "
    >
      {/* TITLE */}
      <h2
        className="
          text-center font-bold mb-10

          text-[2.2rem]     /* 📱 mobile */
          sm:text-[2.6rem]
          md:text-[3rem]    /* 📱 tablet */
          lg:text-[3.5rem]  /* 💻 laptop */
          xl:text-[4rem]    /* 🖥 desktop */
        "
      >
        Drop Us a Message
      </h2>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="
          grid
          grid-cols-1            /* 📱 mobile */
          sm:grid-cols-2         /* 📱 tablet+ */
          gap-4
          sm:gap-6
        "
      >
        {/* ROW 1 */}
        <input
          name="name"
          placeholder="Your Name*"
          required
          value={form.name}
          onChange={handleChange}
          className="px-4 py-3 rounded-md border border-[#ddd]"
        />

        <input
          name="email"
          type="email"
          placeholder="Email*"
          required
          value={form.email}
          onChange={handleChange}
          className="px-4 py-3 rounded-md border border-[#ddd]"
        />

        {/* ROW 2 */}
        <input
          name="phone"
          placeholder="Phone*"
          required
          value={form.phone}
          onChange={handleChange}
          className="px-4 py-3 rounded-md border border-[#ddd]"
        />

        <input
          name="company"
          placeholder="Company"
          value={form.company}
          onChange={handleChange}
          className="px-4 py-3 rounded-md border border-[#ddd]"
        />

        {/* SUBJECT – FULL WIDTH */}
        <input
          name="subject"
          placeholder="Subject*"
          required
          value={form.subject}
          onChange={handleChange}
          className="sm:col-span-2 px-4 py-3 rounded-md border border-[#ddd]"
        />

        {/* MESSAGE – FULL WIDTH */}
        <textarea
          name="message"
          placeholder="Message"
          rows={6}
          value={form.message}
          onChange={handleChange}
          className="sm:col-span-2 px-4 py-3 rounded-md border border-[#ddd] resize-y"
        />

        {/* BUTTON */}
        <button
          type="submit"
          disabled={status === "sending"}
          className="
            sm:col-span-2
            bg-black text-white py-4 rounded-md
            font-semibold transition hover:bg-[#222]
            disabled:opacity-60
          "
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {/* STATUS */}
        {status === "sent" && (
          <p className="sm:col-span-2 text-green-600 text-sm text-center">
            Message sent successfully!
          </p>
        )}

        {status === "error" && (
          <p className="sm:col-span-2 text-red-600 text-sm text-center">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </section>
  );
}
