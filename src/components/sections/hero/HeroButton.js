import React from 'react'

function HeroButton(props) {
    return (
        <button>
            <a href={props.buttonLink} target='_blank' rel='noreferrer'>
                Check Out
            </a>
        </button>
    )
}

export default HeroButton