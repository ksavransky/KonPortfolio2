import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DropDownLogo from '../../images/dropdownmenu.png'
import GitHubLogo from '../../images/github.png'
import LinkedInLogo from '../../images/linkedin.png'
import { isEqual } from 'lodash'
import './menu.css'


class Menu extends Component {
  constructor(props){
    super(props)

    this.state = {
      isDropDownOpen: this.props.visible
    }

    this.handleMenuItemClick = this.handleMenuItemClick.bind(this)
    this.renderLargeMenu = this.renderLargeMenu.bind(this)
    this.renderSmallMenu = this.renderSmallMenu.bind(this)
    this.renderDropDownMenu = this.renderDropDownMenu.bind(this)
    this.renderOptions = this.renderOptions.bind(this)
    this.handleDropDownLogoClick = this.handleDropDownLogoClick.bind(this)
    this.handleBodyClick = this.handleBodyClick.bind(this)
  }

  componentDidMount () {
    document.body.addEventListener('click', this.handleBodyClick)
  }

  componentWillUnmount () {
    document.body.removeEventListener('click', this.handleBodyClick)
  }

  componentWillReceiveProps(nextProps) {
    if (!isEqual(nextProps, this.props)) {
      if (!nextProps.visible) {
        this.setState({
          isDropDownOpen: false
        })
      }
    }
  }

  handleBodyClick (event) {
    if (event.target.className !== 'menu-item' && event.target.id !== 'drop-down-logo') {
      this.setState({
        isDropDownOpen: false
      })
    }
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

  handleDropDownLogoClick () {
    this.setState({
      isDropDownOpen: !this.state.isDropDownOpen
    })
  }

  renderOptions (isMenuVisible) {
    return (
      <div className={'options-container ' + isMenuVisible + ' ' + (this.state.isDropDownOpen ? 'drop-down-open' : 'drop-down-close')}>
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
        <img src={DropDownLogo} id='drop-down-logo' onClick={() => { this.handleDropDownLogoClick()}}/>
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
        <a href='https://www.linkedin.com/in/ksavransky/' target='_blank'>
          <img src={LinkedInLogo} id='linkedin-logo' className='logo-link' />
        </a>
        <a href='https://github.com/ksavransky' target='_blank'>
          <img src={GitHubLogo} id='github-logo' className='logo-link' />
        </a>
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
