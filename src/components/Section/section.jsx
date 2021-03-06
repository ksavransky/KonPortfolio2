import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Scroll from 'react-scroll'
import './section.css'


class Section extends Component {
  constructor(props){
    super(props)
  }

  render() {
    let ScrollElement = Scroll.Element
    return (
      <ScrollElement id={this.props.id} name={'section-' + this.props.sectionNumber} className={'section ' +  (this.props.backgroundColor || '')}>
          <div className='section-content'>
            {this.props.children}
          </div>
      </ScrollElement>
    )
  }
}

Section.propTypes = {
  id: PropTypes.string,
  sectionNumber: PropTypes.number,
  backgroundColor: PropTypes.string
}


export default Section
