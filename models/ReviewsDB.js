"use strict";

var db = require('../db-connections');

const Review = require('./Review');



class ReviewsDB{
   
    getAllReviews(callback){
        var sql = "SELECT * from restaurant_review.review";
        db.query(sql, callback);
    }

    SelectReview(review,callback) {
        var sql = "SELECT * from restaurant_review.review WHERE restaurantinfo_id = ?";
        db.query(sql,[review.getRestId()], callback);
    }
    
    addReview(review, callback) {
        var sql = "INSERT INTO review (useracc_id, restaurantinfo_id, rating, comment, commentupvote, commentdownvote, timestamp) VALUES (?,?,?,?,?,?,?)";
        db.query(sql, [review.getUserId(), review.getRestId(), review.getRating(), review.getComment(), review.getCommentUp(), review.getCommentDown(), review.getTimeStamp()], callback)
    }

    updateReview(review, callback) {
        var sql = "UPDATE review SET comment = ?, rating = ?, commentupvote = ?, commentdownvote = ?, timestamp = ? WHERE useracc_id = ? ";
        return db.query(sql, [review.getComment(), review.getRating(), review.getCommentUp(), review.getCommentDown(),review.getTimeStamp(), review.getUserId()], callback);
    }
   
    deleteReview(reviewID, callback){
        var sql = "DELETE from review WHERE review_id = ? ";
        return db.query(sql, [reviewID], callback);
    }

    // Get Restaurant title and username for reviews 
    getUsernameandRest(review,callback) {
        var sql = "SELECT userinfo.user_id , userinfo.username , restaurant.title, review.rating , review.comment FROM (( userinfo INNER JOIN review ON userinfo.user_id = review.useracc_id) INNER JOIN restaurant ON review.useracc_id = restaurant_id) WHERE useracc_id = ? " ;
        db.query(sql,[review,getUserId()],callback);
    }

    //averagerating and inner join
    getAveragerating(review,callback) {
        var sql = "SELECT avg(rating), restaurantinfo_id FROM review INNER Join restaurant_review.restaurant ON rating = restrating WHERE restaurantinfo_id = ?";
        db.query(sql,[review.getRestId()],callback);
    }
}

module.exports = ReviewsDB;
