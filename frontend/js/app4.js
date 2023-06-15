import createPokemonCard from './createPokemonCard.js';
import PokemonList from './PokemonList.js';
import { pokemonImages } from './PokemonImages.js';

const app = document.getElementById('app');

if (!app) {
  throw new Error('No app element found!');
}

// class
class PokemonClass {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }

  isOriginal() {
    return this.id < 300;
  }

  get img() {
    return pokemonImages[this.name];
  }
}

for (const pokeData of PokemonList) {
  const id = pokeData.id;
  const name = pokeData.name;
  const pokemon = new PokemonClass(name, id);
  console.table(pokemon)
  const card = createPokemonCard(pokemon);
  app.appendChild(card);
}
