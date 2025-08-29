import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'edge'; // Added for Cloudflare Pages Edge Runtime compatibility

export async function POST(request: Request) {
  try {
    const { name, company, email, phone, message } = await request.json();

    // Create a transporter using your SMTP details
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: parseInt(process.env.EMAIL_SERVER_PORT || '587'), // Default to 587 if not set
      secure: process.env.EMAIL_SERVER_PORT === '465', // Use 'true' for 465, 'false' for other ports
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO || 'info@3bt.ai', // Default to info@3bt.ai if not set
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to send email.' }, { status: 500 });
  }
}