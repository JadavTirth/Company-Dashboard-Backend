const mongoose = require("mongoose");

const internSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    college: { type: String, required: true, trim: true },
    university: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    project: { type: String, required: true, trim: true },
    field: { type: String, required: true, trim: true },
    status: {
      type: String,
      enum: ["Active", "Completed"],
      default: "Active"
    }
  },
  { timestamps: true }
);

let enquiryModel = mongoose.model("interns", internSchema);
module.exports = enquiryModel

