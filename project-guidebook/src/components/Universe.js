import React from 'react'
// import {Redirect} from 'react-router-dom'
import {Route} from 'react-router-dom'
import CharactersContainer from '../containers/CharactersContainer'

let universeName = ''
let universeTypeOf = ''

const Universe = (props) => {
    let universe = props.universes[props.match.params.id - 1]   
    
    if (universe) {
        universeName = universe.attributes.name
        universeTypeOf = universe.attributes.type_of
    }
    // debugger
    return (
        <div>
            <h3>
                ::UNIVERSE VIEW:: '{universe ? universeName : null }' which is a type of '{universe ? universeTypeOf : null }'<br/>
            </h3>
            {/* <CharactersContainer props={this.props} universe={this.props.universe} /> */}
            {/* <CharactersContainer universe={universe} /> */}
            taken
            <Route path='/universes/:universeId' render={(routerProps) => <CharactersContainer {...routerProps} universe={universe} /> } />
            pos
        </div>
    )
}

export default Universe