import React from 'react'
// import {Route, Link} from 'react-router-dom'
import {Link} from 'react-router-dom'

// import Universe from './Universe'

const Universes = (props) => {
    console.log(props.universes)
        if (!props.universes) {
            return (<div>Hell no</div>)
        }
        if (props.isSorted) {
            let sortedArray
            sortedArray = props.universes.sort((a, b)=>{
                debugger
                if (a.attributes.name > b.attributes.name) {
                        console.log('a is less than b')
                          return 1
                        }
                if (a.attributes.name < b.attributes.name) {
                    console.log('a is more than b')
                    return -1
                }
                return 0
            })
        if (!props.isSorted) {
            sortedArray = props.universes
        }
            return (
                <div>
                    Sorting: {props.isSorted} <br/>
                    {sortedArray.map(universe =>
                            <li key={universe.id}>
                                <Link to={`/universes/${universe.id}`} className="universeTitle">{universe.attributes.name}</Link>
                            </li> 
                    )}
                </div>
            )
        }
        
        return(
            <div >
                {/* --Universes.js: Woww<br/> */}
                Sorting: {props.isSorted} <br/>

                {props.universes.map(universe =>
                            <li key={universe.id}>
                                {/* <Link to={{
                                    pathname: `/universes/${universe.id}/characters`,
                                    characters: 'Characters to be loaded'
                                }}>{universe.attributes.name}</Link> */}
                                <Link to={`/universes/${universe.id}`} className="universeTitle">{universe.attributes.name}</Link>
                            </li> 
                )}
                {/* --Universes.js: kk */}
            </div>
        )
}

export default Universes