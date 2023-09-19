import * as React from 'react'
import { Link } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../scss/index.scss'
import Navbar from '../components/navbar'
import projectData from '../../content/projects.json'

const ProjectPage = () => {
  return (
    <main>
      <Navbar />
      <div className="container">
        <div>
          <h1 className="home-name">Projects</h1>
          <Link to="archive/" className="proj-link hover-underline-animation">visit the archive</Link>
        </div>
        <div className="row-col-sm-1 row-col-md-1 row-col-lg-1 g-4 project-start">
          {projectData.projects.map((project, index) => {
            return (
              <div className="col">
                <div className="card proj-body">
                  <div className="card-body">
                    <h5 className="card-title proj-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                    <a href={project.github} target="_blank" rel="noreferrer" className="button-git git">github</a>
                    {project.link !== "NA" &&
                      <a href={project.link} target="_blank" rel="noreferrer" className="button-demo demo">demo</a>
                    }
                    <p className="card-text card-techused">
                      {project.tech_used.map((tech, index) => {
                        return <span className="techused-font">{tech}</span>
                      })}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}

        </div>
      </div>
    </main>
  )
}
export default ProjectPage
