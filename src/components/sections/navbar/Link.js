import React from 'react'

function Link(props) {
    return (
        <a href={`#{props.linkName}`}>
            {props.linkName}
        </a>
    )
}
export default Link