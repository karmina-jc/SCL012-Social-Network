// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyClC9vJnjiJDhjl_t2blcd0lbtYt-AcG3s',
  authDomain: 'boceto-616d7.firebaseapp.com',
  databaseURL: 'https://boceto-616d7.firebaseio.com',
  projectId: 'boceto-616d7',
  storageBucket: 'boceto-616d7.appspot.com',
  messagingSenderId: '1005115180743',
  appId: '1:1005115180743:web:36de90450c70568cf960e2',
  measurementId: 'G-NQNBEWSBKB'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();

function registrar() {
  const email = document.getElementById('email').value;
  const password= document.getElementById('password').value;

  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    let errorCode = error.code;
    let errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
      // ...
    });email-password.html
}

function ingreso() {
  const email2 = document.getElementById('email2').value;
  const password2 = document.getElementById('password2').value;

  firebase.auth().signInWithEmailAndPassword(email2, password2).catch(function(error) {
    // Handle Errors here.
    const errorCode = error.code;
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
      console.log(uid);
      // ...
    } else {
      // User is signed out.
      console.log('no existe usuario activo');
      // ...
    }
  });email-password.html
}
observador();

function activeUser() {
  const contenido = document.getElementById('contenido');
  contenido.innerHTML = `
    <p> Bienvenido!</p>
    <button onclick="cerrar()">Cerrar Sesión</button>
    `;
}

function cerrar() {
  firebase.auth().signOut()
    .then(function() {
       console.log('Saliendo...')
    })
    .catch(function(error) {
     console.log(error)
    }); 
}
// función para subir imagen
const imgFile = document.getElementById('uploadImage'); // guardando botón para subir archivos
const postimage = document.getElementById('postimg'); // guardando botón para confirmar la subida de imagen
postimage.disabled = true; // dejando inhabilitado el botón de confirmación
imgFile.addEventListener('change', function (e) { // escuchando la subida de un archivo
  postimage.disabled = false; // habilitando botón de confirmación
  postimage.addEventListener('click', () => {
    const file = e.target.files[0]; // capturando el archivo subido
    let storageRef = firebase.storage().ref('images/'+ file.name); // referencia a directorio raíz en firestore
storageRef.put(file); // subiendo el archivo a firestore
  })
});

// Función para postear
function posting() {
  db.collection('postconuid').add({ // creando una coleción para agregar los datos a firebase
    email: firebase.auth().currentUser.email,
    uid: firebase.auth().currentUser.uid,
    post: document.getElementById('texto').value
  })
    .then(function (docRef) {
      console.log('Document written with ID: ', docRef.id); // console.log para confirmar en consola
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
}
// llamando al div donde se imprimirán los post
const divPost = document.getElementById('paraPost');
// escuchando colección en firebase para ir imprimiendo
db.collection('postconuid').onSnapshot((querySnapshot) => {
  // vaciando div para que no se repitan los post
  divPost.innerHTML = '';
  querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().post}`);
      divPost.innerHTML +=
      `<div class='hola'>
    <h2 class="cardText"> ${doc.data().post}</h2>
    </div>`;
  });
});

