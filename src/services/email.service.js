import transporter from "../config/mailer.js";

export const sendMail = async ({ to, subject, html, replyTo }) => {
  const info = await transporter.sendMail({
    from: `"${process.env.FROM_NAME}" <${process.env.FROM_EMAIL}>`,
    to,
    subject,
    html,
    replyTo,
  });

  return info;
};
