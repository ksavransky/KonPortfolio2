import React, { Component } from 'react'
import Menu from '../Menu/menu.jsx'
import Section from '../Section/section.jsx'
import TopSection from '../TopSection/topSection.jsx'
import SkillsSection from '../SkillsSection/skillsSection.jsx'
import ProjectsSection from '../ProjectsSection/projectsSection.jsx'
import ContactSection from '../ContactSection/contactSection.jsx'
import Scroll from 'react-scroll'
import './app.css'

class App extends Component {
  constructor(props){
    super(props)

    this.scrollToSection = this.scrollToSection.bind(this)
    this.documentScrollListener = this.documentScrollListener.bind(this)
    this.getDocumentScrollPosition = this.getDocumentScrollPosition.bind(this)

    this.state = {
      isMenuVisible: true,
      isSafari: false,
      activeMenuItem: 1
    }

    this.documentScrollTop = 0
    this.sectionPositionMiddles = {
      1: 0,
      2: 0,
      3: 0,
      4: 0
    }
  }

  componentDidMount () {
    this.setIsSafari()
    this.setSectionPositionTops()
    window.addEventListener('scroll', this.documentScrollListener)
    // add a resize addEventListener that resets the this.sectionPositionTops by calling setSectionPositionTops()
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.documentScrollListener)
    // REMOVE a resize EventListener that resets the this.sectionPositionTops by calling setSectionPositionTops()
  }

  setSectionPositionTops () {
    let sections = document.getElementsByClassName('section-content')
    if (sections.length && sections.length > 0) {
      for (let i = 0; i < sections.length; i++) {
        this.sectionPositionMiddles[i + 1] = (sections[i].offsetTop + (sections[i].clientHeight / 2))
      }
    }
  }

  setActiveMenuItem () {
    if  (this.documentScrollTop < this.sectionPositionMiddles[1]) {
      if (this.state.activeMenuItem !== 1) {
        this.setState({activeMenuItem: 1})
      }
    } else if (this.documentScrollTop < this.sectionPositionMiddles[2]) {
      if (this.state.activeMenuItem !== 2) {
        this.setState({activeMenuItem: 2})
      }
    } else if (this.documentScrollTop < this.sectionPositionMiddles[3]) {
      if (this.state.activeMenuItem !== 3) {
        this.setState({activeMenuItem: 3})
      }
    } else {
      if (this.state.activeMenuItem !== 4) {
        this.setState({activeMenuItem: 4})
      }
    }
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

  documentScrollListener () {
    this.menuVisibilityControl()
    this.documentScrollTop = this.getDocumentScrollPosition()
    this.setActiveMenuItem()
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

  scrollToSection (sectionNumber, offset = -1) {
    Scroll.scroller.scrollTo((`section-${sectionNumber}`), {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: offset
    })
  }

  render() {
    return (
      <div id='app'>
        <Menu scroll={Scroll} getDocumentScrollPosition={this.getDocumentScrollPosition} activeMenuItem={this.state.activeMenuItem} visible={this.state.isMenuVisible} scrollToSection={this.scrollToSection}/>
        <Section sectionNumber={1} >
          <TopSection scrollToSection={this.scrollToSection}/>
        </Section>
      <Section id='skills-section-container' sectionNumber={2} backgroundColor='lightgray' >
          <SkillsSection />
        </Section>
        <Section sectionNumber={3} backgroundColor='color1 more-height'>
          <ProjectsSection isSafari={this.state.isSafari}/>
        </Section>
        <Section sectionNumber={4} backgroundColor='color2'>
          <ContactSection actions={this.props.actions}/>
        </Section>
      </div>
    )
  }
}

export default App
