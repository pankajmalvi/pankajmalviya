import React from 'react'

function JobDescription({ description }) {
    return (
        <ul className="job-description">
            {description.map((desc, idx) =>
                <li key={idx}>{desc}</li>
            )}
        </ul>
    )
}

export default JobDescription