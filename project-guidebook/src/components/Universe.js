import React, { useEffect } from 'react'
// import {Route, Link} from 'react-router-dom'
import {Route} from 'react-router-dom'
import {fetchUniverses} from '../actions/fetchUniverses'
import {connect} from 'react-redux'

import CharactersContainer from '../containers/CharactersContainer'

let universeName = ''
let universeTypeOf = ''

const Universe = (props) => {
    debugger
    let universe = props.universes[props.match.params.id - 1]   
    
    if (universe) {
        universeName = universe.attributes.name
        universeTypeOf = universe.attributes.type_of
    }
    
    // useEffect((props)=> {
    //     console.log('hippo')
    //     // debugger
    //     // props.fetchUniverses
    // }, [props.match])

    return (
        <div>
            <h3>
                ::UNIVERSE VIEW:: '{universe ? universeName : null }' which is a type of '{universe ? universeTypeOf : null }'<br/>
            </h3>
            {/* <CharactersContainer props={this.props} universe={this.props.universe} /> */}
            {/* <CharactersContainer universe={universe} /> */}
            {/* <Link to={`${props.match.url}/characters`}>Display Characters</Link><br/> */}
            <Route path='/universes/:universeId' render={(routerProps) => <CharactersContainer {...routerProps} universe={universe} /> } />
        </div>
    )
}

// export default Universe

const mapStateToProps = state => {
    return {
        ...state,
        universes: state.universeReducer.universes
    }
}

export default connect(mapStateToProps, {fetchUniverses})(Universe)