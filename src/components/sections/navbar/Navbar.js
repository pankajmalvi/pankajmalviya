import React, { Component } from "react";
import Logo from './Logo'
import Navigation from './Navigation'
import './styles/Navbar.scss'

export class Navbar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            prevScrollpos: window.pageYOffset,
            visible: true
        };
    }

    // Adds an event listener when the component is mount.
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    // Remove the event listener when the component is unmount.
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    // Hide or show the menu.
    handleScroll = () => {
        const { prevScrollpos } = this.state;

        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollpos > currentScrollPos;

        this.setState({
            prevScrollpos: currentScrollPos,
            visible
        });
    };


    links = [
        "About",
        "Experience",
        "Work",
        "Contact"
    ]
    render() {
        return (
            <nav className={` ${!this.state.visible ? "navbar--hidden" : "navbar"}`}>
                <Logo />
                <Navigation links={this.links} resumeLink={this.props.resumeLink} />
            </nav>
        )
    }
}


export default Navbar