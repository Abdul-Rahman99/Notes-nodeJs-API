const { check } = require("express-validator");
const validatorMiddleware = require("../../middlewares/validatorMiddleware");

exports.getNoteValidator = [
  check("id").isMongoId().withMessage("Invalid ID for this note"),
  validatorMiddleware,
];
exports.createNoteValidator = [
  check("name")
    .isEmpty()
    .withMessage("Note name Required")
    .isLength({ min: 3 })
    .withMessage("Too Short Note name")
    .isLength({ max: 32 })
    .withMessage("Too Long Note name"),
];
exports.updateNoteValidator = [
  check("id").isMongoId().withMessage("Invalid Note id format"),
  validatorMiddleware,
];

exports.deleteNoteValidator = [
  check("id").isMongoId().withMessage("Invalid Note id format"),
  validatorMiddleware,
];
