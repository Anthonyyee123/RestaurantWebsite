"use strict";

var db = require('../db-connections');
const sgMail = require('@sendgrid/mail');

class ContactsDB{

    getAllContact(callback) {
        var sql = "SELECT * from restaurant_review.contact";
        db.query(sql,callback);
    }

    addContact(contact,callback) {
        var sql = "INSERT INTO contact (userinfo_id, subject, message) VALUES (?,?,?) ";
        db.query(sql, [contact.getUserinfo_id(),contact.getSubject(),contact.getMessage()],callback);   
    }

    //inner join 

    getUsernameandEmail(contact,callback) {
        var sql = "SELECT userinfo.user_id, username, email, contact.subject , message FROM userinfo INNER JOIN contact ON userinfo.user_id = contact.userinfo_id WHERE userinfo_id = ? " ;
        db.query(sql,[contact.getUserinfo_id()],callback);
    }

    
}

module.exports = ContactsDB;