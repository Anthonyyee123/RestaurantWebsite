//This function is to call the movies api and get all the movies
//that is showing in Shaw Theatres for Showing Now and Coming Soon
function getRestData() {
    var request = new XMLHttpRequest();
    request.open('GET', rest_url, true);
    //This function will be called when data returns from the web api    
    request.onload = function () {
        //get all the movies records into our movie array        
        rest_array = JSON.parse(request.responseText);
        //Fetch the comments as well
        fetchReviews()

        
        console.log(rest_array) // output to console        
        //call the function so as to display all movies tiles for "Now Showing"        
        displayRest()


    };
    //This command starts the calling of the movies web api    
    request.send();
}


function displayRest() {
    var table = document.getElementById("restTable");
    var restCount = 0;
    
    table.innerHTML = "";
    totalRest = rest_array.length;
    for (var count = 0; count < totalRest; count++) {
        if (rest_array[count].restaurant_id > 0) {
            var thumbnail = rest_array[count].image;
            var resttitle = rest_array[count].title;
            var restcate = rest_array[count].categories;
            var cell = '<div class="col id= "ListRest"> <div class="card h-100"><img src="' + thumbnail + '" class="card-img-top pt-2 " style="height: 200px; width: 95%; margin-left: auto; margin-right: auto; display: block;" alt="...">\
            <div class="card-body"><div class = "row"> <div class = "col-6"> <h5 class="card-title" id="title">' + resttitle + '</h5> </div>\
            <div class = "col-6 ">\
            <img src="images/starCategories.png" width="22px"  value="1" onmouseover="rateIt(this)" />\
            <img src="images/starCategories.png" width="22px"  value="2" onmouseover="rateIt(this)" />\
            <img src="images/starCategories.png" width="22px"  value="3" onmouseover="rateIt(this)" />\
            <img src="images/starCategories.png" width="22px"  value="4" onmouseover="rateIt(this)" />\
            <img src="images/starCategories.png" width="22px"  value="5" onmouseover="rateIt(this)" />\
            </div>\
            <div class = "row pt-2">\
              <div class = "col-6">\
                <p class="card-title">' + restcate + '</p>\
              </div>\
              <div class = "col-6">\
                <p class="card-title"></p>\
              </div>\
            </div>\
            <div class = "row text-center pt-2">\
              <div class = "col-6">\
               <button type="button" class="btn btn-success btn-m " data-bs-toggle="modal" data-bs-target="#restModal" style = "background-color: #23C552; height: 40px;" item="' + count + '" onClick="showRestDetails(this)" >Read More</button>\
              </div>\
              <div class = "col-6">\
                <button type="button" class="btn btn-success btn-m"  data-bs-toggle="modal" data-bs-target="#CommentModal" style = "background-color: #008CBA; height: 40px;" item="' + count + '"  onClick="showMovieComments(this)">Reviews</button>\
              </div>\
            </div>\
        </div>\
        </div>\
        </div>\
        </div>' 
        
            table.insertAdjacentHTML('beforeend', cell);
            restCount++;
        }
    }
}


function searchMe() {

  restname = document.getElementById("searchbar").value;

  rest_array = [];

  pattern = new RegExp("No restaurant yet");

  restaurant_url = "/searchrest/"+ restname;

  var request = new XMLHttpRequest();
  
  request.open('GET', restaurant_url, true);
  request.onload = function (){
      rest_array = JSON.parse(request.responseText);
          console.log(rest_array);
          pattern = new RegExp(restname, "i"); // "g" for global, "i" for case-insensitive
          displayRest();
    
          
            
      };
  request.send();
}



function displaycategory(category) {
  var table = document.getElementById("restTable");

  table.innerHTML = "";
  totalRest = rest_array.length;
  for (var count = 0; count < totalRest; count++) {
      if (rest_array[count].categories == category) {
          var thumbnail = rest_array[count].image;
          var resttitle = rest_array[count].title;
          var restcate = rest_array[count].categories;
          var cell = '<div class="col id= "ListRest"> <div class="card h-100"><img src="' + thumbnail + '" class="card-img-top pt-2 " style="height: 200px; width: 95%; margin-left: auto; margin-right: auto; display: block;" alt="...">\
          <div class="card-body"><div class = "row"> <div class = "col-6"> <h5 class="card-title" id="title">' + resttitle + '</h5> </div>\
          <div class = "col-6 ">\
          <img src="images/starCategories.png" width="22px"  value="1" onmouseover="rateIt(this)" />\
          <img src="images/starCategories.png" width="22px"  value="2" onmouseover="rateIt(this)" />\
          <img src="images/starCategories.png" width="22px"  value="3" onmouseover="rateIt(this)" />\
          <img src="images/starCategories.png" width="22px"  value="4" onmouseover="rateIt(this)" />\
          <img src="images/starCategories.png" width="22px"  value="5" onmouseover="rateIt(this)" />\
          </div>\
          <div class = "row pt-2">\
            <div class = "col-6">\
              <p class="card-title">' + restcate + '</p>\
            </div>\
            <div class = "col-6">\
              <p class="card-title">Total Ratings:</p>\
            </div>\
          </div>\
          <div class = "row text-center pt-2">\
            <div class = "col-6">\
             <button type="button" class="btn btn-success btn-m " data-bs-toggle="modal" data-bs-target="#restModal" style = "background-color: #23C552; height: 40px;" item="' + count + '" onClick="showRestDetails(this)" >Read More</button>\
            </div>\
            <div class = "col-6">\
              <button type="button" class="btn btn-success btn-m"  data-bs-toggle="modal" data-bs-target="#CommentModal" style = "background-color: #008CBA; height: 40px;" item="' + count + '"  onClick="showMovieComments(this)">Reviews</button>\
            </div>\
          </div>\
      </div>\
      </div>\
      </div>\
      </div>'  
      
          table.insertAdjacentHTML('beforeend', cell);
      }
  }
}


function showChineseCuisine() {
  category = "Chinese Cuisine";
  displaycategory(category)

}

function showItalianCuisine() {
  category = "Italian Cuisine";
  displaycategory(category)

}

function showJapaneseCuisine() {
  category = "Japanese Cuisine";
  displaycategory(category)

}

function showSeafoodCuisine() {
  category = "Seafood Cuisine";
  displaycategory(category)
}



function showRestDetails(element) {
  var item = element.getAttribute("item");
  currentIndex = item;
  document.getElementById("image").src = rest_array[item].image;
  document.getElementById("restTitle").textContent = rest_array[item].title;
  document.getElementById("cuisine").textContent = rest_array[item].cuisine;
  document.getElementById("timing").textContent = rest_array[item].timing;
  document.getElementById("bestdishes").textContent = rest_array[item].bestdishes;
  document.getElementById("address").textContent = rest_array[item].address;
  document.getElementById("bio").textContent = rest_array[item].bio;
  document.getElementById("map").src = rest_array[item].map;
  document.getElementById("contact").textContent = rest_array[item].contact;
  document.getElementById("website").textContent = rest_array[item].website;
  document.getElementById("price").textContent = rest_array[item].price;
}




//This function is to display the "Now Showing" movies



