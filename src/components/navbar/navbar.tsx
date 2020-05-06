import "./navbar.scss";
import React, { Component } from 'react';
import {Layout, Header, Navigation, Drawer} from 'react-mdl';
import {Link} from 'react-router-dom';

class Navbar extends Component<any, any> {
    hideToggle() {
        const selectorId = document.querySelector('.mdl-layout') as any;
        if (selectorId) {
            selectorId.MaterialLayout.toggleDrawer();
        }
    }
    render() {
        return (
            <Layout>
                <Header transparent={true} title={<Link to="/" className="header-title">cazalye </Link>}>
                    <Navigation className="header-nav">
                        <Link to="/resume">Resume</Link> 
                        <Link to="/projects">Projects</Link>
                        <Link to="/photography">Photography</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Header>
                <Drawer title={<Link onClick={() => this.hideToggle()} to="/" className="header-title">cazalye</Link> as any}>
                    <Navigation className="drawer-nav" >
                        <Link onClick={() => this.hideToggle()} to="/resume">Resume</Link> 
                        <Link onClick={() => this.hideToggle()} to="/projects">Projects</Link>
                        <Link onClick={() => this.hideToggle()} to="/photography">Photography</Link>
                        <Link onClick={() => this.hideToggle()} to="/about">About</Link>
                        <Link onClick={() => this.hideToggle()}to="/contact">Contact</Link>
                    </Navigation>
                </Drawer>
            </Layout>
        );
    }
}

export default Navbar;