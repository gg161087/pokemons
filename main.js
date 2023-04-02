const container = document.getElementById('container')
const carouselInner = document.getElementById('carousel-inner')

let contador = 0;
const fetchUrl = () => {
    fetch('./database/pokemons.json')
    .then(res => res.json())
    .then(data => {        
        for (const iterator of data) {            
            fetch(`${iterator.url}`)
            .then(res => res.json())
            .then(data => {                
                if (contador < 151) {  
                    if(data.id == 1){
                        carouselInner.innerHTML += `
                            <div class="carousel-item active">
                                <img src="${data.sprites.other.dream_world.front_default}" class="d-block w-50" alt="${data.name}">
                            </div>
                        `
                    }else{
                        carouselInner.innerHTML += `
                            <div class="carousel-item">
                                <img src="${data.sprites.other.dream_world.front_default}" class="d-block w-50" alt="${data.name}">
                            </div>
                        `                        
                    }
                    contador++
                }              
            })                     
        }                    
    })
}
fetchUrl();
