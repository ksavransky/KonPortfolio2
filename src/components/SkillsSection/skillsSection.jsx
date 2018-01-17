import React, { Component } from 'react'
import PropTypes from 'prop-types'
import konStraight from '../../images/konphotos/straight.jpg'
import konEast from '../../images/konphotos/e.jpg'
import konSouthEast from '../../images/konphotos/se.jpg'
import konNorthEast from '../../images/konphotos/ne.jpg'
import konNorth from '../../images/konphotos/n.jpg'
import konSouth from '../../images/konphotos/s.jpg'
import konNorthWest from '../../images/konphotos/nw.jpg'
import konWest from '../../images/konphotos/w.jpg'
import konSouthWest from '../../images/konphotos/sw.jpg'
import './skillsSection.css'


const getImageSourceFromId = {
  0: konStraight
}

class SkillsSection extends Component {
  constructor(props){
    super(props)

    this.state = {
      imageDirectionId: 0
    }
  }


  render() {
    return (
      <div id='skills-section'>
        <img src={getImageSourceFromId[this.state.imageDirectionId]} id='my-portrait' />
      </div>
    )
  }
}


export default SkillsSection
