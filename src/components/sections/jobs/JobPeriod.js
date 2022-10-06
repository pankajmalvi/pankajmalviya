import React from 'react'

function JobPeriod({ jobStart, jobEnd }) {
    function dateFormat(date) {
        date = new Date(date);
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        let month = months[date.getMonth()];
        let year = date.getFullYear();

        return `${month} ${year}`

    }
    jobStart = dateFormat(jobStart)
    return (
        <span className="job-period">{jobStart} - {jobEnd}</span>
    )
}

export default JobPeriod