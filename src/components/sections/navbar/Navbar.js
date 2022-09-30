import React, { Component } from 'react'
import Logo from './Logo'
import Navigation from './Navigation'
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
                <Navigation links={this.links} resumeLink={this.props.resumeLink} />
            </nav>
        )
    }
}

export default Navbar