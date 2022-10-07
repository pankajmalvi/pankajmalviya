import React from 'react'
import LeftFloat from '../../floating/LeftFloat'
import RightFloat from '../../floating/RightFloat'
import FooterText from './FooterText'
import './styles/Footer.scss'

function Footer({ links, email }) {
    return (
        <footer className='footer'>
            <LeftFloat links={links} />
            <FooterText />
            <RightFloat mail={email} />
        </footer>
    )
}

export default Footer