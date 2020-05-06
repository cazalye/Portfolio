import React, { Component } from 'react';
import "./landing.scss";
import Footer from "../footer/footer";

class Landing extends Component {
    render() {
        return (
            <div className="landing">
                <div className="job-title">
                    <h1> Emma Cazaly</h1>
                    <h2>Web Designer & Front-end Developer</h2>
                    <p> HTML | CSS / SASS | JavaScript / Typscript | React | e-commerce | Adobe Suite | Photography </p>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Landing;