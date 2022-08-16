"use strict";

var db = require('../db-connections');
const Userinfo = require('./Userinfo');

class UserinfoDB{

    getAllUsers(callback) {
        var sql = "SELECT * from restaurant_review.userinfo";
        db.query(sql,callback);
    }

    validatePassword(userinfo, callback) {
        var sql = "SELECT password from restaurant_review.userinfo WHERE user_id = ?";
        db.query(sql, [userinfo.getUser_Id()], callback);
    }

    EmailReset(userinfo, callback) {
        var sql = "SELECT email,user_id from userinfo WHERE  email = '?' AND user_id = ? ";
        db.query(sql, [userinfo.getEmail(),userinfo.getUser_Id()], callback);
    }
  
    loginAcc(username, callback){
        var sql = "SELECT password from restaurant_review.userinfo WHERE username = ?";
        db.query(sql, [username], callback);
    }

    addUser(userinfo,callback) {
        var sql = "INSERT INTO userinfo (firstname, last_name, username, password, email, address, gender, contact, Profilepic) VALUES (?,?,?,?,?,?,?,?,?)";
        db.query(sql, [userinfo.getFirstname(),userinfo.getLastname(),userinfo.getUsername(),userinfo.getPassword(),userinfo.getEmail(),userinfo.getAddress(),userinfo.getGender(),userinfo.getContact(),userinfo.getProfilepic()], callback);
    }

    // updateUser(userinfo, callback) {
    //     var sql = "UPDATE userinfo SET firstname = ?, last_name = ?, email = ?, address = ?, gender = ?,contact = ?, Profilepic = ? WHERE user_id = ? ";
    //     return db.query(sql, [userinfo.getFirstname(),userinfo.getLastname(), userinfo.getEmail(),userinfo.getAddress(),userinfo.getGender(),userinfo.getContact(),userinfo.getProfilepic(),userinfo.getUser_Id()], callback);
    // }

    updatePassword(userinfo, callback) {
        var sql = "UPDATE userinfo SET password = ? WHERE user_id = ?";
        return db.query(sql, [userinfo.getPassword(), userinfo.getUser_Id()],callback);
    }

    deleteAccount(userID,callback) {
        var sql = "DELETE FROM userinfo WHERE user_id = ?";
        return db.query(sql,[userID],callback);
    }

    getspecificUser(username,callback) {
        var sql = "SELECT distinct firstname, last_name, username,password,email,address,gender,contact,profilepic FROM restaurant_review.userinfo WHERE username = ?"
        return db.query(sql,[username],callback);
    }

    updateUser(username , firstname ,last_name , password, email, address ,gender ,contact ,Profilepic , callback) {
        var sql = "UPDATE userinfo SET firstname = ?, last_name = ?, password = ?, email = ?, address = ?, gender = ?,contact = ?, Profilepic = ? WHERE username = ? ";
        return db.query(sql, [firstname ,last_name , password, email ,address ,gender ,contact ,Profilepic ,username], callback);
    }

}

module.exports = UserinfoDB;
