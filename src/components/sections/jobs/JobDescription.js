import React from 'react'

function JobDescription({ description }) {
    return (
        <div className="job-description">
            {description.map((desc) =>
                <p className="description">{desc}</p>
            )}
        </div>
    )
}

export default JobDescription