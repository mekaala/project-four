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

    fetchFossil = async (fossilId) => {
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

    hideMiddle() {
        const middle = document.getElementsByClassName("middle");
        if (this.state.fossil.mid_piece != null) {
            return middle;
        } else if (this.state.fossil.mid_piece = null) {
            return middle.style.display ='none';
        }
    }

    hideTail() {
        const tail = document.getElementsByClassName("tail");
        if (this.state.fossil.tail_piece != null) {
            return tail;
        } else if (this.state.fossil.tail_piece = null) {
            return tail.style.display ='none';
        }
    }

    render() {
        return (
            <div>
                <img src={ this.state.fossil.photo_url } alt={ this.state.fossil.name }/>
                <h1>{ this.state.fossil.name }</h1>
                <h3>{ this.state.fossil.head_piece } - { this.state.fossil.head_price } Bells</h3>
                <div className="middle">
                    { this.hideMiddle()
                        ? <h3>{ this.state.fossil.mid_piece } - { this.state.fossil.mid_price } Bells</h3>
                        : null
                    }
                </div>
                <div className="tail">
                    { this.hideTail()
                        ? <h3>{ this.state.fossil.tail_piece } - { this.state.fossil.tail_price } Bells</h3>
                        : null
                    }
                </div>
            </div>
        );
    }
}

export default FossilDetail;