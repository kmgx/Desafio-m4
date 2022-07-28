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
  const imgUrl = data.includes.Asset[0].fields.file.url
  //-------------------------------
  const template = document.querySelector("#servicios__temp");
  const container = document.querySelector(".servicios__card-container");

  const img = template.content.querySelector(".servicios__img")
  const title = template.content.querySelector(".servicios__title")
  const description= template.content.querySelector(".servicios__p")
  //-------------------------------
  for (const s of servicesArray) {
    img.src = imgUrl
    title.textContent = s.fields.title
    description.textContent = s.fields.description
    
    const clone = document.importNode(template.content, true);
    container.appendChild(clone);  
  }
}




function main () {
  //headerComponent(document.querySelector(".header-container"))
  //formComponent(document.querySelector(".contacto-container"))
  //footerComponent(document.querySelector(".footer-container"))
  getService()


}
main()
