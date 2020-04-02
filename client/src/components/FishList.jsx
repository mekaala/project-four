import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class FishList extends Component {
    state = {
        error: '',
        fishes: []
    }

    componentDidMount(){
        this.fetchFishes();
    }

    fetchFishes = async () => {
        try {
            const res = await axios.get('/api/v1/fish/?format=json');
            this.setState({fishes: res.data});
        }
        catch (err) {
            console.log(err)
            this.setState({error: err.message})
        }
    }

    render() {
        if (this.state.error){
            return <div>{this.state.error}</div>
        }
        return (
            <div>
                <h1>Fish Encyclopedia</h1>
                {this.state.fishes.map(fish => (
                    <div key={fish.id}>
                        <Link to={`/fish/${fish.id}`}>{fish.name}</Link>
                    </div>
                ))}
            </div>
        );
    }
}

export default FishList;