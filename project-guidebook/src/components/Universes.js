import React from 'react'
import Universe from './Universe'

const Universes = (props) => {

        return(
            <div>
                {props.universes.map(universe => 
                <li key={universe.id}><Universe universe={universe}/></li> 
                )}
            </div>
        )
}

export default Universes