import React, { Component } from 'react';

import FImage from './images/logo.png';
import './styles/logo.css';

class FLogo extends { Component } {
    render() {
        return(<img className="footerLogo" src={FImage} alt="footer image" />);
    }
}

export default FLogo;