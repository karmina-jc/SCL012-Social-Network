
function registrar (){
    let email = document.getElementById('email').value;
    let password= document.getElementById('password').value;

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
     console.log(errorCode);
     console.log(errorMessage);
     
      // ...
    });email-password.html


}