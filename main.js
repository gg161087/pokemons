const carouselImages = document.querySelector("#carousel-images");
const pokemons = []
const pokesNext = []
const prokesPrev = []

let currentIndex = 0;

const showImage = () => {
    carouselImages.innerHTML = `
        <img src="${pokemons[currentIndex].imagen}" alt="${pokemons[currentIndex].modelo}">
        <div class="caption">
            <p>${pokemons[currentIndex].marca}</p>
            <p>${pokemons[currentIndex].modelo}</p>
            <p>${pokemons[currentIndex].precio}</p>
        </div>
    `;
}

const nextImage = () => {
    currentIndex++;
    if (currentIndex === pokemons.length) {
        currentIndex = 0;
    }
    showImage();
}

const prevImage = () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = pokemons.length - 1;
    }
    showImage();
    }


fetch('https://pokeapi.co/api/v2/pokemon')
    .then(res => res.json())
    .then(data => {
        console.log(data.results);
        for (const i of data.results) {        
            pokemons.push(i);
        }
        showImage();
    document.querySelector("#prevBtn").addEventListener("click", prevImage);
    document.querySelector("#nextBtn").addEventListener("click", nextImage);
    })
    .catch(error => console.error(error));
