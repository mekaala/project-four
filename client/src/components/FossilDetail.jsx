import React, {Component} from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'



class FossilDetail extends Component {

    state = {
        fossil: {},
        editFossil: {},
        showEditForm: false,
        redirect: false
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
        const updatedFossil = { ...this.state.editFossil };
        updatedFossil[event.target.name] = event.target.value;
        this.setState({
            editFossil: updatedFossil,
        });
    }
    submitUpdateForm = async (event) => {
        event.preventDefault();
        try {
            const fossilId = this.props.match.params.id;
            const res = axios.put(`/api/v1/fossils/${fossilId}/?format=json`, this.state.editFossil)
            this.setState({
                fossil: res.data,
                showEditForm: false,
            });
        }
        catch (error) {
            console.log(error)
            this.setState({error: error.message})
        }
    }

    clickDelete = async () => {
        try {
            const fossilId = this.props.match.params.id;
            const res = axios.delete(`/api/v1/fossils/${fossilId}/?format=json`)
            this.setState({
                fossil: res.data,
                redirect: true,
            })
        }
        catch (error) {
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
        if (this.state.redirect) {
            return <Redirect to="/fossils"/>;
        }
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
                <div className="edit-form">
                        <div><button onClick={ this.toggleEditForm }>
                            { this.state.showEditForm
                                ? 'Cancel'
                                : 'Update Fossil'
                            }
                        </button></div>
                        { this.state.showEditForm
                            ? <form onSubmit={ this.submitUpdateForm }>
                                    <label>Name: </label><input type="text" name="name" onChange={ this.changeInput } value={ this.state.editFossil.name }/><br/>
                                    <label>First Piece: </label><input type="text" name="piece_one" onChange={ this.changeInput } value={ this.state.editFossil.piece_one }/><br/>
                                    <label>First Piece Price: </label><input type="number" name="piece_one_price" onChange={ this.changeInput } value={ this.state.editFossil.piece_one_price }/><br/>
                                    <label>Second Piece: </label><input type="text" name="piece_two" onChange={ this.changeInput } value={ this.state.editFossil.piece_two }/><br/>
                                    <label>Second Piece Price: </label><input type="number" name="piece_two" onChange={ this.changeInput } value={ this.state.editFossil.piece_two_price }/><br/>
                                    <label>Third Piece: </label><input type="text" name="piece_three" onChange={ this.changeInput } value={ this.state.editFossil.piece_three }/><br/>
                                    <label>Third Piece Price: </label><input type="number" name="piece_three_price" onChange={ this.changeInput } value={ this.state.editFossil.piece_three_price }/><br/>
                                    <label>Fourth Piece: </label><input type="text" name="piece_four" onChange={ this.changeInput } value={ this.state.editFossil.piece_four }/><br/>
                                    <label>Fourth Piece Price: </label><input type="number" name="piece_four_price" onChange={ this.changeInput } value={ this.state.editFossil.piece_four_price }/><br/>
                                    <label>Fourth Piece: </label><input type="text" name="piece_five" onChange={ this.changeInput } value={ this.state.editFossil.piece_five }/><br/>
                                    <label>Fourth Piece Price: </label><input type="number" name="piece_five_price" onChange={ this.changeInput } value={ this.state.editFossil.piece_five_price }/><br/>
                                    <label>Image: </label><input type="text" name="photo_url" onChange={ this.changeInput } value={ this.state.editFossil.photo_url }/><br/>
                                <input className="submit" type="submit" value="Update Fossil"/>
                            </form>
                            : null
                        }
                        <button onClick={ this.clickDelete }>Delete Fossil</button>
                    </div>
            </div>
        );
    }
}

export default FossilDetail;