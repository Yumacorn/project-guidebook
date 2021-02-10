import React from 'react'
// import {Route, Link} from 'react-router-dom'
import {Link} from 'react-router-dom'

// import Universe from './Universe'

const Universes = (props) => {
    console.log(props.universes)
        return(
            <div >
                --Universes.js: Woww<br/>
                {props.universes.map(universe =>
                    <li key={universe.id}>
                        <Link to={`/universes/${universe.id}`}>{universe.attributes.name}</Link>
                    </li> 
                )}
                {/* {props.universes.map(universe => 
                    <p>{universe.id} {universe.type} {universe.attributes.name}</p>
                )} */}
                --Universes.js: kk
            </div>
        )
}

export default Universes