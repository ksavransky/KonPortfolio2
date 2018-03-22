import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Masonry from 'react-masonry-component'
import HipstergramPhoto from '../../images/projects/hipstergram.png'
import MarkovPhoto from '../../images/projects/markov.png'
import PongPhoto from '../../images/projects/pong.png'
import AlgoPhoto from '../../images/projects/algotracker.png'
import './projectsSection.css'

class ProjectsSection extends Component {
  constructor(props){
    super(props)

  }

  render() {
    return (
      <div id='projects-section'>
        <h2 id='title'>Some of My Solo Projects</h2>
        <Masonry
            className='masonry-container'
            options={{
                transitionDuration: 500,
                fitWidth: true
            }}>
            <div>
              <div className='project-card'>
                <h4>Hipstergram</h4>
                <img src={HipstergramPhoto} />
                <h6>React/Redux, Ruby on Rails, Postgres</h6>
              </div>
              <div className='project-card'>
                <h4>Super Pong</h4>
                <img src={PongPhoto} />
                <h6>Javascript, Canvas</h6>
              </div>
            </div>
            <div>
              <div className='project-card'>
                <h4>Markov Tweets</h4>
                <img src={MarkovPhoto} />
                <h6>React/Redux, NodeJS, Twitter API</h6>
              </div>
              <div className='project-card'>
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
