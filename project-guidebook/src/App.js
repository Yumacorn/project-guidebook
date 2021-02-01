import React, { Component } from 'react'
import {connect} from 'react-redux'
import UniverseContainer from './containers/UniverseContainer'

class App extends Component {

  render() {
    return (
      <div className="App">
        Welcome to GuideBook!<br/>
        <UniverseContainer />
        Thanks for stopping by the universe!
      </div>
    )
  }
}


export default App;
