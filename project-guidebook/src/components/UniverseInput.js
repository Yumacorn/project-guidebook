import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addUniverse} from '../actions/addUniverse'


class UniverseInput extends Component {

    state = {
        name: '',
        type_of: ''
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addUniverse(this.state)
        this.setState({
            name: '',
            type_of: ''
        })
    }
    render(){
        return(
            <div>
                <h2>New Universe Input:</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Name:</label>
                    <input type='text' placeholder='Enter new name' value={this.state.name} name="name" onChange={this.handleChange}></input><br/>
                    <label>Type of:</label>
                    <input type='text' placeholder='Enter new type' value={this.state.type_of} name="type_of" onChange={this.handleChange}></input><br/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default connect(null, {addUniverse})(UniverseInput)