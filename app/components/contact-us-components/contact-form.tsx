

"use client";

import React, { useRef, useState } from "react";

export default function ContactForm() {
  const startTime = useRef(Date.now());
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
         const [honeypot, setHoneypot] = useState("");

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
      message.length > 1
    ) {
     
      setError("Please fill all fields correctly.");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const res = await fetch("/contact-form.php", {
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


<div style={{ display: 'none' }} aria-hidden="true">
  <input 
    type="text" 
    name="website_url" 
    value={honeypot} 
    onChange={(e) => setHoneypot(e.target.value)} 
   tabIndex={-1}
    autoComplete="off" 
  />
</div>
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
            placeholder="Write a message*"
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
