// Este es el punto de entrada de tu aplicacion

import {
emailLogin, googleSignIn, register, observer,  
} from './app.js';

window.onload = initialHash

function initialHash() {
  window.location.hash = '#login'
}

const root = document.getElementById('root');
const main = document.getElementById('fullMain');
const btnLogIn = document.getElementById('login');
const btnGoogle = document.getElementById('idGoogle');
const btnRegister = document.getElementById('register');
const newPostSection = document.getElementById('newPostSection');
const sectionPerfil = document.getElementById('userPerfil');

btnLogIn.addEventListener('click', () => {
  const userID = document.getElementById("emailLogIn").value;
  const userPass = document.getElementById("passwordLogIn").value;
  emailLogin(userID, userPass);

})

btnGoogle.addEventListener('click', googleSignIn)

btnRegister.addEventListener('click', () => {
  window.location.hash = '#register'  
})

const registerView = () => {
  main.innerHTML = '';
  main.innerHTML = `<form class="registerUser">
      <input id=" nombreyApellido"class="inputText" type="text" placeholder="Nombre y apellido">
      <input id="pseudonimo"class="inputText" type="text" placeholder="Pseudonimo">
      <input id="emailRegister" class="inputText" type="email" placeholder="Correo electronico">
      <input id="passwordRegister"class="inputText" type="password" placeholder="Contraseña">
      <input id="passwordRegister2"class="inputText" type="password" placeholder="Confirma contraseña">
      <button id="signIn" class="btn">Registrate</button>
      </form>`;
  
  const btnSignIn = document.getElementById('signIn');

  btnSignIn.addEventListener('click', () =>{
    const emailRegister = document.getElementById('emailRegister').value;
    console.log(emailRegister)
    const passRegister = document.getElementById('passwordRegister').value;
    console.log(passRegister)
    register(emailRegister, passRegister);
  })
  
};

const homeView = () =>{
  root.innerHTML = '';
  root.innerHTML = `<header class="homeLogo">
    <h1><img src="img/logo-boceto.png" alt=""></h1>
    <nav class="navBar">
     <ul>
        <li id="home"><a href="#home">Inicio</a></li>
        <li id="myWorks"><a href="#myWorks">Mis Trabajos</a></li>
        <li id="favorite"><a href="#favorite">Favoritos</a></li>
        <li id="search"><a href="#search">Buscar</a></li>
        <li id="logout"><a href="#logout">Cerrar sesión</a></li>
     </ul>
    </nav>
    </header>
    <section id="userPerfil">
    </section>
    <main id="fullMain">
    </main>
    <section id="newPostSection">
    </section>
    <button id="addPost" class="btnAdd"><a href="#addPost">°</a></button>`
}

const myWorkasView = () => {
  newPostSection.innerHTML='';
  sectionPerfil.innerHTML = 
    `<div class="businessCard">
    <img src="img/photo-user-tester.png">
    <div class="idUser">
      <h3>Nombre Usuario / Seudónimo</h3>
      <h4>Ilustrador</h4>
    </div>
    <div class="myPages">      
      <p>Mi bihance</p>
      <p>Mi instagram</p>
      <p>Mi linkedin</p>
    </div>
    </div>`;
}
const sectionAddPost = () => {
  newPostSection.innerHTML =  
  `<div id="allPost" class="post">
  <textarea class="textPost" id="basePost" cols="30" rows="10"></textarea>
  <div class="actionButtons">
    <input type="file" class="fileAdd">
    <button id="newPost" class="btn">Publicar</button>    
  </div>
  </div>`
}

window.addEventListener('hashchange', () => {
  if(window.location.hash === '#home'){
    homeView()
    
  } if(window.location.hash === '#register'){
    registerView()
    
  } if(window.location.hash === '#addPost'){
    sectionAddPost()    
    
  } if(window.location.hash === '#myWorks'){
    myWorkasView()
    
  } if(window.location.hash === '#favorite'){
    
  }
})