import React from 'react'

const Universe = (props) => {

    return (
        <div>
            {props.universe.name} - {props.universe.type_of}
        </div>
    )
}

export default Universe