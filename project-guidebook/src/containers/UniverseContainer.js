import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchUniverses} from '../actions/fetchUniverses'
import Universes from '../components/Universes'
import UniverseInput from '../components/UniverseInput'
import {Route} from 'react-router-dom'
import Universe from '../components/Universe'
// import Characters from '../components/Characters'

class UniverseContainer extends Component {


    componentDidMount() {
        console.log(`before UC fetch`)
        console.log(this.props)
        this.props.fetchUniverses()
        console.log(`after UC fetch`)
        console.log(this.props)
    }

    
    render() {
        debugger
        return (
            <div>
                -Universe Container.js:<br/><br/>
                <Route path='/universes/new' component={UniverseInput} />
                <Universes universes={this.props.universes}/>
                <Route path='/universes/:id' render={(routerProps) => <Universe {...routerProps} universes={this.props.universes} /> } />
                {/* <Route exact path='/universes' render={(routerProps) => <Universes {...routerProps} universes={this.props.universes} /> } /> */}
                {/* <Characters characters={this.props.}/> */}
                -Universe Container.js: End Universe Container
            </div>
        )
    }
}

const mapStateToProps = state => {
    debugger
    return {
        ...state,
        universes: state.universeReducer.universes,
    }
}

export default connect(mapStateToProps, {fetchUniverses})(UniverseContainer)