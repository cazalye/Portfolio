import React, { Component } from 'react';

type NavbarStylerProps = {
    whiteTitle: boolean;
    orangeTitle: boolean;
    blueTitle: boolean;
    mixedTitle: boolean;
};

class NavbarStyler extends Component<NavbarStylerProps> {
    static defaultProps = {
        whiteTitle: false,
        orangeTitle: false,
        blueTitle: false,
        mixedTitle: false,
    };
    componentDidMount() {
        console.log("loading")
        document.body.classList.toggle('white-title', this.props.whiteTitle);
        document.body.classList.toggle('orange-title', this.props.orangeTitle);
        document.body.classList.toggle('blue-title', this.props.blueTitle);
        document.body.classList.toggle('mixed-title', this.props.mixedTitle);
    }
    componentWillUnmount() {
        document.body.classList.remove('white-title');
        document.body.classList.remove('orange-title');
        document.body.classList.remove('blue-title');
        document.body.classList.remove('mixed-title');
    }
    render() {
        return null;
    }
}

export default NavbarStyler;