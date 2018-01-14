import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './topSection.css'


class TopSection extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div id='top-section'>
        <div id='about-me'>
          <p>Hi, my name is Kon. I'm a Full Stack Developer.</p>
          <p>I love to code, have strong leadership and business sense, and a knack for design.</p>
          <p>I'm ready to help your team build a great application.</p>
        </div>
      </div>
    )
  }
}

export default TopSection
