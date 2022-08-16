"use strict";

class Contact {
    constructor(contact_id,userinfo_id,subject,message) {
        this.contact_id = contact_id;
        this.userinfo_id = userinfo_id;
        this.subject = subject;
        this.message = message;
    }

    getUserinfo_id(){
        return this.userinfo_id;
    }

    getSubject() {
        return this.subject;
    }

    getMessage() {
        return this.message;
    }

    setUserinfo_Id(userinfo_id) {
        this.userinfo_id = userinfo_id;
    }

    setSubject(subject) {
        this.subject = subject;
    }

    setMessage(message) {
        this.message = message;
    }

}

module.exports = Contact;