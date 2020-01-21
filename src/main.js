// Este es el punto de entrada de tu aplicacion

//import { myFunction } from './lib/index.js';

//myFunction();

const root = document.getElementById("root");
const btnLogIn = document.getElementById("login")
const btnRegister = document.getElementById("register")

btnRegister.addEventListener('click', () => {
    root.innerHTML='';
    root.innerHTML = 
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

btnLogIn.addEventListener('click', () => {
    root.innerHTML='';
    root.innerHTML=
    `<header class="homeLogo">
    <h1><img src="img/logo-boceto.png" alt=""></h1>
     <nav class="navBar">
      <ul>
        <li id="home"><a href="">Inicio</a></li>
        <li id="myWorks"><a href="">Mis Trabajos</a></li>
        <li id="favorite"><a href="">Favoritos</a></li>
        <li id="search"><a href="">Buscar</a></li>
        <li id="logout"><a href="">Cerrar sesión</a></li>       
      </ul>
     </nav>
    </header>
    <main> 
        
       
    </main>`

})
