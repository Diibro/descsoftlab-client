/* eslint-disable @typescript-eslint/no-unused-vars */
import type { NextApiRequest} from "next";

import { NextResponse as res} from "next/server";
import nodemailer from "nodemailer";

// export default async function handler(req: NextApiRequest) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ message: "Method Not Allowed" });
//   }

//   const { name, email, message } = req.body;

//   if (!name || !email || !message) {
//     return res.status(400).json({ message: "All fields are required" });
//   }

//   // Setup email transport
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: "your-email@gmail.com",
//       pass: "your-email-password",
//     },
//   });

//   const mailOptions = {
//     from: email,
//     to: "contact@descsoftlab.com",
//     subject: `New Contact Message from ${name}`,
//     text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     return res.status(200).json({ message: "Message sent successfully" });
//   } catch (error) {
//     return res.status(500).json({ message: "Error sending email" });
//   }
// }

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return res.json({ message: "All fields are required" }, {status:400});
    }
  
    // Setup email transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "dushimeconso1234@gmail.com",
        pass: "deue qxmj xmld pehd",
      },
    });
  
    const mailOptions = {
      from: email,
      to: "info@descsoftlab.com",
      subject: `New Contact Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Message received successfully!" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
