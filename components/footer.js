function footerComponent(el) {
  const footerCompEl = document.querySelector(".footer-container");

  footerCompEl.innerHTML =  `<footer class="footer">
  <img src="images/caro-icon.png" alt="" class="logo">
  <div class="footer__rrss-container">
    <div class="footer__rrss">Instagram
      <img class="footer__rrss-img" src="images/instagram.png" alt="">
    </div>
    <div class="footer__rrss">Linkedin
      <img class="footer__rrss-img" src="images/linkedin.png" alt="">
    </div>
    <div class="footer__rrss">Github
      <img class="footer__rrss-img" src="images/github.png" alt="">
    </div>
  </div>
</footer>`

//el.appendChild()

}

footerComponent()