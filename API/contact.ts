import nodemailer from 'nodemailer';

export default async function handler(req:any, res:any) {
  if (req.method !== 'POST') {
    return res.status(405).send({ message: 'Only POST requests allowed' });
  }

  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL,
      pass: process.env.PASSWORD,
    },
  });

  await transporter.sendMail({
    from: process.env.GMAIL,
    to: process.env.GMAIL,
    subject: `New message from ${name}: ${subject}`,
    text: message,
  });

  res.status(200).json({ success: true });
}
