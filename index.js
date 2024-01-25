// fetching data from api

// Using fetch 

// let p = fetch("https://pokeapi.co/api/v2/pokemon/pikachu");

// p.then((response)=>{
//     return response.json()
//  })
// .then((value2)=>{
//     console.log(value2)
// })


// Using Async 
// fetchData();

async function fetchData(){
    try{

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    if(!response.ok){
        alert("The pokemon doesn't exist");
        throw new Error("Could not fetch resource");
    }
    
    const data = await response.json();
    
    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById("pokemonSprite");

    imgElement.src = pokemonSprite;
    imgElement.style.display ="block";
    }
    catch(error){
        console.error(error)
    }
}