// src/api/controllers/userController.js
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = require('../models/userModel');
require('dotenv').config();

exports.user_register = (req, res) => {
  let new_user = new User(req.body);
  //new_user.promo_id = req.params.promo_id;

  try{
    new_user.save((error, user) => {
      if(error){
        res.status(400);
        res.json({message: "Il manque des infos"});
      }
      else{
        res.status(201);
        user = user.toObject();
        delete user.mdpUser
        // user.password = undefined;
        res.json(user)
        // res.json({email: user.email})
        // res.json({message: "Utilisateur crée"})
      }
    })
  }
  catch(e){
    res.status(500);
    res.json({message: "Erreur serveur."});
  }
}


exports.user_login = (req, res) => {
  let {body} = req;
  

  User.findOne(body, (mongooseError, user) => {
    jwt.sign({emailUser: user.emailUser},"thisIsMySecreteKey", {expiresIn: "10m"}, (jwtError, token) => {
      if(jwtError){
        console.log(jwtError);
        res.status(500);
        res.json({message: "Erreur serveur"});
      }
      else {
        res.status(200);
        res.json({token});
      }
    })
  })
}
exports.list_all_users = (req, res) => {
  User.find({}, (error, users) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."})
    }
    else{
      res.status(200);
      res.json(users);
    }
  })
}
exports.delete_a_user = (req, res) => {
  try {
    User.findByIdAndRemove(req.params.user_id, (error) => {
      if(error){
        res.status(400);
        console.log(error);
        res.json({message: "Id introuvable"});
      }
      else{
        res.status(200);
        res.json({message: "user supprimé"})
      }
    })
  } catch (e) {
    res.status(500);
    console.log(e);
    res.json({message: "Erreur serveur"})
  }
}