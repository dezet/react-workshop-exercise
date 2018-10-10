import React, { Component } from 'react'
import './App.css'

class Form extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <form>
        <label>
          Liczba:
          <input type="number"> </input>
        </label>
      </form>
    )
  }
}

export default Form
