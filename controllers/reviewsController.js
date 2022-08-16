"use strict";
const ReviewsDB = require('../models/ReviewsDB');
const Review = require('../models/Review');
const req = require('express/lib/request');

const RestaurantDB = require ('../models/RestauarantDB');
const Restaurant = require('../models/Restaurant');

const Userinfo = require('../models/Userinfo');



var reviewsDB = new ReviewsDB();

function getAllReviews(request, respond){
    reviewsDB.getAllReviews(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}


function SelectReview(request, respond){;
    var review = new Review(null, null, parseInt(request.params.restaurantinfo_id));
    reviewsDB.SelectReview(review, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function addReview(request, respond) {
    var now = new Date();
    var review = new Review(null,request.body.useracc_id, request.body.restaurantinfo_id, request.body.rating, request.body.comment, request.body.commentupvote, request.body.commentdownvote, now.toString());
    reviewsDB.addReview(review, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}



function updateReview(request, respond) {
    var now = new Date();
    var review = new Review(null, parseInt(request.params.useracc_id), null, request.body.rating, request.body.comment, request.body.commentupvote, request.body.commentdownvote, now.toString());
    reviewsDB.updateReview(review, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}


function deleteReview(request, respond){
    var reviewID = request.params.review_id;
    reviewsDB.deleteReview(reviewID, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getUsernameandRest(request, respond) {
    var review = new Review(null, parseInt(request.params.useracc_id));
    reviewsDB.getUsernameandRest(review,function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getAveragerating(request, respond) {
    var review = new Review(null,null,parseInt(request.params.restaurantinfo_id));
    reviewsDB.getAveragerating(review,function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

module.exports = {getAllReviews, addReview, updateReview, deleteReview,getUsernameandRest,SelectReview,getAveragerating};
