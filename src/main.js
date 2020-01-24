// Este es el punto de entrada de tu aplicacion

//import { myFunction } from './lib/index.js';

//myFunction();

const root = document.getElementById("root");
const initialHeader = document.getElementById("initialHeader");
const btnLogIn = document.getElementById("login");
const btnRegister = document.getElementById("register");

btnRegister.addEventListener('click', () => {
    root.innerHTML='';
    return root.innerHTML = 
        `<header class="header">
            <h1><img src="img/logo-boceto.png" alt=""></h1>
         </header>
        <main> 
        <form class="registerUser">
            <button id="idGoogle">Continuar con Google</button>
            <input class="inputText" type="text" placeholder="Nombre y apellido">
            <input class="inputText" type="text" placeholder="Pseudonimo">
            <input class="inputText" type="email" placeholder="Correo electronico">
            <input class="inputText" type="password" placeholder="Contraseña">
            <input class="inputText" type="password" placeholder="Confirma contraseña">
            <button id="login" class="btn">Registrate</button>
        </form>    
        </main>`
})

btnLogIn.addEventListener('click',login)
    
    
function login() {
    window.location.hash = '#home'
    root.innerHTML='';
    return root.innerHTML=
    `<header class="homeLogo">
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
    <main id="fullMain"> 
        
       
    </main>
    <button id="addPost" class="btnAdd"><a href="#addPost">°</a></button>`
  }

  window.addEventListener('hashchange', () => {
        console.log(window.location.hash)
    if (window.location.hash === "#myWorks"){
        root.innerHTML='';
        return root.innerHTML=
        `<header class="homeLogo">
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
        <section class="businessCard">
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
        </section>
        <main>
        </main>
        <button id="addPost" class="btnAdd"><a href="#addPost">°</a></button>`
       
    } else if (window.location.hash === "#favorite") {
                    
    } else if (window.location.hash === "#home"){
        root.innerHTML='';
        return root.innerHTML=
        `<header class="homeLogo">
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
        <main>      
       
        </main>
        <button id="addPost" class="btnAdd"><a href="#addPost">°</a></button>`

    } else if (window.location.hash === "#addPost"){
      root.innerHTML='';
      return root.innerHTML= 
      `<header class="homeLogo">
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
      <section id="allPost" class="post">
      <textarea class="textPost" id="basePost" cols="30" rows="10"></textarea>
      <div class="actionButtons">
        <input type="file" class="fileAdd">
        <button id="newPost" class="btn">Publicar</button>    
      </div>
      </section>`
    }

  });