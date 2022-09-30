import React, { Component } from 'react'
import Links from './Links'
import Logo from './Logo'
import ResumeButton from './ResumeButton'
import './styles/Navbar.scss'

export class Navbar extends Component {

    links = [
        "About",
        "Experience",
        "Work",
        "Contact"
    ]
    render() {
        return (
            <nav className="navbar">
                <Logo />
                <Links links={this.links} />
                <ResumeButton resumeLink={this.props.resumeLink} />
            </nav>
        )
    }
}

export default Navbar