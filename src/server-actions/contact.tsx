/* eslint-disable @typescript-eslint/no-unused-vars */
"use server";
import nodemailer from "nodemailer";

export async function contactSupport(message:{name:string,email:string, subject:string, description:string}): Promise<{status:boolean, message:string}> {
     try{
          const transporter = nodemailer.createTransport({
               service: "gmail",
               auth: {
               user: "dushimeconso1234@gmail.com",
               pass: "deue qxmj xmld pehd",
               },
          });
          const mailOptions = {
               from: message.email,
               to: "info@descsoftlab.com",
               subject: `Client: ${message.subject} from ${message.name}`,
               text: `Name: ${message.name}\nEmail: ${message.email}\n\nMessage:\n${message.description}`,
          };

          await transporter.sendMail(mailOptions);
          return {status:true, message: "Message sent successfully"};
     }catch(error) {
          console.log(error);
          return {status:false, message:"Error contacting support team. Try again later"};
     }
}