import express from "express";
import { sendInquiry } from "../controllers/email.controller.js";

const router = express.Router();

router.post("/inquiry", sendInquiry);

export default router;
