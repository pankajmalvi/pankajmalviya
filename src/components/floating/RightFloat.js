import React from 'react'

function RightFloat({ mail }) {
    return (
        <article className="float-right">
            <a href={`mailto:${mail}`} target="_blank" rel="noreferrer">{mail}</a>
        </article >
    )
}

export default RightFloat