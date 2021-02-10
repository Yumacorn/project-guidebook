import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchUniverses} from '../actions/fetchUniverses'
import Universes from '../components/Universes'
// import UniverseInput from '../components/UniverseInput'
// import {Route} from 'react-router-dom'
// import Universe from '../components/Universe'
// import Characters from '../components/Characters'

class UniverseContainer extends Component {


    componentDidMount() {
        this.props.fetchUniverses()
    }

    
    render() {
        return (
            <div>
                -Universe Container.js:<br/><br/>
                {/* <Route path='/universes/new' component={UniverseInput} /> */}
                <Universes universes={this.props.universes}/>
                {/* <Route path='/universes/:id' render={(routerProps) => <Universe {...routerProps} universes={this.props.universes} /> } /> */}
                {/* <Route exact path='/universes' render={(routerProps) => <Universes {...routerProps} universes={this.props.universes} /> } /> */}
                {/* <Characters characters={this.props.}/> */}
                -Universe Container.js: End Universe Container
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        universes: state.universes,     //array[of objects]
        characters: state              //object[universes: array]
        // first_uni: state.universes[0],  //0 index of the array of objects
        // first_uni_att: state.universes[0].attributes, //attributes key of the 0 index of the array of objects
        // first_uni_att_char: state.universes[0].attributes.characters,
        // first_uni_att_character: state.universes[0].attributes.characters[0],
        // first_uni_att_character_name: state.universes[0].attributes.characters[0].name


    }
}

export default connect(mapStateToProps, {fetchUniverses})(UniverseContainer)