import React from 'react'
import LeftFloat from '../../floating/LeftFloat'
import RightFloat from '../../floating/RightFloat'
import FooterText from './FooterText'
import './styles/Footer.scss'

function Footer() {
    return (
        <footer className='footer'>
            <LeftFloat />
            <FooterText />
            <RightFloat mail={"samplemail@gmail.com"} />
        </footer>
    )
}

export default Footer