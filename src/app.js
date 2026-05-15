import express from "express";
import cors from "cors";

import emailRoutes from "./routes/email.routes.js";
import globalErrorHandler from "./middlewares/error.middleware.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.use(express.json());

app.use("/api/v1/email", emailRoutes);

app.use(globalErrorHandler);

export default app;
