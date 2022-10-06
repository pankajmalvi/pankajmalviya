import React from 'react'
import GithubIcon from '../../common/GithubIcon'

function GithubLink({ link }) {
    return (
        <a href={link}>
            <GithubIcon />
        </a>
    )
}

export default GithubLink