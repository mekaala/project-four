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
            <div className="fish">
                <h1>Fish Encyclopedia</h1>
                <div className="creature-list">
                    {this.state.fishes.map(fish => (
                        <div className="creature-index" key={ fish.id }>
                            <Link to={`/fish/${ fish.id }`}><img src={ fish.photo_url } alt={ fish.name }/></Link>
                            <Link to={`/fish/${ fish.id }`}>{ fish.name }</Link>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default FishList;