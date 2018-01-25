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
  0: konNorthWest,
  1: konNorth,
  2: konNorthEast,
  3: konWest,
  4: konStraight,
  5: konEast,
  6: konSouthWest,
  7: konSouth,
  8: konSouthEast
}

class SkillsSection extends Component {
  constructor(props){
    super(props)

    this.state = {
      lookDirectionId: 4
    }

    this.changeLookDirection = this.changeLookDirection.bind(this)
  }

  changeLookDirection (lookId) {
    this.setState({lookDirectionId: lookId})
  }

  render() {
    return (
      <div id='skills-section'>
        <span className='skill-row'>
          <div className='skill-cell' onMouseEnter={() => this.changeLookDirection(0)}></div>
          <div className='skill-cell' onMouseEnter={() => this.changeLookDirection(3)}></div>
          <div className='skill-cell' onMouseEnter={() => this.changeLookDirection(6)}></div>
        </span>
        <span className='skill-row'>
          <div className='skill-cell' onMouseEnter={() => this.changeLookDirection(1)}></div>
          <div className='skill-cell' onMouseEnter={() => this.changeLookDirection(4)}>
            <img src={getImageSourceFromId[this.state.lookDirectionId]} id='my-portrait' />
          </div>
          <div className='skill-cell' onMouseEnter={() => this.changeLookDirection(7)}></div>
        </span>
        <span className='skill-row'>
          <div className='skill-cell' onMouseEnter={() => this.changeLookDirection(2)}></div>
          <div className='skill-cell' onMouseEnter={() => this.changeLookDirection(5)}></div>
          <div className='skill-cell' onMouseEnter={() => this.changeLookDirection(8)}></div>
        </span>
      </div>
    )
  }
}


export default SkillsSection
