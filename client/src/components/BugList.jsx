import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Redirect } from 'react-router-dom';


axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'


class BugList extends Component {
    state = {
        showCreateForm: false,
        error: '',
        bugs: [],
        newBug: {
            name: '',
            id: '',
            spawn_month_north: '',
            spawn_month_south: '',
            spawn_time: '',
            location: '',
            movement: '',
            sell_price: '',
            photo_url: ''
        },
        redirect: false,
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
    toggleCreateForm = () => {
        const newShowCreateForm = !this.state.showCreateForm;
        this.setState({
            showCreateForm: newShowCreateForm,
        });
    };

        changeInput = (event) => {
        const updatedNewBug = { ...this.state.newBug };
        updatedNewBug[event.target.name] = event.target.value;
        this.setState({
            newBug: updatedNewBug,
        });
    }
    submitCreateForm = async (event) => {
        event.preventDefault();
        try {
            const res = await axios.post('/api/v1/bugs/?format=json', this.state.newBug)
            this.setState({
                bugs: res.data,
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
            return <Redirect to="/bugs"/>;
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
                    {/* <div className="index-form">
                        <div><button onClick={ this.toggleCreateForm }>
                                { this.state.showCreateForm
                                    ? 'Cancel'
                                    : 'Create New Bug'
                                }
                        </button></div>
                            { this.state.showCreateForm
                                ? <form onSubmit={ this.submitCreateForm }>
                                    <label>Name: </label><input type="text" name="name" onChange={ this.changeInput } placeholder="Bug Name"/><br/>
                                    <label>Northern Availablility: </label><input type="text" name="spawn_month_north" onChange={ this.changeInput } placeholder="Northern Hemisphere Availability"/><br/>
                                    <label>Southern Availablility: </label><input type="text" name="spawn_month_south" onChange={ this.changeInput } placeholder="Southern Hemisphere Availability"/><br/>
                                    <label>Time Active: </label><input type="text" name="spawn_time" onChange={ this.changeInput } placeholder="Time Availability"/><br/>
                                    <label>Location: </label><input type="text" name="location" onChange={ this.changeInput } placeholder="Location"/><br/>
                                    <label>Movement: </label><input type="text" name="movement" onChange={ this.changeInput } placeholder="Movement"/><br/>
                                    <label>Sell Price: </label><input type="text" name="sell_price" onChange={ this.changeInput } placeholder="Sell Price"/><br/>
                                    <label>Image: </label><input type="text" name="photo_url" onChange={ this.changeInput } placeholder="Bug Image"/><br/>
                                    <input className="submit" type="submit" value="Create New Bug"/>
                                </form>
                                : null
                            }
                    </div> */}
                </div>
            </div>
        );
    }
}

export default BugList;