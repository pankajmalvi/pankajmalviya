import React from 'react'
import Navbar from '../navbar/Navbar'
import './styles/Header.scss'

function Header(props) {
    return (
        <header className='header'>
            <Navbar resumeLink={props.resumeLink} />
        </header>
    )
}

export default Header