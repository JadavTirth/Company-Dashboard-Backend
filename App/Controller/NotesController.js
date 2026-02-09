const Note = require("../Model/NotesModel");

// Get all notes
exports.getNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.status(200).json(notes);
    console.log("all is well")
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch notes" });
  }
};

// Add note
exports.addNote = async (req, res) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ message: "Text is required" });
    }

    const note = await Note.create({ text });
    res.status(201).json(note);

  } catch (error) {
    res.status(500).json({ message: "Failed to add note" });
  }
};

// Delete note
exports.deleteNote = async (req, res) => {
  try {
    const { id } = req.params;

    await Note.findByIdAndDelete(id);
    res.status(200).json({ message: "Note deleted" });

  } catch (error) {
    res.status(500).json({ message: "Failed to delete note" });
  }
};
