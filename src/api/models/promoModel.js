const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let promoSchema = new Schema({
  nomPromo: {
    type: String,
    required: true
  },
  //le controle du format de la date sera verifier dans le front c'est pour ça que je le met en string 
  anneePromo: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('Promo', promoSchema);

module.exports = mongoose.model('Promo');