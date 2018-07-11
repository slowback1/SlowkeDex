import React, { Component } from 'react';
import Pokemon from '../pokemon/Pokemon';
import PokeRight from './pokeRight';
//eslint-disable-next-line
import PokemonDB from './pokemonDB';
import './stats.css';

let cd = 1;//Math.floor(Math.random() * 803);
/*
    const PokeCells = Pokemon.map((pokemon) => {
        let pokemonID = pokemon.id;
        console.log(pokemonID);
      if(pokemon.id % 3 === 0) { 
        return (
                <div className="pokebox" key={pokemon.id} onClick={this.handleOnClick} >
                    <img src={`https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/${pokemon.id}.png`} className="pokeSprite" alt="img" />
                    <p>#{pokemon.id} {pokemon.name}</p>
                </div>
            );} else if (pokemon.id === 802) {
                return (
                <div className="pokebox pokeboxFinal" key={pokemon.id} onClick={this.handleOnClick}>
                    <img src={`https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/${pokemon.id}.png`} className="pokeSprite" alt="img" />
                    <p>#{pokemon.id} {pokemon.name}</p>
                </div>
            );
            } else {
                return (
                <div className="pokebox pokeboxExtra" key={pokemon.id} onClick={this.handleOnClick}>
                    <img src={`https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/${pokemon.id}.png`} className="pokeSprite" alt="img" />
                    <p>#{pokemon.id} {pokemon.name}</p>
                </div>
            );
            }
}); */
class TrueStats extends Component {

     handleOnClick(e) {
        
        this.setState({pokeID: e.target.id});
     
    }
        constructor() {
        super();
        this.state = {
            pokeID: cd
        }
        this.handleOnClick = this.handleOnClick.bind(this);
    }
    render() {
        return(
           <div className="loadingScreen">
                <div className="dots">
                    <h1> Now Loading</h1>
                    <div className="dotsdots">
                    <div className="dot d1"></div>
                    <div className="dot d2"></div>
                    <div className="dot d3"> </div>
                    </div>
                </div>
                <div className="g">
                                <div className="pokeLeft">
                { Pokemon.map((pokemon) => {
 

      if(pokemon.id % 3 === 0) { 
        return (
                <div className="pokebox" key={pokemon.id} id={pokemon.id} onClick={this.handleOnClick} >
                    <img src={require(`./sprites/${pokemon.id}.png`)} id={pokemon.id} className="pokeSprite" alt="img" />
                    <p id={pokemon.id}>#{pokemon.id} {pokemon.name}</p>
                </div>
            );}  else {
                return (
                <div className="pokebox pokeboxExtra" key={pokemon.id} id={pokemon.id} onClick={this.handleOnClick}>
                    <img src={require(`./sprites/${pokemon.id}.png`)} className="pokeSprite" id={pokemon.id} alt="img" />
                    <p id={pokemon.id}>#{pokemon.id} {pokemon.name}</p>
                </div>
            );
            }
}) } 
            </div>
                    <PokeRight pokeID={this.state.pokeID} />
                </div>
            </div>);
    }
}



export default TrueStats;