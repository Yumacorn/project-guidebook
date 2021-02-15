// import React, {Component} from 'react'
import React from 'react'
const Character = (props) => {
    // debugger
    // props.match.params.id = id of url
    return(
        <div>
            Frozen {props.match.params.characterId}
        </div>
    )
}

// const class Character extends Component {

//     render() {
//         return (
//             <p>Frozen {this.props.name} </p>
//         )
        
//     }
// }

export default Character