function getPokemon() {
    const pokemonName = document.getElementById("pokemon-name").value;
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const name = data.name;
        const type = data.types[0].type.name;
        const moves = data.moves.map(move => move.move.name).join(", ");
        const stats = data.stats.map(stat => `${stat.stat.name}: ${stat.base_stat}`).join("<br>");
        const image = data.sprites.front_default;
  
        document.getElementById("pokemon-info").innerHTML = `
          <h2>${name}</h2>
          <img src="${image}">
          <p>Type: ${type}</p>
          <p>Moves: ${moves}</p>
          <p>Base Stats:</p>
          <p>${stats}</p>
        `;
      })
      .catch(error => {
        console.error(error);
        document.getElementById("pokemon-info").innerHTML = "Sorry, we couldn't find that Pokémon.";
      });
  }
  