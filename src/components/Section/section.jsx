import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import './section.css'


class Section extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className={'section ' +  this.props.backgroundColor}>
        <div className='section-content'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

Section.propTypes = {
  backgroundColor: PropTypes.string
}


export default Section
