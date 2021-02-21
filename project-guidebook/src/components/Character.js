import React from 'react'

let charName= ''
let char = ''
const Character = (props) => {
    char = props.characters[props.match.params.characterId-1]

    // debugger

    // charId = {props.match.params.characterId}
    if (char) {
        // charName = char.attributes.name

        return(
            <div>
                <h4>
                <div className="header">::Character Info::</div><br></br>
                Name: {char.attributes.name}<br/>
                Type: {char.attributes.type_of}<br/><br/>
                IDs: Universe - {char.attributes.universe_id}, Character - {props.match.params.characterId-1}<br/>
                Description: {char.attributes.description}<br/>
                </h4>
            </div>
        )
    }

    return (
        <div>
            No Character Info to display.
            Show {char} //
        </div>
    )
    
}

export default Character