// javascript object

// named export 
const Pidgeot = {
  id: 18,
  name: "Pidgeot",
  img: 'https://archives.bulbagarden.net/media/upload/thumb/8/82/0017Pidgeotto.png/600px-0017Pidgeotto.png',
  isOriginal: function () {
    return this.id < 152;
  },
};

// renaming an export
export { Pidgeot as BestPokemon };

// default exports
export default Pidgeot;

// aggrigating exports
export * from './Pikachu.js';
