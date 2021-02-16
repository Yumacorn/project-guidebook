import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchCharacters} from '../actions/fetchCharacters'
import Characters from '../components/Characters'
// import CharacterInput from '../components/CharacterInput'
import {Route, Link} from 'react-router-dom'
import Character from '../components/Character'
// import {matchPath} from 'react-router'

class CharactersContainer extends Component {

    componentDidMount() {
        console.log(`before CC fetch`)
        console.log(this.props)
        this.props.fetchCharacters()
        console.log(`after CC fetch`)
        console.log(this.props)
    }

    render() {
        console.log(this.props.characters)

        return (
            <div style={{ textAlign: 'center', fontSize: '16px' }}>
                <Link to={`${this.props.match.url}/characters`}>Display Characters</Link><br/>
                <Route path={`${this.props.match.url}/characters`} render={(routerProps) => <Characters {...routerProps} currentUrl={this.props.match.url} characters={this.props.characters}/> } />
                <Route path={`${this.props.match.url}/characters/:characterId`} render={(routerProps) => <Character {...routerProps} currentUrl={this.props.match.url} characters={this.props.characters} /> } />
                Here console log: {this.props.match.url}<br/>
                {/* <CharacterInput />
                <Characters characters={this.props.universe && this.props.universe.characters} universe={this.props.universe} parentProps={this.props}/> */}
                {/* <Characters characters={this.props.characters} />     */}
                {/* <Route path='/universes/1/characters/3' render={(routerProps) => <Character {...routerProps} characters={this.props.characters} /> } /> */}
                {/* <Route exact path={`universes/${this.props.match.params.universeId}/characters/:characterId`} render={(routerProps) => <Character {...routerProps} characters={this.props.characters} /> } /> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // debugger
    return {
        ...state,
        characters: state.characterReducer.characters,
    }
}

export default connect(mapStateToProps, {fetchCharacters})(CharactersContainer)