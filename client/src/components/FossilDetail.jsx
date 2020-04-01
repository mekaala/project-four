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
                <img src={ this.state.fossil.photo_url } alt=""/>
                <h1>{ this.state.fossil.name }</h1>
            </div>
        );
    }
}

export default FossilDetail;