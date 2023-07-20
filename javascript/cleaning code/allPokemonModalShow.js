import { displayAllModal } from './main.js'
import { searchAndRenderedPokemonsModal } from './searchAndRenderedPokemonModal.js'


const allPokemonModalShow = async (pokemonImg, pokemonsData) => {

  pokemonImg.forEach((img, index) => {
    img.addEventListener('click', async () => {
      displayAllModal.innerHTML = '';   
      console.log('display All pokemon ito')
      const pokemons = pokemonsData[index];

      fetchPokemonAbilities(pokemons);

      //show modal for every pokemon clicked
       displayAllModal.showModal();     
       //add class animation to modal
       displayAllModal.classList.add('zoom-in')
       
    })
  })
}

const fetchPokemonAbilities = async (pokemons) => {
  try {
    const response = await fetch(pokemons.url);
    const pokemonAbilitiesData = await response.json();
    searchAndRenderedPokemonsModal(pokemonAbilitiesData);
  } catch(error) {
    console.log(error)
  }
}

export { allPokemonModalShow };