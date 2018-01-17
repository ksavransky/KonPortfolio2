import React, { Component } from 'react'
import PropTypes from 'prop-types'
import downArrow from '../../images/downarrow.png'
import './topSection.css'


class TopSection extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div id='top-section'>
        <div id='about-me'>
          <h1>Hi, my name is Konstantin.</h1>
          <h1>I'm a Full Stack Developer.</h1>
          <h3>I love to code, have keen product sense, and a knack for design.</h3>
        </div>
        <img src={downArrow} id='down-arrow' />
      </div>
    )
  }
}

export default TopSection
