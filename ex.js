firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        window.location = 'after.html';

    } else {
        // No user is signed in.


        document.getElementById("kri").style.display = "block";

    }

});

function login() {

    var email = document.getElementById("mail").value;
    var password = document.getElementById("pass").value;

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert("error:" + errorMessage);
        // ...
    });
}

document.getElementById("pass")
    .addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("sub").click();
        }
    });