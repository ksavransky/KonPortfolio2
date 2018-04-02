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
        <button onClick={this.sendMessage}>Test Email</button>
      </div>
    )
  }
}

ContactSection.propTypes = {
  actions: PropTypes.object
}

export default ContactSection
