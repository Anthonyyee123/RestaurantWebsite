function encode() {
    var selectedfile = document.getElementById("myinput").files;
    if(selectedfile.length > 0) {
        var imageFile = selectedfile[0];
        var fileReader = new FileReader();
        fileReader.onload = function (fileLoadedEvent) {
        profilepic = fileLoadedEvent.target.result;
        document.getElementById('userpics').src = profilepic;
        }
        fileReader.readAsDataURL(imageFile)
    }
}

function update() {

var updateUser =  new XMLHttpRequest();

updateUser.open("PUT", "http://127.0.0.1:8080/userinfo", true);
updateUser.setRequestHeader("Content-Type", "application/json");

updateUser.onload = function() {
    alert("Your profile has been updated!")
   
}
firstname = document.getElementById("printfirstname").value;
last_name = document.getElementById("printlastname").value;
email = document.getElementById("printemail").value;
address = document.getElementById("printaddress").value;
gender = document.getElementById("printgender").value;
contact = document.getElementById("printcontact").value;



var payload = {token:token, firstname:firstname, last_name:last_name,  password:password,  email:email, address:address , gender:gender, contact:contact, profilepic:profilepic}
updateUser.send(JSON.stringify(payload));

}


function updatepassword() {
    var updatepassword =  new XMLHttpRequest();

    updatepassword.open("PUT", "http://127.0.0.1:8080/userinfo", true);
    updatepassword.setRequestHeader("Content-Type", "application/json");

    var feedback = ""

    updatepassword.onload = function() {
    alert("Your password has been updated")
    feedback = JSON.parse(updatepassword.responseText);
  
    };

    password = document.getElementById("newpassword").value;


    var payload = {token:token, firstname:firstname, last_name:last_name, password:password, email:email, address:address , gender:gender, contact:contact, profilepic:profilepic}
    updatepassword.send(JSON.stringify(payload));

}
