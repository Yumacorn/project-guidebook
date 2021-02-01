import React, { Component } from 'react'
// import {connect} from 'react-redux'
import UniverseContainer from './containers/UniverseContainer'

class App extends Component {

  componentDidMount() {
    console.log(fetchUniverses())
  }

  render() {
    return (
      <div className="App">
        App Here we Are
        <UniverseContainer />
        Below the universe
      </div>
    )
  }
}


export default App;
