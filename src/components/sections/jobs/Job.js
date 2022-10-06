import React from 'react'
import CompanyName from './CompanyName'
import JobDescription from './JobDescription'
import JobDesignation from './JobDesignation'
import JobPeriod from './JobPeriod'

function Job({ career }) {
    return (
        <div className='job'>
            <h3 className='job-heading'>
                <JobDesignation designation={career.designation} />
                <CompanyName companyName={career.company} />
            </h3 >
            <JobPeriod jobStart={career.from} jobEnd={career.to} />
            <JobDescription description={career.description} />
        </div>
    )
}

export default Job
