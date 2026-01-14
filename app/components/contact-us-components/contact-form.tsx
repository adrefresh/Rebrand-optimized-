// // "use client";

// // import React, { useState } from "react";

// // type FormState = {
// //   name: string;
// //   email: string;
// //   phone: string;
// //   company: string;
// //   subject: string;
// //   message: string;
// // };

// // export default function ContactForm() {
// //   const [form, setForm] = useState<FormState>({
// //     name: "",
// //     email: "",
// //     phone: "",
// //     company: "",
// //     subject: "",
// //     message: "",
// //   });

// //   const [status, setStatus] = useState<
// //     "sending" | "sent" | "error" | null
// //   >(null);

// //   function handleChange(
// //     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
// //   ) {
// //     const { name, value } = e.target;
// //     setForm((prev) => ({ ...prev, [name]: value }));
// //   }

// //   async function handleSubmit(e: React.FormEvent) {
// //     e.preventDefault();
// //     setStatus("sending");

// //     try {
// //       const res = await fetch("/api/contact", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify(form),
// //       });

// //       if (!res.ok) throw new Error();

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
// //     } catch {
// //       setStatus("error");
// //     }
// //   }

// //   return (
// //     <section className="w-[80vw] mx-auto mt-[6%] pb-[120px]">
// //       <h2 className="text-[4rem] font-bold mb-10 text-center">
// //         Drop Us a Message
// //       </h2>

// //       <form
// //         onSubmit={handleSubmit}
// //         className="
// //           grid grid-cols-2 gap-6
// //           max-[768px]:grid-cols-1
// //         "
// //       >
// //         {/* ROW 1 */}
// //         <input
// //           name="name"
// //           placeholder="Your Name*"
// //           required
// //           value={form.name}
// //           onChange={handleChange}
// //           className="px-4 py-3 rounded-md border border-[#ddd]"
// //         />

// //         <input
// //           name="email"
// //           type="email"
// //           placeholder="Email*"
// //           required
// //           value={form.email}
// //           onChange={handleChange}
// //           className="px-4 py-3 rounded-md border border-[#ddd]"
// //         />

// //         {/* ROW 2 */}
// //         <input
// //           name="phone"
// //           placeholder="Phone*"
// //           required
// //           value={form.phone}
// //           onChange={handleChange}
// //           className="px-4 py-3 rounded-md border border-[#ddd]"
// //         />

// //         <input
// //           name="company"
// //           placeholder="Company"
// //           value={form.company}
// //           onChange={handleChange}
// //           className="px-4 py-3 rounded-md border border-[#ddd]"
// //         />

// //         {/* ROW 3 – FULL WIDTH */}
// //         <input
// //           name="subject"
// //           placeholder="Subject*"
// //           required
// //           value={form.subject}
// //           onChange={handleChange}
// //           className="col-span-2 px-4 py-3 rounded-md border border-[#ddd] max-[768px]:col-span-1"
// //         />

// //         {/* ROW 4 – FULL WIDTH */}
// //         <textarea
// //           name="message"
// //           placeholder="Message"
// //           rows={6}
// //           value={form.message}
// //           onChange={handleChange}
// //           className="col-span-2 px-4 py-3 rounded-md border border-[#ddd] resize-y max-[768px]:col-span-1"
// //         />

// //         {/* BUTTON */}
// //         <button
// //           type="submit"
// //           disabled={status === "sending"}
// //           className="
// //             col-span-2
// //             bg-black text-white py-4 rounded-md
// //             font-semibold transition hover:bg-[#222]
// //             disabled:opacity-60
// //             max-[768px]:col-span-1
// //           "
// //         >
// //           {status === "sending" ? "Sending..." : "Send Message"}
// //         </button>

// //         {/* STATUS */}
// //         {status === "sent" && (
// //           <p className="col-span-2 text-green-600 text-sm text-center">
// //             Message sent successfully!
// //           </p>
// //         )}

// //         {status === "error" && (
// //           <p className="col-span-2 text-red-600 text-sm text-center">
// //             Something went wrong. Please try again.
// //           </p>
// //         )}
// //       </form>
// //     </section>
// //   );
// // }

// // "use client";

// // import React from "react";
// // import { useActionState } from "react";
// // import { submitContactForm } from "@/app/actions/contact";

