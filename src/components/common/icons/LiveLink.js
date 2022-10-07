import React from 'react'
import LinkIcon from './LinkIcon'

function LiveLink({ link }) {
    return (
        <a href={link} target='_blank' rel="noreferrer">
            <LinkIcon />
        </a>
    )
}

export default LiveLink