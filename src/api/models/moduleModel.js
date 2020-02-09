// src/api/model/moduleModel.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let moduleSchema = new Schema({
  nomModule: {
    type: String,
    required: true
  },
  idIntervenant: {
    type: String,
    required: "il faut mettre un id aux intervenants"
  },
  promo_id: {
    type: String
  },
  dateDebut: {
    type: String,
    required: true
  },
  dateFin: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('Module', moduleSchema);

module.exports = mongoose.model('Module');