import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Masonry from 'react-masonry-component'
import Modal from 'react-responsive-modal'
import HipstergramPhoto from '../../images/projects/hipstergram.png'
import MarkovPhoto from '../../images/projects/markov.png'
import PongPhoto from '../../images/projects/pong.png'
import AlgoPhoto from '../../images/projects/algotracker.png'
import HipstergramVideo from '../../video/hipstergram.webm'
import MarkovVideo from '../../video/markov.webm'
import PongVideo from '../../video/pong.webm'
import AlgoVideo from '../../video/algo.webm'
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
    video: HipstergramVideo,
    photo: HipstergramPhoto
  },
  pong: {
    title: 'Super Pong',
    about: 'Super Pong is a web implementation of the classic video game Pong. It has cool 80s styling and some fun bonus features.',
    tech: 'Super Pong was developed using Javascript, Canvas, and HTML/CSS',
    liveURL: 'http://preacher-wolf-83250.bitballoon.com/',
    gitURL: 'https://github.com/ksavransky/SuperPong',
    video: PongVideo,
    photo: PongPhoto
  },
  algoTracker: {
    title: 'AlgoTracker',
    about: 'AlgoTracker graphs the run time of various algorithms across numerous inputs. It graphs sorting algorithm performance, comparing the run time of six popular sorting algorithms based on five randomized unsorted arrays of different lengths. The application also allows a user to write up to two custom Javascript functions and compare their run times against each other across five inputs via a graph and a simulated console result log.',
    tech: 'AlgoTracker was developed using Javascript, D3, and HTML/CSS.',
    liveURL: 'http://jockey-enlistment-68560.bitballoon.com/',
    gitURL: 'https://github.com/ksavransky/AlgoTracker',
    video: AlgoVideo,
    photo: AlgoPhoto

  },
  markov: {
    title: 'Markov Chain Tweets',
    about: 'Markov Chain Tweets is a web application that allows you to search for a twitter user and see their latest 10 tweets! Then, using a Markov Chain algorithm, you can generate new tweets based on the text of the real tweets. You can also re-order the last ten tweets based on a customizable Markov Chain controlled by your inputs.',
    tech: 'Markov Chain Tweets was built using React/ES6, Redux, NodeJS, the Twitter API, Webpack, Foundation, and Flexbox CSS.',
    liveURL: 'https://markovtweets.herokuapp.com/',
    gitURL: 'https://github.com/ksavransky/MarkovTweets',
    video: MarkovVideo,
    photo: MarkovPhoto
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
      if (!this.props.isSafari) {
        this.refs.player.play()
      }
    })
  }

  onCloseModal = () => {
    this.setState({ open: false })
  }

  render() {
    const { open } = this.state
    let videoOrPhoto = <Player ref="player" src={projectData[this.state.project].video} loop autoplay />
    if (this.props.isSafari) {
      videoOrPhoto = <img src={projectData[this.state.project].photo} />
    }

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
                {videoOrPhoto}
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

ProjectsSection.propTypes = {
  isSafari: PropTypes.bool
}


export default ProjectsSection
