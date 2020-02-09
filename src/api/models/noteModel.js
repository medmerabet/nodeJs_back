// src/api/models/noteModel.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let noteSchema = new Schema({
  note: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  module_id: {
    type: String
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('Note', noteSchema);

module.exports = mongoose.model('Note');