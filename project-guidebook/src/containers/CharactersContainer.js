import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchCharacters} from '../actions/fetchCharacters'
import Characters from '../components/Characters'
// import CharacterInput from '../components/CharacterInput'
import {Route} from 'react-router-dom'
import Character from '../components/Character'


class CharactersContainer extends Component {

    componentDidMount() {
        console.log(`before CC fetch`)
        console.log(this.props)
        this.props.fetchCharacters()
        console.log(`after CC fetch`)
        console.log(this.props)
    }

    render() {
        // debugger
        return (
            <div style={{ textAlign: 'center', fontSize: '16px' }}>
                Hello CharactersContainer<br/><br/>
                {/* <CharacterInput />
                <Characters characters={this.props.universe && this.props.universe.characters} universe={this.props.universe} parentProps={this.props}/> */}
                <Characters characters={this.props.characters} />    
                <Route path='/universes/1/characters/:id' render={(routerProps) => <Character {...routerProps} characters={this.props.characters} /> } />
            </div>
        )
    }
}

const mapStateToProps = state => {
    // debugger
    return {
        ...state,
        characters: state.characterReducer.characters
    }
}

export default connect(mapStateToProps, {fetchCharacters})(CharactersContainer)