// // export default function ContactForm() {
// //   const [state, formAction, isPending] = useActionState(
// //     submitContactForm,
// //     null
// //   );

// //   return (
// //     <section
// //       className="
// //         mx-auto
// //         w-[92vw] sm:w-[88vw] md:w-[80vw] lg:w-[70vw] xl:w-[65vw]
// //         mt-12 sm:mt-16 pb-24
// //       "
// //     >
// //       {/* TITLE */}
// //       <h2
// //         className="
// //           text-center font-bold mb-10
// //           text-[2.2rem] sm:text-[2.6rem] md:text-[3rem]
// //           lg:text-[3.5rem] xl:text-[4rem]
// //         "
// //       >
// //         Drop Us a Message
// //       </h2>

// //       {/* FORM */}
// //       <form
// //         action={formAction}
// //         className="
// //           grid grid-cols-1 sm:grid-cols-2
// //           gap-4 sm:gap-6
// //         "
// //       >
// //         {/* Honeypot */}
// //         <input
// //           type="text"
// //           name="website_url"
// //           className="sr-only"
// //           tabIndex={-1}
// //           autoComplete="off"
// //         />

// //         {/* ROW 1 */}
// //         <input
// //           name="name"
// //           placeholder="Your Name*"
// //           required
// //           className="
// //             px-4 py-3
// //             rounded-lg border border-[#ddd]
// //             text-[16px] placeholder:text-[#999]
// //             focus:outline-none focus:ring-2 focus:ring-black
// //           "
// //         />

// //         <input
// //           name="email"
// //           type="email"
// //           placeholder="Email*"
// //           required
// //           className="
// //             px-4 py-3
// //             rounded-lg border border-[#ddd]
// //             text-[16px] placeholder:text-[#999]
// //             focus:outline-none focus:ring-2 focus:ring-black
// //           "
// //         />

// //         {/* ROW 2 */}
// //         <input
// //           name="phone"
// //           placeholder="Phone*"
// //           required
// //           className="
// //             px-4 py-3
// //             rounded-lg border border-[#ddd]
// //             text-[16px] placeholder:text-[#999]
// //             focus:outline-none focus:ring-2 focus:ring-black
// //           "
// //         />

// //         <input
// //           name="company"
// //           placeholder="Company"
// //           className="
// //             px-4 py-3
// //             rounded-lg border border-[#ddd]
// //             text-[16px] placeholder:text-[#999]
// //             focus:outline-none focus:ring-2 focus:ring-black
// //           "
// //         />

// //         {/* SUBJECT – FULL WIDTH */}
// //         <input
// //           name="subject"
// //           placeholder="Subject*"
// //           required
// //           className="
// //             sm:col-span-2
// //             px-4 py-3
// //             rounded-lg border border-[#ddd]
// //             text-[16px] placeholder:text-[#999]
// //             focus:outline-none focus:ring-2 focus:ring-black
// //           "
// //         />

// //         {/* MESSAGE – FULL WIDTH */}
// //         <textarea
// //           name="message"
// //           placeholder="Message"
// //           rows={6}
// //           required
// //           className="
// //             sm:col-span-2
// //             px-4 py-3
// //             rounded-lg border border-[#ddd]
// //             text-[16px] placeholder:text-[#999]
// //             focus:outline-none focus:ring-2 focus:ring-black
// //             resize-y
// //           "
// //         />

// //         {/* BUTTON */}
// //         <button
// //           type="submit"
// //           disabled={isPending}
// //           className="
// //             sm:col-span-2
// //             bg-black text-white py-4 rounded-md
// //             font-semibold transition hover:bg-[#222]
// //             disabled:opacity-60
// //           "
// //         >
// //           {isPending ? "Sending..." : "Send Message"}
// //         </button>

// //         {/* STATUS */}
// //         {state?.success && (
// //           <p className="sm:col-span-2 text-green-600 text-sm text-center">
// //             Message sent successfully!
// //           </p>
// //         )}

// //         {state?.error && (
// //           <p className="sm:col-span-2 text-red-600 text-sm text-center">
// //             {state.error}
// //           </p>
// //         )}
// //       </form>
// //     </section>
// //   );
// // }

// // "use client";

// // import React, { useRef, useState } from "react";

// // export default function ContactForm() {
// //   const startTime = useRef(Date.now());
// //   const [submitted, setSubmitted] = useState(false);

