import React from 'react'
import ProjectDescription from './ProjectDescription'
import ProjectHeading from './ProjectHeading'
import ProjectIcons from './ProjectIcons'
import SkillUsed from './SkillUsed'

function Project({ project }) {
    return (
        <li className="project">
            <ProjectIcons
                liveLink={project["live-project-link"]}
                githubLink={project["github-link"]}
            />
            <a href={project["live-project-link"]} target="_blank" rel="noopener noreferrer">
                <ProjectHeading heading={project["project-name"]} />
                <ProjectDescription description={project["project-description"]} />
                <SkillUsed skills={project.skills} />
            </a >
        </li>
    )
}

export default Project