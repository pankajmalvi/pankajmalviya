import React from 'react'
import TwitterIcon from './TwitterIcon'

function TwitterLink({ link }) {
    return (
        <a href={link} target='_blank' rel="noreferrer">
            <TwitterIcon />
        </a>
    )
}

export default TwitterLink