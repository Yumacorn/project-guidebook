import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchUniverses} from '../actions/fetchUniverses'
import Universes from '../components/Universes'
import UniverseInput from '../components/UniverseInput'
import {Route} from 'react-router-dom'
import Universe from '../components/Universe'

class UniverseContainer extends Component {


    componentDidMount() {
        this.props.fetchUniverses()
    }

    
    render() {
        // debugger
        return (
            <div>
                Universe Container
                <Route path='/universes/new' component={UniverseInput} />
                <Route path='/universes/:id' render={(routerProps) => <Universe {...routerProps} universes={this.props.universes} /> } />
                <Route exact path='/universes' render={(routerProps) => <Universes {...routerProps} universes={this.props.universes} /> } />
                End Universe Container
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        universes: state.universes
    }
}

export default connect(mapStateToProps, {fetchUniverses})(UniverseContainer)