import React from 'react'
import Link from './Link'

function Links(props) {
    let { links } = props
    return (
        <ol>
            {links.map((link) =>
                <Link linkName={link} />
            )}
        </ol>
    )
}

export default Links