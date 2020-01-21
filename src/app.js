
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

function ingreso () {
  let email2 = document.getElementById('email2').value;
  let password2= document.getElementById('password2').value;


  firebase.auth().signInWithEmailAndPassword(email2, password2).catch(function(error) {
    // Handle Errors here.
    let errorCode = error.code;
    let errorMessage = error.message;
    console.log(errorCode);
     console.log(errorMessage);
    // ...
  });
}

function observador() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log('existe usuario activo');
      activeUser();
      // User is signed in.
      let displayName = user.displayName;
      let email = user.email;
      let emailVerified = user.emailVerified;
      let photoURL = user.photoURL;
      let isAnonymous = user.isAnonymous;
      let uid = user.uid;
      let providerData = user.providerData;
      // ...
    } else {
      // User is signed out.
      console.log('no existe usuario activo');
      // ...
    }
  });email-password.html
}
observador();

function activeUser(){

    let contenido = document.getElementById('contenido');
    contenido.innerHTML = `
    <p> Bienvenido!</p>
    <button onclick="cerrar()">Cerrar Sesión</button>
    `;
}

function cerrar() {
    firebase.auth().signOut()
    .then(function(){
       console.log('Saliendo...')
    })
    .catch(function(error){
     console.log(error)
    }) 

}

