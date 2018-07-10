import React, { Component } from 'react';
import Facebook from './images/socialmedia/facebook.png';
import GooglePlus from './images/socialmedia/googleplus.png';
import Instagram from './images/socialmedia/instagram.png';
import Linkedin from './images/socialmedia/linkedin.png';
import Reddit from './images/socialmedia/reddit.png';
import Twitter from './images/socialmedia/twitter.png';

import './styles/socialicons.css';

class SocialIcons extends Component {
    render() {
        return (
                <ul className="socialMediaList">
                    <img src={Facebook} alt="facebook" className="facebook" />
                    <img src={GooglePlus} alt="googleplus" />
                    <img src={Instagram} alt="instagram" />
                    <img src={Linkedin} alt="linkedin" />
                    <img src={Reddit} alt="reddit" />
                    <img src={Twitter} alt="twitter" />
                </ul>
            );
    }
}

export default SocialIcons;