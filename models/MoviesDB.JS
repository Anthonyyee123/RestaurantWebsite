"use strict";

var db = require('../db-connections');
class MoviesDB{
    getAllMovies(callback){
        var sql = "SELECT * from movie_review.movie";
        db.query(sql, callback);
    }
}

module.exports = MoviesDB;


