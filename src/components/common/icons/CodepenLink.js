import React from 'react'
import CodepenIcon from './CodepenIcon'

function CodepenLink({ link }) {
    return (
        <a href={link} target='_blank' rel="noreferrer">
            <CodepenIcon />
        </a>
    )
}

export default CodepenLink