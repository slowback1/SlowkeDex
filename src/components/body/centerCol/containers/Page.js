import React, { Component } from 'react';
import PokemonDB from '../pokemon/Pokemon.js';
import Search from '../components/Search';
import Pokemon from '../components/Pokemon';

class Page extends Component {
    handleSearch(event) {
        this.props.pageActions.filterPokemons(event.target.value);
    }
    render() {
        let { displayedPokemons } = PokemonDB;
        let pokemons = displayedPokemons.map(pokemon => {
            return (
                    <li className="pokemons_item">
                        <Pokemon pokemon={pokemon} />
                    </li>
                )
        });
        return (
                <div className="page">
                    <Search onChange={this.handleSearch.bind(this)} />
                    <ul className="pokemons">{pokemons}</ul>
                </div>
            )
        
    }
}

export default Page;