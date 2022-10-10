import React from 'react'
import GithubIcon from './GithubIcon'

function GithubLink({ link }) {

    const displayNone = {
        display: 'none'
    }
    const displayBlock = {
        display: 'block'
    }
    return (
        <>
            <a href={link} target='_blank' rel="noreferrer" style={link ? displayBlock : displayNone}>
                <GithubIcon />
            </a>
        </>
    )
}

export default GithubLink