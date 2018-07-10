import React, { Component } from 'react';
import FImage from './footer/images/logo.png';
import LinkLists from './footer/linklists';
import SocialIcons from './footer/socialicons';

import './footer/styles/footer.css';

class Footer extends Component {
    render() {
        return (
                <div className="footer">
                    <div className="footerLeft">
                        <img src={FImage} alt="footerImg" className="footerImg" />
                        <SocialIcons />
                    </div>
                    <div className="notLeft">
                        <LinkLists />
                    </div>
                </div>
            );
    }
}

export default Footer;