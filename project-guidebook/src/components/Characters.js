import React from 'react'

const Characters = (props) => {
        debugger
        console.log(`props? THEM: ${props}`)
        console.log(`SHOW THEM: ${props.characters}`)
        return(
            <div>
                {props.characters && props.characters.map(character =>
                    <li key={character.id}>{character.name} - {character.type_of} - {character.description}</li>
                )}
            </div>
        )
}

export default Characters