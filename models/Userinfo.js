"use strict";

class Userinfo {
    constructor(user_id, firstname, last_name, username, password, email, address, gender, contact, Profilepic){
        this.user_id = user_id;
        this.firstname = firstname;
        this.last_name = last_name;
        this.username = username;
        this.password = password;
        this.email = email;
        this.address = address;
        this.gender = gender;
        this.contact = contact;
        this.Profilepic = Profilepic;
    }

    getUser_Id(){
        return this.user_id;
    }

    getFirstname(){
        return this.firstname;
    }

    getLastname() {
        return this.last_name;
    }

    getUsername() {
        return this.username;
    }

    getPassword(){
        return this.password;
    }

    getEmail() {
        return this.email;
    }

    getAddress(){
        return this.address;
    }

    getGender(){
        return this.gender;
    }

    getContact(){
        return this.contact;
    }

    getProfilepic(){
        return this.Profilepic;
    }

    setUser_Id(user_id) {
        this.user_id = user_id;
    }

    setFirstname(firstname) {
        this.firstname = firstname;
    }

    setLastname(last_name) {
        this.last_name =last_name;
    }

    setUsername(username) {
        this.username = username;
    }

    setPassword(password) {
        this.password = password;
    }

    setEmail(email) {
        this.email = email;
    }

    setAddress(address) {
        this.address = address;
    }

   setGender(gender) {
       this.gender= gender;
   }

   setContact(contact) {
       this.contact = contact;
   }

    setProfilepic(Profilepic) {
        this.Profilepic = Profilepic;
    }  
}

module.exports = Userinfo;