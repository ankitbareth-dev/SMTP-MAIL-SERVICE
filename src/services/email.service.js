import transporter from "../config/mailer.js";

const sendEmailService = async ({ to, subject, html }) => {
  const info = await transporter.sendMail({
    from: `"${process.env.FROM_NAME}" <${process.env.FROM_EMAIL}>`,
    to,
    subject,
    html,
  });

  return info;
};

export default sendEmailService;
