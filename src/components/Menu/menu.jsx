import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import './menu.css'


class Menu extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const isMenuVisible = this.props.visible ? 'visible' : 'hidden'
    return (
      <div id='menu' className={isMenuVisible}>
      </div>
    )
  }
}

Menu.propTypes = {
  visible: PropTypes.bool
}


export default Menu
