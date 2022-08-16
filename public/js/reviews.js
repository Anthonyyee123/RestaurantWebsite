function fetchReviews() {
    var request = new XMLHttpRequest();

    request.open('GET', review_url, true);


    //This command starts the calling of the comments api
    request.onload = function () {
        //get all the comments records into our comments array
        review_array = JSON.parse(request.responseText);
        console.log(review_array);
    };

    request.send();
}



function newComment() {
    //Initialise each HTML input elements in the modal window with default value.
    rating = 0;
   
    document.getElementById('nickname').value = username; 
    document.getElementById("userComments").value = "";
}




function addComment() {
    var review = new Object();

    

    var username = user_array[0].username

    review.useracc_id  = user_array[0].user_id; 
    review.restaurantId = rest_array[currentIndex].restaurant_id; // restaurant ID is required by server to create new comment 
    review.rating = rating;
    review.comment = document.getElementById("userComments").value; // Value from HTML input text
    review.username = username ; 
    review.timestamp = null; // Change the datePosted to null instead of taking the timestamp on the client side;

    var postComment = new XMLHttpRequest(); // new HttpRequest instance to send comment

    postComment.open("POST", review_url, true); //Use the HTTP POST method to send data to server

    postComment.setRequestHeader("Content-Type", "application/json");
    postComment.onload = function () {
        console.log(review)
        console.log("new comment sent");
    fetchReviews(); // fetch all comments again so that the web page can have updated comments.
    };
    // Convert the data in Comment object to JSON format before sending to the server.
    postComment.send(JSON.stringify(comment));
}


//This function is to display all the comments of that movie
//whenever the user click on the "comment" button
function showMovieComments(element) {
    document.getElementById("emptyComment").innerHTML = "No review yet. Create one now";
    var item = element.getAttribute("item");
    currentIndex = item;
    document.getElementById("review").textContent = "Review for " + rest_array[item].title;
    document.getElementById("commentBody").textContent = "";
 
    for (var i = 0; i < review_array.length; i++) {
        if (review_array[i].restaurantinfo_id === rest_array[item].restaurant_id) {
            var display_review_url = review_url + "/" + review_array[currentIndex].restaurant_id;
            var displayreview = new XMLHttpRequest();
            displayreview.open("GET", display_review_url, true);
            displayreview.setRequestHeader("Content-Type", "application/json");
            document.getElementById("emptyComment").innerHTML = "";
            selectedMovieId = rest_array[item].restaurant_id;
            star = "";
            var html = '<div class="text-center" style="width:100%;">                                                           \
                            <div class="card">                                                                                  \
                                <div class="card-body">                                                                         \
                                    <p class="card-text" id="rating' + i + '">' + review_array[i].comment + "</p>               \
                                    <small>by " + review_array[item].useracc_id + " @ " + review_array[i].timestamp + "</small>   \
                                </div>                                                                                          \
                            </div>                                                                                              \
                        </div>";
            document.getElementById("commentBody").insertAdjacentHTML('beforeend', html);

             var star = "";
             for (var j = 0; j < review_array[i].rating; j++) {
                 console.log(i);
                 star += "<img src='images/star-color.png' style='width:50px' />";
             }
             star += "<i class='far fa-trash-alt fa-2x edit' data-bs-dismiss='modal' item='" + i + "' onClick='deleteComment(this)' ></i>";
             star += "<i class='far fa-edit fa-2x edit' data-bs-toggle='modal' data-bs-target='#editCommentModal' data-bs-dismiss='modal' item='" + i + "' onClick='editComment(this)' ></i>";
             document.getElementById("rating" + i).insertAdjacentHTML('beforebegin', star + "<br/>");
        }

    }
}





// function newComment() {
//     //Initialise each HTML input elements in the modal window with default value.
//     rating = 0;
//     // document.getElementById("nickname").value = "";
//     document.getElementById("userComments").value = "";
// }


// function addReview() {

