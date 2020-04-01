import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar">
                    <Link to="/fish">Fish</Link>
                    <Link to="/bugs">Bugs</Link>
                    <Link to="/fossils">Fossils</Link>
                </nav>
            </div>
        )
    }
}