function formComponent (){
  const formCompEl = document.querySelector(".contact-container");

  formCompEl.innerHTML = `
  <section class="contact">
  <h2 id="contacto-text"  class="title">Escribime</h2>
  <form class="contact__form">

    <label class="contact--label contact__username" for="name">NOMBRE
      <input type="text" name="name">
    </label>

    <label class="contact--label contact__useracc" for="email">EMAIL
      <input type="email" name="email">
    </label>

    <label class="contact--label contact__usermsg" for="name">MENSAJE
     <textarea name="message" id="" cols="30" rows="10"></textarea>
    </label>

    <div class="contact__button-container">
      <button class="contact__form-button">Enviar</button>
    </div>

    <div class="contact__message-sended">
    Su mensaje ha sido enviado, gracias! ♡
    </div>

  </form>
  </section>`
  
  formEl = document.querySelector(".contact__form");
  
  formEl.addEventListener("submit",(e) => {
    e.preventDefault()
    const formData = new FormData(e.target);
    const value = Object.fromEntries(formData.entries());
    const messageEl = document.querySelector(".contact__message-sended")

    fetch('https://apx-api.vercel.app/api/utils/dwf', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:  JSON.stringify({
      to:'carofattore@gmail.com',
      message: `Nombre De Usuario: ${value.name}, 
      Correo Electrónico: ${value.email}, 
      Mensaje: ${value.message}`
      })
    })
  .then(res => {
    return res.json()
  })
  .then(data => {
    return data
  });

  messageEl.style.display="inherit"
  formEl.reset();

  })

}

formComponent()