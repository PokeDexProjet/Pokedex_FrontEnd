// Function to fetch Pokémon data
async function getPokemons() {
    try {
      const response = await fetch('http://localhost:3000/api/pokemons');
      const data = await response.json();
      const container = document.getElementById('pokemon-container');
      container.innerHTML = ''; // Clear the container
  
      data.forEach(pokemon => {
        const card = document.createElement('div');
        card.classList.add('pokemon-card');
  
        const image = document.createElement('img');
        image.src = pokemon.image;
  
        const name = document.createElement('h3');
        name.innerText = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  
        // Create a link to the Pokémon's detail page
        const link = document.createElement('a');
        link.href = `pokemon.html?id=${pokemon.id}`; // Pass the Pokémon's ID as a query parameter
        link.innerText = 'View Details';
  
        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(link);
  
        container.appendChild(card);
      });
    } catch (error) {
      console.error('Error fetching Pokémon data:', error);
    }
  }
  
  // Call the function on page load
  window.onload = getPokemons;
  