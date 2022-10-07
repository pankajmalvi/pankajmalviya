import React from 'react'
import LinkedInIcon from './LinkedInIcon'

function LinkedInLink({ link }) {
    const style = {
        display: 'none'
    }
    return (
        <a href={link} target='_blank' rel="noreferrer" style={link ? {} : style}>
            <LinkedInIcon />
        </a>
    )
}

export default LinkedInLink