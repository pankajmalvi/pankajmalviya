import React from 'react'

function FooterText() {
    const style = {
        color: 'var(--green)'
    }
    return (
        <p>Built by <span style={{ color: 'var(--green)' }}>Pankaj Malviya</span> |
            Design inspired by <a style={style} href="http://brittanychiang.com" target='_blank' rel="noreferrer">Brittany Chiang</a></p>
    )
}

export default FooterText