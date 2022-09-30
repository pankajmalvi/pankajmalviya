import React from 'react'
import HeroButton from './HeroButton'
import HeroDescription from './HeroDescription'
import HeroGreeting from './HeroGreeting'
import HeroName from './HeroName'
import HeroTagline from './HeroTagline'
import './styles/Hero.scss'

function Hero(props) {
    let details = props.personalDetails
    return (
        <section id="section-hero" className='section-hero'>
            <HeroGreeting />
            <HeroName name={details.name} />
            <HeroTagline tagline={details.tagline} />
            <HeroDescription description={details.description} />
            <HeroButton buttonLink={details["resume-link"]} />
            {
                /* Greeting
                Name
                Tagline
                Profile Description
                Resume Link Can be included not necessary */
            }
        </section>
    )
}

export default Hero