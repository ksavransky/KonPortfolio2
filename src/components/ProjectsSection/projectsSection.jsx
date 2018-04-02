import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Masonry from 'react-masonry-component'
import Modal from 'react-responsive-modal'
import HipstergramPhoto from '../../images/projects/hipstergram.png'
import MarkovPhoto from '../../images/projects/markov.png'
import PongPhoto from '../../images/projects/pong.png'
import AlgoPhoto from '../../images/projects/algotracker.png'
import HipstergramVideo from '../../video/hipstergram.webm'
import { Player } from 'video-react'
import '../../../node_modules/video-react/dist/video-react.css'
import './projectsSection.css'

const projectData = {
  hipstergram: {
    title: 'Hipstergram',
    about: 'Hipstergram is a photo sharing web application inspired by Instagram, but tailored to Hipster sensibilities. It allows users to sign up, post photos, and search for and follow other users.',
    tech: 'Hipstergram was built using React, Redux, Ruby on Rails, Postgres, Webpack, ES6, and Flexbox CSS.',
    liveURL: 'https://thehipstergram.herokuapp.com',
    gitURL: 'https://github.com/ksavransky/Hipstergram',
    video: HipstergramVideo
  },
  pong: {
    title: 'Super Pong',
    about: 'About Super Pong',
    tech: 'Tech about Super Pong',
    liveURL: 'www.google.com',
    gitURL: 'www.google.com'
  },
  algoTracker: {
    title: 'AlgoTracker',
    about: 'About AlgoTracker',
    tech: 'Tech about AlgoTracker',
    liveURL: 'www.google.com',
    gitURL: 'www.google.com'
  },
  markov: {
    title: 'Markov Chain Tweets',
    about: 'About Markov Chain Tweets',
    tech: 'Tech about Markov Chain Tweets',
    liveURL: 'www.google.com',
    gitURL: 'www.google.com'
  }
}

class ProjectsSection extends Component {
  constructor(props){
    super(props)
    this.state = {
      open: false,
      project: 'hipstergram'
    }
  }

  onOpenModal = () => {
    this.setState({
      open: true
    }, () => {
      this.refs.player.play()
    })
  }

  onCloseModal = () => {
    this.setState({ open: false })
  }

  render() {
    const { open } = this.state
    return (
      <div id='projects-section'>
        <h2 id='title'>Some of My Solo Projects</h2>
        <Modal
          open={open}
          onClose={this.onCloseModal}
          styles={{modal: {height: 'calc(100vh - 100px)', overflow: 'scroll'}}}
          little
          >
          <div className='modal-content'>
            <h2 className='title'>{projectData[this.state.project].title}</h2>
            <div className='modal-body-top'>
              <div className='video-container'>
                <Player
                  ref="player"
                  src={projectData[this.state.project].video}
                  loop
                  autoplay
                  />
              </div>
              <div className='modal-links'>
                <a href={projectData[this.state.project].liveURL} target='_blank'><h4>Live</h4></a>
                <a href={projectData[this.state.project].gitURL} target='_blank'><h4>Github</h4></a>
              </div>
            </div>
            <div className='modal-body-bottom'>
              <h4>{projectData[this.state.project].about}</h4>
              <h4>{projectData[this.state.project].tech}</h4>
            </div>
          </div>
        </Modal>
        <Masonry
            className='masonry-container'
            options={{
                transitionDuration: 500,
                fitWidth: true
            }}>
            <div>
              <div
                onClick={ () => {
                this.setState({ project: 'hipstergram' }, () => {
                  this.onOpenModal()
                })}}
                className='project-card hipstergram'>
                <h4>Hipstergram</h4>
                <img src={HipstergramPhoto} />
                <h6>React/Redux, Ruby on Rails, Postgres</h6>
              </div>
              <div
                onClick={ () => {
                this.setState({ project: 'pong' }, () => {
                  this.onOpenModal()
                })}}
                className='project-card pong'>
                <h4>Super Pong</h4>
                <img src={PongPhoto} />
                <h6>Javascript, Canvas</h6>
              </div>
            </div>
            <div>
              <div
                onClick={ () => {
                this.setState({ project: 'markov' }, () => {
                  this.onOpenModal()
                })}}
                className='project-card markov'>
                <h4>Markov Chain Tweets</h4>
                <img src={MarkovPhoto} />
                <h6>React/Redux, NodeJS, Twitter API</h6>
              </div>
              <div
                onClick={ () => {
                this.setState({ project: 'algoTracker' }, () => {
                  this.onOpenModal()
                })}}
                className='project-card algo'>
                <h4>AlgoTracker</h4>
                <img src={AlgoPhoto} />
                <h6>Javascript, D3</h6>
              </div>
            </div>
        </Masonry>
      </div>
    )
  }
}

export default ProjectsSection
