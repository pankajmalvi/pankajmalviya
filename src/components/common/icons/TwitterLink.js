import React from 'react'
import TwitterIcon from './TwitterIcon'

function TwitterLink({ link }) {
    const style = {
        display: 'none'
    }
    return (
        <a href={link} target='_blank' rel="noreferrer" style={link ? {} : style}>
            <TwitterIcon />
        </a>
    )
}

export default TwitterLink