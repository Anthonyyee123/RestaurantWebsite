"use strict";
//const ReviewsDB = require('../models/ReviewsDB');
//const Review = require('../models/Review');

var jwt = require('jsonwebtoken');
var secret = 'somesecretkey';

const UserinfoDB = require('../models/UserinfoDB');
const Userinfo = require('../models/Userinfo');

//var reviewsDB = new ReviewsDB();

var userinfoDB = new UserinfoDB();

function getAllUsers(request, respond) {
    userinfoDB.getAllUsers(function(error,result) {
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}



function loginAcc(request, respond){
    var username = request.body.username;
    var password = request.body.password;
    userinfoDB.loginAcc(username, function(error, result){
        if(error){
            throw error;
        }
        else{
            //console.log(result[0].password);
            //const hash = (result[0].password);
            //var flag = bycrpt.compareSync(password,hash);
            if (result.length >0) {
                if(password == result[0].password){
                var token = jwt.sign(username,secret)
                respond.json({result:token});
                }

            else {
                respond.json({result:"invalid"});
            }
        }
         else{
            respond.json({result:"invalid"});
        }
        }
    })
}
 

function getspecificUser(request, respond){
    var token = request.body.token;

    try {
        var decoded = jwt.verify(token, secret);
        userinfoDB.getspecificUser(decoded, function(error,result) {
            if(error) {
                respond.json(error);
            }else {
                respond.json(result);
            }
        });
            } catch(err) {
                respond.json({result:"invalid token"});
            }
}

function updateUser(request, respond){
    var firstname = request.body.firstname;
    var last_name= request.body.last_name;
    var password = request.body.password;
    var email =  request.body.email;
    var address =  request.body.address;
    var gender =  request.body.gender;
    var contact = request.body.contact;
    var Profilepic = request.body.Profilepic;
    var token = request.body.token;

    try {
        var decoded = jwt.verify(token, secret);
        userinfoDB.updateUser(decoded, firstname,last_name,password,email,address,gender,contact,Profilepic,function(error,result) {
            if(error) {
                respond.json(error);
            }else {
                respond.json(result);
            }
        });
            } catch(err) {
                respond.json({result:"invalid token"});
            }
}






function EmailReset(request, respond) {
    var userinfo = new Userinfo(parseInt(request.params.user_id,request.params.email));
    userinfoDB.EmailReset(userinfo, function(error,result) {
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}


function validatePassword(request, respond) {
    var userinfo = new Userinfo(parseInt(request.params.user_id));
    userinfoDB.validatePassword(userinfo, function(error,result) {
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}



function addUser(request, respond) {
    var userinfo = new Userinfo(parseInt(request.params.user_id) ,request.body.firstname, request.body.last_name, request.body.username, request.body.password, request.body.email, request.body.address, request.body.gender, request.body.contact, request.body.Profilepic);
    userinfoDB.addUser(userinfo, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}


// function updateUser(request, respond) {
//     var userinfo = new Userinfo(parseInt(request.params.user_id) ,request.body.firstname, request.body.last_name, null, null, request.body.email, request.body.address, request.body.gender, request.body.contact, request.body.Profilepic);
//     userinfoDB.updateUser(userinfo, function(error, result){
//         if(error){
//             respond.json(error);
//         }
//         else{
//             respond.json(result);
//         }
//     });
// }

function updatePassword(request, respond) {
    var userinfo = new Userinfo(parseInt(request.params.user_id),null,null,null, request.body.password);
    userinfoDB.updatePassword(userinfo, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function deleteAccount(request, respond){
    var userID = request.params.user_id;
    userinfoDB.deleteAccount(userID, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

module.exports = {getAllUsers,loginAcc, addUser, updateUser, updatePassword,validatePassword, EmailReset, deleteAccount, getspecificUser };
