import axios from 'axios';

const BASE_URL = 'http://backend:5000/api/pokemon';  // 后端容器名称 + 端口

export const fetchPokemons = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching Pokémon data:', error);
    return [];
  }
};
