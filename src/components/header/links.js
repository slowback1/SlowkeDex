import React, { Component } from 'react';
import './styles/links.css';
class Links extends Component {
    render() {
        return (
                <ul className="links">
                    <li> Docs </li>
                    <li> Tutorial </li>
                    <li> Community </li>
                    <li> Blog </li>
                </ul>
            )
    }
}

export default Links;