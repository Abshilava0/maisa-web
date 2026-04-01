import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    // Configure transporter with Gmail (App Password recommended)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // send to yourself
      subject: subject?.trim()
        ? `New Contact Form Submission: ${subject}`
        : `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || 'Not provided'}\nMessage: ${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    let message = 'Unknown error';
    if (error instanceof Error) message = error.message;
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
