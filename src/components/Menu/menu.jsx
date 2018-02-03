import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DropDownLogo from '../../images/dropdownmenu.png'
import './menu.css'


class Menu extends Component {
  constructor(props){
    super(props)

    this.handleMenuItemClick = this.handleMenuItemClick.bind(this)
    this.renderLargeMenu = this.renderLargeMenu.bind(this)
    this.renderSmallMenu = this.renderSmallMenu.bind(this)
    this.renderDropDownMenu = this.renderDropDownMenu.bind(this)
    this.renderOptions = this.renderOptions.bind(this)
  }

  handleMenuItemClick (sectionId) {
    this.props.scrollToSection(sectionId)
    setTimeout(() => {
      let currentScrollPos = this.props.getDocumentScrollPosition()
      if (currentScrollPos > 100) {
        this.props.scroll.animateScroll.scrollTo((currentScrollPos + 1), {
          duration: 10,
          smooth: true
        })
      }
    }, 1600)
  }

  renderOptions (isMenuVisible) {
    return (
      <div className={'options-container ' + isMenuVisible}>
        <div className={'menu-item' + (this.props.activeMenuItem === 2 ? ' active' : '')} onClick={() => { this.handleMenuItemClick(2)}}>Tech</div>
        <div className={'menu-item' + (this.props.activeMenuItem === 3 ? ' active' : '')} onClick={() => { this.handleMenuItemClick(3)}}>Projects</div>
        <div className={'menu-item' + (this.props.activeMenuItem === 4 ? ' active' : '')} onClick={() => { this.handleMenuItemClick(4)}}>Contact</div>
      </div>
    )
  }

  renderLargeMenu () {
    return (
      <div className='menu-item-container large show-for-large'>
        <div className={'menu-logo glow' + (this.props.activeMenuItem === 1 ? ' active' : '')} onClick={() => { this.handleMenuItemClick(1)}}>
          <div>Konstantin</div>
          <div>Savransky</div>
        </div>
        {this.renderOptions()}
      </div>
    )
  }

  renderSmallMenu (isMenuVisible) {
    return (
      <div className='menu-item-container small hide-for-large'>
        {this.renderDropDownMenu(isMenuVisible)}
        <div className={'menu-logo glow' + (this.props.activeMenuItem === 1 ? ' active' : '')} onClick={() => { this.handleMenuItemClick(1)}}>
          <div>Konstantin</div>
          <div>Savransky</div>
        </div>
      </div>
    )
  }

  renderDropDownMenu (isMenuVisible) {
    return (
      <div id='drop-down-menu' >
        <img src={DropDownLogo} id='drop-down-logo' />
        <div id='drop-down-logo-background'></div>
        {this.renderOptions(isMenuVisible)}
      </div>
    )
  }

  render() {
    const isMenuVisible = this.props.visible ? 'visible' : 'hidden'
    return (
      <div id='menu' className={isMenuVisible}>
        {this.renderLargeMenu()}
        {this.renderSmallMenu(isMenuVisible)}
      </div>
    )
  }
}

Menu.propTypes = {
  visible: PropTypes.bool,
  scrollToSection: PropTypes.func,
  getDocumentScrollPosition: PropTypes.func,
  scroll: PropTypes.any,
  activeMenuItem: PropTypes.number
}



export default Menu
