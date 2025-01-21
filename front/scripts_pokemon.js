// Function to fetch and display Pokémon details
async function getPokemonDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
  
    if (!id) {
      document.getElementById('pokemon-detail').innerHTML = 'No Pokémon ID provided.';
      return;
    }
  
    try {
      const response = await fetch(`https://route-backend-huangjingl-dev.apps.rm3.7wse.p1.openshiftapps.com/:3000/api/pokemons/${id}`);
      const pokemon = await response.json();
  
      if (!pokemon) {
        document.getElementById('pokemon-detail').innerHTML = 'Pokémon not found.';
        return;
      }
  
      const container = document.getElementById('pokemon-detail');
      container.innerHTML = `
        <h1>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
        <img src="${pokemon.image}" alt="${pokemon.name}">
        <p><strong>Type:</strong> ${pokemon.type.join(', ')}</p>
        <p><strong>Description:</strong> ${pokemon.description}</p>
      `;
    } catch (error) {
      console.error('Error fetching Pokémon details:', error);
      document.getElementById('pokemon-detail').innerHTML = 'Error fetching Pokémon details.';
    }
  }
  
  // Call the function on page load
  window.onload = getPokemonDetails;
  