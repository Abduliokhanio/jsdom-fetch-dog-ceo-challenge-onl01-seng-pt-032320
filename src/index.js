document.addEventListener("DOMContentLoaded", function() {
    fetchImages()
})

 const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
 function fetchImages() {
     fetch(imgUrl)
     .then(response => response.json())
     .then(data => data.message.map(k => { addImages(k)}))
 }

 function addImages(image) {
    let imgContainer = document.querySelector("#dog-image-container")
    let img = document.createElement("img")
    img.src = image
    imgContainer.appendChild(img)
}
