//function serviceComponent (el) {
//  const serviceComponentEl = document.querySelector(".servicios__card-container")
//
//  serviceComponentEl.innerHTML = 
//        `<div id="servicios__temp">
//          <img src="" class="servicios__img">
//          <div class="servicios__text">
//            <h3 class="servicios__title"></h3>
//            <p class="servicios__p"></p>      
//          </div>
//        </div>`
//
//  el.appendChild();
//}


//Recibe la data del CMS Contentful y filtra el array de servicios 
//con la funcion loadService()
function getService() {
  return fetch(
    "https://cdn.contentful.com/spaces/q0o2nycp7v1g/environments/master/entries?access_token=B9BhqcA_FIMvR7Dyng_2EOU8zoCZ_j1s4ZIC4clj2Z4&content_type=service"
  ).then((res) => {
    return res.json();
  }).then((data) => {
    return loadService(data) 
  })
}


//Filtra la data
function loadService(data) {
  const serviceArray = data.items
  //const imgUrl = data.includes.Asset[0].fields.file.url
  //-------------------------------
  const servContainer = document.querySelector(".servicios__card-container");
  const servTemp = document.querySelector("#servicios__temp");
  const textContainer = servTemp.querySelector(".servicios__text")
  //const servImg = servContainer.querySelector(".servicios__img")
  const servTitle = textContainer.querySelector(".servicios__title")
  const servDesc= textContainer.querySelector(".servicios__p")
  
  servContainer.innerHTML = 
      `<div id="servicios__temp">
        <img src="" class="servicios__img">
        <div class="servicios__text">
          <h3 class="servicios__title"></h3>
          <p class="servicios__p"></p>      
        </div>
      </div>`
  //-------------------------------
  for (const s of serviceArray) {
    //servImg.src = imgUrl
    servTitle.textContent = s.fields.title
    servDesc.textContent = s.fields.description
    
    const clone = document.importNode(servTemp.content, true);
    servContainer.appendChild(clone);  
  }
}




function main () {
  //headerComponent(document.querySelector(".header-container"))
  //formComponent(document.querySelector(".contacto-container"))
  //footerComponent(document.querySelector(".footer-container"))

  getService()

}
main()
