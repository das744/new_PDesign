import { NextRequest, NextResponse } from 'next/server';

// Use dynamic require
const nodemailer = require('nodemailer');

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, requirement, message, type } = body;

  const subject =
    type === 'quote' ? 'New Quote Request' : 'New Contact Message';
  const text =
    type === 'quote'
      ? `Name: ${name}\nEmail: ${email}\nRequirement: ${requirement}\nMessage: ${message}`
      : `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.PERSONAL_NOTIFY_EMAIL,
    subject,
    text,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ error: 'Email failed' }, { status: 500 });
  }
}
