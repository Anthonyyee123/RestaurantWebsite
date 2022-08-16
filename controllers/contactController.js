"use strict";
const ContactDB = require('../models/ContactsDB');
const Contact = require('../models/Contact');

var contactDB = new ContactDB();

function getAllContact(request, respond){
    contactDB.getAllContact(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function addContact(request, respond){
    var contact = new Contact(null, request.body.userinfo_id, request.body.subject, request.body.message);
    contactDB.addContact(contact, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}


function getUsernameandEmail(request,respond) {
    var contact = new Contact(null,parseInt(request.params.userinfo_id))
    contactDB.getUsernameandEmail(contact,function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

module.exports = {getAllContact, addContact,getUsernameandEmail};
