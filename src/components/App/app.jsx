import React, { Component } from 'react'
import Menu from '../Menu/menu.jsx'
import Section from '../Section/section.jsx'
import TopSection from '../TopSection/topSection.jsx'
import SkillsSection from '../SkillsSection/skillsSection.jsx'
import Scroll from 'react-scroll'
import './app.css'

class App extends Component {
  constructor(props){
    super(props)

    this.scrollToSection = this.scrollToSection.bind(this)
    this.documentScrollListener = this.documentScrollListener.bind(this)
    this.getDocumentScrollPosition = this.getDocumentScrollPosition.bind(this)
    this.setDocumentScrollPosition = this.setDocumentScrollPosition.bind(this)

    this.state = {
      isMenuVisible: true,
      isSafari: false
    }

    this.documentScrollTop = 0
  }

  componentDidMount () {
    this.setIsSafari()
    window.addEventListener('scroll', this.documentScrollListener)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.documentScrollListener)
  }

  setIsSafari () {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('safari') !== -1 && !(ua.indexOf('chrome') > -1)) {
      this.setState({isSafari: true})
    }
  }

  getDocumentScrollPosition () {
    if (this.state.isSafari) {
      return document.body.scrollTop
    }
    return document.documentElement.scrollTop
  }

  setDocumentScrollPosition (pos) {
    if (this.state.isSafari) {
      document.body.scrollTop = pos
    } else {
      document.documentElement.scrollTop = pos
    }
  }

  documentScrollListener () {
    this.menuVisibilityControl()
    this.documentScrollTop = this.getDocumentScrollPosition()
  }

  menuVisibilityControl () {
    const newScrollTop = this.getDocumentScrollPosition()
    if (this.state.isMenuVisible && this.documentScrollTop > 70 && this.documentScrollTop < newScrollTop) {
      this.setState({
        isMenuVisible: false
      })
    } else if (!this.state.isMenuVisible && this.documentScrollTop > newScrollTop) {
      this.setState({
        isMenuVisible: true
      })
    }
  }

  scrollToSection (sectionNumber) {
    Scroll.scroller.scrollTo(`section-${sectionNumber}`, {
      duration: 1500,
      delay: 100,
      smooth: true
    })
  }

  render() {
    return (
      <div id='app'>
        <Menu visible={this.state.isMenuVisible}/>
        <Section sectionNumber={1} >
          <TopSection scrollToSection={this.scrollToSection}/>
        </Section>
        <Section sectionNumber={2} backgroundColor='lightgray'>
          <SkillsSection />
        </Section>
        <Section backgroundColor='color1'>
          Cool
        </Section>
        <Section backgroundColor='color2'>
          Dude
        </Section>
      </div>
    )
  }
}


export default App
