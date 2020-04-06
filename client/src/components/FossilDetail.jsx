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

    hideSecond() {
        const second = document.getElementsByClassName("second");
        if (this.state.fossil.piece_two != null) {
            return second;
        } else if (this.state.fossil.piece_two = null) {
            return second.style.display ='none';
        }
    }

    hideThird() {
        const third = document.getElementsByClassName("third");
        if (this.state.fossil.piece_three != null) {
            return third;
        } else if (this.state.fossil.piece_three = null) {
            return third.style.display ='none';
        }
    }

    hideFourth() {
        const fourth = document.getElementsByClassName("fourth");
        if (this.state.fossil.piece_four != null) {
            return fourth;
        } else if (this.state.fossil.piece_four = null) {
            return fourth.style.display ='none';
        }
    }

    hideFifth() {
        const fifth = document.getElementsByClassName("fifth");
        if (this.state.fossil.piece_five != null) {
            return fifth;
        } else if (this.state.fossil.piece_five = null) {
            return fifth.style.display ='none';
        }
    }

    render() {
        return (
            <div className="single-creature">
                <h1>{ this.state.fossil.name }</h1>
                <div className="creature-container">
                    <div className="fossil-description">
                        <h3>{ this.state.fossil.piece_one } - { this.state.fossil.piece_one_price } Bells</h3>
                        <div className="second">
                            { this.hideSecond()
                                ? <h3>{ this.state.fossil.piece_two } - { this.state.fossil.piece_two_price } Bells</h3>
                                : null
                            }
                        </div>
                        <div className="third">
                            { this.hideThird()
                                ? <h3>{ this.state.fossil.piece_three } - { this.state.fossil.piece_three_price } Bells</h3>
                                : null
                            }
                        </div>
                        <div className="fourth">
                            { this.hideFourth()
                                ? <h3>{ this.state.fossil.piece_four } - { this.state.fossil.piece_four_price } Bells</h3>
                                : null
                            }
                        </div>
                        <div className="fifth">
                            { this.hideFifth()
                                ? <h3>{ this.state.fossil.piece_five } - { this.state.fossil.piece_five_price } Bells</h3>
                                : null
                            }
                        </div>
                    </div>
                    <div className="creature-image">
                        <img src={ this.state.fossil.photo_url } alt={ this.state.fossil.name }/>
                    </div>
                </div>
            </div>
        );
    }
}

export default FossilDetail;