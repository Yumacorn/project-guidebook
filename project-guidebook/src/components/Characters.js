// import React, {Component}from 'react'
import React from 'react'
// import Character from './Character'
import {Link} from 'react-router-dom'

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
    // debugger
    console.log(props.characters)
        if (!props.characters) {
            return (<div>aww Characters Hell no</div>)
        }
        
        return(
            <div >
                --Characters.js: Woww<br/>
                {/* {props.characters} */}
                {props.characters.map(character =>
                            <li key={character.id}>
                                <Link to={`/universes/1/characters/${character.id}`}>{character.attributes.name}</Link><br/>
                                Mark<br/>
                                <Link to={`/universes/2/characters/${character.id}`}>{character.attributes.name}</Link><br/>

                                {/* <Link to={`${props.match.url}/${character.id}`}>{character.attributes.name}</Link><br/> */}
                                {/* <p>{`${props.match.params.characterId}/${character.id}`}</p><br/> */}

                            </li> 
                )}
                --Characters.js: kk
            </div>
        )
}

export default Characters