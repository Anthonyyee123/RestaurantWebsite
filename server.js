var express = require("express"); //using the express web framework

var userinfoController = require('./controllers/userinfoController');
var restaurantController = require('./controllers/restaurantController');
var reviewsController = require('./controllers/reviewsController');
var contactController = require('./controllers/contactController');

var app = express();
app.use(express.static("./public")); 
app.use(express.json()); // json() is a method inbuilt in express to recognize the incoming Request Object from the web client as a JSON Object.
// In time to come we will need to accept new or edited comments from user

//userinfo
app.route('/userinfo').get(userinfoController.getAllUsers); //success
app.route('/validatePassword/:user_id').get(userinfoController.validatePassword); //success


app.route('/userinfo').post(userinfoController.addUser); //success
// app.route('/userinfo/:user_id').put(userinfoController.updateUser); //success
app.route('/userinfo').put(userinfoController.updateUser); 
app.route('/userinfoPassword/:user_id').put(userinfoController.updatePassword); //success
app.route('/userinfo/:user_id').delete(userinfoController.deleteAccount);

//restaurant 
app.route('/restaurant').get(restaurantController.getAllRestaurants); //success
app.route('/search').get(restaurantController.searchRest); //success search rest
app.route('/ratings/:restrating').get(restaurantController.getRatings); //success filter ratings only
app.route('/categorysearch').get(restaurantController.getCategories); //success filter categories only
app.route('/categoryRating').get(restaurantController.getCategoriesRating); //success filter categories and ratings
app.route('/restaurant/:restaurant_id').get(restaurantController.getRestdetails); //success
app.route('/restaurantandReview').get(restaurantController.insertrating); //success


//new search
app.route('/searchrest/:title').get(restaurantController.searchRest2);

//new login 
app.route('/login').post(userinfoController.loginAcc);


//reviews
app.route('/selectReview/:restaurantinfo_id').get(reviewsController.SelectReview); //success

app.route('/review').get(reviewsController.getAllReviews); //success
app.route('/review/:useracc_id').put(reviewsController.updateReview); //success
app.route('/review').post(reviewsController.addReview); //success
app.route('/review/:review_id').delete(reviewsController.deleteReview); //success
app.route('/usernameTitle/:useracc_id').get(reviewsController.getUsernameandRest);  //success innerjoin 
app.route('/AverageRating/:restaurantinfo_id').get(reviewsController.getAveragerating); //success innerjoin 



//userprofile 
app.route('/profileUsers').post(userinfoController.getspecificUser); //success

//contact
app.route('/contact').get(contactController.getAllContact); //success
app.route('/contact').post(contactController.addContact); //success
app.route('/Useremail/:userinfo_id').get(contactController.getUsernameandEmail); //success innerjoin

//app.listen(8080, "127.0.0.1"); // start the nodejs to be listening for incoming request @ port 8080
//console.log("web server running @ http://127.0.0.1:8080"); // output to console 
