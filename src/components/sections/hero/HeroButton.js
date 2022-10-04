import React from 'react'

function HeroButton(props) {
    return (
        <a className='hero-button' href={props.buttonLink} target='_blank' rel='noreferrer'>
            Check Out My Resume!
        </a>
    )
}

export default HeroButton