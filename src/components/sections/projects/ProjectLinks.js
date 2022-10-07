import React from 'react'
import GithubLink from '../../common/icons/GithubLink'
import LiveLink from '../../common/icons/LiveLink'

function ProjectLinks({ links }) {
    return (
        <div className="icons-container">
            <GithubLink link={links.githubLink} />
            <LiveLink link={links.liveLink} />
        </div>
    )
}

export default ProjectLinks