import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import mongoose from "mongoose";
import morgan from "morgan";
import FlexRoutes from "./routes/flexRoute.js";
import { setServers } from "node:dns/promises";



setServers(['1.1.1.1', '8.8.8.8']);

dotenv.config();

const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(
  cors({
    origin: "*", //  will change this to  frontend URL later
    methods: ["GET", "POST", "DELETE"],
  })
);

app.use("/api/flex", FlexRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => console.log(`✅ Flex backend running on port ${PORT}`));
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));
