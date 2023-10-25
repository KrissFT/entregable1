/* Tuve múltiples fallos al tratar de hacer el apartado de detalles,
les dejo casi todas mis intentos comentados para que se note mi desesperación en hacer algo que funcione.
Si tengo suerte espero poder añadir alguna funcionalidad adicional como búsqueda o un retorno a la lista,
pero a la hora de escribir esto ni siquiera integré el bootstrap ni definí lo que mostraré en detalles. */

window.addEventListener("load", async function(){
    let resultado = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    let pokedata = await resultado.json();
    let pokedex = pokedata.results

    let lista = document.querySelector("#lista")
    
    console.log(pokedex)

    let id = 0 
    pokedex.forEach(pokemon => {
        id ++
        lista.innerHTML += `<li class="pokemon list-group-item">${id} - ${pokemon.name}</li>`
        
        
/*         for (let index = 0; index < pokedex.length; index++) {
            pokedex[index].addEventListener("click", detallador(index));
            
        }

        async function detallador(i){
            let resultado_ind = await fetch(`https://pokeapi.co/api/v2/pokemon/${i+1}`)
            let resultado_esp = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${i+1}`)
            let data_ind = await resultado_ind.json()
            let data_esp = await resultado_esp.json()
            
            console.log(data_ind)
            console.log(data_esp)
            lista.innerHTML = `
            <li>${data_ind.sprites.front_default}</li>
            `
        } */



 /*        let pkm = document.querySelector(`#${pokemon.name}`)
        pkm.addEventListener("click", async function(){
            let resultado_ind = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
            let resultado_esp = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.name}`)
            let data_ind = await resultado_ind.json()
            let data_esp = await resultado_esp.json()
            
            console.log(data_ind)
            console.log(data_esp)
            lista.innerHTML = `
            <li>${data_ind.sprites.front_default}</li>
            `
        }) */
    });

    
    let li = document.querySelectorAll(".pokemon")
    console.log(li)
    for (let index = 0; index < li.length; index++) {
        li[index].addEventListener("click", async function(){
            let resultado_ind = await fetch(`https://pokeapi.co/api/v2/pokemon/${index+1}`)
            let resultado_esp = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${index+1}`)
            let data_ind = await resultado_ind.json()
            let data_esp = await resultado_esp.json()
            
            console.log(data_ind)
            console.log(data_esp)

            if (data_ind.types.length == 1) {
                lista.innerHTML = `
                <div class="card mb-3" style="max-width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${data_ind.sprites.front_default}" class="img-fluid rounded-start" alt="${data_ind.name} visto de frente">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${data_ind.name}</h5>
                                <p class="card-text">Tipo: ${data_ind.types[0].type.name}</p>
                                <p class="card-text">${data_esp.flavor_text_entries[42].flavor_text}</p>
                            </div>
                        </div>
                    </div>
                </div>
                `
            } else {
                lista.innerHTML = `
                <div class="card mb-3" style="max-width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${data_ind.sprites.front_default}" class="img-fluid rounded-start" alt="${data_ind.name} visto de frente">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${data_ind.name}</h5>
                                <p class="card-text">Tipo: ${data_ind.types[0].type.name}-${data_ind.types[1].type.name}</p>
                                <p class="card-text">${data_esp.flavor_text_entries[42].flavor_text}</p>
                            </div>
                        </div>
                    </div>
                </div>
                `
            }

            
        });
        
    }

    /* async function detallador(i){
        let resultado_ind = await fetch(`https://pokeapi.co/api/v2/pokemon/${i+1}`)
        let resultado_esp = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${i+1}`)
        let data_ind = await resultado_ind.json()
        let data_esp = await resultado_esp.json()
        
        console.log(data_ind)
        console.log(data_esp)
        lista.innerHTML = `
        <li>${data_ind.name}</li>
        <li><img src="${data_ind.sprites.front_default}" alt=""></li>
        ` */
    /* } */

    /* li.addEventListener("click", async function() {
        let resultado_ind = await fetch(`https://pokeapi.co/api/v2/pokemon/${li.id}`)
        let resultado_esp = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${li.id}`)
        let data_ind = await resultado_ind.json()
        let data_esp = await resultado_esp.json()
            
        console.log(data_ind)
        console.log(data_esp)
        lista.innerHTML = `
        <li>${data_ind.sprites.front_default}</li>
        `
    }) */

})

//<a href=${pokemon.url}>${id} - ${pokemon.name}</a>

{/* <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${data_ind.sprites.front_default}" class="img-fluid rounded-start" alt="${data_ind.name} visto de frente">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${data_ind.name}</h5>
        <p class="card-text">Tipo: ${data_ind.types[0].type.name}</p>
        <p class="card-text">${data_esp.flavor_text_entries[42].flavor_text}</p>
      </div>
    </div>
  </div>
</div> */}