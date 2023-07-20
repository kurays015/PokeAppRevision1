// import { searchBar, loaderContainer, backArrowIcon, searchAndRenderedPokemonsModal, allPokemonModalShow  } from './main.js'



// //search bar for pokemon
// searchBar.addEventListener('keydown', (event) => {
//   if (event.key === 'Enter') {
//     const pokemon = searchBar.value;
//     searchBar.value = '';
//     loaderContainer.style.display = 'block';
//     setTimeout(() => {
//       searchPokemon(pokemon);
//       loaderContainer.style.display = 'none';
//     }, 3000)

//     backArrowIcon.style.display = 'none';
//   }
// });

// const searchPokemon = async (pokemon) => {
//   try {
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
//     if(response.ok) {
//       const pokemonAbilitiesData = await response.json();
//       const typeNames = pokemonAbilitiesData.types.map(type => type.type.name).join(', ');
//       displaySearchedPokemons(pokemonAbilitiesData, typeNames);
//     } else {
//       throw new Error('Request failed with status ' + response.status);
//     }   
//   } catch (error) {
//     alert('Pokemon Not Found, small caps and full name only')
//   }
// };


// // Function to display pokemon
// const displaySearchedPokemons = async (pokemonAbilitiesData, typeNames) => {

//   renderedPokemons.innerHTML = '';

//   const pokemonHTML = `
//     <div class="page-load-cards">
//       <img class="poke-img" src="${pokemonAbilitiesData.sprites.other.dream_world.front_default}">
//       <h1 class="pokemon-name">${pokemonAbilitiesData.name}</h1>
//       <p class="poke-types" title="Add to team">${searchPokemonPlusIcon} ${typeNames}</p>
//     </div>
//   `;
//   renderedPokemons.innerHTML = pokemonHTML;

//   //each clicked on the plus icon is added to the selectedPokemons empty array
//   setupPlusIconClickEvent(selectedPokemons);

//   const pokemonImage = document.querySelectorAll('.poke-img');
//   pokemonImage.forEach(img => {
//     img.addEventListener('click', async () => {
//       displayAllModal.innerHTML = '';  
//       searchAndRenderedPokemonsModal(pokemonAbilitiesData)

//       // displayAllModal.showModal();
//       // displayAllModal.classList.add('zoom-in');
//     });
//   });
// }