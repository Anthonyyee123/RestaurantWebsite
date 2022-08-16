function login() {

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
