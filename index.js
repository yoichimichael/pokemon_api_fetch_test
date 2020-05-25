const pokemonApiUrl = "https://pokeapi.co/api/v2/pokemon"

const randNum = () => {
  return Math.floor(Math.random() * 150) + 1
};

document.addEventListener('DOMContentLoaded', () => {
  
  // console.log(pokeDiv)
  for(let i = 0; i < 10; i++) {
    fetch(`${pokemonApiUrl}/${randNum()}`)
    .then(resp => resp.json())
    .then(addPokemonToDom)
   }
});

const addPokemonToDom = (pokemon) => {
  const pokeUl = document.getElementById('poke-list')
  const pokeLi = document.createElement('li')
  const pokeImg = document.createElement('img')
  pokeImg.src = pokemon.sprites.front_default
  pokeLi.appendChild(pokeImg)
  pokeUl.appendChild(pokeLi)
};