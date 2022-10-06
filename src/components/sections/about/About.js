import React from 'react'
import AboutText from './AboutText'
import Skills from './Skills'
import './styles/About.scss'
import imageSelf from './../../../assets/img-self.jpg'
import SectionHeading from '../SectionHeading'

function About({ skills, about }) {
    return (
        <section id="section-about" className='section-about'>
            <SectionHeading heading={"About Me"} />
            <div class="section-content">
                <div className="section-content-left">
                    {about.map((text, idx) => <AboutText text={text} key={idx} />)}
                    <p className='about-text-heading'>Skills I am familiar with or have experience with:</p>
                    <Skills skills={skills} />
                </div>
                <div className="section-content-right">
                    <div class="image-container">
                        <img src={imageSelf} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About