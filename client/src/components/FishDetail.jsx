import React, {Component} from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

class FishDetail extends Component {

    state = {
        fish: {},
        editFish: {},
        showEditForm: false,
        redirect: false
    }

    componentDidMount() {
        const fishId = this.props.match.params.id;
        this.fetchFish(fishId)
    }

    fetchFish = async (fishId) => {
        try {
            const fishResponse = await axios.get(`/api/v1/fish/${fishId}/?format=json`)
            this.setState({fish: fishResponse.data})
        }
        catch (error) {
            console.log(error)
            this.setState({error: error.message})
        }
    }

    toggleEditForm = () => {
        const newShowEditForm = !this.state.showEditForm;
        this.setState({
            showEditForm: newShowEditForm,
        });
      };
    
    changeInput = (event) => {
        const updatedFish = { ...this.state.editFish };
        updatedFish[event.target.name] = event.target.value;
        this.setState({editFish: updatedFish});
    }
    submitUpdateForm = async (event) => {
        event.preventDefault();
        try {
            const fishId = this.props.match.params.id;
            const res = axios.put(`/api/v1/fish/${fishId}/?format=json`, this.state.editFish)
            this.setState({fish: res.data, showEditForm: false});
        }
        catch (error) {
            console.log(error)
            this.setState({error: error.message})
        }
    }

    clickDelete = async () => {
        try {
            const fishId = this.props.match.params.id;
            const res = axios.delete(`/api/v1/fish/${fishId}/?format=json`)
            this.setState({fish: res.data, redirect: true})
        }
        catch (error) {
            console.log(error)
            this.setState({error: error.message})
        }
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/fish"/>;
        }
        return (
            <div className="single-creature">
                <h1>{ this.state.fish.name }</h1>
                <div className="creature-container">
                    <div className="creature-description">
                        <div className="months">
                            <h3>Months</h3>
                            <h4>Northern Hemisphere: { this.state.fish.spawn_month_north }</h4>
                            <h4>Southern Hemisphere: { this.state.fish.spawn_month_south }</h4>
                        </div>
                        <div className="time">
                            <h3>Time</h3>
                            <h4>{ this.state.fish.spawn_time }</h4>
                        </div>
                        <div className="location">
                            <h3>Location</h3>
                            <h4>{ this.state.fish.location }</h4>
                        </div>
                        <div className="shadow-size">
                            <h3>Shadow Size</h3>
                            <h4>{ this.state.fish.shadow_size }</h4>
                        </div>
                        <div className="sell-price">
                            <h3>Sell Price</h3>
                            <h4>{ this.state.fish.sell_price }</h4>
                        </div>
                    </div>
                    <div className="creature-image">
                        <img src={ this.state.fish.photo_url } alt={ this.state.fish.name }/>
                    </div>
                </div>
                {/* <div className="edit-form">
                        <div><button onClick={ this.toggleEditForm }>
                            { this.state.showEditForm
                                ? 'Cancel'
                                : 'Update Fish'
                            }
                        </button></div>
                        { this.state.showEditForm
                            ? <form onSubmit={ this.submitUpdateForm }>
                                    <label>Name: </label><input type="text" name="name" onChange={ this.changeInput } value={ this.state.editFish.name }/><br/>
                                    <label>Northern Availablility: </label><input type="text" name="spawn_month_north" onChange={ this.changeInput } value={ this.state.editFish.spawn_month_north }/><br/>
                                    <label>Southern Availablility: </label><input type="text" name="spawn_month_south" onChange={ this.changeInput } value={ this.state.editFish.spawn_month_south }/><br/>
                                    <label>Time Active: </label><input type="text" name="spawn_time" onChange={ this.changeInput } value={ this.state.editFish.spawn_time }/><br/>
                                    <label>Location: </label><input type="text" name="location" onChange={ this.changeInput } value={ this.state.editFish.location }/><br/>
                                    <label>Shadow Size: </label><input type="text" name="shadow_size" onChange={ this.changeInput } value={ this.state.editFish.shadow_size }/><br/>
                                    <label>Sell Price: </label><input type="number" name="sell_price" onChange={ this.changeInput } value={ this.state.editFish.sell_price }/><br/>
                                    <label>Image: </label><input type="text" name="photo_url" onChange={ this.changeInput } value={ this.state.editFish.photo_url }/><br/>
                                <input className="submit" type="submit" value="Update Fish"/>
                            </form>
                            : null
                        }
                    <button onClick={ this.clickDelete }>Delete Fish</button>
                </div> */}
            </div>
        );
    }
}

export default FishDetail;