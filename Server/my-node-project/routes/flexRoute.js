import express from "express";
import FlexData from "../models/flexData.js";

const router = express.Router();

// Save new flex reading
router.post("/add", async (req, res) => {
  try {
    const { value, angle } = req.body;
    const data = new FlexData({ value, angle });
    await data.save();
    res.status(201).json({ message: "Flex data saved successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all flex readings
router.get("/all", async (req, res) => {
  try {
    const data = await FlexData.find().sort({ createdAt: -1 });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get latest flex value
router.get("/latest", async (req, res) => {
  try {
    const latest = await FlexData.findOne().sort({ createdAt: -1 });
    res.status(200).json(latest);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
