import React from 'react'
import { useState } from 'react'
import SectionHeading from '../../common/SectionHeading'
import Project from './Project'
import './styles/Projects.scss'

function Projects({ projects }) {

    const [showMore, setShowMore] = useState(true)
    return (
        <section id="work" className='section-project'>
            <SectionHeading heading={"Some Things I've Built"} />
            <ul className="projects">
                {
                    showMore ?
                        projects.slice(0, 6).map((project, idx) => <Project project={project} key={idx} />
                        )
                        :
                        projects.map((project, idx) => <Project project={project} key={idx} />
                        )
                }
            </ul>
            <div className="project-button">

                <button className='project-button' onClick={() => setShowMore(!showMore)}>{showMore ? 'Show More' : 'Show Less'}</button>
            </div>
        </section>
    )
}

export default Projects