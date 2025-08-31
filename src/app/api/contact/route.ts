import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'edge';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, company, email, phone, message, recaptchaResponse } = await request.json();

    // Verify reCAPTCHA token
    const recaptchaSecretKey = process.env.RECAPTCHA_SECRET_KEY;
    const recaptchaVerifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecretKey}&response=${recaptchaResponse}`;

    const recaptchaVerifyResponse = await fetch(recaptchaVerifyUrl, {
      method: 'POST',
    });
    const recaptchaVerifyData = await recaptchaVerifyResponse.json();

    if (!recaptchaVerifyData.success) {
      console.error('reCAPTCHA verification failed:', recaptchaVerifyData);
      return NextResponse.json({ message: 'reCAPTCHA verification failed.' }, { status: 400 });
    }

    const data = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'onboarding@resend.dev', // Use a verified sender from Resend
      to: process.env.EMAIL_TO || 'info@3bt.ai',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    if (data.error) {
      console.error('Resend error:', data.error);
      return NextResponse.json({ message: data.error.message || 'Failed to send email via Resend.' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'An unexpected error occurred.' }, { status: 500 });
  }
}