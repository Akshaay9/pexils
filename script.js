const auth = "563492ad6f917000010000010ac4a02d2654465a911830ee25aa588d"
const inputValue = document.querySelector("input")
const btn = document.querySelector("button")
const gallery = document.querySelector(".gallery")


async function curatedPhoto() {
    const data = await fetch(`https://api.pexels.com/v1/curated?per_page=50`, {
        method: `GET`,
        headers: {
            Accept: "application/json",
            Authorization:auth
        }
    })
    const res = await data.json()
        console.log(res.photos);
        res.photos.forEach(photo => {
        const galleryImg = document.createElement("div")
        galleryImg.classList.add("galleryImg")
        galleryImg.innerHTML = `
        <img src=${photo.src.medium} alt="">
        <a href=${photo.photographer_url}>Photographer:${photo.photographer}</a>
        <a href=${photo.url}>Download</a>
        `
       gallery.appendChild(galleryImg)     
})
    
}
curatedPhoto()
btn.addEventListener("click", async() => {
    const data = await fetch(`https://api.pexels.com/v1/search?query=${inputValue.value}&per_page=15`, {
        method: `GET`,
        headers: {
            Accept: "application/json",
            Authorization:auth
        }
    })
    const res = await data.json()
    console.log(res);
    gallery.innerHTML=""
        res.photos.forEach(photo => {
        const galleryImg = document.createElement("div")
        galleryImg.classList.add("galleryImg")
        galleryImg.innerHTML = `
        <img src=${photo.src.medium} alt="">
        <a href=${photo.photographer_url}>Photographer:${photo.photographer}</a>
        <a href=${photo.url}>Download</a>
        `
       gallery.appendChild(galleryImg)     
})   
})


