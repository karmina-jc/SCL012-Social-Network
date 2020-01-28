export function registrar() {
  const email = document.getElementById('emailRegister').value;
  const password = document.getElementById('passwordRegister').value;


  firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
  // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  });
  email - password.html;
}
function activeUser() {
  const contenido = document.getElementById('contenido');
  contenido.innerHTML = `
    <p> Bienvenido!</p>
    <button onclick="cerrar()">Cerrar Sesión</button>
    `;
}
// función de ingreso de sesión

export function ingreso() {
  const email2 = document.getElementById('emailLogIn').value;
  const password2 = document.getElementById('passwordLogIn').value;

  firebase.auth().signInWithEmailAndPassword(email2, password2).catch((error) => {
  // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  });
}
export function observador() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log('existe usuario activo');
      activeUser();
      // User is signed in.
      const displayName = user.displayName;
      const email = user.email;
      const emailVerified = user.emailVerified;
      const photoURL = user.photoURL;
      const isAnonymous = user.isAnonymous;
      const uid = user.uid;
      const providerData = user.providerData;
      // ...
    } else {
      // User is signed out.
      console.log('no existe usuario activo');
      // ...
    }
  }); email - password.html;
}
observador();

// funcionalidad de Cerrar Sesión
export function cerrar() {
  console.log('hola');
  firebase.auth().signOut()
    .then(() => {
      console.log('Saliendo...');
    })
    .catch((error) => {
      console.log(error);
    });
}


const db = firebase.firestore();
// funcionalidad de posteo
export function savePost() {
  const posteo = document.getElementById('addPost').value;
  db.collection('newPost').add({
    correo: firebase.auth().currentUser.email,
    uid: firebase.auth().currentUser.uid,
    post: posteo,
  })
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
      document.getElementById('addPost').value = '';
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
}

export function googleSignIn() {
  const baseProvider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(baseProvider).then((result) => {
    console.log(result);
    console.log('Success Google acount Linked');
  }).catch((err) => {
    console.log(err);
    console.log('Failed to do');
  });
}
