import React, { Component } from 'react';
import './header/styles/header.css';
import Logo from './header/logo';
import Links from './header/links';

class Header extends Component {
    render() {
        return (
                <div className="header">
                    <Logo />
                    <div className="emptySpace" />
                    <div className="emptySpace" />
                    <div className="emptySpace" />
                    <Links />
                </div> 
            )
    }
}

export default Header;