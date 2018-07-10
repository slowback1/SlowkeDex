import React, { Component } from 'react';
import Pokemon from '../pokemon/Pokemon.js';
import Stats from './Stats.js';
import Types from '../types/types';
import './stats.css';

class StatsContain extends Component {
    render() {
        let pokemonDB = Pokemon.map(pokemon => {
            return (
                 <div className="wrapperBox">
                    <div className="desc">
                        <img src={`https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/${pokemon.id}.png` || `./img/${pokemon.id}.png`} alt="sprite" className="pokeSprite" />
                        <p className="pokeName">{pokemon.id} {pokemon.name}</p>
                        <p className="pokeName">{Types[pokemon.id-1][0]} {Types[pokemon.id-1][1]}</p>
                    </div>
                    <div className="wrapper">
                        <div className="n">
                            <p>hp {Stats[pokemon.id-1][0]}</p>
                            <div className="stats">
                                <div className={`stat_${Stats[pokemon.id-1][0]} stat hp`}></div>
                            </div>
                        </div>
                        <div className="n">
                            <p>attack {Stats[pokemon.id-1][1]}</p>
                            <div className="stats">
                                <div className={`stat_${Stats[pokemon.id-1][1]} stat attack`}></div>
                            </div>
                        </div>
                        <div className="n">
                            <p>defense {Stats[pokemon.id-1][2]}</p>
                            <div className="stats">
                                <div className={`stat_${Stats[pokemon.id-1][2]} stat defense`} ></div>
                            </div>
                        </div>
                        <div className="n">
                            <p>special attack {Stats[pokemon.id-1][3]}</p>
                            <div className="stats">
                                <div className={`stat_${Stats[pokemon.id-1][3]} stat specialAttack`} ></div>
                            </div>
                        </div>
                        <div className="n">
                            <p>special defense {Stats[pokemon.id-1][4]}</p>
                            <div className="stats">
                                <div className={`stat_${Stats[pokemon.id-1][4]} stat specialDefense`}></div>
                            </div>
                        </div>
                        <div className="n">
                            <p>speed {Stats[pokemon.id-1][5]}</p>
                            <div className="stats">
                                <div className={`stat_${Stats[pokemon.id-1][5]} stat speed`}></div>
                            </div>
                        </div>
                    </div>
                 </div>
                );
        });
    return (
            <div className="pokemonDB">
                {pokemonDB}
            </div>
        );
    }
}

export default StatsContain;