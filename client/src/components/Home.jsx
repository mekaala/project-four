import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="home-container">
                    <div>
                        <Link to="/fish">Fish Encyclopedia</Link>
                    </div>
                    <div>
                        <Link to="/bugs">Bug Encyclopedia</Link>
                    </div>
                    <div>
                        <Link to="/fossils">Fossil Encyclopedia</Link>
                    </div>
                </div>
            </div>
        )
    }
}
