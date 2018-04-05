import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './contactSection.css'


class ContactSection extends Component {
  constructor(props){
    super(props)

    this.state = {
      messageSent: false
    }

    this.sendMessage = this.sendMessage.bind(this)
  }

  sendMessage () {
    const name = 'Name: ' + this.refs.name.value
    const email = ' Email: ' + this.refs.email.value
    const message = ' Message: ' + this.refs.message.value
    this.props.actions.sendEmail(name + email + message)
    this.setState({
      messageSent: true
    })
  }

  render() {
    if (!this.state.messageSent) {
      return (
        <div id='contact-section'>
          <h2>Contact Me</h2>
          <div className='label-text'>
            <h3>Name</h3>
            <input ref='name' type='text'/>
          </div>
          <div className='label-text'>
            <h3>Email</h3>
            <input ref='email' type='text'/>
          </div>
          <div className='label-text'>
            <h3>Message</h3>
            <textarea ref='message' type='text'/>
          </div>
          <button className='button' onClick={this.sendMessage}>Submit</button>
        </div>
      )
    } else {
      return (
        <div id='contact-section' className='sent'>
          <h2>Thank You!</h2>
          <h2>I will get back to you soon!</h2>
          <button className='button' onClick={() => {this.setState({messageSent: false})}}>Send Another Message</button>
        </div>
      )
    }
  }
}

ContactSection.propTypes = {
  actions: PropTypes.object
}

export default ContactSection
