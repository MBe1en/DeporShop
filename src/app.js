import express from "express";
import bodyParser from "body-parser";
import { connectDB } from "./db.js";
import { PORT } from "./config.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";

import userRoute from "./routes/userRoute.js";
import productRoute from "./routes/productRoute.js";
import categoryRoute from "./routes/categoryRoute.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true
  })
);
app.use(bodyParser.json());
app.use(cookieParser());

connectDB();
dotenv.config();

// Routes
app.get("/", (req, res) => {
  res.send("hello world CARC");
});

app.use("/api/user", userRoute);
app.use("/api/product", productRoute);
app.use("/api/category", categoryRoute);

//Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
