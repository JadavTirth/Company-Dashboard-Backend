const express = require("express");
const router = express.Router();

// Import Controller
const {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent,
} = require("../Controller/EventController");


// ==============================
// ROUTES
// ==============================

// Create Event
router.post("/", createEvent);

// Get All Events
router.get("/", getAllEvents);

// Get Single Event
router.get("/:id", getEventById);

// Update Event
router.put("/:id", updateEvent);

// Delete Event
router.delete("/:id", deleteEvent);


// Export Router
module.exports = router;
