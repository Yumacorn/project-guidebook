import React, { Component } from 'react'

export default class App extends Component {

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