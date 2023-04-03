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
                console.log(data);                
                if (contador < 151) {  
                    if(data.id == 1){
                        carouselInner.innerHTML += `
                            <div class="carousel-item active">
                                <div class="card" style="width: 18rem;">                                    
                                    <img src="${data.sprites.other.dream_world.front_default}" class="card-img-top" alt="${data.name}">
                                    <div class="card-body">
                                        <h2>${data.name}</h2>
                                        <p class="card-text">${data.name}</p>
                                    </div>
                                </div>
                            </div>
                        `
                    }else{
                        carouselInner.innerHTML += `
                            <div class="carousel-item">
                                <div class="card" style="width: 18rem;">                                    
                                    <img src="${data.sprites.other.dream_world.front_default}" class="card-img-top" alt="${data.name}">
                                    <div class="card-body">
                                        <p class="card-text">${data.name}</p>
                                    </div>
                                </div>
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


/* 
CARD:
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
fetch ANDANDO:
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
*/