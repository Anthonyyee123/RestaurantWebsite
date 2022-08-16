"use strict";

var db = require('../db-connections');



class RestaurantDB{
    getAllRestaurants(callback){
        var sql = "SELECT * from restaurant_review.restaurant";
        db.query(sql,callback);
    }

    searchRest(title,categories,callback) {
        var sql = "SELECT * from restaurant_review.restaurant WHERE title LIKE '" + title + "%'" + "OR categories LIKE '" + categories + "%'";
        db.query(sql,callback);
    }

    addRest(restaurant,callback) {
        var sql = "INSERT INTO restaurant_review.restaurant (title, restrating, categories, image, map, cuisine, timing, bestdishes, address, bio, contact,website, price) VALUES (?, ?,?, ?, ?, ?, ?, ?, ?, ?,?,?,?) ";
        db.query(sql,[restaurant.get],callback);
    }
        
    getRestdetails(restaurant,callback) {
        var sql = "SELECT * FROM restaurant_review.restaurant WHERE restaurant_id = ?";
        db.query(sql,[ restaurant.getRestaurant_id()],callback );
    }

    
    //get
    insertrating(callback) {
        var sql = "SELECT restaurant.categories , restaurant_id, restaurant.restrating from restaurant_review. review INNER JOIN restaurant_review.restaurant ON rating = restrating ";
        db.query(sql,callback);
    }


    //advanced feature: rating,categories 

    getRatings(restrating,callback) {
        var sql = " SELECT * FROM restaurant_review.restaurant WHERE restrating = " + restrating;
        db.query(sql, callback);
    }

    getCategories(categories, callback) {
        var sql = "SELECT * FROM restaurant_review.restaurant WHERE categories = '" + categories + "'";
        db.query(sql, callback);
    }

    //get both categories and ratings
    getCategoriesRating(restrating, categories, callback) {
        var sql = "SELECT * from restaurant_review.restaurant WHERE restrating =" + restrating + " AND categories = '" + categories + "'";
        db.query(sql, callback); 
    }

    searchRest2(keyword, callback){
        var key =    "" + keyword +"%";
        var sql = "SELECT * from restaurant_review.restaurant WHERE title LIKE ? " ;
        db.query(sql, [key], callback);
    }

    



}



module.exports = RestaurantDB;