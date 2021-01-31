export default function universeReducer(state = {universes: []}, action) {

    switch (action.type) {
        case 'FETCH_UNIVERSES':
            return {universes: action.payload}
        default:
            return state
    }
}