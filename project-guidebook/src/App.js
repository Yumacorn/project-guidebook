import React, { Component } from 'react'

export default class App extends Component {


  componentDidMount() {
    debugger
    fetch('http://localhost:3000/universes')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      debugger
    })
    }

  render() {
    return (
      <div className="App">
        App 
      </div>
    )
  }
}