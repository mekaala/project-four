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
                <img src={ this.state.bug.photo_url } alt=""/>
                <h1>{ this.state.bug.name }</h1>
            </div>
        );
    }
}

export default BugDetail;