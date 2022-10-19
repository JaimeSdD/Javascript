const container$$ = document.querySelector(".container");
const search$$ = document.querySelector(".search");
const All$$ = document.querySelector(".all");
const Kanto$$ = document.querySelector(".kanto");
const Johto$$ = document.querySelector(".johto");
const Hoenn$$ = document.querySelector(".hoenn");
const Flip$$ = document.querySelector(".flip");

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

const getPokemonKanto = async () => {
  const petition = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=151");
  const data = await petition.json();
  const allPokemon = await Promise.all(
    data.results.map(async ({ url }) => {
      const response = await fetch(url);
      const pokemon = await response.json();
      return pokemon;
    })
  );
  allPokemon.forEach((pokemon) => createPokemonCard(pokemon));
  search$$.addEventListener("input", () => searcher(allPokemon));
  Flip$$.addEventListener("click", () => flipping(allPokemon));
  return allPokemon;
};

const getPokemonJohto = async () => {
  const request = await fetch(
    "https://pokeapi.co/api/v2/pokemon/?limit=100&offset=151"
  );
  const data = await request.json();
  const allPokemon = await Promise.all(
    data.results.map(async ({ url }) => {
      const response = await fetch(url);
      const pokemon = await response.json();
      return pokemon;
    })
  );
  allPokemon.forEach((pokemon) => createPokemonCard(pokemon));
  search$$.addEventListener("input", () => searcher(allPokemon));
  Flip$$.addEventListener("click", () => flipping(allPokemon));
  return allPokemon;
};

const getPokemonHoenn = async () => {
  const request = await fetch(
    "https://pokeapi.co/api/v2/pokemon/?limit=135&offset=251"
  );
  const data = await request.json();
  const allPokemon = await Promise.all(
    data.results.map(async ({ url }) => {
      const response = await fetch(url);
      const pokemon = await response.json();
      return pokemon;
    })
  );
  allPokemon.forEach((pokemon) => createPokemonCard(pokemon));
  search$$.addEventListener("input", () => searcher(allPokemon));
  Flip$$.addEventListener("click", () => flipping(allPokemon));
  return allPokemon;
};

const getAllPokemon = async () => {
  const Kanto = await getPokemonKanto();
  const Johto = await getPokemonJohto();
  const Hoenn = await getPokemonHoenn();
  let allPokemon = [...Kanto, ...Johto, ...Hoenn];

  search$$.addEventListener("input", () => searcher(allPokemon));
  Flip$$.addEventListener("click", () => flipping(allPokemon));
};

getAllPokemon();

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
  if (container$$.innerHTML === "")
    container$$.innerHTML = `
  <div class = "error-container">
  <img class ="error-img" src = "https://www.pngall.com/wp-content/uploads/4/Pokemon-Pokeball-PNG-Image-HD.png">
  <h3 class = "error-text">Ouh! It seems that you haven't catch any pokemon. Try again! <br> (Your search doesn't match any pokemon)
  </h3>
  </div>
  `;
};

function createPokemonCard(pokemon, isFront = true) {
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card-container");
  cardContainer.id = pokemon.id;

  container$$.appendChild(cardContainer);
  isFront ? createPokemonFront(pokemon) : createPokemonBack(pokemon);
}

function createPokemonFront(pokemon) {
  const cardContainer = document.getElementById(pokemon.id);

  const nameFirstUpper = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const type = pokemon.types[0].type.name;
  const color = colors[type];
  cardContainer.style.backgroundColor = color;
  cardContainer.style.padding = "20px";
  cardContainer.style.width = "160px";
  cardContainer.style.minHeight = "345px";
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

async function createPokemonBack(pokemon) {
  const cardContainer = document.getElementById(pokemon.id);

  const type = pokemon.types[0].type.name;
  const color = colors[type];
  cardContainer.style.backgroundColor = "azure";
  cardContainer.style.padding = "0";
  cardContainer.style.width = "200px";
  cardContainer.style.minHeight = "385.65px";
  const gif = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif`;

  const getSpecies = async ({ url }) => {
    const request = await fetch(url);
    const species = await request.json();
    const description = species.flavor_text_entries[2].flavor_text.replace(
      "\f",
      " "
    );
    return description;
  };

  const description = await getSpecies(pokemon.species);

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
      result += `<p>${short[stat.name]}:</p><p>${base_stat}</p>`;
    });
    return result;
  };

  const cardInnerHtml = `
  <div class = "img-container-back">
  <img src = ${gif}>
  </div>
  <div style = "background-color: ${color}" class = "color-container">
  <div class = "description" >
    <p>${description}</p>
  </div>
  <div class = "stats"> 
    ${statsCreator(pokemon.stats)}
  </div>
  </div>
  `;

  cardContainer.innerHTML = cardInnerHtml;

  cardContainer.addEventListener("click", () => createPokemonFront(pokemon), {
    once: true,
  });
}

const whitePaper = () => ((container$$.innerHTML = ""), (search$$.value = ""));

let isBack = false;
const flipping = (allPokemon) => {
  whitePaper();
  if(isBack) {
    allPokemon.forEach((pokemon) => createPokemonCard(pokemon));
    isBack = false;
  } else {
      allPokemon.forEach((pokemon) =>createPokemonCard(pokemon, false));
      isBack = true;
    }
  }

All$$.addEventListener("click", whitePaper);
All$$.addEventListener("click", getAllPokemon);
Kanto$$.addEventListener("click", whitePaper);
Kanto$$.addEventListener("click", getPokemonKanto);
Johto$$.addEventListener("click", whitePaper);
Johto$$.addEventListener("click", getPokemonJohto);
Hoenn$$.addEventListener("click", whitePaper);
Hoenn$$.addEventListener("click", getPokemonHoenn);