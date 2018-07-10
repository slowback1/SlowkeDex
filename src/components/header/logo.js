import React, { Component } from 'react';
import Image from './images/logo.png';
import './styles/logo.css';

class Logo extends Component {
    render() {
        return (
                <img className="logoImg" src={Image} alt="logo" />
            );
    }   
}

export default Logo;