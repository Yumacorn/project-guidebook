import { combineReducers } from 'redux';

import universeReducer from './universeReducer'
import characterReducer from './characterReducer'

export default combineReducers({
    universeReducer,
    characterReducer
})