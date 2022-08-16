"use strict";

class Restaurant {
    constructor(restaurant_id,title,categories,restrating,image,map,cuisine,timing,bestdishes,address,bio,contact,website,price) {
        this.restaurant_id = restaurant_id;
        this.title = title;
        this.categories = categories;
        this.restrating = restrating;
        this.image = image;
        this.map = map;
        this.cuisine = cuisine;
        this.timing = timing;
        this.bestdishes = bestdishes;
        this.address = address;
        this.bio = bio;
        this.contact = contact;
        this.website = website;
        this.price = price;
    }

    getRestaurant_id(){
        return this.restaurant_id;
    }

    getTitle() {
        return this.title;
    }

    getCategories() {
        return this.categories;
    }

    getRestrating() {
        return this.restrating;
    }
    
    getImage() {
        return this.image;
    }

    getMap() {
        return this.map;
    }

    getCuisine() {
        return this.cuisine;
    }

    getTiming() {
        return this.timing;
    }

    getBestdishes() {
        return this.bestdishes;
    }

    getAddress() {
        return this.address;
    }

    getBio() {
        return this.bio;
    }

    getContactnumber() {
        return this.contact;
    }

    getWebsite() {
        return this.website;
    }

    getPrice() {
        return this.price;
    }

    setRestaurant_id(restaurant_id) {
        this.restaurant_id = restaurant_id;
    }

    setTitle(title) {
        this.title = title;
    }

    setCategories(categories) {
        this.categories = categories;
    }

    setRestrating(restrating) {
        this.restrating = restrating;
    }

    setImage(image) {
        this.image = image;
    }

    setMap(map) {
        this.map = map;
    }

    setCuisine(cuisine) {
        this.cuisine = cuisine;
    }
    setTiming(timing) {
        this.timing = timing;
    }

    setBestdishes(bestdishes) {
        this.bestdishes = bestdishes;
    }

    setAddress(address) {
        this.address = address;
    }

    setBio(bio) {
        this.bio = bio;
    }

    setContantnumber(contact) {
        this.contact = contact;
    }

    setWebsite(website) {
        this.website = website;
    }

    setPrice(price) {
        this.price = price;
    }



}

module.exports = Restaurant;