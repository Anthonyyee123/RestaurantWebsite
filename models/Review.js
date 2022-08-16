"use strict";

class Review {
    constructor(review_id,useracc_id,restaurantinfo_id, rating, comment, commentupvote , commentdownvote, timestamp) {
        this.review_id = review_id;
        this.useracc_id = useracc_id;
        this.restaurantinfo_id = restaurantinfo_id;
        this.rating = rating;
        this.comment = comment;
        this.commentupvote = commentupvote;
        this.commentdownvote = commentdownvote;
        this.timestamp = timestamp;
    }

    getReviewId() {
        return this.review_id;
    }

    getUserId() {
        return this.useracc_id;
    }

    getRestId() {
        return this.restaurantinfo_id;
    }

    getRating(){
        return this.rating;
    }

    getComment(){
        return this.comment;
    }

    getCommentUp() {
        return this.commentupvote;
    }

    getCommentDown() {
        return this.commentdownvote;
    }

   getTimeStamp() {
       return this.timestamp;
   }

   setReviewId(review_id) {
       this.review_id = review_id;
   }

   setUserId(useracc_id) {
       this.useracc_id = useracc_id;
   }

   setRestId(restaurantinfo_id) {
       this.restaurantinfo_id = restaurantinfo_id;
   }

   setRating(rating) {
       this.rating = rating;
   }

   setComment(comment) {
       this.comment = comment;
   }

   setCommentUp(commentupvote) {
       this.commentupvote = commentupvote;
   }

   setCommentDown(commentdownvote) {
       this.commentdownvote = commentdownvote;
   }
    
    setTimeStamp(timestamp) {
        this.timestamp = timestamp;
    }
}

module.exports = Review;