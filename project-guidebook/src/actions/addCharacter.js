export const addCharacter = (data) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/${data.universe_id}/characters`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(account => 
            // dispatch({type: 'ADD_CHARACTER', payload: character}
            console.log('hi')
        )      
    }
}