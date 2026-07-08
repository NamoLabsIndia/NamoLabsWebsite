import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { formType, name, email, company, message, ...otherFields } = data;

    // Validate required fields based on formType
    if (formType === 'early_access' && !email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    } else if (formType !== 'early_access' && (!name || !email || !message)) {
      return NextResponse.json({ error: 'Name, email, and message are required' }, { status: 400 });
    }

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: Number(process.env.EMAIL_PORT) || 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // App password
      },
    });

    // Determine email subject and content based on the form type
    let subject = 'New Website Submission';
    let htmlContent = '';

    if (formType === 'early_access') {
      subject = `[Early Access Request] ${email}`;
      htmlContent = `
        <h2>New Early Access Request</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
      `;
    } else {
      subject = `[Contact Form] Message from ${name}`;
      htmlContent = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Form Source:</strong> ${formType}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
        <br />
        <h3>Message:</h3>
        <p style="white-space: pre-wrap;">${message}</p>
      `;
    }

    // Send the email
    const info = await transporter.sendMail({
      from: `"${name || 'Website User'}" <${process.env.EMAIL_USER}>`, // Use authenticated email as sender
      replyTo: email, // Set reply-to as the user's email
      to: 'info@namolabs.in', // Always send to this address
      subject: subject,
      html: htmlContent,
    });

    console.log('Message sent: %s', info.messageId);

    return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
