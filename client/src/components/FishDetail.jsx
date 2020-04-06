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
            <div className="single-creature">
                <h1>{ this.state.fish.name }</h1>
                <div className="creature-container">
                    <div className="creature-description">
                        <div className="months">
                            <h3>Months</h3>
                            <h4>Northern Hemisphere: { this.state.fish.spawn_month_north }</h4>
                            <h4>Southern Hemisphere: { this.state.fish.spawn_month_south }</h4>
                        </div>
                        <div className="time">
                            <h3>Time</h3>
                            <h4>{ this.state.fish.spawn_time }</h4>
                        </div>
                        <div className="location">
                            <h3>Location</h3>
                            <h4>{ this.state.fish.location }</h4>
                        </div>
                        <div className="shadow-size">
                            <h3>Shadow Size</h3>
                            <h4>{ this.state.fish.shadow_size }</h4>
                        </div>
                        <div className="sell-price">
                            <h3>Sell Price</h3>
                            <h4>{ this.state.fish.sell_price }</h4>
                        </div>
                    </div>
                    <div className="creature-image">
                        <img src={ this.state.fish.photo_url } alt={ this.state.fish.name }/>
                    </div>
                </div>
            </div>
        );
    }
}

export default FishDetail;