// src/api/routes/userRoute.js
const userController = require('../controllers/userController');

// Exporte la fonction anonyme
module.exports = (app) => {
  app.route('/users').get(userController.list_all_users);
  app.post('/users/login', userController.user_login);
  app.post('/users/add', userController.user_register);

  app.route('/users/:user_id') // req.params.user_id
  .delete(userController.delete_a_user);
}