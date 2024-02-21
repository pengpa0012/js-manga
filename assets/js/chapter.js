import { fetchData } from "./utility.js"
const images = document.querySelector(".images")
const id = window.location.search.split("=")[1]

// onMount
fetchData("/manga/image", `?id=${id}`).then(data => {
    data.forEach(el => {
      const newImg = document.createElement("img")
      newImg.src = el.link
      newImg.className = "w-full"
      images.appendChild(newImg)
    })
})

