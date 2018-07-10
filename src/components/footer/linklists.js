import React, { Component } from 'react';
import './styles/linklists.css';

class LinkLists extends Component {
    render() {
        return (
                <div className="linkLists">
                    <div className="linkLists_left">
                        <div className="linkLists_top">
                            <h2 className="linkLists_title"> DOCS </h2>
                            <ul className="linkLists_list">
                                <li>Installation</li>
                                <li>Main Concepts</li>
                                <li>Advanced Guides</li>
                                <li>API Reference</li>
                                <li>Contributing</li>
                                <li>FAQ</li>
                            </ul>
                        </div>
                        <div className="linkLists_bottom">
                            <h2 className="linkists_title">Community</h2>
                            <ul className="linkLists_list">
                                <li>Community Resources</li>
                                <li>Tools</li>
                            </ul>
                        </div>
                    </div>
                    <div className="linkLists_right">
                        <div className="linkLists_top">
                            <h2 className="linkLists_title">Channels</h2>
                            <ul className="linkLists_list">
                                <li>GitHub</li>
                                <li>Stack Overflow</li>
                                <li>Discussion Forum</li>
                                <li>Reactiflux</li>
                                <li>Facebook</li>
                                <li>Twitter</li>
                            </ul>
                        </div>
                        <div className="linkLists_bottom">
                            <h2 className="linkLists_title">More</h2>
                            <ul className="linkLists_list">
                                <li>Tutorial</li>
                                <li>Blog</li>
                                <li>Acknowledgements</li>
                                <li>Native</li>
                            </ul>
                        </div>
                    </div>
                </div>
            );
    }
}

export default LinkLists;