import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchUniverses} from './actions/fetchUniverses';


class App extends Component {

  componentDidMount() {
    this.props.fetchUniverses({type: "FETCH_UNIVERSES", payload: {name: "Chin"}})
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
