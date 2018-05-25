import React, { Fragment } from 'react'
import { NavBar } from '../components'

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      url: '',
      message: '',
    }
    this.processMessage = this.processMessage.bind(this)
    this.updateState = this.updateState.bind(this)
    this.validateForm = this.validateForm.bind(this)
  }

  validateForm(e) {
    e.preventDefault()
    if (this.state.url.length > 0) {
      return false
    }
    return this.processMessage()
  }

  updateState(e) {
    const { target: { name, value } } = e
    const state = {}
    state[name] = value
    this.setState({
      ...state
    })
  }

  processMessage() {
    fetch()
  }

  render() {
    return (
      <Fragment>
        <NavBar />
        <div className="contact">
          <form onSubmit={this.validateForm}>
            <label>
              Name
              <input type="text" name="name" value={this.state.name} onChange={this.updateState} required />
            </label>
            <label>
              Email
              <input type="email" name="email" value={this.state.email} onChange={this.updateState} required />
            </label>
            <div className="antispam">Leave this empty: <input type="text" name="url" value={this.state.url} onChange={this.updateState} /></div>
            <label>
              Message
              <textarea name="message" value={this.state.message} onChange={this.updateState} required />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </Fragment>
    )
  }
}

export default Contact
