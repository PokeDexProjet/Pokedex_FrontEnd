const API_URL = "https://automatic-telegram-jjj4699wpjgq3xxw-3000.app.github.dev/pokemon"; // Remplacez par l'adresse réelle du serveur backend

// Fonction pour obtenir l'ID du Pokémon à partir des paramètres de l'URL
function getPokemonIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

// Fonction pour récupérer les détails d'un Pokémon spécifique depuis le backend
async function fetchPokemonDetails(pokemonId) {
  try {
    // Appel à l'API pour obtenir les détails du Pokémon
    const response = await fetch(`${API_URL}/${pokemonId}`);
    const pokemon = await response.json();

    const detailContainer = document.getElementById("pokemon-detail");
    detailContainer.innerHTML = `
      <img src="${pokemon.image}" alt="${pokemon.name}">
      <h2>${pokemon.name}</h2>
      <p>Type: ${pokemon.type.join(", ")}</p>
      <p>${pokemon.description}</p>
    `;
  } catch (error) {
    console.error("Erreur lors de la récupération des détails Pokémon :", error);
  }
}

// Récupérer l'ID du Pokémon et charger les détails
const pokemonId = getPokemonIdFromUrl();
if (pokemonId) {
  fetchPokemonDetails(pokemonId);
} else {
  console.error("Aucun ID Pokémon trouvé dans l'URL.");
}
