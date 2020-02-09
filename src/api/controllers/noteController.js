// src/api/controllers/noteController.js
const mongoose = require('mongoose');
const Note = require('../models/noteModel');

// /promos/:promo_id/modules
exports.list_all_notes_from_a_module = (req, res) => {
  Note.find({module_id: req.params.module_id}, (error, notes) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."})
    }
    else{
      res.status(200);
      res.json(notes);
    }
  })
}


exports.create_a_note = (req, res) => {
  let new_note = new Note(req.body);

  new_note.module_id = req.params.module_id;
  

  try {
    new_note.save((error, note) => {
      if(error){
        res.status(400);
        console.log(error);
        res.json({message: "Il manque des infos"});
      }
      else{
        res.status(201);
        res.json(note)
      }
    })
  } catch (e) {
    res.status(500);
    console.log(e);
    res.json({message: "Erreur serveur"})
  }
}

exports.get_a_note = (req, res) => {
  try {
    Note.findById(req.params.note_id, (error, note) => {
      if(error){
        res.status(400);
        console.log(error);
        res.json({message: "Id introuvable"});
      }
      else{
        res.status(200);
        res.json(note)
      }
    })
  } catch (e) {
    res.status(500);
    console.log(e);
    res.json({message: "Erreur serveur"})
  }
}

exports.update_a_note = (req, res) => {
  try {
    Note.findByIdAndUpdate(req.params.note_id, req.body, {new:true}, (error, note) => {
      if(error){
        res.status(400);
        console.log(error);
        res.json({message: "Id introuvable"});
      }
      else{
        res.status(200);
        res.json(note)
      }
    })
  } catch (e) {
    res.status(500);
    console.log(e);
    res.json({message: "Erreur serveur"})
  }
}

exports.delete_a_note = (req, res) => {
  try {
    Note.findByIdAndRemove(req.params.note_id, (error) => {
      if(error){
        res.status(400);
        console.log(error);
        res.json({message: "Id introuvable"});
      }
      else{
        res.status(200);
        res.json({message: "note supprimé"})
      }
    })
  } catch (e) {
    res.status(500);
    console.log(e);
    res.json({message: "Erreur serveur"})
  }
}