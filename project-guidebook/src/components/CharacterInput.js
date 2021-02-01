import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addCharacter} from '../actions/addCharacter'


class CharacterInput extends Component {

    state = {
        name: '',
        type_of: '',
        universe_id: '',
        description: ''
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addCharacter(this.state)
        this.setState({
            name: '',
            type_of: '',
            universe_id: '',
            description: ''
        })
    }
    render(){
        return(
            <div>
                <h2>New Character Input:</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Name:</label>
                    <input type='text' placeholder='Enter new name' value={this.state.name} name="name" onChange={this.handleChange}></input><br/>
                    <label>Type of:</label>
                    <input type='text' placeholder='Enter new type' value={this.state.type_of} name="type_of" onChange={this.handleChange}></input><br/>
                    <label>Universe_id:</label>
                    <input type='text' placeholder='Which Universe?' value={this.state.universe_id} name="universe_id" onChange={this.handleChange}></input><br/>
                    <label>Description of:</label>
                    <input type='text' placeholder='Enter description' value={this.state.description} name="description" onChange={this.handleChange}></input><br/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default connect(null, {addCharacter})(CharacterInput)