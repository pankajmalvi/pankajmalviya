import React from 'react'
import InstagramIcon from './InstagramIcon'

function InstagramLink({ link }) {
    return (
        <a href={link} target='_blank' rel="noreferrer">
            <InstagramIcon />
        </a>
    )
}

export default InstagramLink