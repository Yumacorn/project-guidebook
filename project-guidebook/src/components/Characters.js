import React, {Component}from 'react'
import Character from './Character'

// const Characters = (props) => {
        // debugger

class Characters extends Component {
        componentDidMount() {
            console.log(`Characters.js: ---------`)
        }

        render() {
            // debugger
            return(
                <div>
                    {/* {props.characters && props.characters.map(character =>
                        <li key={character.id}>{character.name} - {character.type_of} - {character.description}</li>
                    )} */}
                    --Characters.js
                    {/* props? THEM: ${this.props.universe} */}
                    <Character name='Ryan' />
                    <Character name='Adela' />
                    {this.props.characters.map(character =>
                        <Character name={character}/>
                    )}
                </div>
        )}
}

export default Characters