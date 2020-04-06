import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class BugList extends Component {
    state = {
        error: '',
        bugs: []
    }

    componentDidMount(){
        this.fetchBugs();
    }

    fetchBugs = async () => {
        try {
            const res = await axios.get('/api/v1/bugs/?format=json');
            this.setState({bugs: res.data});
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
            <div className="bugs">
                <h1>Bug Encyclopedia</h1>
                <div className="creature-list">
                    {this.state.bugs.map(bug => (
                        <div className="creature-index" key={ bug.id }>
                             <Link to={`/bugs/${ bug.id }`}><img src={ bug.photo_url } alt={ bug.name }/></Link>
                            <Link to={`/bugs/${ bug.id }`} >{ bug.name }</Link>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default BugList;