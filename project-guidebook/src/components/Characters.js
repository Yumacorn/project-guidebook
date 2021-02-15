// import React, {Component}from 'react'
import React from 'react'
// import Character from './Character'

// const Characters = (props) => {
        // debugger

// class Characters extends Component {
//         componentDidMount() {
//             console.log(`Characters.js: ---------`)
//         }

//         render() {
//             // debugger
//             return(
//                 <div>
//                     {/* {props.characters && props.characters.map(character =>
//                         <li key={character.id}>{character.name} - {character.type_of} - {character.description}</li>
//                     )} */}
//                     --Characters.js
//                     {/* props? THEM: ${this.props.universe} */}
//                     <Character name='Ryan' />
//                     <Character name='Adela' />
//                     {this.props.characters.map(character =>
//                         <Character name={character}/>
//                     )}
//                 </div>
//         )}
// }


const Characters = (props) => {
    debugger
    console.log(props.characters)
        if (!props.characters) {
            return (<div>aww Characters Hell no</div>)
        }
        
        return(
            <div >
                --Characters.js: Woww<br/>
                
                {props.characters.map(character =>
                            <li key={character.id}>
                                {/* <Link to={`/universes/${character.id}`}>{character.attributes.name}</Link> */}
                                {character.attributes.name}
                            </li> 
                )}
                --Characters.js: kk
            </div>
        )
}

export default Characters