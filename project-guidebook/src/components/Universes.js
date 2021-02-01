import React from 'react'
import {Route, Link} from 'react-router-dom'
import Universe from './Universe'

const Universes = (props) => {

        return(
            <div>
                {props.universes.map(universe => 
                <li key={universe.id}>
                    <Link to={`/universes/${universe.id}`}>{universe.name}</Link>
                </li> 
                )}
            </div>
        )
}

export default Universes