const container$$ = document.querySelector(".container");
const colors = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};
const search$$ = document.querySelector(".search");

const searcher = (allPokemon) => {
  container$$.innerHTML = "";

  for (const pokemon of allPokemon) {
    const searchName = pokemon.name.includes(search$$.value.toLowerCase());
    const searchId = pokemon.id === parseInt(search$$.value);
    const searchTypes = pokemon.types.some(({ type }) =>
      type.name.includes(search$$.value.toLowerCase())
    );

    if (searchName || searchId || searchTypes) {
      createPokemonCard(pokemon);
    }
  }
};

function createPokemonCard(pokemon) {
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card-container");
  cardContainer.id = pokemon.id;

  container$$.appendChild(cardContainer);
  createPokemonFront(pokemon);
}

function createPokemonFront(pokemon) {
  const cardContainer = document.getElementById(pokemon.id);
  

  const nameFirstUpper = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const type = pokemon.types[0].type.name;
  const color = colors[type];
  cardContainer.style.backgroundColor = color;
  const image = pokemon.sprites.other["official-artwork"].front_default;

  const h3Creator = (types) => {
    let result = "";
    types.forEach(({ type }) => {
      result += `<h3 style = "color:${colors[type.name]}" > ${
        type.name[0].toUpperCase() + type.name.slice(1)
      } </h3>`;
    });
    return result;
  };

  const cardInnerHtml = ` 
  <div class = "img-container">
    <img src = ${image}>
  </div>
  <div class = "info">
    <div class = "number">#${pokemon.id}</div>
    <h2 class = "name"> ${nameFirstUpper}</h2>
    <div class = "type"> 
      ${h3Creator(pokemon.types)}
    </div>
  </div>
  `;

  cardContainer.innerHTML = cardInnerHtml;
  
  cardContainer.addEventListener("click", () => createPokemonBack(pokemon), {
    once: true,
  });
}

function createPokemonBack(pokemon) {
  const cardContainer = document.getElementById(pokemon.id);

  const nameFirstUpper = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const type = pokemon.types[0].type.name;
  const color = colors[type];
  cardContainer.style.backgroundColor = color;
  const gif = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif`;

  const statsCreator = (stats) => {
    let result = "";
    const short = {
      "special-attack": "Sp.Atk",
      "special-defense": "Sp.Def",
      hp: "Hp",
      defense: "Def",
      attack: "Atk",
      speed: "Speed",
    };

    stats.forEach(({ stat, base_stat }) => {
      result += `<p style = "color: ${color}">${short[stat.name]}:</p><p>${base_stat}</p>`;
    });
    return result;
  };

  const cardInnerHtml = `
  <div class = "title">
  <span class = "number">#${pokemon.id}</span>
  <h2 class = "name"> ${nameFirstUpper}</h2>
  </div>
  <div class = "img-container-back">
  <img src = ${gif}>
  </div>
  <div class = "stats"> 
    ${statsCreator(pokemon.stats)}
  </div>
  `;

  cardContainer.innerHTML = cardInnerHtml;
  cardContainer.addEventListener("click", () => createPokemonFront(pokemon), {
    once: true,
  });
}
const getPokemon = async () => {
  const petition = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=151");
  const data = await petition.json();
  const allPokemon = await Promise.all(
    data.results.map(async ({ url }) => {
      const response = await fetch(url);
      const pokemon = await response.json();
      return pokemon;
    })
  );
  allPokemon.forEach(pokemon => createPokemonCard(pokemon));
  search$$.addEventListener("input", () => searcher(allPokemon));
};

getPokemon();


