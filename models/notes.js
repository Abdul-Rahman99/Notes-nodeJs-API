const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Note name Required"],
      minlength: [3, "Too Short Note name"],
      maxlength: [32, "Too Long Note name"],
    },
    slug: {
      type: String,
      lowercase: true,
    },
    description: {
      type: String,
      required: [true, "Description is a must"],
      minlength: [7, "Write more to memorize"],
      maxlength: [1000, "Too long to ba a note !!"],
    },
  },
  { timestamps: true }
);

const NoteModel = mongoose.model("Note", noteSchema);
module.exports = NoteModel;
