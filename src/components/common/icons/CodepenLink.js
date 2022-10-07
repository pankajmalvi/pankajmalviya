import React from 'react'
import CodepenIcon from './CodepenIcon'

function CodepenLink({ link }) {
    const style = {
        display: 'none'
    }
    return (
        <a href={link} target='_blank' rel="noreferrer" style={link ? {} : style}>
            <CodepenIcon />
        </a>
    )
}

export default CodepenLink