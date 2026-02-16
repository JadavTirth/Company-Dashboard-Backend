// Import mongoose
const mongoose = require("mongoose");

// Create Event Schema
const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    date: {
      type: Date,
      required: true,
    },

    venue: {
      type: String,
      required: true,
    },

    organizer: {
      type: String,
      required: true,
    },

    registrations: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      enum: ["active", "current", "completed"],
      default: "active",
    },

    image: {
      type: String, // Store image URL or base64
    },
  },
  {
    timestamps: true, // auto add createdAt & updatedAt
  }
);

// Export Model
module.exports = mongoose.model("Event", eventSchema);
