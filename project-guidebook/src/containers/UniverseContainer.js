import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchUniverses} from '../actions/fetchUniverses'
import Universes from '../components/Universes'
import UniverseInput from '../components/UniverseInput'
import {Route} from 'react-router-dom'
import Universe from '../components/Universe'
import {Link} from 'react-router-dom'

// import Characters from '../components/Characters'
// let isSorted = false
class UniverseContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {isSorted: false}
    }
    componentDidMount() {
        console.log(`before UC fetch`)
        console.log(this.props)
        this.props.fetchUniverses()
        console.log(`after UC fetch`)
        console.log(this.props)
    }

    sortUniverses = (event) => {
        event.preventDefault()
        this.setState({
            isSorted: !this.state.isSorted
        })
        console.log(this.state.isSorted)
    }
    
    render() {
        return (
            <div>
                <br/>
                {/* -Universe Container.js:<br/><br/> */}
                Index of current guides by Universe<br/>
                Missing a Universe guide? <Link to={`/universes/new`}>Click to add</Link><br/><br/>
                <Route exact path='/universes/new' component={UniverseInput} />
                <button name='sortButton' onClick={this.sortUniverses}>Sort Universe List {this.state.isSorted ? 'sorted!' : 'unsorted'} </button>

                {/* {isSorted
                ? <Universes isSorted={isSorted} universes={this.props.universes}/>
                : <Universes isSorted={isSorted} universes={this.props.universes}/>
                } */}
                <Universes isSorted={this.state.isSorted} universes={this.props.universes}/>
                <Route path='/universes/:id' render={(routerProps) => <Universe {...routerProps} universes={this.props.universes} /> } />
                {/* <Route exact path='/universes' render={(routerProps) => <Universes {...routerProps} universes={this.props.universes} /> } /> */}
                {/* <Characters characters={this.props.}/> */}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ...state,
        universes: state.universeReducer.universes
    }
}

export default connect(mapStateToProps, {fetchUniverses})(UniverseContainer)