// //   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
// //     e.preventDefault();
// //     if (submitted) return;

// //     const form = e.currentTarget;
// //     const data = new FormData(form);

// //     /* 🛑 1. Honeypot */
// //     if (data.get("website_url")) return;

// //     /* 🛑 2. Time-based check (bots submit instantly) */
// //     const timeTaken = Date.now() - startTime.current;
// //     if (timeTaken < 3000) return; // < 3s = bot

// //     /* 🛑 3. Human checkbox */
// //     if (!data.get("human_check")) return;

// //     /* 🛑 4. Validate inputs */
// //     const name = String(data.get("name") || "").trim();
// //     const email = String(data.get("email") || "").trim();
// //     const phone = String(data.get("phone") || "").trim();
// //     const company = String(data.get("company") || "-").trim();
// //     const subject = String(data.get("subject") || "").trim();
// //     const message = String(data.get("message") || "").trim();

// //     if (name.length < 2) return;
// //     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
// //     if (phone.length < 6) return;
// //     if (subject.length < 5) return;
// //     if (message.length < 15) return;

// //     /* 🛑 5. Prevent re-submit */
// //     setSubmitted(true);

// //     const body = `
// // Name: ${name}
// // Email: ${email}
// // Phone: ${phone}
// // Company: ${company}

// // Message:
// // ${message}
// //     `.trim();

// //    const mailto =
// //   "mailto:revanthrevi131@gmail.com" +
// //   "?subject=" + encodeURIComponent(`[Contact]: ${subject}`) +
// //   "&body=" + encodeURIComponent(body);

// // window.location.href = mailto;

// //   };

// //   return (
// //     <section
// //       className="
// //         mx-auto
// //         w-[92vw] sm:w-[88vw] md:w-[80vw] lg:w-[70vw] xl:w-[65vw]
// //         mt-12 sm:mt-16 pb-24
// //       "
// //     >
// //       <h2
// //         className="
// //           text-center font-bold mb-10
// //           text-[2.2rem] sm:text-[2.6rem] md:text-[3rem]
// //           lg:text-[3.5rem] xl:text-[4rem]
// //         "
// //       >
// //         Drop Us a Message
// //       </h2>

// //       <form
// //         onSubmit={handleSubmit}
// //         className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
// //       >
// //         {/* Honeypot */}
// //         <input
// //           type="text"
// //           name="website_url"
// //           className="sr-only"
// //           tabIndex={-1}
// //           autoComplete="off"
// //         />

// //         <input
// //           name="name"
// //           required
// //           placeholder="Your Name*"
// //           className="px-4 py-3 rounded-lg border border-[#ddd]"
// //         />

// //         <input
// //           name="email"
// //           type="email"
// //           required
// //           placeholder="Email*"
// //           className="px-4 py-3 rounded-lg border border-[#ddd]"
// //         />

// //         <input
// //           name="phone"
// //           required
// //           placeholder="Phone*"
// //           className="px-4 py-3 rounded-lg border border-[#ddd]"
// //         />

// //         <input
// //           name="company"
// //           placeholder="Company"
// //           className="px-4 py-3 rounded-lg border border-[#ddd]"
// //         />

// //         <input
// //           name="subject"
// //           required
// //           placeholder="Subject*"
// //           className="sm:col-span-2 px-4 py-3 rounded-lg border border-[#ddd]"
// //         />

// //         <textarea
// //           name="message"
// //           required
// //           rows={6}
// //           placeholder="Message (min 15 chars)"
// //           className="sm:col-span-2 px-4 py-3 rounded-lg border border-[#ddd]"
// //         />

// //         {/* Human check */}
// //         <label className="sm:col-span-2 flex items-center gap-2 text-sm">
// //           <input type="checkbox" name="human_check" required />
// //           I am not a bot
// //         </label>

// //         <button
// //           type="submit"
// //           disabled={submitted}
// //           className="
// //             sm:col-span-2
// //             bg-black text-white py-4 rounded-md
// //             font-semibold transition hover:bg-[#222]
// //             disabled:opacity-60
// //           "
// //         >
// //           {submitted ? "Opening Mail App..." : "Send Message"}
// //         </button>
// //       </form>
// //     </section>
// //   );
// // }

// // "use client";

