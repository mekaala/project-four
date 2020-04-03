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
            <div>
                <img src={ this.state.bug.photo_url } alt={ this.state.bug.name }/>
                <h1>{ this.state.bug.name }</h1>
                <h2>{ this.state.bug.family } Family</h2>
                <h3>Months</h3>
                <h4>Northern Hemisphere: { this.state.bug.spawn_month_north }</h4>
                <h4>Southern Hemisphere: { this.state.bug.spawn_month_south }</h4>
                <h3>Time</h3>
                <h4>{ this.state.bug.spawn_time }</h4>
                <h3>Location</h3>
                <h4>{ this.state.bug.location }</h4>
                <h3>Movement</h3>
                <h4>{ this.state.bug.movement }</h4>
                <h3>Dangerous: { this.state.bug.dangerous }</h3>
                <h3>Sell Price</h3>
                <h4>{ this.state.bug.sell_price } Bells</h4>
            </div>
        );
    }
}

export default BugDetail;