
export function fetchCharacters() {
    return(dispatch) => {
        fetch('http://localhost:3000/universes/1/characters')
        .then(response => response.json())
        .then(characters => dispatch({
            type: 'FETCH_CHARACTERS',
            payload: characters.data
        }))
    }

}
