var MongoClient = require('mongodb').MongoClient;

var SuperHeroes = function(){
  this.url = "mongodb://localhost:27017/heroes";
};

SuperHeroes.prototype = {
  all: function(callback){
    MongoClient.connect(this.url, function(err, db){
      var collection = db.collection('heroes');
      collection.find().toArray(function(err, result){
        callback(result);
      });
    });
  },
  add: function(filmToAdd, callback){
    MongoClient.connect(this.url, function(err, db){
      if(db){
        var collection = db.collection('heroes');
        collection.insert(heroToAdd);
        collection.find().toArray(function(err, results){
          callback(results);
        });
      };
    });
  }
};

module.exports = SuperHeroes;