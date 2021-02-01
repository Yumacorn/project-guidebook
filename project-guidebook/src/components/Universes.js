import React from 'react'
import {Route, Link} from 'react-router-dom'
import Universe from './Universe'

const Universes = (props) => {
        return(
            <div>
                {props.universes.data && props.universes.data.map(universe => 
                <li key={universe.id}>
                    <Link to={`/universes/${universe.id}`}>{universe.attributes.name}</Link>
                </li> 
                )}
            </div>
        )
}

export default Universes