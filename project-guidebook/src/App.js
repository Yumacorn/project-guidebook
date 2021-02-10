import React, { Component } from 'react'
import UniverseContainer from './containers/UniverseContainer'

class App extends Component {

  render() {
    return (
      <div className="App">
        App.js: Welcome to Universe GuideBook!<br/>
        <UniverseContainer />
        App.js: Thanks for stopping by the our guide! Come back again soon and add your own!
      </div>
    )
  }

}


export default App;