//     var review = new Object();
//     review.useracc_id = user_array[currentIndex].user_id;
//     review.restaurantinfo_id = rest_array[currentIndex].restaurant_id;
//     review.comment = document.getElementById("userComments").value;
//     review.timestamp = null;
//     review.rating = rating;
    
//     var postReview = new XMLHttpRequest(); // new HttpRequest instance to send review

//     postReview.open("POST", "/review", true); //Use the HTTP POST method to send data to server

//     postReview.setRequestHeader("Content-Type", "application/json");
//     postReview.onload = function () {
//         console.log("new review sent");
//         commentRestaurant() // fetch all review again so that the web page can have updated review.
//     };
//     // Convert the data in review object to JSON format before sending to the server.
//     postReview.send(JSON.stringify(review));
// }




//This function allows the user to mouse hover the black and white popcorn
//so that it will turn to a colored version when hovered
function rateIt(element) {
    var num = element.getAttribute("value");
    var classname = element.getAttribute("class");
    var popcorns = document.getElementsByClassName(classname);
    var classTarget = "." + classname;

    // This is another way of writing 'for' loop, which initialises the 
    // popcorn images to use black and white.
    for (let popcorn of popcorns) {
        popcorn.setAttribute("src", popcornBWImage);
    }
    changePopcornImage(num, classTarget);
}

// This function sets the rating and coloured images based on the value of the image tag when  
// the mouse cursor hovers over the popcorn image.
function changePopcornImage(num, classTarget) {
    switch (eval(num)) {
        case 1:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", popcornImage);
            rating = 1;
            break;
        case 2:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", popcornImage);
            rating = 2;
            break;
        case 3:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", popcornImage);
            rating = 3;
            break;
        case 4:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='4']").setAttribute("src", popcornImage);
            rating = 4;
            break;
        case 5:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='4']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='5']").setAttribute("src", popcornImage);
            rating = 5;
            break;
    }
}


//This function will hide the existing modal and present a modal with the selected comment
//so that the user can attempt to change the username, rating or movie review
function editComment(element) {
    var item = element.getAttribute("item");

    currentIndex = item;

    document.getElementById("editnickname").value = comment_array[item].username;
    document.getElementById("edituserComments").value = comment_array[item].review;
    console.log(comment_array[item].rating);
    displayColorPopcorn('editpop', comment_array[item].rating);
}





//This function displayS the correct number of colored popcorn
//based on the movie rating that is given in the user comment
function displayColorPopcorn(classname, num) {
    var pop = document.getElementsByClassName(classname);
    var classTarget = "." + classname;
    for (let p of pop) {
        p.setAttribute("src", popcornBWImage);
    }
    changePopcornImage(num, classTarget);
}


function updateComment() {
    var response = confirm("Are you sure you want to update this comment?");
    if (response == true) {
        var edit_comment_url = review_url + "/" + review_array[currentIndex].review_id;
        var updateComment = new XMLHttpRequest(); // new HttpRequest instance to send request to server
        updateComment.open("PUT", edit_comment_url, true); //The HTTP method called 'PUT' is used here as we are updating data
        updateComment.setRequestHeader("Content-Type", "application/json");
        review_array[currentIndex].comment = document.getElementById("edituserComments").value;
        review_array[currentIndex].rating = rating;
        updateComment.onload = function () {
            fetchComments();
        };
        updateComment.send(JSON.stringify(review_array[currentIndex]));
    }
}

//This function deletes the selected comment in a specific movie
function deleteComment(element) {
    var response = confirm("Are you sure you want to delete this comment?");

    if (response == true) {
        var item = element.getAttribute("item"); //get the current item
        var delete_comment_url = review_url + "/" + review_array[item].review_id;
        var eraseComment = new XMLHttpRequest();
        eraseComment.open("DELETE", delete_comment_url, true);
        eraseComment.onload = function() {
            fetchComments();
        };
        eraseComment.send(JSON.stringify(review_array[currentIndex]));
    }
}





  
