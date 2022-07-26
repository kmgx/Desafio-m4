function formComponent (el){
  const formCompEl = document.querySelector(".contact-container");

  formCompEl.innerHTML = `
  <section class="contact">
  <h2 id="contacto-text"  class="title">Escribime</h2>
  <form action="" class="contact__form">
    <label class="contact--label contact__username" for="name">NOMBRE
      <input type="text">
    </label>
    <label class="contact--label contact__useracc" for="email">EMAIL
      <input type="email">
    </label>
    <label class="contact--label contact__usermsg" for="name">MENSAJE
     <textarea name="" id="" cols="30" rows="10"></textarea>
    </label>
    <div class="contact__button-container">
      <button class="contact__form-button">Enviar</button>
    </div>
  </form>
  </section>`

  document.getElementById("contacto-text").textContent="Contacto"

  
  
  
  //const mediumBp= matchMedia("(min-width: 600px");
  ////console.log(mediumBp)
  //
  //const changeSize = mql => {
  //  mql.matches
  //  ? document.getElementById("contacto-text").style.backgroundColor = "red"
  //  : document.getElementById("contacto-text").style.backgroundColor = "blue"
  //}
  //
//
  //mediumBp.addEventListener(changeSize)
  //changeSize(mediumBp)
  


  if (window.matchMedia("(width > 600px)").matches) {
    
    document.getElementById("main-cont").style.background = "red"
  } else {
    document.getElementById("main-cont").style.background = "blue"
  }
  
  
  
  formEl = document.querySelector(".contact__form");
  
  formEl.addEventListener("submit",(e) => {
    e.preventDefault()
    const formData = new FormData(e.target);
  
    const value = Object.fromEntries(formData.entries());

    fetch('https://apx-api.vercel.app/api/utils/dwf', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:  JSON.stringify({
      'to':'carofattore@gmail.com',
      'message':'Formulario enviado con éxito.'
      })
    })
  .then(res => res.json())
  .then(data => console.log(data));

  })

  //el.appendChild()
}

formComponent()