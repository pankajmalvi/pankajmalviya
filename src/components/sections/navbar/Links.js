import React from 'react'
import Link from './Link'

function Links(props) {
    let { links } = props
    return (
        <div>
            {links.map((link) =>
                <Link linkName={link} />
            )}
        </div>
    )
}

export default Links