import React, { Component } from 'react';
import CenterCol from './body/centerCol';
import LeftCol from './body/leftCol';
import RightCol from './body/rightCol';
//import './body/styles/body.css';

class Body extends Component {
    render() {
        return (
                <div className="body">
                    <LeftCol />
                    <CenterCol />
                    <RightCol />
                </div>
            )
    }
}

export default Body;