export default function characterReducer(state = {characters: []}, action) {
    debugger
    switch (action.type) {
        case 'FETCH_CHARACTERS':
            return {...state, characters: action.payload}
        // case 'ADD_UNIVERSE':
        //     return {...state, universes: [...state.universes, action.payload]}
        default:
            return state
    }
}