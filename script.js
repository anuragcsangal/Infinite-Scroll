const imageContainer = document.getElementById('image-container')
const loader = document.getElementById('loader')
let photosArray = [];

// Unsplash API
const count = 10;
const apiKey = "XW2X5tkou146JQeTuf-w_FhDTEVGb7fdDuwOEKSraDk";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;


// Display Photos
function displayPhotos() {
    photosArray.forEach((photo) => {
        const item = document.createElement('a');
        item.setAttribute('href', photo.links.html);
        item.setAttribute('target', '_blank');
        // Create <img> for photo
        const img = document.createElement('img')
        img.setAttribute('src', photo.urls.regular);
        img.setAttribute('alt', photo.alt_description)
        img.setAttribute('title', photo.alt_description)
        item.appendChild(img);
        imageContainer.appendChild(item);
    })
}

// Get photos from Unsplash API

async function getPhotos(){
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
    } catch (error) {
        // Catch error here
    }
}


window.addEventListener('scroll', () => {
    if((window.innerHeight+window.scrollY) >= (document.body.offsetHeight - 1000)){
        getPhotos();
        console.log("load more")
    }
})

// On Load
getPhotos();
