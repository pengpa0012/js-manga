

const cardsCover = document.querySelector(".cards")

fetch(API_URL, {
  headers: {
    'X-RapidAPI-Key': KEY,
    'X-RapidAPI-Host': HOST
  }
})
.then(res => res.json())
.then(data => {
  const mangas = data.data

  mangas.forEach(el => {
    const newImg = document.createElement("img")
    newImg.src = el.thumb
    newImg.style.width = "200px"
    newImg.style.height = "300px"
    cardsCover.appendChild(newImg)
  });
  
})

