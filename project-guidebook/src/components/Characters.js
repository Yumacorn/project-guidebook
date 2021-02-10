import React, {Component}from 'react'
import Character from './Character'

// const Characters = (props) => {
        // debugger

class Characters extends Component {
        componentDidMount() {
            console.log(`Characters.js - Mounting`)
            console.log(`Characters.js: ---------`)
            // console.log(`props? THEM: ${props}`)
            // console.log(`SHOW THEM: ${props.characters}`)
        }

        render() {
            return(
                <div>
                    {/* {props.characters && props.characters.map(character =>
                        <li key={character.id}>{character.name} - {character.type_of} - {character.description}</li>
                    )} */}
                    --Characters.js
                    {/* props? THEM: ${props.characters} */}
                    <Character name='Ryan' />
                    <Character name='Adela' />
                    {this.props.characters.map(character =>
                        <Character name={character}/>
                    )}
                </div>
        )}
}

export default Characters