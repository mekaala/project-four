import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './components/Home';
import FishList from './components/FishList';
import FishDetail from './components/FishDetail';
import BugList from './components/BugList';
import BugDetail from './components/BugDetail';
import FossilList from './components/FossilList';
import FossilDetail from './components/FossilDetail';
import Footer from './components/Footer'
import owl from './images/owl.png'


import "./App.css";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <div className="background"></div>
                    <div className="title">
                        <Link to="/"><h1>Blathering</h1></Link>
                        <Link to="/"><img className="owl" src={ owl } alt="owl"/></Link>
                    </div>
                    <NavBar/>
                    <Switch>
                        <Route exact path="/" component={ Home }/>
                        <Route exact path="/fish" component={ FishList }/>
                        <Route path="/fish/:id" component={ FishDetail }/>
                        <Route exact path="/bugs" component={ BugList }/>
                        <Route path="/bugs/:id" component={ BugDetail }/>
                        <Route exact path="/fossils" component={ FossilList }/>
                        <Route path="/fossils/:id" component={ FossilDetail }/>
                    </Switch>
                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default App;