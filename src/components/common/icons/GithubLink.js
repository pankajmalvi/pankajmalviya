import React from 'react'
import GithubIcon from './GithubIcon'

function GithubLink({ link }) {

    const style = {
        display: 'none'
    }
    return (
        <>
            <a href={link} target='_blank' rel="noreferrer" style={link ? {} : style}>
                <GithubIcon />
            </a>
        </>
    )
}

export default GithubLink