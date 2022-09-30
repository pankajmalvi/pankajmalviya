import React from 'react'
import Navbar from '../navbar/Navbar'

function Header(props) {
    return (
        <header>
            <Navbar resumeLink={props.resumeLink} />
        </header>
    )
}

export default Header