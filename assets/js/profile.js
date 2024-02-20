const chapterTarget = document.querySelector("div")
const id = window.location.search.split("=")[1]

// go to chapter page
chapterTarget.addEventListener("click", (e) => {
  const chapter = e.target.closest(".chapter")
  if(chapter) {
    const id = chapter.attributes["data-id"].value
    window.location = `http://127.0.0.1:5500/chapter.html?id=${id}`;
  }
})