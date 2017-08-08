var express = require('express');
var app = express();
var heroRouter = express.Router();

var SuperHeroes = require('../client/db/superheroes');
var query = new SuperHeroes;

heroRouter.get('/', function(req, res){
  query.all(function(results){
    res.json(results);
  })
});

module.exports = heroRouter;