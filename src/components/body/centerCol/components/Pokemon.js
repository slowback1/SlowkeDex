import React from 'react';
import Types from '../types/types';
console.log(Types);
const Pokemon = ({ pokemon }) => (
        <div className="pokemon">
            <button type="button" className="pokemon_sprite" style={{backgroundImage: `url(${`https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/${pokemon.id}.png`})`}} />
            <p className="pokemon_name">{pokemon.name}</p>
        </div>
    );
    export default Pokemon;