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

// función de ingreso de sesión 

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
//iniciando sesión con Google
googleSignIn=()=>{
  base_provider = new firebase.auth.GoogleAuthProvider()
  firebase.auth().signInWithPopup(base_provider).then(function(result){
    console.log(result)
    console.log("Success Google Acount Linked");
  }).catch(function(err){
    console.log(err)
    console.log("Failed to do")
  })
}

//funcionalidad de Cerrar Sesión
function cerrar() {
    firebase.auth().signOut()
    .then(function(){
       console.log('Saliendo...')
    })
    .catch(function(error){
     console.log(error)
    }) 

}


let db = firebase.firestore();

//agregar usuario en colection
function guardar(){
  let nombre= document.getElementById('nombre').value;
  let seudonimo= document.getElementById('seudonimo').value;
  let contrasena= document.getElementById('contrasena').value;

  db.collection("newUser").add({
    firstField: nombre,
    secondField: seudonimo,
    tercerField: contrasena
  })
  .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
    document.getElementById('nombre').value='';
    document.getElementById('seudonimo').value='';
    document.getElementById('contrasena').value='';

  })
  .catch(function(error) {
    console.error("Error adding document: ", error);
  });
};


//funcionalidad de posteo
function post() {
  let post = document.getElementById('posteo').value;
  
  db.collection("newPost").add({
    correo: firebase.auth().currentUser.email,
    uid: firebase.auth().currentUser.uid,
    post: post
    
  })
  .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
    document.getElementById('posteo').value='';
    

   })
  .catch(function(error) {
    console.error("Error adding document: ", error);
  });
};

let tabla = document.getElementById('tabla');

db.collection("newUSer").get().then((querySnapshot) => {
  tabla.innerHTM = '';
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data().firstField}`);
    tabla.innerHTML += `<p> ${doc.id}</p>
    <p>${doc.data().firstField}</p>`
  });
});
