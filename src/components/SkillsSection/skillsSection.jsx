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
import greeting from '../../audio/greeting.m4a'
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

  sayHello () {
    let audio = new Audio(greeting)
    audio.play()
  }

  logoSection () {
    return (
      <div>
        <img src={LogoReact} id='react-logo' onClick={ () => this.openLinkInNewTab('https://reactjs.org/') } />
        <img src={LogoRedux} id='redux-logo' onClick={ () => this.openLinkInNewTab('https://redux.js.org/') } />
        <img src={LogoES6} id='es6-logo' onClick={ () => this.openLinkInNewTab('http://es6-features.org/') } />
        <img src={LogoHTMLCSSJS} id='htmlcssjs-logo' onClick={ () => this.openLinkInNewTab('https://developer.mozilla.org/en-US/docs/Learn/HTML') } />
        <img src={LogojQuery} id='jquery-logo' onClick={ () => this.openLinkInNewTab('https://jquery.com/') } />
        <img src={LogoReactNative} id='reactnative-logo' onClick={ () => this.openLinkInNewTab('https://facebook.github.io/react-native/') } />
        <img src={LogoNode} id='node-logo' onClick={ () => this.openLinkInNewTab('https://nodejs.org/en/') } />
        <img src={LogoRoR} id='ror-logo' onClick={ () => this.openLinkInNewTab('http://rubyonrails.org/') } />
        <img src={LogoPHPMySQL} id='phpmysql-logo' onClick={ () => this.openLinkInNewTab('http://www.php.net/') } />
        <img src={LogoPostGreSQL} id='postgres-logo' onClick={ () => this.openLinkInNewTab('https://www.postgresql.org/') } />
        <img src={LogoMongo} id='mongo-logo' onClick={ () => this.openLinkInNewTab('https://www.mongodb.com/') } />
        <img src={LogoBS} id='bs-logo' onClick={ () => this.openLinkInNewTab('https://getbootstrap.com/') } />
        <img src={LogoFoundation} id='foundation-logo' onClick={ () => this.openLinkInNewTab('https://foundation.zurb.com/') } />
        <img src={LogoD3} id='d3-logo' onClick={ () => this.openLinkInNewTab('https://d3js.org/') } />
        <img src={LogoCanvas} id='canvas-logo' onClick={ () => this.openLinkInNewTab('https://canvasjs.com/') } />
        <img src={LogoHighCharts} id='highcharts-logo' onClick={ () => this.openLinkInNewTab('https://www.highcharts.com/') } />
        <img src={LogoSass} id='sass-logo' onClick={ () => this.openLinkInNewTab('https://sass-lang.com/') } />
        <img src={LogoWebPack} id='webpack-logo' onClick={ () => this.openLinkInNewTab('https://webpack.js.org/') } />
        <img src={LogoGit} id='git-logo' onClick={ () => this.openLinkInNewTab('https://github.com/') } />
        <img src={LogoWordPress} id='wordpress-logo' onClick={ () => this.openLinkInNewTab('https://wordpress.com/') } />
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
            <h2 id='title'>Technologies I Use</h2>
          </div>
          <div className='skill-cell' onMouseEnter={() => this.changeLookDirection(4)}>
            <img src={getImageSourceFromId[this.state.lookDirectionId]} id='my-portrait' onClick={ () => this.sayHello() }/>
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
