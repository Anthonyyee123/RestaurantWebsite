"use strict";

const RestaurantDB = require ('../models/RestauarantDB');
const Restaurant = require('../models/Restaurant');

var restaurantDB = new RestaurantDB();

const ReviewsDB = require('../models/ReviewsDB');
const Review = require('../models/Review');
const req = require('express/lib/request');
const res = require('express/lib/response');


function getAllRestaurants(request , respond) {
    restaurantDB.getAllRestaurants(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    }); 
}


function getRestdetails(request, respond) {
    var restaurant = new Restaurant(parseInt(request.params.restaurant_id));
    restaurantDB.getRestdetails(restaurant,function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    }); 
}

function searchRest(request, respond) {
    restaurantDB.searchRest(request.body.title,request.body.categories,function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    }); 
}

function searchRest2(request, respond) {
    var searchTerm = request.params.title;
    restaurantDB.searchRest2(searchTerm, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    });

}


function insertrating(request,respond) {
    restaurantDB.insertrating(function(error, result) {
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

//filter
function getRatings(request, respond){
    restaurantDB.getRatings(parseInt(request.params.restrating), function(error, result){
        if(error){
             respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}


function getCategories(request, respond){
    restaurantDB.getCategories(request.body.categories, function(error, result){
        if(error){
             respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}


function getCategoriesRating(request, respond){
    restaurantDB.getCategoriesRating(request.body.restrating,request.body.categories, function(error, result){
        if(error){
             respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}


module.exports = {getAllRestaurants, getRestdetails, searchRest, searchRest2, insertrating, getRatings,getCategories,getCategoriesRating};