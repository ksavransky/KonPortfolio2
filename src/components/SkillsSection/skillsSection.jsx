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

  logoSection () {
    return (
      <div>
        <img src={LogoReact} className='logo' id='react-logo' />
        <img src={LogoRedux} className='logo' id='redux-logo' />
        <img src={LogoES6} className='logo' id='es6-logo' />
        <img src={LogoHTMLCSSJS} className='logo' id='htmlcssjs-logo' />
        <img src={LogojQuery} className='logo' id='jquery-logo' />
        <img src={LogoReactNative} className='logo' id='reactnative-logo' />
        <img src={LogoNode} className='logo' id='node-logo' />
        <img src={LogoRoR} className='logo' id='ror-logo' />
        <img src={LogoPHPMySQL} className='logo' id='phpmysql-logo' />
        <img src={LogoPostGreSQL} className='logo' id='postgres-logo' />
        <img src={LogoMongo} className='logo' id='mongo-logo' />
        <img src={LogoBS} className='logo' id='bs-logo' />
        <img src={LogoFoundation} className='logo' id='foundation-logo' />
        <img src={LogoD3} className='logo' id='d3-logo' />
        <img src={LogoCanvas} className='logo' id='canvas-logo' />
        <img src={LogoHighCharts} className='logo' id='highcharts-logo' />
        <img src={LogoSass} className='logo' id='sass-logo' />
        <img src={LogoWebPack} className='logo' id='webpack-logo' />
        <img src={LogoGit} className='logo' id='git-logo' />
        <img src={LogoWordPress} className='logo' id='wordpress-logo' />
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
            <h1 id='title'>Technology I Use</h1>
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
