import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchUniverses} from './actions/fetchUniverses';


class App extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3000/universes/1/characters')
    .then(response => response.json())
    .then(data => console.log(data))
  }

  render() {
    return (
      <div className="App">
        App 
      </div>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//     universes: state.universes
//   }
// }

// const 


export default connect(null, {fetchUniverses})(App);

// import React from 'react';

// class App extends React.Component {
//   render() {
//     debugger
//     return (
//       <div className="App">
//         App
//       </div>
//     );
//   }
// }

// export default App;