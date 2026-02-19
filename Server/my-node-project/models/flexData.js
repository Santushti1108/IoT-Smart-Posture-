import mongoose from "mongoose";

const flexSchema = new mongoose.Schema(
  {
    value: { type: Number, required: true }, // raw ADC or processed flex value
    angle: { type: Number },                 // optional: mapped bend angle
  },
  { timestamps: true }
);

const FlexData = mongoose.model("FlexData", flexSchema);

export default FlexData;
