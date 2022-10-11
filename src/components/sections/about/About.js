import React from 'react'
import AboutText from './AboutText'
import Skills from './Skills'
import './styles/About.scss'
import imageSelf from './../../../assets/img-self.jpg'
import SectionHeading from '../../common/SectionHeading'

function About({ skills, about }) {
    return (
        <section id="about" className='section-about'>
            <SectionHeading heading={"About Me"} />
            <div className="section-content">
                <div className="section-content-left">
                    {about.map((text, idx) => <AboutText text={text} key={idx} />)}
                    <p className='about-text-heading'>Familiar with:</p>
                    <Skills skills={skills} />
                </div>
                <div className="section-content-right">
                    <div className="image-container">
                        <img src={imageSelf} alt="Profile Self" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About