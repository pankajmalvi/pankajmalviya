import React from 'react'
import AboutText from './AboutText'
import Skills from './Skills'
import './styles/About.scss'

function About({ skills, about }) {
    return (
        <section id="section-about" className='section-about'>
            <h2 className='section-heading section-heading-numbered'>About Me</h2>
            {about.map((text, idx) => <AboutText text={text} key={idx} />)}
            <p className='about-text-heading'>Skills I am familiar with or have experience with:</p>
            <Skills skills={skills} />
        </section>
    )
}

export default About