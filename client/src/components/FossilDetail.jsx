import React, {Component} from 'react';
import axios from 'axios';

class FossilDetail extends Component {

    state = {
        fossil: {},
    }

    componentDidMount() {
        const fossilId = this.props.match.params.id;
        this.fetchFossil(fossilId)
    }

    fetchFish = async (fossilId) => {
        try {
            const fossilResponse = await axios.get(`/api/v1/fossils/${fossilId}/?format=json`)
            this.setState({
                fossil: fossilResponse.data,
            })
        } catch (error) {
            console.log(error)
            this.setState({error: error.message})
        }
    }

    render() {
        return (
            <div>
                <img src={ this.state.fossil.photo_url } alt={ this.state.fossil.name }/>
                <h1>{ this.state.fossil.name }</h1>
                <h3>{ this.state.fossil.head_piece } - { this.state.fossil.head_price } Bells</h3>
                <h3>{ this.state.fossil.mid_piece } - { this.state.fossil.mid_price } Bells</h3>
                <h3>{ this.state.fossil.tail_piece } - { this.state.fossil.tail_price } Bells</h3>
            </div>
        );
    }
}

export default FossilDetail;