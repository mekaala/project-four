import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class FossilList extends Component {
    state = {
        error: '',
        fossils: []
    }

    componentDidMount(){
        this.fetchFossils();
    }

    fetchFossils = async () => {
        try {
            const res = await axios.get('/api/v1/fossils/?format=json');
            this.setState({fossils: res.data});
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
            <div className="fossils">
                <h1>Fossil Encyclopedia</h1>
                <div className="creature-list">
                    {this.state.fossils.map(fossil => (
                        <div className="creature-index" key={fossil.id}>
                            <Link to={`/fossils/${ fossil.id }`}><img src={ fossil.photo_url } alt={ fossil.name }/></Link>
                            <Link to={`/fossils/${ fossil.id }`} >{ fossil.name }</Link>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default FossilList;