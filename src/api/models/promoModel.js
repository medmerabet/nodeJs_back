const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let promoSchema = new Schema({
  nomPromo: {
    type: String,
    required: true
  },
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