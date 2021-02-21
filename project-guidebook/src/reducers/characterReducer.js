export default function characterReducer(state = {characters: []}, action) {
    debugger
    switch (action.type) {
        case 'FETCH_CHARACTERS':
            return {...state, characters: action.payload}
        case 'ADD_CHARACTER':
            return {...state, characters: [...state.characters, action.payload]}
        default:
            return state
    }
}