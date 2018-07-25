let create = document.querySelector("#acctbtn")

create.addEventListener("click", e => {
    let email = document.querySelector("#user").value
    let pass = document.querySelector("#pass").value
    console.log(email, pass)

    firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
        console.log(error)
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });
})

let login = document.querySelector("#logbtn")

login.addEventListener("click", e => {
    let email = document.querySelector("#user").value
    let pass = document.querySelector("#pass").value
    console.log(email, pass)

    firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error) {
        console.log(error)
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });
})

let logout = document.querySelector("#logout")
logout.addEventListener("click", e => {
    firebase.auth().signOut().then(function() {
        console.log("logged out")
        // Sign-out successful.
    }).catch(function(error) {
        console.log(error)
        // An error happened.
    });
})

let disp = document.querySelector("#info")
let info = document.querySelector("#infoHolder")
disp.addEventListener("click", e => {
    updateDisplay()
})

function updateDisplay(){
    var user = firebase.auth().currentUser;
    if (user) {
        console.log(user)
        info.innerHTML = `${user.email} is logged in` 
    }
    else {
        info.innerHTML = "no current user"
    }
}
