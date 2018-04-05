import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './contactSection.css'


class ContactSection extends Component {
  constructor(props){
    super(props)

    this.state = {
      messageBody: null,
      messageSubject: null,
      messageEmail: null
    }

    this.sendMessage = this.sendMessage.bind(this)
  }

  sendMessage () {
    this.props.actions.sendEmail('tesstttt email')
  }

  render() {
    return (
      <div id='contact-section'>
        <h2>Contact Me</h2>
        <div className='label-text'>
          <h3>Name</h3>
          <input type='text'/>
        </div>
        <div className='label-text'>
          <h3>Email</h3>
          <input type='text'/>
        </div>
        <div className='label-text'>
          <h3>Message</h3>
          <textarea type='text'/>
        </div>
        <button className='button' onClick={this.sendMessage}>Submit</button>
      </div>
    )
  }
}

ContactSection.propTypes = {
  actions: PropTypes.object
}

export default ContactSection
