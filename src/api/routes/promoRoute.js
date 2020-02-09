// src/api/routes/promoRoute.js
const promoController = require('../controllers/promoController');

// Exporte la fonction anonyme
module.exports = (app) => {
  app.route('/promos')
  .get(promoController.list_all_promos)
  .post(promoController.create_a_promo);

  app.route('/promos/:promos_id') // req.params.post_id
  // .get(postController.get_a_post)
  .put(promoController.update_a_promo)
  .delete(promoController.delete_a_promo);
}