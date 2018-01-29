import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './menu.css'


class Menu extends Component {
  constructor(props){
    super(props)

    this.handleMenuItemClick = this.handleMenuItemClick.bind(this)
  }

  handleMenuItemClick (sectionId) {
    this.props.scrollToSection(sectionId)
  }

  render() {
    const isMenuVisible = this.props.visible ? 'visible' : 'hidden'
    return (
      <div id='menu' className={isMenuVisible}>
        <div className='menu-item-container'>
          <div className={'menu-logo glow' + (this.props.activeMenuItem === 1 ? ' active' : '')} onClick={() => { this.handleMenuItemClick(1)}}>
            <div>Konstantin</div>
            <div>Savransky</div>
          </div>
          <div className={'menu-item' + (this.props.activeMenuItem === 2 ? ' active' : '')} onClick={() => { this.handleMenuItemClick(2)}}>Tech</div>
          <div className={'menu-item' + (this.props.activeMenuItem === 3 ? ' active' : '')} onClick={() => { this.handleMenuItemClick(3)}}>Projects</div>
          <div className={'menu-item' + (this.props.activeMenuItem === 4 ? ' active' : '')} onClick={() => { this.handleMenuItemClick(4)}}>Contact</div>
        </div>
      </div>
    )
  }
}

Menu.propTypes = {
  visible: PropTypes.bool,
  scrollToSection: PropTypes.func,
  activeMenuItem: PropTypes.number
}



export default Menu
