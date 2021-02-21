// import React, {Component}from 'react'
import React from 'react'
// import Character from './Character'
import {Link} from 'react-router-dom'
import {fetchCharacters} from '../actions/fetchCharacters'
import {connect} from 'react-redux'

const Characters = (props) => {
    console.log(props.characters)
        if (!props.characters) {
            return (<div>aww Characters Hell no</div>)
        }
        return(
            <div >
                --Characters.js: Woww<br/>
                Learn more about Characters by clicking here<br/><br/>
                {/* , value of 'props.match.url': {props.match.url} nothing showed? */}
                {/* Learn here, value of 'props.match.path': {props.match.path} nothing showed?<br/> */}

                <div className="header">Our character list</div>

                {props.characters.map(character =>
                            <li key={character.id}>
                                <Link to={`${props.currentUrl}/characters/${character.id}`}>{character.attributes.name}</Link><br/>
                            </li> 
                )}
            </div>
        )
}

const mapStateToProps = (state) => {
    return {
        ...state,
        characters: state.characterReducer.characters,
    }
}

export default connect(mapStateToProps, {fetchCharacters})(Characters)