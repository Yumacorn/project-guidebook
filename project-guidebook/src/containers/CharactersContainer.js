import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchCharacters} from '../actions/fetchCharacters'
import Characters from '../components/Characters'
// import CharacterInput from '../components/CharacterInput'
import {Route} from 'react-router-dom'
import Character from '../components/Character'
import {matchPath} from 'react-router'

// const match = matchPath(this.props.history.location.pathname)

// let matchParam = match.params.param

class CharactersContainer extends Component {

    componentDidMount() {
        console.log(`before CC fetch`)
        console.log(this.props)
        this.props.fetchCharacters()
        console.log(`after CC fetch`)
        console.log(this.props)
    }

    


    render() {
        debugger
        // const {universeUrl} = this.props.match.url

        return (
            <div style={{ textAlign: 'center', fontSize: '16px' }}>
                Hello CharactersContainer<br/><br/>
                {/* <CharacterInput />
                <Characters characters={this.props.universe && this.props.universe.characters} universe={this.props.universe} parentProps={this.props}/> */}
                <Characters characters={this.props.characters} />    
                <Route path='/universes/1/characters/3' render={(routerProps) => <Character {...routerProps} characters={this.props.characters} /> } />
                <Route exact path={`universes/${universeId}/characters/:characterId`} render={(routerProps) => <Character {...routerProps} characters={this.props.characters} /> } />
                {/* <Route path={`${this.props.match.url}/characters/2`} component={Characters} /> */}

            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    // debugger
    return {
        ...state,
        characters: state.characterReducer.characters,
        universeId: ownProps.match.params.universeId
    }
}

export default connect(mapStateToProps, {fetchCharacters})(CharactersContainer)