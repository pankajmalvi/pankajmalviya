import React from 'react'
import ProjectDescription from './ProjectDescription'
import ProjectHeading from './ProjectHeading'
import ProjectIcons from './ProjectIcons'
import SkillUsed from './SkillUsed'

function Project({ project }) {
    return (
        <div className="project">
            <ProjectIcons
                liveLink={project["live-project-link"]}
                githubLink={project["github-link"]}
            />
            <ProjectHeading heading={project["project-name"]} />
            <ProjectDescription description={project["project-description"]} />
            <SkillUsed skills={project.skills} />
        </div>
    )
}

export default Project