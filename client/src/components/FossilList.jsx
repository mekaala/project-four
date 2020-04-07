import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class FossilList extends Component {
    state = {
        showCreateForm: false,
        error: '',
        fossils: [],
        newFossil: {
            name: '',
            id: '',
            piece_one: '',
            piece_one_price: '',
            photo_url: ''
        }
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

    toggleCreateForm = () => {
        const newShowCreateForm = !this.state.showCreateForm;
        this.setState({
            showCreateForm: newShowCreateForm,
        });
    };

        changeInput = (event) => {
        const updatedNewFossil = { ...this.state.newFossil };
        updatedNewFossil[event.target.name] = event.target.value;
        this.setState({
            newFossil: updatedNewFossil,
        });
    }
    submitCreateForm = (event) => {
        event.preventDefault();
        axios.post('/api/v1/fossils', this.state.newFossil).then(() => {
            this.fetchFossils();
        })
        this.setState({
            showCreateForm: false,
        });
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
                    <div className="index-form">
                        <div><button onClick={ this.toggleCreateForm }>
                                { this.state.showCreateForm
                                    ? 'Cancel'
                                    : 'Create New Fossil'
                                }
                        </button></div>
                            { this.state.showCreateForm
                                ? <form onSubmit={ this.submitCreateForm }>
                                    <label>Name: </label><input type="text" name="name" onChange={ this.changeInput } placeholder="Fossil Name"/><br/>
                                    <label>First Piece: </label><input type="text" name="piece_one" onChange={ this.changeInput } placeholder="First Piece"/><br/>
                                    <label>First Piece Price: </label><input type="text" name="piece_one_price" onChange={ this.changeInput } placeholder="First Piece Price"/><br/>
                                    <label>Second Piece: </label><input type="text" name="piece_two" onChange={ this.changeInput } placeholder="Second Piece"/><br/>
                                    <label>Second Piece Price: </label><input type="text" name="piece_two" onChange={ this.changeInput } placeholder="Second Piece Price"/><br/>
                                    <label>Third Piece: </label><input type="text" name="piece_three" onChange={ this.changeInput } placeholder="Third Piece"/><br/>
                                    <label>Third Piece Price: </label><input type="text" name="piece_three_price" onChange={ this.changeInput } placeholder="Third Piece Price"/><br/>
                                    <label>Fourth Piece: </label><input type="text" name="piece_four" onChange={ this.changeInput } placeholder="Fourth Piece"/><br/>
                                    <label>Fourth Piece Price: </label><input type="text" name="piece_four_price" onChange={ this.changeInput } placeholder="Fourth Piece Price"/><br/>
                                    <label>Fourth Piece: </label><input type="text" name="piece_five" onChange={ this.changeInput } placeholder="Fourth Piece"/><br/>
                                    <label>Fourth Piece Price: </label><input type="text" name="piece_five_price" onChange={ this.changeInput } placeholder="Fifth Piece Price"/><br/>
                                    <label>Image: </label><input type="text" name="photo_url" onChange={ this.changeInput } placeholder="Fossil Image"/><br/>
                                    <input className="submit" type="submit" value="Create New Fossil"/>
                                </form>
                                : null
                            }
                    </div>
                </div>
            </div>
        );
    }
}

export default FossilList;