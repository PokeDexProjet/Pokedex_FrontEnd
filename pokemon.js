const API_URL = "http://localhost:5000/pokemon"; // Remplacez par l'adresse réelle du serveur backend

// Fonction pour récupérer les données des Pokémon depuis le backend
async function fetchPokemon() {
  try {
    // Appel à l'API pour obtenir la liste de tous les Pokémon
    const response = await fetch(API_URL);
    const data = await response.json();

    const container = document.getElementById("pokemon-container");
    container.innerHTML = ""; // Effacer tout contenu existant dans le conteneur

    // Parcourir les données et créer des cartes pour chaque Pokémon
    data.forEach(pokemon => {
      const card = document.createElement("div");
      card.className = "pokemon-card";
      card.innerHTML = `
        <img src="${pokemon.image}" alt="${pokemon.name}">
        <h2>${pokemon.name}</h2>
      `;
      card.onclick = () => {
        // Lorsqu'une carte est cliquée, rediriger vers la page des détails avec l'ID du Pokémon
        window.location.href = `detail.html?id=${pokemon.id}`;
      };
      container.appendChild(card);
    });
  } catch (error) {
    console.error("Erreur lors de la récupération des données Pokémon :", error);
  }
}

// Charger les données Pokémon lors du chargement de la page
fetchPokemon();
