//function serviceComponent (el) {
//  const serviceComponentEl = document.querySelector(".servicios__card-container")
//  
//  serviceComponentEl.innerHTML = 
//        `<div class="servicios__card">
//          <img src="" class="servicios__img">
//          <div class="servicios__text">
//            <h3 class="servicios__subtitle"></h3>
//            <p class="servicios__p"></p>      
//          </div>
//        </div>`
//
//  el.appendChild();
//}
//
//
//function addService(service) {
//  const card = document.querySelector(".servicios__card");
//  const container = document.querySelector(".servicios__card-container");
//  const textCardContainer  = document.querySelector(".servicios__card-container");
//  
//
//  textCardContainer.textContent.querySelector("servicios__text").textContent = 
//  service.title;
//
//  var clone = document.importNode(card.textContent, true);
//  container.appendChild(clone);   
//}
//
////Recibe la data del CMS Contentful y filtra el array de servicios 
////con la funcion loadService()
//function getService() {
//  return fetch(
//    "https://cdn.contentful.com/spaces/q0o2nycp7v1g/environments/master/entries?access_token=B9BhqcA_FIMvR7Dyng_2EOU8zoCZ_j1s4ZIC4clj2Z4&content_type=service"
//  ).then((res) => {
//    return res.json();
//  }).then((data) => {
//    return loadService(data) 
//  })
//}
//
//
////Captura la data y la filtra devolviendo el service en un objeto con
////las propiedades img,title y description
//function loadService(data) {
//  var serviceArray = data.items[0].fields
//  console.log(serviceArray)
//  
//  for (const s of serviceArray) {
//    return {
//      img: "hola",
//      title: s.title,
//      description: s.description,
//    }
//  } 
//  //return serviceArray
//}
//
//
//serviciosComponent()
//getService()
