import { Resend } from "resend";



export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const body = await req.json();
  const { name, email, phone, company, subject, message } = body;

  // load multiple emails from env
  const receivers = process.env.CONTACT_RECEIVER!;

  try {
    await resend.emails.send({
      from: "Website <onboarding@resend.dev>",
      to: receivers, // ✅ multiple emails from env
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

    return Response.json({ success: true });
  } catch (error) {
    console.error("Resend Error:", error);
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }
}