// // import React, { useRef, useState } from "react";

// // const GETFORM_ENDPOINT = "https://getform.io/f/agdvjnob";

// // export default function ContactForm() {
// //   const startTime = useRef(Date.now());
// //   const [loading, setLoading] = useState(false);
// //   const [success, setSuccess] = useState(false);
// //   const [error, setError] = useState("");

// //   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
// //     e.preventDefault();
// //     if (loading) return;

// //     const form = e.currentTarget;
// //     const data = new FormData(form);

// //     /* 🛑 1. Honeypot */
// //     if (data.get("website_url")) return;

// //     /* 🛑 2. Time-based bot protection */
// //     if (Date.now() - startTime.current < 3000) return;

// //     /* 🛑 3. Human checkbox */
// //     if (!data.get("human_check")) return;

// //     /* 🛑 4. Validation */
// //     const name = String(data.get("name") || "").trim();
// //     const email = String(data.get("email") || "").trim();
// //     const phone = String(data.get("phone") || "").trim();
// //     const subject = String(data.get("subject") || "").trim();
// //     const message = String(data.get("message") || "").trim();

// //     if (
// //       name.length < 2 ||
// //       !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
// //       phone.length < 6 ||
// //       subject.length < 5 ||
// //       message.length < 15
// //     ) {
// //       setError("Please fill all fields correctly.");
// //       return;
// //     }

// //     setLoading(true);
// //     setError("");

// //     try {
// //       const res = await fetch(GETFORM_ENDPOINT, {
// //         method: "POST",
// //         body: data,
// //         headers: {
// //           Accept: "application/json",
// //         },
// //       });

// //       if (!res.ok) throw new Error("Submission failed");

// //       setSuccess(true);
// //       form.reset();
// //     } catch (err) {
// //       setError("Something went wrong. Please try again.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <section
// //       className="
// //         mx-auto
// //         w-[92vw] sm:w-[88vw] md:w-[80vw] lg:w-[70vw] xl:w-[65vw]
// //         mt-12 sm:mt-16 pb-24
// //       "
// //     >
// //       <h2
// //         className="
// //           text-center font-bold mb-10
// //           text-[2.2rem] sm:text-[2.6rem] md:text-[3rem]
// //           lg:text-[3.5rem] xl:text-[4rem]
// //         "
// //       >
// //         Drop Us a Message
// //       </h2>

// //       <form
// //         onSubmit={handleSubmit}
// //         className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
// //       >
// //         {/* Honeypot */}
// //         <input
// //           type="text"
// //           name="website_url"
// //           className="sr-only"
// //           tabIndex={-1}
// //           autoComplete="off"
// //         />

// //         <input
// //           name="name"
// //           required
// //           placeholder="Your Name*"
// //           className="px-4 py-3 rounded-lg border border-[#ddd]"
// //         />

// //         <input
// //           name="email"
// //           type="email"
// //           required
// //           placeholder="Email*"
// //           className="px-4 py-3 rounded-lg border border-[#ddd]"
// //         />

// //         <input
// //           name="phone"
// //           required
// //           placeholder="Phone*"
// //           className="px-4 py-3 rounded-lg border border-[#ddd]"
// //         />

// //         <input
// //           name="company"
// //           placeholder="Company"
// //           className="px-4 py-3 rounded-lg border border-[#ddd]"
// //         />

// //         <input
// //           name="subject"
// //           required
// //           placeholder="Subject*"
// //           className="sm:col-span-2 px-4 py-3 rounded-lg border border-[#ddd]"
// //         />

// //         <textarea
// //           name="message"
// //           required
// //           rows={6}
// //           placeholder="Message (min 15 chars)"
// //           className="sm:col-span-2 px-4 py-3 rounded-lg border border-[#ddd]"
// //         />

// //         {/* Human check */}
// //         <label className="sm:col-span-2 flex items-center gap-2 text-sm">
// //           <input type="checkbox" name="human_check" required />
// //           I am not a bot
// //         </label>

// //         <button
// //           type="submit"
// //           disabled={loading}
// //           className="
// //             sm:col-span-2
// //             bg-black text-white py-4 rounded-md
// //             font-semibold transition hover:bg-[#222]
// //             disabled:opacity-60
// //           "
// //         >
// //           {loading ? "Sending..." : "Send Message"}
// //         </button>

