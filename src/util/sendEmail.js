import { createTransport } from "nodemailer";
import { emailTemplate } from "./emailTemplate.js";


 
export default async function sendEmail(email){
    const transporter = createTransport({
        service: "gmail",
        auth: {
          user: "fatmaabdeltwab615@gmail.com",
          pass: "oaao tgmu lsdh gcqq", 
        },
      });
      
      const info = await transporter.sendMail({
        from: '"Note App iti 👻" <fatmaabdeltwab615@gmail.com>', // sender address
        to: email, // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?"
        , // plain text body
        html: emailTemplate(email), // html body
      });
      
      console.log("Message sent: %s", info.messageId);
}
