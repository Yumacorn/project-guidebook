import React, {Component} from 'react'
import CharacterInput from '../components/CharacterInput'
import Characters from '../components/Characters'

class CharactersContainer extends Component {

    render() {
        // debugger

        return (
            <div>
                <CharacterInput />
                <Characters characters={this.props.universe && this.props.universe.characters} />
            </div>
        )
    }
}

export default CharactersContainer