// //         {success && (
// //           <p className="sm:col-span-2 text-green-600 text-sm text-center">
// //             ✅ Message sent successfully. We’ll get back to you soon.
// //           </p>
// //         )}

// //         {error && (
// //           <p className="sm:col-span-2 text-red-600 text-sm text-center">
// //             {error}
// //           </p>
// //         )}
// //       </form>
// //     </section>
// //   );
// // }


// // "use client";

// // import React, { useRef, useState } from "react";

// // const GETFORM_ENDPOINT = "https://getform.io/f/agdvjnob";

// // export default function ContactForm() {
// //   const startTime = useRef(Date.now());
// //   const [loading, setLoading] = useState(false);
// //   const [success, setSuccess] = useState(false);
// //   const [error, setError] = useState("");

// //   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
// //     e.preventDefault();
// //     if (loading) return;

// //     const form = e.currentTarget;
// //     const data = new FormData(form);

// //     /* 🛑 1. Honeypot */
// //     if (data.get("website_url")) return;

// //     /* 🛑 2. Time-based bot protection */
// //     if (Date.now() - startTime.current < 3000) return;

// //     /* 🛑 3. Human checkbox */
// //     if (!data.get("human_check")) return;

// //     /* 🛑 4. Validation */
// //     const name = String(data.get("name") || "").trim();
// //     const email = String(data.get("email") || "").trim();
// //     const phone = String(data.get("phone") || "").trim();
// //     const subject = String(data.get("subject") || "").trim();
// //     const message = String(data.get("message") || "").trim();

// //     if (
// //       name.length < 2 ||
// //       !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
// //       phone.length < 6 ||
// //       subject.length < 5 ||
// //       message.length < 10
// //     ) {
// //       setError("Please fill all fields correctly.");
// //       return;
// //     }

// //     setLoading(true);
// //     setError("");

// //     try {
// //       const res = await fetch(GETFORM_ENDPOINT, {
// //         method: "POST",
// //         body: data,
// //         headers: {
// //           Accept: "application/json",
// //         },
// //       });

// //       if (!res.ok) throw new Error("Submission failed");

// //       setSuccess(true);
// //       form.reset();
// //     } catch (err) {
// //       setError("Something went wrong. Please try again.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     /* 🔥 FULL-WIDTH SECTION WITH GRAY BACKGROUND */
// //     <section className="w-screen bg-gray-200 py-8 sm:py-10 mt-[-60px]">
// //       <div
// //         className="
// //           mx-auto
// //           w-[92vw] sm:w-[88vw] md:w-[80vw] lg:w-[70vw] xl:w-[65vw]
// //         "
// //       >
// //         <h2
// //           className="
// //             text-center font-bold mb-6
// //             text-[2.1rem] sm:text-[2.5rem] md:text-[2.9rem]
// //             lg:text-[3.3rem] xl:text-[3.7rem]
// //           "
// //         >
// //           Drop Us a Message
// //         </h2>

// //         <form
// //           onSubmit={handleSubmit}
// //           className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
// //         >
// //           {/* Honeypot */}
// //           <input
// //             type="text"
// //             name="website_url"
// //             className="sr-only"
// //             tabIndex={-1}
// //             autoComplete="off"
// //           />

// //           {/* INPUTS */}
// //           <input name="name" required placeholder="Your Name*" className="input" />
// //           <input name="email" type="email" required placeholder="Email*" className="input" />
// //           <input name="phone" required placeholder="Phone*" className="input" />
// //           <input name="company" placeholder="Company" className="input" />

// //           <input
// //             name="subject"
// //             required
// //             placeholder="Subject*"
// //             className="sm:col-span-2 input"
// //           />

// //           <textarea
// //             name="message"
// //             required
// //             rows={5}
// //             placeholder="Message (min 10 chars)"
// //             className="sm:col-span-2 textarea"
// //           />

// //           {/* Human check */}
      

// //           <button
// //             type="submit"
// //             disabled={loading}
// //             className="
// //               sm:col-span-2
// //               bg-black text-white py-3 rounded-md
// //               font-semibold transition hover:bg-[#222]
// //               disabled:opacity-60
// //             "
// //           >
// //             {loading ? "Sending..." : "Send Message"}
// //           </button>

