import React from 'react'

function Link(props) {
    return (
        <li>
            <a href={`#${props.linkName.toLowerCase()}`}>
                {props.linkName}
            </a>
        </li>
    )
}
export default Link