import React from 'react'
import LinkedInIcon from './LinkedInIcon'

function LinkedInLink({ link }) {
    return (
        <a href={link} target='_blank' rel="noreferrer">
            <LinkedInIcon />
        </a>
    )
}

export default LinkedInLink