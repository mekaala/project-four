/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react'
import profile from '../images/MekaalAhmadProfile.jpg'

export default class About extends Component {
    state = {
        showBlathering: false,
        showAbout: false
    }


    toggleBlathering = () => {
        const newShowBlathering = !this.state.showBlathering;
        this.setState({
            showBlathering: newShowBlathering,
        });
    };

    toggleAbout = () => {
        const newShowAbout = !this.state.showAbout;
        this.setState({
            showAbout: newShowAbout,
        });
    };
    render() {
        return (
            <div className="footer">
                <button onClick={ this.toggleBlathering }>
                    { this.state.showBlathering
                        ? 'Collapse'
                        : 'About Blathering'
                    }
                </button>
                { this.state.showBlathering
                    ?
                    <div className="about">
                    <h1>ABOUT BLATHERING</h1>
                        <div className="mindify-container">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, eius eveniet error rerum iure adipisci quisquam ab quae quo corrupti recusandae illo modi! Aut est voluptates voluptatem in eligendi debitis?</p>
                        </div>
                    </div>
                    : null
                }<br/>
                <button onClick={ this.toggleAbout }>
                    { this.state.showAbout
                        ? 'Collapse'
                        : 'About Me'
                    }
                </button>
                { this.state.showAbout
                    ?
                    <div className="about">
                    <h1>ABOUT ME</h1>
                        <div className="about-container">
                            <img src={profile} alt='profile'/>
                            <div className="about-description">
                                <h2>Mekaal Ahmad</h2>
                                <p>I am currently attending General Assembly as a student of the Software Engineering Immersive program. With this program, I hope to develop an advanced set of skills to benefit others. I hope to master website creation, and craft many successful projects.<br/>
                                Outside of General Assembly, I am a massive Nintendo fan who loves all their games, and a photographer who focuses on capturing the night sky, landscapes, and nature. I hope that with this application, I can display my capabilities in Software Engineering.</p>
                            </div>
                        </div>
                    </div>
                    : null
                }
                <div className="bottom">
                    <a href="https://reactjs.org/" target="_blank">Made with React.js</a>
                    <nav className="footernav">
                        <a href="https://www.linkedin.com/in/mekaal-ahmad-b7339191/" target="_blank">Linkedin</a> | <a href="https://github.com/mekaala" target="_blank">GitHub</a> | <a href="https://www.instagram.com/mekastro/?hl=en" target="_blank">Instagram</a>
                    </nav>
                </div>
            </div>
        )
    }
}