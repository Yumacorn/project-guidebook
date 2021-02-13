import React, {Component} from 'react'
import CharacterInput from '../components/CharacterInput'
import Characters from '../components/Characters'
import {fetchCharacters} from '../actions/fetchCharacters'
import {connect} from 'react-redux'

class CharactersContainer extends Component {
    componentDidMount() {
        console.log(`before CC fetch`)
        console.log(this.props)

        this.props.fetchCharacters()
        console.log(`after CC fetch`)
        console.log(this.props)
    }

    render() {
        return (
            <div>
                Hello CharactersContainer
                {/* <CharacterInput />
                <Characters characters={this.props.universe && this.props.universe.characters} universe={this.props.universe} parentProps={this.props}/> */}
                {/* <Characters characters={this.props.characters} />     */}
            </div>
        )
    }
}

const mapStateToProps = state => {
    debugger
    return {
        ...state,
        characters: state.characterReducer.characters
        // characters: 'chicken'
    }
}

export default connect(mapStateToProps, {fetchCharacters})(CharactersContainer)