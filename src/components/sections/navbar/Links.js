import React from 'react'
import Link from './Link'

function Links(props) {
    let { links } = props
    return (
        <ul>
            {links.map((link, idx) =>
                <Link linkName={link} key={idx} />
            )}
        </ul>
    )
}

export default Links