// //           {success && (
// //             <p className="sm:col-span-2 text-green-600 text-sm text-center mt-1">
// //               ✅ Message sent successfully. We’ll get back to you soon.
// //             </p>
// //           )}

// //           {error && (
// //             <p className="sm:col-span-2 text-red-600 text-sm text-center mt-1">
// //               {error}
// //             </p>
// //           )}
// //         </form>
// //       </div>

// //       {/* INPUT STYLES */}
// //       <style>{`
// //         .input,
// //         .textarea {
// //           padding: 0.65rem 1rem;
// //           border-radius: 0.5rem;
// //           border: 1px solid #000000ff;
// //           background: transparent;
// //           color: #000;
// //           outline: none;
// //         }

// //         .input::placeholder,
// //         .textarea::placeholder {
// //           color: #000000ff;
// //           opacity: 0.9;
// //         }
// //       `}</style>
// //     </section>
// //   );
// // }

// // "use client";

// // import React, { useRef, useState } from "react";

// // const GETFORM_ENDPOINT = "https://getform.io/f/agdvjnob";

// // export default function ContactForm() {
// //   const startTime = useRef(Date.now());
// //   const [loading, setLoading] = useState(false);
// //   const [success, setSuccess] = useState(false);
// //   const [error, setError] = useState("");

// //   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
// //     e.preventDefault();
// //     if (loading) return;

// //     const form = e.currentTarget;
// //     const data = new FormData(form);

// //     if (data.get("website_url")) return;
// //     if (Date.now() - startTime.current < 3000) return;
// //     if (!data.get("human_check")) return;

// //     const name = String(data.get("name") || "").trim();
// //     const email = String(data.get("email") || "").trim();
// //     const phone = String(data.get("phone") || "").trim();
// //     const subject = String(data.get("subject") || "").trim();
// //     const message = String(data.get("message") || "").trim();

// //     if (
// //       name.length < 2 ||
// //       !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
// //       phone.length < 6 ||
// //       subject.length < 5 ||
// //       message.length < 10
// //     ) {
// //       setError("Please fill all fields correctly.");
// //       return;
// //     }

// //     setLoading(true);
// //     setError("");

// //     try {
// //       const res = await fetch(GETFORM_ENDPOINT, {
// //         method: "POST",
// //         body: data,
// //         headers: { Accept: "application/json" },
// //       });

// //       if (!res.ok) throw new Error("Submission failed");

// //       setSuccess(true);
// //       form.reset();
// //     } catch {
// //       setError("Something went wrong. Please try again.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <section className="w-screen bg-gray-200 py-8 sm:py-10 lg:py-15 mt-[-40px] md:[-60px]">
// //       <div className="mx-auto w-[92vw] sm:w-[88vw] md:w-[78vw] lg:w-[68vw] xl:w-[60vw] 2xl:w-[52vw]">
// //         <h2 className="text-center font-bold mb-8 text-[1.9rem] sm:text-[2.4rem] md:text-[2.8rem] lg:text-[3.2rem] xl:text-[3.6rem]">
// //           Drop Us a Message
// //         </h2>

// //         <form
// //           onSubmit={handleSubmit}
// //           className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6"
// //         >
// //           <input
// //             type="text"
// //             name="website_url"
// //             className="sr-only"
// //             tabIndex={-1}
// //             autoComplete="off"
// //           />

// //           <input name="name" required placeholder="Your Name*" className="input" />
// //           <input name="email" type="email" required placeholder="Email*" className="input" />
// //           <input name="phone" required placeholder="Phone*" className="input" />
// //           <input name="company" placeholder="Company" className="input" />

// //           <input
// //             name="subject"
// //             required
// //             placeholder="Subject*"
// //             className="sm:col-span-2 input"
// //           />

// //           <textarea
// //             name="message"
// //             required
// //             rows={5}
// //             placeholder="Message (min 10 chars)"
// //             className="sm:col-span-2 textarea"
// //           />

// //           <button
// //             type="submit"
// //             disabled={loading}
// //             className="
// //               sm:col-span-2
// //               w-full
// //               bg-black text-white
// //               py-3 sm:py-4
// //               text-base sm:text-lg
// //               rounded-md
// //               font-semibold
// //               transition hover:bg-[#222]
// //               disabled:opacity-60
// //             "
// //           >
// //             {loading ? "Sending..." : "Send Message"}
// //           </button>

