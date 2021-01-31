import React, { Component } from 'react'
import {connect} from 'react-redux'
// import {fetchUniverses} from './actions/fetchUniverses'
import UniverseContainer from './containers/UniverseContainer'

class App extends Component {

  render() {
    return (
      <div className="App">
        App Here we Are
        <UniverseContainer />
      </div>
    )
  }
}


export default App;
