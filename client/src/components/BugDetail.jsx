import React, {Component} from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'



class BugDetail extends Component {

    state = {
        bug: {},
        editBug: {},
        showEditForm: false,
        redirect: false
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
        const updatedBug = { ...this.state.editBug };
        updatedBug[event.target.name] = event.target.value;
        this.setState({
            editBug: updatedBug,
        });
    }
    submitUpdateForm = async (event) => {
        event.preventDefault();
        try {
            const bugId = this.props.match.params.id;
            const res = axios.put(`/api/v1/bugs/${bugId}/?format=json`, this.state.editBug)
            this.setState({bug: res.data, showEditForm: false});
        }
        catch (error) {
            console.log(error)
            this.setState({error: error.message})
        }
    }

    clickDelete = async () => {
        try {
            const bugId = this.props.match.params.id;
            const res = axios.delete(`/api/v1/bugs/${bugId}/?format=json`)
            this.setState({bug: res.data, redirect: true})
        }
        catch (error) {
            console.log(error)
            this.setState({error: error.message})
        }
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/bugs"/>;
        }
        return (
            <div className="single-creature">
                <h1>{ this.state.bug.name }</h1>
                <h2>{ this.state.bug.family } Family</h2>
                <div className="creature-container">
                    <div className="creature-description">
                        <div className="months">
                            <h3>Months</h3>
                            <h4>Northern Hemisphere: { this.state.bug.spawn_month_north }</h4>
                            <h4>Southern Hemisphere: { this.state.bug.spawn_month_south }</h4>
                        </div>
                        <div className="time">
                            <h3>Time</h3>
                            <h4>{ this.state.bug.spawn_time }</h4>
                        </div>
                        <div className="location">
                            <h3>Location</h3>
                            <h4>{ this.state.bug.location }</h4>
                        </div>
                        <div className="movement">
                            <h3>Movement</h3>
                            <h4>{ this.state.bug.movement }</h4>
                        </div>
                        <div className="sell-price">
                            <h3>Sell Price</h3>
                            <h4>{ this.state.bug.sell_price } Bells</h4>
                        </div>
                    </div>
                    <div className="creature-image">
                        <img src={ this.state.bug.photo_url } alt={ this.state.bug.name }/>
                    </div>
                </div>
                <div className="edit-form">
                        <div><button onClick={ this.toggleEditForm }>
                            { this.state.showEditForm
                                ? 'Cancel'
                                : 'Update Bug'
                            }
                        </button></div>
                        { this.state.showEditForm
                            ? <form onSubmit={ this.submitUpdateForm }>
                                    <label>Name: </label><input type="text" name="name" onChange={ this.changeInput } value={ this.state.editBug.name }/><br/>
                                    <label>Northern Availablility: </label><input type="text" name="spawn_month_north" onChange={ this.changeInput } value={ this.state.editBug.spawn_month_north }/><br/>
                                    <label>Southern Availablility: </label><input type="text" name="spawn_month_south" onChange={ this.changeInput } value={ this.state.editBug.spawn_month_south }/><br/>
                                    <label>Time Active: </label><input type="text" name="spawn_time" onChange={ this.changeInput } value={ this.state.editBug.spawn_time }/><br/>
                                    <label>Location: </label><input type="text" name="location" onChange={ this.changeInput } value={ this.state.editBug.location }/><br/>
                                    <label>Movement: </label><input type="text" name="movement" onChange={ this.changeInput } value={ this.state.editBug.movement }/><br/>
                                    <label>Sell Price: </label><input type="text" name="sell_price" onChange={ this.changeInput } value={ this.state.editBug.sell_price }/><br/>
                                    <label>Image: </label><input type="text" name="photo_url" onChange={ this.changeInput } value={ this.state.editBug.photo_url }/><br/>
                                <input className="submit" type="submit" value="Update Bug"/>
                            </form>
                            : null
                        }
                        <button onClick={ this.clickDelete }>Delete Bug</button>
                    </div>
            </div>
        );
    }
}

export default BugDetail;