import createPokemonCard from './createPokemonCard.js'

const app = document.getElementById('app')
const weatherButton = document.getElementById('submit')
const header = document.getElementById('header')
weatherButton.addEventListener('click', onWeatherSubmit, false);

if (!app) {
  throw new Error('No app element found!');
}

function onWeatherSubmit(e) {
  e.preventDefault()
  const weather_value = document.getElementById('weather_value')
  const zipcode = document.getElementById('zipcode')

  fetch(`http://localhost:3000/api/forecast/${zipcode.value}`)
  .then(response => {
    response.json()
      .then(json => {
        weather_value.innerHTML = `${json.value} ${json.unit}`
      })
  })
  .catch(error => {
    console.error(error)
  })

  return false;
}

// Goal is to call the pokeAPI to fetch pokemon rather than hardcode

// class
class PokemonClass {
  constructor(name, id, img) {
    this.name = name;
    this.id = id;
    this.img = img
  }

  isOriginal() {
    return this.id < 300;
  }
}

fetch('http://localhost:3000/api/users')
  .then(response => {
    response.json()
      .then(json => {
        console.log(json)
        header.innerHTML = json.hello
      })
  })
  .catch(error => {
    console.error(error)
  })

fetch('https://pokeapi.co/api/v2/pokemon')
  .then(response => {
    response.json()
      .then(json => {
        console.log(json)
        json.results.forEach(pokemon => {
          fetch(pokemon.url)
            .then(response => {
              response.json()
                .then(pokemonJson => {
                  const pokemonObject = new PokemonClass(pokemonJson.name, pokemonJson.id, pokemonJson.sprites.front_default)
                  const card = createPokemonCard(pokemonObject)
                  app.appendChild(card);
                })
                .catch(error => console.error(error))
            })
            .catch(error => console.error(error))
        })
      })
      .catch(error => {
        console.error(error)
        throw new Error("Please contact support, it appears we have failed you.")
      })
  })
  .catch(error => console.error(error))

// for (const pokeData of PokemonList) {
//   const id = pokeData.id;
//   const name = pokeData.name;
//   const pokemon = new PokemonClass(name, id);
//   console.table(pokemon)
//   const card = createPokemonCard(pokemon);
//   app.appendChild(card);
// }
