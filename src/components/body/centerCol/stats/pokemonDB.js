import React from 'react';
import Pokemon from '../pokemon/Pokemon';


const PokemonDB = ({ handleOnClick }) => {
    const PokeCells = Pokemon.map((pokemon, handleOnClick) => {
        let pokemonID = pokemon.id;
        console.log(pokemonID);
      if(pokemon.id % 3 === 0) { 
        return (
                <div className="pokebox" key={pokemon.id} onClick={handleOnClick} >
                    <img src={`https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/${pokemon.id}.png`} className="pokeSprite" alt="img" />
                    <p>#{pokemon.id} {pokemon.name}</p>
                </div>
            );} else if (pokemon.id === 802) {
                return (
                <div className="pokebox pokeboxFinal" key={pokemon.id} onClick={handleOnClick}>
                    <img src={`https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/${pokemon.id}.png`} className="pokeSprite" alt="img" />
                    <p>#{pokemon.id} {pokemon.name}</p>
                </div>
            );
            } else {
                return (
                <div className="pokebox pokeboxExtra" key={pokemon.id} onClick={handleOnClick}>
                    <img src={`https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/${pokemon.id}.png`} className="pokeSprite" alt="img" />
                    <p>#{pokemon.id} {pokemon.name}</p>
                </div>
            );
            }
});
    return (
            <div className="pokeLeft">
                { PokeCells }
            </div>
        );
};
export default PokemonDB;