// //           {success && (
// //             <p className="sm:col-span-2 text-green-600 text-sm sm:text-base text-center">
// //               ✅ Message sent successfully. We’ll get back to you soon.
// //             </p>
// //           )}

// //           {error && (
// //             <p className="sm:col-span-2 text-red-600 text-sm sm:text-base text-center">
// //               {error}
// //             </p>
// //           )}
// //         </form>
// //       </div>

// //       <style>{`
// //         .input,
// //         .textarea {
// //           padding: 0.75rem 1rem;
// //           border-radius: 0.5rem;
// //           border: 1px solid #000;
// //           background: #ffffff;
// //           color: #000;
// //           outline: none;
// //           font-size: 0.95rem;
// //         }

// //         @media (min-width: 640px) {
// //           .input,
// //           .textarea {
// //             font-size: 1rem;
// //           }
// //         }

// //         @media (min-width: 1024px) {
// //           .input,
// //           .textarea {
// //             font-size: 1.05rem;
// //           }
// //         }

// //         .input::placeholder,
// //         .textarea::placeholder {
// //           color: #000;
// //           opacity: 0.85;
// //         }
// //       `}</style>
// //     </section>
// //   );
// // }

// "use client";

// import React, { useRef, useState } from "react";

// const GETFORM_ENDPOINT = "https://getform.io/f/agdvjnob";

// export default function ContactForm() {
//   const startTime = useRef(Date.now());
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState("");

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (loading) return;

//     const form = e.currentTarget;
//     const data = new FormData(form);

//     // Anti-bot protection
//     if (data.get("website_url")) return; // honeypot
//     if (Date.now() - startTime.current < 1000) return; // 1 sec delay

//     const name = String(data.get("name") || "").trim();
//     const email = String(data.get("email") || "").trim();
//     const phone = String(data.get("phone") || "").trim();
//     const subject = String(data.get("subject") || "").trim();
//     const message = String(data.get("message") || "").trim();

//     if (
//       name.length < 2 ||
//       !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
//       phone.length < 6 ||
//       subject.length < 5 ||
//       message.length < 10
//     ) {
//       setError("Please fill all fields correctly.");
//       return;
//     }

//     setLoading(true);
//     setError("");

//     try {
//       const res = await fetch(GETFORM_ENDPOINT, {
//         method: "POST",
//         body: data,
//         headers: {
//           Accept: "application/json",
//         },
//       });

//       if (!res.ok) throw new Error("Submission failed");

//       setSuccess(true);
//       form.reset();
//     } catch (err) {
//       setError("Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="w-screen bg-gray-200 py-8 sm:py-10 lg:py-15 mt-[-40px] md:mt-[-60px]">
//       <div className="mx-auto w-[92vw] sm:w-[88vw] md:w-[78vw] lg:w-[68vw] xl:w-[60vw] 2xl:w-[52vw]">
//         <h2 className="text-center font-bold mb-8 text-[1.9rem] sm:text-[2.4rem] md:text-[2.8rem] lg:text-[3.2rem] xl:text-[3.6rem]">
//           Drop Us a Message
//         </h2>

//         <form
//           onSubmit={handleSubmit}
//           className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6"
//         >
//           {/* Honeypot field */}
//           <input
//             type="text"
//             name="website_url"
//             className="sr-only"
//             tabIndex={-1}
//             autoComplete="off"
//           />

//           <input name="name" required placeholder="Your Name*" className="input" />
//           <input name="email" type="email" required placeholder="Email*" className="input" />
//           <input name="phone" required placeholder="Phone*" className="input" />
//           <input name="company" placeholder="Company" className="input" />

//           <input
//             name="subject"
//             required
//             placeholder="Subject*"
//             className="sm:col-span-2 input"
//           />

//           <textarea
//             name="message"
//             required
//             rows={5}
//             placeholder="Message (min 10 chars)"
//             className="sm:col-span-2 textarea"
//           />

//           <button
//             type="submit"
//             disabled={loading}
//             className="
//               sm:col-span-2
//               w-full
//               bg-black text-white
//               py-3 sm:py-4
//               text-base sm:text-lg
//               rounded-md
//               font-semibold
//               transition hover:bg-[#222]
//               disabled:opacity-60
//             "
//           >
//             {loading ? "Sending..." : "Send Message"}
//           </button>

