import React from 'react'
// import {Route, Link} from 'react-router-dom'
import {Link} from 'react-router-dom'

// import Universe from './Universe'

const Universes = (props) => {
    // debugger
    console.log(props.universes)
        if (!props.universes) {
            return (<div>Hell no</div>)
        }
        
        return(
            <div >
                --Universes.js: Woww<br/>
                
                {props.universes.map(universe =>
                            <li key={universe.id}>
                                <Link to={`/universes/${universe.id}`}>{universe.attributes.name}</Link>
                            </li> 
                )}
                --Universes.js: kk
            </div>
        )
}

export default Universes