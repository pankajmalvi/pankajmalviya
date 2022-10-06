import React from 'react'
import LinkIcon from '../../common/LinkIcon'

function LiveLink({ link }) {
    return (
        <a href={link}>
            <LinkIcon />
        </a>
    )
}

export default LiveLink