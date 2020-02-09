// src/api/routes/noteRoute.js
const noteController = require('../controllers/noteController');

// Exporte la fonction anonyme
module.exports = (app) => {
  app.route('/:module_id/notes')
  .get(noteController.list_all_notes_from_a_module)
  .post(noteController.create_a_note);

  app.route('/notes/:note_id') // req.params.note_id
  .get(noteController.get_a_note)
  .put(noteController.update_a_note)
  .delete(noteController.delete_a_note);
}