import createPokemonCard from './createPokemonCard.js';
import PokemonList from './PokemonList.js';
import { pokemonImages } from './PokemonImages.js';

const app = document.getElementById('app');

if (!app) {
  throw new Error('No app element found!');
}

// constructor function
function Pokemon(name, id, img) {
  this.name = name;
  this.id = id;
  this.img = img;
  this.isOriginal = function () {
    return this.id < 152;
  };
}

for (const pokeData of PokemonList) {
  const id = pokeData.id;
  const name = pokeData.name;
  // we are using the values of the name key from the PokemonList
  // as the key for the Pokemon Images
  const img = pokemonImages[name];
  const pokemon = new Pokemon(name, id, img);
  console.table(pokemon)
  const card = createPokemonCard(pokemon);
  app.appendChild(card);
}
