import React, {Component} from 'react';
import axios from 'axios';

class FishDetail extends Component {

    state = {
        fish: {},
    }

    componentDidMount() {
        const fishId = this.props.match.params.id;
        this.fetchFish(fishId)
    }

    fetchFish = async (fishId) => {
        try {
            const fishResponse = await axios.get(`/api/v1/fish/${fishId}/?format=json`)
            this.setState({
                fish: fishResponse.data,
            })
        } catch (error) {
            console.log(error)
            this.setState({error: error.message})
        }
    }

    render() {
        return (
            <div>
                <img src={ this.state.fish.photo_url } alt=""/>
                <h1>{ this.state.fish.name }</h1>
            </div>
        );
    }
}

export default FishDetail;