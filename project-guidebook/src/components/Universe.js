import React from 'react'

const Universe = (props) => {
    console.log(props)
    let universe = props.universes[props.match.params.id - 1]
    console.log(universe)
    
    return (
        <li>
            {universe ? universe.name : null } - {universe ? universe.type_of : null }
        </li>
    )
}

export default Universe