const bookingTemplate = ({ guestName, hotelName }) => {
  return `
    <div style="font-family: Arial;">
      <h2>Booking Confirmed</h2>

      <p>Hello ${guestName},</p>

      <p>
        Your booking at <strong>${hotelName}</strong>
        has been confirmed.
      </p>

      <p>Thank you for choosing us.</p>
    </div>
  `;
};

export default bookingTemplate;
