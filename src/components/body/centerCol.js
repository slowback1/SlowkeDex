import React, { Component } from 'react';
import PokeIndex from './centerCol/PokeIndex';
//import './centerCol/styles/centerCol.css';

class CenterCol extends Component {
    render() {
        return(<div className="centerCol"><PokeIndex /></div>);
    }
}

export default CenterCol;