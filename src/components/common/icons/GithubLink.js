import React from 'react'
import GithubIcon from './GithubIcon'

function GithubLink({ link }) {
    return (
        <a href={link} target='_blank' rel="noreferrer">
            <GithubIcon />
        </a>
    )
}

export default GithubLink