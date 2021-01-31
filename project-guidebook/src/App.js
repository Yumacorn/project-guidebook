import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchUniverses} from './actions/fetchUniverses';


class App extends Component {

  componentDidMount() {
    // fetch('http://localhost:3000/universes/1/characters')
    // .then(response => response.json())
    // .then(data => console.log(data))
  }

  render() {
    return (
      <div className="App">
        App Here we Are
      </div>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//     universes: state.universes
//   }
// }


export default connect(null, {fetchUniverses})(App);
