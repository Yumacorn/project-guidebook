// import { bindActionCreators } from "redux"

export const addCharacter = (data) => {
    return (dispatch) => {
                    // fetch(`http://localhost:3000/universes/1/characters`, {
        fetch(`http://localhost:3000/universes/${data.universe_id}/characters`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(character => {
            // debugger
            dispatch({type: 'ADD_CHARACTER', payload: character.data})
        })
           
    }
}