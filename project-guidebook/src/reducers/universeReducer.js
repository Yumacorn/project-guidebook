export default function universeReducer(state = {universes: []}, action) {
    // debugger     
    switch (action.type) {
        case 'FETCH_UNIVERSES':
            return {...state, universes: action.payload}
        case 'ADD_UNIVERSE':
            return {...state, universes: [...state.universes, action.payload]}
        default:
            return state
    }
}