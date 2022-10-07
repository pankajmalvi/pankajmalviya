import React from 'react'
import SectionHeading from '../../common/SectionHeading'
import Project from './Project'
import './styles/Projects.scss'

function Projects({ projects }) {
    return (
        <section id="section-project" className='section-project'>
            <SectionHeading heading={"Some Things I've Built"} />
            <ul className="projects">
                {projects.map((project, idx) =>
                    <Project project={project} key={idx} />
                )}
            </ul>
        </section>
    )
}

export default Projects