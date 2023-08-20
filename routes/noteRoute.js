const express = require("express");

const {
  getNoteValidator,
  createNoteValidator,
  updateNoteValidator,
  deleteNoteValidator,
} = require("../utils/validators/noteValidator");

const {
  getNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote,
} = require("../services/noteService");

const router = express.Router();
router.route("/").get(getNotes).post(createNoteValidator, createNote);
router
  .route("/:id")
  .get(getNoteValidator, getNote)
  .put(updateNoteValidator, updateNote)
  .delete(deleteNoteValidator, deleteNote);

module.exports = router;
