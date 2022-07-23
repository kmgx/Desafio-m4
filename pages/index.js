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
  const servicesArray = data.items
  console.log(servicesArray)
  const imgUrl = data.includes.Asset[0].fields.file.url
  //-------------------------------
  const servTemp = document.querySelector("#servicios__temp");
  const servContainer = document.querySelector(".servicios__card-container");

  const servImg = servTemp.content.querySelector(".servicios__img")
  const servTitle = servTemp.content.querySelector(".servicios__title")
  const servDesc= servTemp.content.querySelector(".servicios__p")
  //-------------------------------
  for (const s of servicesArray) {
    servImg.src = imgUrl
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
