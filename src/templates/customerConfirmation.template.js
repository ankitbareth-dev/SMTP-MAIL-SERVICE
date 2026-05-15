const customerConfirmationTemplate = ({ name }) => {
  return `
    <div style="font-family: Arial, sans-serif;">

      <h2>Inquiry Received</h2>

      <p>Hello ${name},</p>

      <p>
        Thank you for contacting us.
      </p>

      <p>
        Our team has received your inquiry and
        will get back to you shortly.
      </p>

      <p>
        Regards,<br />
        My Riverside Resort
      </p>

    </div>
  `;
};

export default customerConfirmationTemplate;
