// src/api/controllers/postController.js
const mongoose = require('mongoose');
const Promo = require('../models/promoModel');

exports.list_all_promos = (req, res) => {
  Promo.find({}, (error, promos) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."})
    }
    else{
      res.status(200);
      res.json(promos);
    }
  })
}

exports.create_a_promo = (req, res) => {
  let new_promo = new Promo(req.body);

  try {
    new_promo.save((error, promo) => {
      if(error){
        res.status(400);
        console.log(error);
        res.json({message: "Il manque des infos"});
      }
      else{
        res.status(201);
        res.json(promo)
      }
    })
  } catch (e) {
    res.status(500);
    console.log(e);
    res.json({message: "Erreur serveur"})
  }
}
exports.update_a_promo = (req, res) => {
  try {
    Promo.findByIdAndUpdate(req.params.promo_id, req.body, {new:true}, (error, promo) => {
      if(error){
        res.status(400);
        console.log(error);
        res.json({message: "Id introuvable"});
      }
      else{
        res.status(200);
        res.json(promo)
      }
    })
  } catch (e) {
    res.status(500);
    console.log(e);
    res.json({message: "Erreur serveur"})
  }
}
exports.delete_a_promo = (req, res) => {
  try {
    Promo.findByIdAndRemove(req.params.promo_id, (error) => {
      if(error){
        res.status(400);
        console.log(error);
        res.json({message: "Id introuvable"});
      }
      else{
        res.status(200);
        res.json({message: "Promossion supprimé"})
      }
    })
  } catch (e) {
    res.status(500);
    console.log(e);
    res.json({message: "Erreur serveur"})
  }
}