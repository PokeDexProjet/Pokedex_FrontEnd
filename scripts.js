// // Function to fetch Pokémon data
// async function getPokemons() {
//   try {
//     const response = await fetch('https://route-backend-huangjingl-dev.apps.rm3.7wse.p1.openshiftapps.com/api/pokemons');
//     const data = await response.json();
//     const container = document.getElementById('pokemon-container');
//     container.innerHTML = ''; // Clear the container

//     data.forEach(pokemon => {
//       const card = document.createElement('div');
//       card.classList.add('pokemon-card');

//       const image = document.createElement('img');
//       image.src = pokemon.image;

//       const name = document.createElement('h3');
//       name.innerText = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

//       // Create a link to the Pokémon's detail page
//       const link = document.createElement('a');
//       link.href = `pokemon.html?id=${pokemon.id}`; // Pass the Pokémon's ID as a query parameter
//       link.innerText = 'View Details';

//       card.appendChild(image);
//       card.appendChild(name);
//       card.appendChild(link);

//       container.appendChild(card);
//     });
//   } catch (error) {
//     console.error('Error fetching Pokémon data:', error);
//   }
// }

// // Call the function on page load
// window.onload = getPokemons;

// Function to fetch Pokémon data
async function getPokemons() {
  try {
    // Replace the API URL with the correct backend route
    const response = await fetch(
      'https://route-backend-huangjingl-dev.apps.rm3.7wse.p1.openshiftapps.com/api/pokemons',
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

    const data = await response.json();

    const container = document.getElementById('pokemon-container');
    container.innerHTML = ''; // Clear the container before rendering new data

    // Dynamically create cards for each Pokémon
    data.forEach((pokemon) => {
      const card = document.createElement('div');
      card.classList.add('pokemon-card');

      const image = document.createElement('img');
      image.src = pokemon.image;
      image.alt = `${pokemon.name} image`; // Add alt attribute for better accessibility

      const name = document.createElement('h3');
      name.innerText =
        pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1); // Capitalize the name

      // Create a link to the Pokémon's detail page
      const link = document.createElement('a');
      link.href = `pokemon.html?id=${pokemon.id}`; // Pass the Pokémon's ID as a query parameter
      link.innerText = 'View Details';

      // Append the elements to the card
      card.appendChild(image);
      card.appendChild(name);
      card.appendChild(link);

      // Append the card to the container
      container.appendChild(card);
    });
  } catch (error) {
    console.error('Error fetching Pokémon data:', error);

    // Display an error message to the user
    const container = document.getElementById('pokemon-container');
    container.innerHTML =
      '<p>Unable to fetch Pokémon data. Please try again later.</p>';
  }
}

// Call the function on page load
window.onload = getPokemons;

