import nodemailer from 'nodemailer'
import { html } from './htmlEmail'

const sendEmail = async ({to, url, text}) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
  })

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject: 'Kavindu Madushanka | NextAuthV4',
    html: html({url, text})
  }
  
  const  result = await transporter.sendMail(mailOptions)
  return result;
}

export default sendEmail;