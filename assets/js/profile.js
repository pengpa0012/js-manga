import { fetchData } from "./utility.js"

const chapterTarget = document.querySelector("div")
const btnChapters = document.querySelector(".show-chapters")
const chapterLists = document.querySelector(".chapter-lists")
const mangaInfo = document.querySelector(".manga-info")
const id = window.location.search.split("=")[1]

// onMount
fetchData("/manga", `?id=${id}`).then(data => {
  console.log(data)
  // add data on template
  const newDiv = document.createElement("div")
  newDiv.className = "flex gap-5"
  newDiv.innerHTML = `
    <img src="${data.thumb}" class="w-[200px] h-[300px]">
    <div class="flex flex-col gap-2"> 
      <p class="text-md">${data.title}</p>
      <p class="text-sm">${data.sub_title}</p>
      <p class="text-sm">${data.summary}</p>
      <p class="text-sm">${data.authors}</p>
      <p class="text-sm">${data.genres.toString()}</p>
      <p class="text-sm">created at: ${new Date(data.create_at)}</p>
      <p class="text-sm">updated at: ${new Date(data.update_at)}</p>
    </div>
  `
  mangaInfo.appendChild(newDiv)
})

btnChapters.addEventListener("click", () => {
  // fetchChapters on button click
  fetchData("/manga/chapter", `?id=${id}`).then(data => {
    console.log(data)
    data.forEach(el => {
      const newLi = document.createElement("li")
      newLi.className = "chapter"
      newLi.setAttribute("data-id", el.id)
      newLi.textContent = el.title
      chapterLists.appendChild(newLi)
    })
  })
})

// go to chapter page
chapterTarget.addEventListener("click", (e) => {
  const chapter = e.target.closest(".chapter")
  if(chapter) {
    const id = chapter.attributes["data-id"].value
    window.location = `http://127.0.0.1:5500/chapter.html?id=${id}`;
  }
})