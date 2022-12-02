const pokemonList = document.getElementById("pokemonList");
const loadMoreButton = document.getElementById("loadMoreButton");
const maxRecords = 151;
let offset = 0;
const limit = 12;
let amountLoaded = limit - offset;
function convertPokemonToHtml(pokemon) {
  return `<li class="pokemon ${pokemon.type}" >
      <span class="number">#${pokemon.number}</span>
      <span class="name">${pokemon.name}</span>
      <div class="pokemon-info">
        <ol class="type-list">
          ${pokemon.types
            .map((type) => `<li class="type ${type}">${type}</li>`)
            .join("")}
        </ol>
        <img
          src="${pokemon.photo}"
          alt="${pokemon.name}"
        />
      </div>
    </li>
    `;
}

function loadPokemonItens(offset, limit) {
  pokeApi
    .getPokemons(offset, limit)
    .then((pokemons) => {
      const newHTML = pokemons.map(convertPokemonToHtml).join("");
      pokemonList.innerHTML += newHTML;
    })
    .catch((error) => console.error(error));
}
loadPokemonItens(offset, limit);
loadMoreButton.addEventListener("click", () => {
  offset += limit;
  if (amountLoaded < maxRecords) {
    if (limit > maxRecords - amountLoaded) {
      loadPokemonItens(offset, maxRecords - amountLoaded);
      loadMoreButton.parentElement.removeChild(loadMoreButton);
      amountLoaded = maxRecords;
    } else {
      loadPokemonItens(offset, limit);
      amountLoaded += limit;
    }
  }
});
