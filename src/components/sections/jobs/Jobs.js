import React from 'react'
import SectionHeading from '../../common/SectionHeading'
import Job from './Job'
import './styles/Jobs.scss'

function Jobs({ career }) {
    return (
        <section id="experience" className='section-job'>
            <SectionHeading heading={"Where I've Worked"} />
            <div className="jobs">
                {career.map((career, idx) =>
                    <Job career={career} key={idx} />
                )}
            </div>
        </section>

    )
}

export default Jobs