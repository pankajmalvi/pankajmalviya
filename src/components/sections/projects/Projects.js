import React from 'react'
import SectionHeading from '../SectionHeading'
import ProjectIcons from './ProjectIcons'
import ProjectHeading from './ProjectHeading'
import ProjectDescription from './ProjectDescription'
import SkillUsed from './SkillUsed'
import Project from './Project'

function Projects({ projects }) {
    return (
        <section id="section-project">
            <SectionHeading heading={"Some Things I've Built"} />
            <div className="projects">
                {projects.map((project, idx) =>
                    <Project project={project} key={project} />
                )}
            </div>
        </section>
    )
}

export default Projects