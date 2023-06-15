export const Pikachu = {
  id: 25,
  name: "Pikachu",
  img: 'https://archives.bulbagarden.net/media/upload/thumb/4/4a/0025Pikachu.png/900px-0025Pikachu.png',
  isOriginal: function () {
    return this.id < 152;
  }
}

export const Diglett = {
  ...Pikachu,
  id: 50,
  name: "Diglett",
  img: 'https://archives.bulbagarden.net/media/upload/a/a6/0050Diglett.png',
}

export const Pidgeot = {
  id: 18,
  name: "Pidgeot",
  img: 'https://archives.bulbagarden.net/media/upload/thumb/8/82/0017Pidgeotto.png/600px-0017Pidgeotto.png',
  isOriginal: function () {
    return this.id < 152;
  },
}