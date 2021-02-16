import React, { Component } from 'react'
import UniverseContainer from './containers/UniverseContainer'

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1 className="welcome-banner">App.js: Welcome to Universe GuideBook!<br/></h1>
        <UniverseContainer /><br/>
        <br/>
        <div className="welcome-banner">
          React Final Portfolio project - Flatiron School Front-End Fullstack Web Dev - by Ryan Mui<br/>
          App.js: Thanks for stopping by the our guide site! Come back again soon and add your own!
        </div>
      </div>
    )
  }

}


export default App;
