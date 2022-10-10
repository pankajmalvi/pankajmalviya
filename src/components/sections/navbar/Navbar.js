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


    styleShadow = {
        boxShadow: '0 10px 30px -10px var(--navy-shadow)',
        height: 'auto'
    };

    links = [
        "About",
        "Experience",
        "Work",
        "Contact"
    ]
    render() {
        return (
            <nav className={` ${!this.state.visible ? "navbar--hidden" : "navbar"}`} style={(this.state.prevScrollpos !== 0) ? this.styleShadow : { boxShadow: 'none' }} >

                <Logo />
                <Navigation links={this.links} resumeLink={this.props.resumeLink} />
            </nav>
        )
    }
}


export default Navbar