import catchAsync from "../middlewares/catchAsync.js";
import ApiError from "../utils/ApiError.js";

import sendEmailService from "../services/email.service.js";
import bookingTemplate from "../templates/booking.template.js";

export const sendTestEmail = catchAsync(async (req, res) => {
  const { to } = req.body;

  if (!to) {
    throw new ApiError(400, "Recipient email is required");
  }

  const html = bookingTemplate({
    guestName: "John Doe",
    hotelName: "Ocean View Villa",
  });

  const info = await sendEmailService({
    to,
    subject: "Booking Confirmed",
    html,
  });

  res.status(200).json({
    success: true,
    message: "Email sent successfully",
    messageId: info.messageId,
  });
});
