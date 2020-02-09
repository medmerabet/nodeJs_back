// src/api/middleware/jwtMiddleware.js
const jwt = require('jsonwebtoken');
require('dotenv').config();
exports.verify_token = (req, res, next) => {
  // let token = req.headers['authorization'];
  let token = req.headers.authorization;

  if(token){
    //j'ai un bug avec mon .env qui n'arrivais pas a importer mon jwt_key depuis .env, donc j'écris diretement la clé secrète ici en sachant que ce n'est pas les best practices 
    jwt.verify(token,"thisIsMySecreteKey", (error, result) => {
      if(error){
        // res.sendStatus(403);
        res.status(403);
        res.json({message: "Accès refusé"})
      }
      else{
        next();
      }
    })
  }
  else{
    res.status(403);
    res.json({message: "Accès refusé"})
  }
}