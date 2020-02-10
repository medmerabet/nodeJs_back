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
  //le control de la donnée sur le format de la  date sera controler au niveau du FRONT
  dateDebut: {
    type: String,
    required: true
  },
  //le control de la donnée sur le format de la date sera controler au niveau du front 
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