import React from 'react'
import SectionHeading from '../../common/SectionHeading'
import ContactButton from './ContactButton'
import ContactDescription from './ContactDescription'
import ContactInnerHeading from './ContactInnerHeading'
import './styles/Contact.scss'

function Contacts({ mail }) {


    return (
        <section id="contact" className='section-contact'>
            <SectionHeading heading={"What's Next?"} type2={true} />
            <ContactInnerHeading />
            <ContactDescription description={"My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!"} />
            <ContactButton mailId={mail} />
        </section>
    )
}

export default Contacts