import React, {Component} from 'react'
import CharacterInput from '../components/CharacterInput'
import Characters from '../components/Characters'
import {fetchCharacters} from '../actions/fetchCharacters'
import {connect} from 'react-redux'

class CharactersContainer extends Component {
    
    componentDidMount() {
        this.props.fetchCharacters()
    }
    render() {
        // debugger
        // let x = this.props.parentProps.parentProps.history.location.pathname.split('/')[2] || ''
        let y = this.props.parentProps.history.location.pathname.split('/')[2]
        return (
            
            <div>
                <CharacterInput />
                <Characters characters={this.props.universe && this.props.universe.characters} universe={this.props.universe} parentProps={this.props}/>
                <Characters characters={this.props.characters} />
            
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        characters: state.characters,
    }
}

export default connect(mapStateToProps, {fetchCharacters})(CharactersContainer)