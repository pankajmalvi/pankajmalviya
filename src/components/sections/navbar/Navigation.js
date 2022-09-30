import React from 'react'
import Links from './Links'
import ResumeButton from './ResumeButton'

function Navigation(props) {
    return (
        <div className='navigation-links'>
            <Links links={props.links} />
            <ResumeButton resumeLink={props.resumeLink} />
        </div>
    )
}

export default Navigation