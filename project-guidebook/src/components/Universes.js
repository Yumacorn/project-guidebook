import React from 'react'

const Universes = (props) => {

        return(
            <div>
                {props.universes.map(universe => <li key={universe.id}>{universe.name} - {universe.type_of}</li> )}
            </div>
        )
}

export default Universes