import React, { Component } from 'react'
import Hero from '../hero/Hero'
import About from '../about/About'
import Jobs from '../jobs/Jobs'
import Projects from '../projects/Projects'
import Contacts from '../contact/Contacts'
import LeftFloat from '../../floating/LeftFloat'
import RightFloat from '../../floating/RightFloat'
import './styles/Main.scss'
import SectionHeading from '../SectionHeading'



class Main extends Component {
    data = this.props.data
    render() {
        return (
            <main className='main-content'>
                <Hero personalDetails={this.data["personal-details"]} />
                <About skills={this.data.skills} about={this.data.about} />
                <Jobs career={this.data.career} />
                <Projects projects={this.data["mini-projects"]} />
                <Contacts />
                <LeftFloat />
                <RightFloat />
            </main>
        )
    }
}

export default Main