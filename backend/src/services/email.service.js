import nodemailer from "nodemailer";
import config from "../config/config.js";



   const transporter = nodemailer.createTransport({
    host: config.SMTP_HOST,
    port: config.SMTP_PORT,
    secure: config.SMTP_SECURE,
    auth: {
        user: config.SMTP_USER,
        pass: config.SMTP_PASS
    }
});





 export const sendEmail = async (to, subject, text, html) => {
    try {
        const info = await transporter.sendMail({
            from: `"${config.EMAIL_FROM_NAME}" <${config.SMTP_USER}>`,
            to, // list of receivers
            subject, // Subject line
            text, // plain text body
            html, // html body
        });

        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
};

