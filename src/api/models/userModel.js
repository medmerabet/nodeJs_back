const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
  emailUser: {
    type: String,
    required: true
  },
  mdpUser: {
    type: String,
    required: true
  },
  roleUser: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('User', userSchema);

module.exports = mongoose.model('User');