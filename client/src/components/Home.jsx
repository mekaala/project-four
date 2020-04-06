import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import fish from '../images/fish.png'
import bug from '../images/zoology.png'
import fossil from '../images/dinosaur.png'

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <h2>Welcome! Please Select an Encyclopedia below.</h2>
                <div className="home-container">
                    <div>
                        <Link to="/fish"><img src={fish} alt="fish"/></Link>
                        <Link to="/fish"><h2>Fish Encyclopedia</h2></Link>
                    </div>
                    <div>
                        <Link to="/bugs"><img src={bug} alt="bug"/></Link>
                        <Link to="/bugs"><h2>Bug Encyclopedia</h2></Link>
                    </div>
                    <div>
                        <Link to="/fossils"><img src={fossil} alt="fossil"/></Link>
                        <Link to="/fossils"><h2>Fossil Encyclopedia</h2></Link>
                    </div>
                </div>
            </div>
        )
    }
}
