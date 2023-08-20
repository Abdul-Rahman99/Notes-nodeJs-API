const asyncHandler = require("express-async-handler");
const ApiError = require("../utils/apiError");

const Note = require("../models/notes");

exports.createNote = asyncHandler(async (req, res) => {
  const newNote = await Note.create(req.body);
  res.status(201).json({ data: newNote });
});

exports.getNote = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const note = await Note.findById(id);
  if (!note) {
    return next(new ApiError(`No note by this id: ${id}`, 404));
  }
  res.status(200).json({ data: note });
});

exports.getNotes = asyncHandler(async (req, res, next) => {
  const note = await Note.find({});
  res.status(200).json({ results: note.length, date: note });
});

exports.deleteNote = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const note = await Note.findByIdAndDelete(id);
  if (!note) {
    return next(new ApiError(`No note by this id: ${id}`, 404));
  }
  res.status(204).send();
});

exports.updateNote = asyncHandler(async (req, res, next) => {
  const note = await Note.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!note) {
    return next(new ApiError(`No note by this id: ${id}`, 404));
  }
  res.status(200).json({ data: note });
});
