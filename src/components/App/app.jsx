import React, { Component } from 'react'
import _ from 'lodash'
import Section from '../Section/section.jsx'
import Menu from '../Menu/menu.jsx'
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
        <Section backgroundColor='white'>
          Hi
        </Section>
        <Section backgroundColor='purple'>
          You
        </Section>
        <Section backgroundColor='white'>
          Cool
        </Section>
        <Section backgroundColor='purple'>
          Dude
        </Section>
      </div>
    )
  }
}


export default App
