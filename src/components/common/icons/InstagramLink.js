import React from 'react'
import InstagramIcon from './InstagramIcon'

function InstagramLink({ link }) {
    const style = {
        display: 'none'
    }
    return (
        <a href={link} target='_blank' rel="noreferrer" style={link ? {} : style}>
            <InstagramIcon />
        </a>
    )
}

export default InstagramLink