import React from 'react'
import './App.css'

// class Form extends Component {
//
//   constructor (props) {
//     super(props)
//     console.log(props)
//   }
//
//   render () {
//     return (
//
//     )
//   }
// }

let Form = (props) => (
  <form className="form-inline" onSubmit={props.handleSubmit}>
    <div className="form-group">
      <label htmlFor="quantity">Ilość</label>
      <input type="number" className="form-control" name="quantity"
             id="quantity" value={props.state.quantity}
             onChange={props.handleChange}/>
    </div>
    <div className="form-group">
      <label htmlFor="type">Example select</label>
      <select className="form-control" id="type" name="type"
              value={props.state.type}
              onChange={props.handleChange}>
        {props.types.map(
          (item, idx) => <option key={idx}
                                 value={item.value}> {item.label} </option>)}

      </select>
    </div>
    <button type="submit" className="btn btn-primary"
            disabled={props.state.submitting}>
      {!props.state.submitting && 'Wyślij'}
      {props.state.submitting && 'Ładowanie'}
    </button>
  </form>
)

export { Form }
