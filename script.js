

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
    const newCard = document.createElement("div")
      newCard.className = "shadow-md rounded-md overflow-hidden w-[200px]"
      newCard.innerHTML = `
      <img src="${el.thumb}" class="w-full h-[300px] mb-1 object-cover">
      <div class="px-2 pb-2">
        <h3 class="text-sm truncate w-[190px]">${el.title}</h3>
        <p class="text-xs mb-1">${el.authors[0]}</p>
        <p class="text-xs">Total Chapters: ${el.total_chapter}</p>
      </div>
      `
    cardsCover.appendChild(newCard)
  });
})