//           {success && (
//             <p className="sm:col-span-2 text-green-600 text-sm sm:text-base text-center">
//               ✅ Message sent successfully. We’ll get back to you soon.
//             </p>
//           )}

//           {error && (
//             <p className="sm:col-span-2 text-red-600 text-sm sm:text-base text-center">
//               {error}
//             </p>
//           )}
//         </form>
//       </div>

//       <style>{`
//         .input,
//         .textarea {
//           padding: 0.75rem 1rem;
//           border-radius: 0.5rem;
//           border: 1px solid #000;
//           background: #ffffff;
//           color: #000;
//           outline: none;
//           font-size: 0.95rem;
//         }

//         @media (min-width: 640px) {
//           .input,
//           .textarea {
//             font-size: 1rem;
//           }
//         }

//         @media (min-width: 1024px) {
//           .input,
//           .textarea {
//             font-size: 1.05rem;
//           }
//         }

//         .input::placeholder,
//         .textarea::placeholder {
//           color: #000;
//           opacity: 0.85;
//         }
//       `}</style>
//     </section>
//   );
// }

"use client";

import React, { useRef, useState } from "react";

export default function ContactForm() {
  const startTime = useRef(Date.now());
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    const form = e.currentTarget;
    const data = new FormData(form);

    // Anti-bot protection
    if (data.get("website_url")) return; // honeypot
    if (Date.now() - startTime.current < 1000) return; // 1 sec delay

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const company = String(data.get("company") || "").trim();
    const subject = String(data.get("subject") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (
      name.length < 2 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      phone.length < 6 ||
      subject.length < 5 ||
      message.length < 10
    ) {
      setError("Please fill all fields correctly.");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          company,
          subject,
          message,
        }),
      });

      const result = await res.json();

      if (!res.ok) throw new Error(result.error || "Submission failed");

      setSuccess(true);
      form.reset();
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-screen bg-gray-200 py-8 sm:py-10 lg:py-15 mt-[-40px] md:mt-[-60px]">
      <div className="mx-auto w-[92vw] sm:w-[88vw] md:w-[78vw] lg:w-[68vw] xl:w-[60vw] 2xl:w-[52vw]">
        <h2 className="text-center font-bold mb-8 text-[1.9rem] sm:text-[2.4rem] md:text-[2.8rem] lg:text-[3.2rem] xl:text-[3.6rem]">
          Drop Us a Message
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6"
        >
          {/* Honeypot field */}
          <input
            type="text"
            name="website_url"
            className="sr-only"
            tabIndex={-1}
            autoComplete="off"
          />

          <input name="name" required placeholder="Your Name*" className="input" />
          <input name="email" type="email" required placeholder="Email*" className="input" />
          <input name="phone" required placeholder="Phone*" className="input" />
          <input name="company" placeholder="Company" className="input" />

          <input
            name="subject"
            required
            placeholder="Subject*"
            className="sm:col-span-2 input"
          />

          <textarea
            name="message"
            required
            rows={5}
            placeholder="Message (min 10 chars)"
            className="sm:col-span-2 textarea"
          />

          <button
            type="submit"
            disabled={loading}
            className="
              sm:col-span-2
              w-full
              bg-black text-white
              py-3 sm:py-4
              text-base sm:text-lg
              rounded-md
              font-semibold
              transition hover:bg-[#222]
              disabled:opacity-60
            "
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="sm:col-span-2 text-green-600 text-sm sm:text-base text-center">
              ✅ Message sent successfully. We’ll get back to you soon.
            </p>
          )}

          {error && (
            <p className="sm:col-span-2 text-red-600 text-sm sm:text-base text-center">
              {error}
            </p>
          )}
        </form>
      </div>

      <style>{`
        .input,
        .textarea {
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
          border: 1px solid #000;
          background: #ffffff;
          color: #000;
          outline: none;
          font-size: 0.95rem;
        }

        @media (min-width: 640px) {
          .input,
          .textarea {
            font-size: 1rem;
          }
        }

        @media (min-width: 1024px) {
          .input,
          .textarea {
            font-size: 1.05rem;
          }
        }

        .input::placeholder,
        .textarea::placeholder {
          color: #000;
          opacity: 0.85;
        }
      `}</style>
    </section>
  );
}
