import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Masonry from 'react-masonry-component'
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
              <div className='project-card'></div>
              <div className='project-card'></div>
            </div>
            <div>
              <div className='project-card'></div>
              <div className='project-card'></div>
            </div>
        </Masonry>
      </div>
    )
  }
}

export default ProjectsSection
