import React from 'react';
import './PokemonCard.css';  // 引入样式文件

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="pokemon-card">
      <img src={pokemon.sprites.front_default} alt={pokemon.name} className="pokemon-image" />
      <h3 className="pokemon-name">{pokemon.name}</h3>
    </div>
  );
};

export default PokemonCard;
