// src/api/route/moduleRoute.js
const moduleController = require('../controllers/moduleController');

// Exporte la fonction anonyme
module.exports = (app) => {
  app.route('/promos/:promo_id/modules')
  .get(moduleController.list_all_modules_from_a_promo)
  .post(moduleController.create_a_module);

  app.route('/modules/:module_id') // req.params.module_id
  .get(moduleController.get_a_module)
  .put(moduleController.update_a_module)
  .delete(moduleController.delete_a_module);
}