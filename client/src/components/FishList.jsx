import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Redirect } from 'react-router-dom';


axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'


class FishList extends Component {
    state = {
        showCreateForm: false,
        error: '',
        fishes: [],
        newFish: {
            name: '',
            id: '',
            spawn_month_north: '',
            spawn_month_south: '',
            spawn_time: '',
            location: '',
            shadow_size: '',
            sell_price: '',
            photo_url: ''
        },
        redirect: false,
    }

    componentDidMount(){
        this.fetchFishes();
    }

    fetchFishes = async () => {
        try {
            const res = await axios.get('/api/v1/fish/?format=json');
            this.setState({fishes: res.data});
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
        const updatedNewFish = { ...this.state.newFish };
        updatedNewFish[event.target.name] = event.target.value;
        this.setState({
            newFish: updatedNewFish,
        });
    }
    submitCreateForm = async (event) => {
        event.preventDefault();
        try {
            const res = await axios.post('/api/v1/fish/?format=json', this.state.newFish)
            this.setState({
                fishes: res.data,
                showCreateForm: false,
                redirect: true,
            });
        }
        catch (err) {
            console.log(err)
            this.setState({error: err.message})
        }
    }

    render() {
        if (this.state.error) {
            return <div>{this.state.error}</div>
        }
        if (this.state.redirect) {
            return <Redirect to="/fossils"/>;
        }
        return (
            <div className="fish">
                <h1>Fish Encyclopedia</h1>
                <div className="creature-list">
                    {this.state.fishes.map(fish => (
                        <div className="creature-index" key={ fish.id }>
                            <Link to={`/fish/${ fish.id }`}><img src={ fish.photo_url } alt={ fish.name }/></Link>
                            <Link to={`/fish/${ fish.id }`}>{ fish.name }</Link>
                        </div>
                    ))}
                    <div className="index-form">
                        <div><button onClick={ this.toggleCreateForm }>
                                { this.state.showCreateForm
                                    ? 'Cancel'
                                    : 'Create New Fish'
                                }
                        </button></div>
                            { this.state.showCreateForm
                                ? <form onSubmit={ this.submitCreateForm }>
                                    <label>Name: </label><input type="text" name="name" onChange={ this.changeInput } placeholder="Fish Name"/><br/>
                                    <label>Northern Availablility: </label><input type="text" name="spawn_month_north" onChange={ this.changeInput } placeholder="Northern Hemisphere Availability"/><br/>
                                    <label>Southern Availablility: </label><input type="text" name="spawn_month_south" onChange={ this.changeInput } placeholder="Southern Hemisphere Availability"/><br/>
                                    <label>Time Active: </label><input type="text" name="spawn_time" onChange={ this.changeInput } placeholder="Time Availability"/><br/>
                                    <label>Location: </label><input type="text" name="location" onChange={ this.changeInput } placeholder="Location"/><br/>
                                    <label>Shadow Size: </label><input type="text" name="shadow_size" onChange={ this.changeInput } placeholder="Shadow Size"/><br/>
                                    <label>Sell Price: </label><input type="text" name="sell_price" onChange={ this.changeInput } placeholder="Sell Price"/><br/>
                                    <label>Image: </label><input type="text" name="photo_url" onChange={ this.changeInput } placeholder="Fish Image"/><br/>
                                    <input className="submit" type="submit" value="Create New Fish"/>
                                </form>
                                : null
                            }
                    </div>
                </div>
            </div>
        );
    }
}

export default FishList;