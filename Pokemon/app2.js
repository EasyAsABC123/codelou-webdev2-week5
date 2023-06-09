import {
  Pidgeot,
  Pikachu,
  Diglett,
} from './Pokemon.js';

const pokemonList = [
  Pidgeot,
  Pikachu,
  Diglett,
];

const app = document.getElementById('app');

if (!app) {
  throw new Error('No app element found!');
}

function createPokemonCard(pokemonData) {
  const card = document.createElement('div');
  card.style.border = '1px solid black';
  const title = document.createElement('h2');
  title.innerText = pokemonData.name;
  const id = document.createElement('p');
  id.innerText = `#${pokemonData.id}`;
  const img = document.createElement('img');
  img.src = pokemonData.img;
  img.width = 200;
  img.height = 200;
  
  card.appendChild(title);
  card.appendChild(id);
  card.appendChild(img);
  
  if (pokemonData.isOriginal()) {
    const badge = document.createElement('div');
    badge.innerText = '🔥';
    card.appendChild(badge);
  }
  return card;
}

for (const pokeData of pokemonList) {
  const card = createPokemonCard(pokeData);
  app.appendChild(card);
}
