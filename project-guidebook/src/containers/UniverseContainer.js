import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchUniverses} from '../actions/fetchUniverses'
import Universes from '../components/Universes'
import UniverseInput from '../components/UniverseInput'

class UniverseContainer extends Component {


    componentDidMount() {
        this.props.fetchUniverses()
    }
    render() {
        return (
            <div>
                <Universes universes={this.props.universes} />
                <UniverseInput />
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