import React from 'react'

function ContactButton({ mailId }) {
    return (
        <a href={`mailto:${mailId}`}>Say Hello</a>
    )
}

export default ContactButton