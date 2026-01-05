"use server";

import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);


/* -------------------------------
   Validation schema
-------------------------------- */
const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(6),
  company: z.string().optional(),
  subject: z.string().min(5),
  message: z.string().min(10),
});

export async function submitContactForm(_: any, formData: FormData) {
  /* Honeypot */
  if (formData.get("website_url")) {
    return { success: true };
  }

  const raw = Object.fromEntries(formData.entries());
  const parsed = schema.safeParse(raw);

if (!parsed.success) {
  const firstError =
    Object.values(parsed.error.flatten().fieldErrors)[0]?.[0] ??
    "Invalid form data";

  return { error: firstError };
}

  const { name, email, phone, company, subject, message } = parsed.data;

  try {
    await resend.emails.send({
from: "Website <onboarding@resend.dev>",
      to: [process.env.CONTACT_RECEIVER!],
      replyTo: email,
      subject: `[Contact] ${subject}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Company: ${company || "-"}

Message:
${message}
      `,
    });

    return { success: true };
  } catch (e) {
    console.error("Resend error:", e);
    return { error: "Unable to send message" };
  }
}
