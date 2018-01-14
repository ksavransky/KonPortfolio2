import React, { Component } from 'react'
import Menu from '../Menu/menu.jsx'
import Section from '../Section/section.jsx'
import TopSection from '../TopSection/topSection.jsx'
import './app.css'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isMenuVisible: true
    }
    this.documentScrollTop = 0

    this.documentScrollListener = this.documentScrollListener.bind(this)
  }

  componentDidMount () {
    window.addEventListener('scroll', this.documentScrollListener)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.documentScrollListener)
  }

  documentScrollListener () {
    this.menuVisibilityControl()
    this.documentScrollTop = document.documentElement.scrollTop
  }

  menuVisibilityControl () {
    const newScrollTop = document.documentElement.scrollTop
    if (this.documentScrollTop < newScrollTop && this.state.isMenuVisible) {
      this.setState({
        isMenuVisible: false
      })
    } else if (this.documentScrollTop > newScrollTop && !this.state.isMenuVisible) {
      this.setState({
        isMenuVisible: true
      })
    }
  }

  render() {
    return (
      <div id='app'>
        <Menu visible={this.state.isMenuVisible}/>
        <Section>
          <TopSection />
        </Section>
        <Section backgroundColor='color2'>
          You
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
