import React from 'react'

function JobDescription({ description }) {
    return (
        <ul className="job-description">
            {description.map((desc) =>
                <li>{desc}</li>
            )}
        </ul>
    )
}

export default JobDescription