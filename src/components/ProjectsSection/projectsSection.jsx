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
                <h5>React/Redux, Ruby on Rails, Postgres</h5>
              </div>
              <div className='project-card'>
                <h4>Markov Tweets</h4>
                <img src={MarkovPhoto} />
                <h5>React/Redux, NodeJS, Twitter API</h5>
              </div>
            </div>
            <div>
              <div className='project-card'>
                <h4>Super Pong</h4>
                <img src={PongPhoto} />
                <h5>Javascript, Canvas</h5>
              </div>
              <div className='project-card'>
                <h4>AlgoTracker</h4>
                <img src={AlgoPhoto} />
                <h5>Javascript, D3</h5>
              </div>
            </div>
        </Masonry>
      </div>
    )
  }
}

export default ProjectsSection
