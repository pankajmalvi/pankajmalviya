import React from 'react'

function SectionHeading({ heading, type2 }) {
    return (
        <h2 className={`section-heading section-heading-numbered ${type2 ? 'section-heading-small' : ''}`}>{heading}</h2>

    )
}

export default SectionHeading