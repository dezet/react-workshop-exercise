import React, { Component } from 'react'
import './App.css'
import { Form } from './Form'

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      types: [
        {
          label: 'psy',
          value: 'shibas'
        },
        {
          label: 'koty',
          value: 'cats'
        },
        {
          label: 'ptaki',
          value: 'birds'
        },
        {
          label: 'losowe',
          value: 'random'
        }
      ],
      list: [],
      form: {
        quantity: 1,
        type: 'random',
        submitting: false,
        valid: true
      }
    }
  }

  handleChange = (event) => {
    this.setState({
        ...this.state,
        form: {
          ...this.state.form,
          [event.target.name]: event.target.value
        }
      }
    )
  }
  handleSubmit = (e) => {
    e.preventDefault()
    fetch(
      `https://shibe.online/api/${this.state.form.type}?count=${this.state.form.quantity}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({
          ...this.state,
          list: data,
          form: {
            ...this.state.form,
            submitting: true
          }
        })
      })
  }

  render () {
    return (
      <div className="App">
        <Form state={this.state.form} types={this.state.types}
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}/>
        dsadadsa
      </div>
    )
  }
}

export default App
