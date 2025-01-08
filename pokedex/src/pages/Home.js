import React, { useState, useEffect } from 'react';
import { fetchPokemons } from '../services/api';  // 引入 API 请求
import PokemonCard from '../components/PokemonCard';  // 引入展示卡片组件
import './Home.css';  // 引入样式文件

const Home = () => {
  const [pokemons, setPokemons] = useState([]);

  // 请求宝可梦数据
  useEffect(() => {
    const loadPokemons = async () => {
      const data = await fetchPokemons();
      setPokemons(data);
    };

    loadPokemons();
  }, []);

  return (
    <div className="home">
      <h1>Pokedex</h1>
      <div className="pokemon-grid">
        {pokemons.map((pokemon, index) => (
          <PokemonCard key={index} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default Home;
