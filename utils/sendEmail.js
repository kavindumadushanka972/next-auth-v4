import nodemailer from 'nodemailer';
import { html } from './htmlEmail';

/**
 * Sends an email using nodemailer with the specified parameters.
 *
 * @param {Object} params - An object containing email parameters.
 * @param {string} params.to - The recipient's email address.
 * @param {string} params.url - The URL to include in the email.
 * @param {string} params.text - The text content of the button.
 * @returns {Promise} A promise that resolves when the email is sent.
 */
const sendEmail = async ({ to, url, text }) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject: 'Kavindu Madushanka | NextAuthV4',
    html: html({ url, text }),
  };

  const result = await transporter.sendMail(mailOptions);
  return result;
};

export default sendEmail;
