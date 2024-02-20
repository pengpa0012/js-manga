import {fetchData} from "./utility.js"

const cardsCover = document.querySelector(".cards")
const searchInput = document.querySelector(".search-input")
const cardTarget = document.querySelector("div")


// onMount
fetchData("/manga/latest").then(data => {
   generateCards(data)
})

// search
searchInput.addEventListener("submit" , e => {
  e.preventDefault()
  const { manga } = Object.fromEntries(new FormData(e.target))
  if(!manga) return
  cardsCover.innerHTML = `<div class="text-3xl text-center my-12">Loading...</div>`
  fetchData("/manga/latest", `?text=${manga}`).then(data => {
    cardsCover.innerHTML = ""
    generateCards(data)
  })
})


cardTarget.addEventListener("click", (e) => {
  const card = e.target.closest(".card")
  if(card) {
    const id = card.attributes["data-id"].value
    window.location = `http://127.0.0.1:5500/profile.html?id=${id}`;
  }
})

function generateCards(mangas) {
  mangas.forEach(el => {
    const newCard = document.createElement("div")
      newCard.className = "card shadow-md rounded-md overflow-hidden w-[200px]"
      newCard.setAttribute("data-id", el.id)
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
}


