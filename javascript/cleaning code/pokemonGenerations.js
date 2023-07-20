import {
  generation1,
  generation2,
  generation3,
  generation4,
  generation5,
  generation6,
  generation7,
  generation8,
  generation9
} from './main.js'

const pokemonGeneration = [];


const pokemonGenerations = async (pokemonsData) => {
  for(const pokemons of pokemonsData) {
    const response = await fetch(pokemons.url);
    const pokemonsAbilitiesData = await response.json();
    await fetchSpeciesEachGeneration(pokemonsData, pokemonsAbilitiesData);
  }

 

}

const fetchSpeciesEachGeneration = async (pokemonsData, pokemonsAbilitiesData) => {
  // console.log(pokemonsAbilitiesData)
  const { species } = pokemonsAbilitiesData;
  
  try {
    //fetch species
    const speciesResponse = await fetch(species.url);
    const speciesData = await speciesResponse.json();
    //fetch generation 
    const generationResponse = await fetch(speciesData.generation.url);
    const generationData = await generationResponse.json();
    renderEachPokemonGenerations(pokemonsAbilitiesData, generationData)

  }catch(error) {
    console.log(error)
  }

}

const renderEachPokemonGenerations = (pokemonsAbilitiesData, generationData) => {

  const { pokemon_species } = generationData;
  const hasValidImage = pokemonsAbilitiesData.sprites.other.dream_world.front_default !== null;
  
  
  for(const pokemons of pokemon_species) {

      if(pokemons.name === pokemonsAbilitiesData.name) {

        pokemonGeneration.push({
          name: pokemonsAbilitiesData.name,
          img: pokemonsAbilitiesData.sprites.other.dream_world.front_default,
          types: pokemonsAbilitiesData.types
        });
      
      }

  }

  const gen1 = pokemonGeneration.find(pokemon => pokemon.name === pokemonsAbilitiesData.name)

  generation1.addEventListener('click', () => {
    console.log(gen1);
  });
 

}






export { pokemonGenerations };