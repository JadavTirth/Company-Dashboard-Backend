// ==============================
// IMPORT REQUIRED PACKAGES
// ==============================
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// ==============================
// IMPORT ROUTES
// ==============================

// Enquiry Routes
const enquiryRoutes = require("./App/Routes/Routes");

// Notes Routes
const noteRoutes = require("./App/Routes/NotesRouter");

// 🔥 (ADD THIS) Event Routes
const eventRoutes = require("./App/Routes/EventRouter");


// ==============================
// INITIALIZE APP
// ==============================
const app = express();


// ==============================
// MIDDLEWARES
// ==============================

// Parse JSON body
app.use(express.json());

// Enable CORS (for local + Vercel frontend)
app.use(cors());


// ==============================
// API ROUTES
// ==============================

// Enquiry API
app.use("/api/website/enquiry", enquiryRoutes);

// Notes API
app.use("/api/notes", noteRoutes);

// 🔥 (ADD THIS WHEN YOU CREATE EVENT ROUTES)
app.use("/api/events", eventRoutes);


// ==============================
// HEALTH CHECK ROUTE
// ==============================
app.get("/", (req, res) => {
  res.send("Welcome to the Enquiry API 🚀");
});


// ==============================
// DATABASE CONNECTION + SERVER START
// ==============================
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("✅ Connected to MongoDB");

    const PORT = process.env.PORT || 8000;

    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("❌ Error connecting to MongoDB:", err.message);
  });
