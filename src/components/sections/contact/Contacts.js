import React from 'react'
import SectionHeading from '../../common/SectionHeading'
import ContactButton from './ContactButton'
import ContactDescription from './ContactDescription'
import ContactInnerHeading from './ContactInnerHeading'

function Contacts({ mail }) {


    return (
        <section id="section-contact">
            <SectionHeading heading={"What's Next?"} type2={true} />
            <ContactInnerHeading />
            <ContactDescription description={"Add Description"} />
            <ContactButton mailId={mail} />
        </section>
    )
}

export default Contacts