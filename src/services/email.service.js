import transporter from "../config/mailer.js";

export const sendMail = async ({ to, subject, html, replyTo, bcc }) => {
  const info = await transporter.sendMail({
    from: `"${process.env.FROM_NAME}" <${process.env.FROM_EMAIL}>`,
    to,
    bcc,
    subject,
    html,
    replyTo,
  });

  return info;
};
