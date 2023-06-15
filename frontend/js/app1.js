import Pidgeot from './objectLiteral.js';

const app = document.getElementById('app');

if (!app) {
  throw new Error('No app element found!');
}

const card = document.createElement('div');
card.style.border = '1px solid black';
const title = document.createElement('h2');
title.innerText = Pidgeot.name;
const id = document.createElement('p');
id.innerText = `#${Pidgeot.id}`;
const img = document.createElement('img');
img.src = Pidgeot.img;
img.width = 200;
img.height = 200;

card.appendChild(title);
card.appendChild(id);
card.appendChild(img);

if (Pidgeot.isOriginal()) {
  const badge = document.createElement('div');
  badge.innerText = '🔥';
  card.appendChild(badge);
}

app.appendChild(card);
