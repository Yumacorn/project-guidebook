import React from 'react'
// import {Redirect} from 'react-router-dom'

import CharactersContainer from '../containers/CharactersContainer'

const Universe = (props) => {
    let universe = props.universes[props.match.params.id - 1]
    console.log(universe)
    
    return (
        <div>
            <h3>
                {universe ? universe.name : null } - {universe ? universe.type_of : null }
            </h3>
            <CharactersContainer universe={universe} />
        </div>
    )
}

export default Universe