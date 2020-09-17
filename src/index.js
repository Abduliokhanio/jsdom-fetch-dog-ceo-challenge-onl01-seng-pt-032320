 console.log('%c HI', 'color: firebrick')


 const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
 function fetchImages() {
     fetch(imgUrl)
     .then(response => response.json())     
     .then(data => data.message.map(k => { addImages(k)}))  
 }