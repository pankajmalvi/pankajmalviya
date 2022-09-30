import React from 'react'

function Link(props) {
    return (
        <li>
            <a className='nav-link' href={`#${props.linkName.toLowerCase()}`}>
                {props.linkName}
            </a>
        </li>
    )
}
export default Link