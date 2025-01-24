// Function to fetch and display Pokémon details
async function getPokemonDetails() {
  // Parse the Pokémon ID from the query parameters in the URL
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id'); // Get the `id` parameter from the URL

  // Check if no ID was provided in the URL
  if (!id) {
    document.getElementById('pokemon-detail').innerHTML =
      'No Pokémon ID provided.';
    return;
  }

  try {
    // Replace the API URL with the correct backend route
    const response = await fetch(
      `https://route-backend-huangjingl-dev.apps.rm3.7wse.p1.openshiftapps.com/api/pokemons?id=${id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json', // Ensure the correct header is sent
        },
        credentials: 'include',
      }
    );

    // Check if the response status is OK (200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the JSON response to get Pokémon details
    const pokemon = await response.json();

    // Check if the Pokémon exists
    if (!pokemon) {
      document.getElementById('pokemon-detail').innerHTML =
        'Pokémon not found.';
      return;
    }

    // Update the Pokémon detail container with the retrieved data
    const container = document.getElementById('pokemon-detail');
    container.innerHTML = `
      <h1>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
      <img src="${pokemon.image}" alt="${pokemon.name} image">
      <p><strong>Type:</strong> ${pokemon.type.join(', ')}</p>
      <p><strong>Description:</strong> ${pokemon.description}</p>
    `;
  } catch (error) {
    console.error('Error fetching Pokémon details:', error);

    // Display an error message to the user
    document.getElementById('pokemon-detail').innerHTML =
      'Error fetching Pokémon details. Please try again later.';
  }
}

// Call the function on page load
window.onload = getPokemonDetails;
