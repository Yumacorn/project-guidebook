import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import universeReducer from './reducers/universeReducer'
import {BrowserRouter as Router} from 'react-router-dom'

import App from './App'

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let store = createStore(universeReducer, enhancer(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>, document.getElementById('root')
)