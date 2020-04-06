import React, {Component} from 'react';
import axios from 'axios';

class BugDetail extends Component {

    state = {
        bug: {},
    }

    componentDidMount() {
        const bugId = this.props.match.params.id;
        this.fetchBug(bugId)
    }

    fetchBug = async (bugId) => {
        try {
            const bugResponse = await axios.get(`/api/v1/bugs/${bugId}/?format=json`)
            this.setState({
                bug: bugResponse.data,
            })
        } catch (error) {
            console.log(error)
            this.setState({error: error.message})
        }
    }

    render() {
        return (
            <div className="single-creature">
                <h1>{ this.state.bug.name }</h1>
                <h2>{ this.state.bug.family } Family</h2>
                <div className="creature-container">
                    <div className="creature-description">
                        <div className="months">
                            <h3>Months</h3>
                            <h4>Northern Hemisphere: { this.state.bug.spawn_month_north }</h4>
                            <h4>Southern Hemisphere: { this.state.bug.spawn_month_south }</h4>
                        </div>
                        <div className="time">
                            <h3>Time</h3>
                            <h4>{ this.state.bug.spawn_time }</h4>
                        </div>
                        <div className="location">
                            <h3>Location</h3>
                            <h4>{ this.state.bug.location }</h4>
                        </div>
                        <div className="movement">
                            <h3>Movement</h3>
                            <h4>{ this.state.bug.movement }</h4>
                        </div>
                        <div className="sell-price">
                            <h3>Sell Price</h3>
                            <h4>{ this.state.bug.sell_price } Bells</h4>
                        </div>
                    </div>
                    <div className="creature-image">
                        <img src={ this.state.bug.photo_url } alt={ this.state.bug.name }/>
                    </div>
                </div>
            </div>
        );
    }
}

export default BugDetail;