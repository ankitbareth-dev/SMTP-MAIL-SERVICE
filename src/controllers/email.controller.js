import catchAsync from "../middlewares/catchAsync.js";
import ApiError from "../utils/ApiError.js";

import { sendMail } from "../services/email.service.js";

import adminInquiryTemplate from "../templates/adminInquiry.template.js";
import customerConfirmationTemplate from "../templates/customerConfirmation.template.js";

export const sendInquiry = catchAsync(async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone || !message) {
    throw new ApiError(400, "All fields are required");
  }

  // Send inquiry to admin

  await sendMail({
    to: process.env.ADMIN_EMAIL,
    subject: `New Inquiry from: ${name}`,
    replyTo: email,
    html: adminInquiryTemplate({
      name,
      email,
      phone,
      message,
    }),
  });

  // Send confirmation to customer

  await sendMail({
    to: email,
    subject: "We Received Your Inquiry",
    html: customerConfirmationTemplate({
      name,
    }),
  });

  res.status(200).json({
    success: true,
    message: "Inquiry submitted successfully",
  });
});
