import React, { Fragment } from 'react'
import qs from 'querystring'
import { Footer, NavBar } from '../components'

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      disabled: false,
      name: '',
      replyTo: '',
      url: '',
      message: '',
      showConfirmation: false,
    }
    this.formatEmail = this.formatEmail.bind(this)
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
    const {
      target: { name, value },
    } = e
    const state = {}
    state[name] = value
    this.setState({
      ...state,
    })
  }

  formatEmail() {
    return {
      formDataNameOrder: { ...this.state },
      formGoogleSheetName: 'responses',
    }
  }

  async processMessage() {
    const queryString = qs.stringify({
      name: this.state.name,
      replyTo: this.state.replyTo,
      message: this.state.message,
    })
    const url = `https://script.google.com/macros/s/AKfycbxD8BIqu6cYPpGpSP2InJ5mOw5J8akAUgZ7Cahxdl09ziGVodM/exec?${queryString}`
    try {
      await fetch(url, { method: 'POST' })
      this.setState({
        disabled: true,
        showConfirmation: true,
      })
    } catch (e) {
      console.warn('Error: Unable to send message', e)
    }
  }

  render() {
    return (
      <Fragment>
        <NavBar />
        <div className="contact">
          {this.state.showConfirmation ? (
            <h6 className="sent">Message Sent!</h6>
          ) : null}
          <form onSubmit={this.validateForm} className="contact-form">
            <label className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={this.state.name}
                onChange={this.updateState}
                required
              />
            </label>
            <label className="form-row">
              <input
                type="email"
                name="replyTo"
                placeholder="Email"
                value={this.state.replyTo}
                onChange={this.updateState}
                required
              />
            </label>
            <div className="antispam">
              Leave this empty:{' '}
              <input
                type="text"
                name="url"
                value={this.state.url}
                onChange={this.updateState}
              />
            </div>
            <label className="form-row message">
              <input
                name="message"
                placeholder="Message"
                value={this.state.message}
                onChange={this.updateState}
                required
              />
            </label>
            <input
              type="submit"
              value="Submit"
              className="submit"
              disabled={this.state.disabled}
            />
          </form>
        </div>
        <Footer />
      </Fragment>
    )
  }
}

export default Contact
