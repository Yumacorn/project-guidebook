
export function fetchUniverses() {
    debugger
    return(dispatch) => {
        fetch('http://localhost:3000/universes')
        .then(response => response.json())
        .then(universes => dispatch({
            type: 'FETCH_UNIVERSES',
            payload: universes.data
        }))
    }
}
