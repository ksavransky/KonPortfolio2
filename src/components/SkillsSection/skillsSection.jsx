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
import LogoReact from '../../images/tech/React.png'
import LogoRedux from '../../images/tech/redux.png'
import LogoES6 from '../../images/tech/es6.svg'
import LogoHTMLCSSJS from '../../images/tech/htmlcssjs.png'
import LogojQuery from '../../images/tech/jquery.png'
import LogoReactNative from '../../images/tech/reactnative.png'
import LogoNode from '../../images/tech/node.png'
import LogoRoR from '../../images/tech/RoR.png'
import LogoPostGreSQL from '../../images/tech/postgresql.png'
import LogoMongo from '../../images/tech/mongo.png'
import LogoPHPMySQL from '../../images/tech/phpmysql.png'
import LogoFoundation from '../../images/tech/foundation.png'
import LogoBS from '../../images/tech/bootstrap.png'
import LogoD3 from '../../images/tech/d3.png'
import LogoCanvas from '../../images/tech/canvas.png'
import LogoHighCharts from '../../images/tech/highcharts.png'
import LogoSass from '../../images/tech/sass.png'
import LogoWebPack from '../../images/tech/webpack.png'
import LogoGit from '../../images/tech/git.png'
import LogoWordPress from '../../images/tech/wordpress.png'
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
    this.logoSection = this.logoSection.bind(this)
  }

  changeLookDirection (lookId) {
    this.setState({lookDirectionId: lookId})
  }

  openLinkInNewTab (url) {
    window.open(url,'_blank')
  }

  logoSection () {
    return (
      <div>
        <img src={LogoReact} className='logo' id='react-logo' onClick={ () => this.openLinkInNewTab('https://reactjs.org/') } />
        <img src={LogoRedux} className='logo' id='redux-logo' onClick={ () => this.openLinkInNewTab('https://redux.js.org/') } />
        <img src={LogoES6} className='logo' id='es6-logo' onClick={ () => this.openLinkInNewTab('http://es6-features.org/') } />
        <img src={LogoHTMLCSSJS} className='logo' id='htmlcssjs-logo' onClick={ () => this.openLinkInNewTab('https://developer.mozilla.org/en-US/docs/Learn/HTML') } />
        <img src={LogojQuery} className='logo' id='jquery-logo' onClick={ () => this.openLinkInNewTab('https://jquery.com/') } />
        <img src={LogoReactNative} className='logo' id='reactnative-logo' onClick={ () => this.openLinkInNewTab('https://facebook.github.io/react-native/') } />
        <img src={LogoNode} className='logo' id='node-logo' onClick={ () => this.openLinkInNewTab('https://nodejs.org/en/') } />
        <img src={LogoRoR} className='logo' id='ror-logo' onClick={ () => this.openLinkInNewTab('http://rubyonrails.org/') } />
        <img src={LogoPHPMySQL} className='logo' id='phpmysql-logo' onClick={ () => this.openLinkInNewTab('http://www.php.net/') } />
        <img src={LogoPostGreSQL} className='logo' id='postgres-logo' onClick={ () => this.openLinkInNewTab('https://www.postgresql.org/') } />
        <img src={LogoMongo} className='logo' id='mongo-logo' onClick={ () => this.openLinkInNewTab('https://www.mongodb.com/') } />
        <img src={LogoBS} className='logo' id='bs-logo' onClick={ () => this.openLinkInNewTab('https://getbootstrap.com/') } />
        <img src={LogoFoundation} className='logo' id='foundation-logo' onClick={ () => this.openLinkInNewTab('https://foundation.zurb.com/') } />
        <img src={LogoD3} className='logo' id='d3-logo' onClick={ () => this.openLinkInNewTab('https://d3js.org/') } />
        <img src={LogoCanvas} className='logo' id='canvas-logo' onClick={ () => this.openLinkInNewTab('https://canvasjs.com/') } />
        <img src={LogoHighCharts} className='logo' id='highcharts-logo' onClick={ () => this.openLinkInNewTab('https://www.highcharts.com/') } />
        <img src={LogoSass} className='logo' id='sass-logo' onClick={ () => this.openLinkInNewTab('https://sass-lang.com/') } />
        <img src={LogoWebPack} className='logo' id='webpack-logo' onClick={ () => this.openLinkInNewTab('https://webpack.js.org/') } />
        <img src={LogoGit} className='logo' id='git-logo' onClick={ () => this.openLinkInNewTab('https://github.com/') } />
        <img src={LogoWordPress} className='logo' id='wordpress-logo' onClick={ () => this.openLinkInNewTab('https://wordpress.com/') } />
      </div>
    )
  }

  render() {
    return (
      <div id='skills-section'>
        {this.logoSection()}
        <span className='skill-row'>
          <div className='skill-cell' onMouseEnter={() => this.changeLookDirection(0)}></div>
          <div className='skill-cell' onMouseEnter={() => this.changeLookDirection(3)}></div>
          <div className='skill-cell' onMouseEnter={() => this.changeLookDirection(6)}></div>
        </span>
        <span className='skill-row'>
          <div className='skill-cell title' onMouseEnter={() => this.changeLookDirection(1)}>
            <h2 id='title'>Technology I Use</h2>
          </div>
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
