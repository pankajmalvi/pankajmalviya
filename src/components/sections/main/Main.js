import React, { Component } from 'react'
import Hero from '../hero/Hero'
import About from '../about/About'
import Jobs from '../jobs/Jobs'
import Projects from '../projects/Projects'
import Contacts from '../contact/Contacts'
import './styles/Main.scss'



class Main extends Component {
    data = this.props.data
    render() {
        return (
            <main className='main-content'>
                <Hero personalDetails={this.data["personal-details"]} />
                <About skills={this.data.skills} about={this.data.about} />
                <Jobs career={this.data.career} />
                <Projects projects={this.data["mini-projects"]} />
                <Contacts mail={this.data["personal-details"]["email"]} />
            </main>
        )
    }
}

export default Main