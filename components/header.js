function headerComponent (el) {
  const headerComponentEl = document.querySelector(".header-container")
  
  headerComponentEl.innerHTML =  `<header class="header">
  <a href="./index.html"> <img src="./images/caro-icon.png" class="logo"> </a>
  <div class="header__links">
    <a href="./portfolio.html">Portfolio</a>
    <a href="./servicios.html">Servicios</a>
    <a href="./contacto.html">Contacto</a>
  </div>
  <button class="header__menu-button">
  <div class="header__menu-container">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </button>
  <div class="header__menu">
    <img src="./images/close.png" class="header__close-menu"> 
    <a href="./portfolio.html">Portfolio</a>
    <a href="./servicios.html">Servicios</a>
    <a href="./contacto.html">Contacto</a>
  </div>
  </header>`

  const openMenuEl = document.querySelector(".header__menu-button");
  const menuEl = document.querySelector(".header__menu");
  const closeMenuEl = document.querySelector(".header__close-menu");

//abrir menu
openMenuEl.addEventListener("click",() => {
  menuEl.style.display = "grid";
})

//cerrar menu
closeMenuEl.addEventListener("click",() => {
  menuEl.style.display = "none";
})

 //el.appendChild(headerComponentEl);
}

headerComponent()