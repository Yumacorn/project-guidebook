import React from 'react'
// import {Redirect} from 'react-router-dom'

import CharactersContainer from '../containers/CharactersContainer'
// debugger

const Universe = (props) => {
    // debugger
    let i = props.history.location.pathname.split('/')[2]
    i = parseInt(i) - 1
    let universe = props.universes[props.match.params.id - 1]   
    let universe2 = {}
    // }
    if (props.universes.data) {
        console.log(props.universes.data[i].attributes.name)
        universe2.name = props.universes.data[i].attributes.name
        universe2.type_of = props.universes.data[i].attributes.type_of
    }
    console.log(`In Universe.js, the props are ${props}`)
    console.log(`-- Universe.js, the universe is ${universe}`)

    return (
        <div>
            <h3>
                UNI
                {universe ? universe.name : null } - {universe ? universe.type_of : null }<br/>
                {universe2 ? universe2.name : null } - {universe2 ? universe2.type_of : null }

            </h3>
            <CharactersContainer parentProps={props} universe={universe2} />
        </div>
    )
}

export default Universe