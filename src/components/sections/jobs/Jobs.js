import React from 'react'
import SectionHeading from '../SectionHeading'
import Job from './Job'
import './styles/Jobs.scss'

function Jobs({ career }) {
    return (
        <section id="section-job">
            <SectionHeading heading={"Where I've Worked"} />
            {career.map((career, idx) =>
                <Job career={career} />
            )}
        </section>

    )
}

export default Jobs