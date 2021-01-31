import React, {Component} from 'react'

export default class UniverseInput extends Component {

    state = {
        name: '',
        type_of: ''
    }


    render(){
        return(
            <div>
                <form>
                    <label>Enter name of new universe </label>
                    <input type='text' placeholder='Name' value={this.state.name}></input><br/>
                    <label>Enter type of new universe </label>
                    <input type='text' placeholder='Type' value={this.state.type_of}></input><br/>
                </form>
            </div>
        )
    }
}