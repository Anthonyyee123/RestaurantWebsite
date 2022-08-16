
function fetchusers() {
    var request = new XMLHttpRequest();

    request.open('GET', user_url, true);

    request.open('GET', login, true);

    //This command starts the calling of the comments api
    request.onload = function () {
        showAccountDetails(element)
        //get all the comments records into our comments array
        user_array = JSON.parse(request.responseText);
        console.log(user_array);
    };

    request.send();
}




 function addUser() {
     var users = new Object();
     users.firstname = document.getElementById("firstname").value;
     users.last_name = document.getElementById("last_name").value;
     users.username = document.getElementById("username").value;
     users.password = document.getElementById("password").value;
     users.email = document.getElementById("email").value;
     users.address = document.getElementById("address").value;
     users.gender = document.getElementById("gender").value;
     users.contact = document.getElementById("contact").value;


    var feedback = "";
     var postUsers = new XMLHttpRequest(); // new HttpRequest instance to send comment

     postUsers.open("POST", user_url , true); //Use the HTTP POST method to send data to server

     postUsers.setRequestHeader("Content-Type", "application/json");
     postUsers.onload = function () {
         feedback = JSON.parse(postUsers.responseText);
            
        if(users.firstname == '') {

             alert("firstname is empty")

         } else if (users.last_name == '') {

             alert("lastname is empty")

         } else if (users.username == '') {

             alert("username is empty")

         } else if (users.password == '') {
             alert("password is empty")
            
        } else if (users.email == '') {

           alert("email is empty")

         } else if (users.address == '') {

             alert("address is empty")

         } else if (users.gender = 'Choose...' ) {

             alert("gender is empty")

       } else if (users.contact == '') {

             alert("contact is empty")

         } else {
            
         alert("User registered!")
         window.location = "Login.html"; 
         console.log(users)
         }

         // fetch all comments again so that the web page can have updated comments.
     };
     // Convert the data in Comment object to JSON format before sending to the server.
     postUsers.send(JSON.stringify(users));
// }

    }









function logMeIn(){

    // window.location = "index.html";
       // document.getElementById("register").style.display="none"
       // document.getElementById("login").style.display="none"
       // document.getElementById("logout").style.display="block"
       //sessionStorage.setItem("token",token.result);
var loginUser =  new XMLHttpRequest();

loginUser.open("POST", "http://127.0.0.1:8080/login", true);
loginUser.setRequestHeader("Content-Type", "application/json");

loginUser.onload = function(){
   //$('#registerModal').modal('hide')

   var token = JSON.parse(loginUser.responseText);
   console.log(token.result);
   if (token.result !='invalid') {
       alert("User Logged In!")
       //$('#successModal').modal('show')
       window.location = "Home.html";
       sessionStorage.setItem("token",token.result);

   }  else {
       alert("wrong username or password")
   }
}

var username = document.getElementById("usernameLogin").value;
var password = document.getElementById("passwordLogin").value;
var payload = {username:username, password:password}
loginUser.send(JSON.stringify(payload));

}




//This function deletes the selected comment in a specific movie

 

