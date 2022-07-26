function getPortfolio() {
  return fetch(
    "https://cdn.contentful.com/spaces/q0o2nycp7v1g/environments/master/entries?access_token=B9BhqcA_FIMvR7Dyng_2EOU8zoCZ_j1s4ZIC4clj2Z4&content_type=portfolio"
  ).then((res) => {
    return res.json();
  }).then((data) => {
    return loadPortfolio(data) 
  })
}


//Filtra la data
function loadPortfolio(data) {
  const portfolioArray = data.items
  const imgUrl = data.includes.Asset[0].fields.file.url
  //-------------------------------
  const template = document.querySelector("#portfolio__temp");
  const container = document.querySelector(".portfolio__card-container");

  const img = template.content.querySelector(".portfolio__img")
  const title = template.content.querySelector(".portfolio__title")
  const text= template.content.querySelector(".portfolio__p")
  const link= template.content.querySelector(".link")
  //-------------------------------
  for (const p of portfolioArray) {
    img.src = imgUrl
    title.textContent = p.fields.title
    text.textContent = p.fields.text
    link.textContent = p.fields.link
    
    const clone = document.importNode(template.content, true);
    container.appendChild(clone);  
  }
}


function main () {
  getPortfolio()
}

main()