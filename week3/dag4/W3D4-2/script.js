const h1 = document.querySelector('h1');
const img = document.querySelector('img');
const typeEl = document.querySelector('.type');
const buttonEl = document.querySelector('button');

const renderToDOM = async (pokemonID) => {
  const pokemon = await getPokemon(pokemonID);

  // Adding margin-bottom to button
  buttonEl.style.marginBottom = '3.5rem';

  // Adding Pokemon name to h1
  h1.textContent = pokemon.forms[0].name;

  // Adding image of Pokemon
  img.setAttribute('src', pokemon.sprites.front_default);
  img.setAttribute('alt', pokemon.forms[0].name);

  // Adding types
  typeEl.innerHTML = '';
  const typeSpan = document.createElement('span');
  typeSpan.textContent = 'Type: ';
  typeEl.appendChild(typeSpan);

  const types = pokemon.types.map(type => type.type.name);
  types.forEach((type, index) => {
    const oneTypeSpan = document.createElement('span');

    if (index === types.length - 1) oneTypeSpan.textContent = type;
    else oneTypeSpan.textContent = `${type}, `;

    typeEl.appendChild(oneTypeSpan);
  })
};

buttonEl.addEventListener('click', function(e) {
  // Generate random number between 1 and 150, to generate a Pokemon of the first Generation
  const pokemonID = Math.floor(Math.random() * 150) + 1;
  renderToDOM(pokemonID);
})
