import React from 'react'
import FolderIcon from './FolderIcon'
import ProjectLinks from './ProjectLinks'

function ProjectIcons(props) {
    return (
        <div className='project-icon-header'>
            <FolderIcon />
            <ProjectLinks links={props} />
        </div>
    )
}

export default ProjectIcons