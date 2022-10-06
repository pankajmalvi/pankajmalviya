import React from 'react'
import GithubIcon from '../../common/GithubIcon'
import LinkIcon from '../../common/LinkIcon'
import GithubLink from './GithubLink'
import LiveLink from './LiveLink'

function ProjectLinks({ links }) {
    return (
        <div className="icons-container">
            <GithubLink link={links.githubLink} />
            <LiveLink link={links.liveLink} />
        </div>
    )
}

export default ProjectLinks