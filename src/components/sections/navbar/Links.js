import React from 'react'
import Link from './Link'

function Links(props) {
    let { links } = props
    return (
        <ul>
            {links.map((link) =>
                <Link linkName={link} />
            )}
        </ul>
    )
}

export default Links