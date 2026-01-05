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

import React from "react";
import { useActionState } from "react";
import { submitContactForm } from "@/app/actions/contact";

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    null
  );

  return (
    <section
      className="
        mx-auto
        w-[92vw] sm:w-[88vw] md:w-[80vw] lg:w-[70vw] xl:w-[65vw]
        mt-12 sm:mt-16 pb-24
      "
    >
      {/* TITLE */}
      <h2
        className="
          text-center font-bold mb-10
          text-[2.2rem] sm:text-[2.6rem] md:text-[3rem]
          lg:text-[3.5rem] xl:text-[4rem]
        "
      >
        Drop Us a Message
      </h2>

      {/* FORM */}
      <form
        action={formAction}
        className="
          grid grid-cols-1 sm:grid-cols-2
          gap-4 sm:gap-6
        "
      >
        {/* Honeypot */}
        <input
          type="text"
          name="website_url"
          className="sr-only"
          tabIndex={-1}
          autoComplete="off"
        />

        {/* ROW 1 */}
        <input
          name="name"
          placeholder="Your Name*"
          required
          className="
            px-4 py-3
            rounded-lg border border-[#ddd]
            text-[16px] placeholder:text-[#999]
            focus:outline-none focus:ring-2 focus:ring-black
          "
        />

        <input
          name="email"
          type="email"
          placeholder="Email*"
          required
          className="
            px-4 py-3
            rounded-lg border border-[#ddd]
            text-[16px] placeholder:text-[#999]
            focus:outline-none focus:ring-2 focus:ring-black
          "
        />

        {/* ROW 2 */}
        <input
          name="phone"
          placeholder="Phone*"
          required
          className="
            px-4 py-3
            rounded-lg border border-[#ddd]
            text-[16px] placeholder:text-[#999]
            focus:outline-none focus:ring-2 focus:ring-black
          "
        />

        <input
          name="company"
          placeholder="Company"
          className="
            px-4 py-3
            rounded-lg border border-[#ddd]
            text-[16px] placeholder:text-[#999]
            focus:outline-none focus:ring-2 focus:ring-black
          "
        />

        {/* SUBJECT – FULL WIDTH */}
        <input
          name="subject"
          placeholder="Subject*"
          required
          className="
            sm:col-span-2
            px-4 py-3
            rounded-lg border border-[#ddd]
            text-[16px] placeholder:text-[#999]
            focus:outline-none focus:ring-2 focus:ring-black
          "
        />

        {/* MESSAGE – FULL WIDTH */}
        <textarea
          name="message"
          placeholder="Message"
          rows={6}
          required
          className="
            sm:col-span-2
            px-4 py-3
            rounded-lg border border-[#ddd]
            text-[16px] placeholder:text-[#999]
            focus:outline-none focus:ring-2 focus:ring-black
            resize-y
          "
        />

        {/* BUTTON */}
        <button
          type="submit"
          disabled={isPending}
          className="
            sm:col-span-2
            bg-black text-white py-4 rounded-md
            font-semibold transition hover:bg-[#222]
            disabled:opacity-60
          "
        >
          {isPending ? "Sending..." : "Send Message"}
        </button>

        {/* STATUS */}
        {state?.success && (
          <p className="sm:col-span-2 text-green-600 text-sm text-center">
            Message sent successfully!
          </p>
        )}

        {state?.error && (
          <p className="sm:col-span-2 text-red-600 text-sm text-center">
            {state.error}
          </p>
        )}
      </form>
    </section>
  );
}
