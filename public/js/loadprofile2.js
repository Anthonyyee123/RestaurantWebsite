

$(document).ready(function () {

    var getProfile = new XMLHttpRequest();
    
    getProfile.open("POST", "http://127.0.0.1:8080/profileUsers",true);
    getProfile.setRequestHeader("Content-Type", "application/json");
    getProfile.onload = function() {
        var profile = JSON.parse(getProfile.responseText);
        console.log(getProfile.responseText);
        user_id = profile[0].user_id;
        
        username = profile[0].username;
        password = profile[0].password;
        firstname = profile[0].firstname;
        last_name = profile[0].last_name;
        email = profile[0].email;
        address = profile[0].address;
        gender = profile[0].gender;
        contact = profile[0].contact;
        profilepic =  profile[0].profilepic;

        
        document.getElementById('printfirstname').value = firstname;
        document.getElementById('printlastname').value = last_name;
        document.getElementById('printusername').value = username;
        document.getElementById('printpassword').value = password;
        document.getElementById('printemail').value = email;
        document.getElementById('printaddress').value = address;
        document.getElementById('printgender').value = gender;
        document.getElementById("printcontact").value = contact;

        // document.getElementById("printfirstname").textContent = firstname;
        // document.getElementById("printlastname").textContent = last_name;
        // document.getElementById("printusername").textContent = username;
        // document.getElementById("printpassword").textContent = password;
        // document.getElementById("printemail").textContent = email;
        // document.getElementById("printaddress").textContent = address;
        // document.getElementById("printgender").textContent = gender;
        // document.getElementById("printcontact").textContent = contact;
        document.getElementById("userpics").src = profilepic;
    
    }
    
      var payload = {token: token};
      getProfile.send(JSON.stringify(payload));  
})