import React, { Component } from 'react';
import "./about.scss";
import Footer from "../footer/footer";

class About extends Component {
    render() {
        return(
            <div className="aboutme-background">
                <div className="aboutme-image"> 
                    <img className="me-portrait" src="/img/me_portrait2.jpg" height="600px" width="auto" alt="portrait of me"/>
                </div>
                <div className="aboutme-text">
                    <h2>I'm a designer and front-end developer with a passion for photography and a background in data science. </h2>
                    <p>I create evocative travel websites, catchy copy and enticing e-commerce sites. I have a solid knowledge of the entire web development process and leverage my analytical skills and strong attention to detail to deliver highly effective, pixel perfect web solutions. I build new websites from start to finish and specialise in: </p>
                        
                </div>
                <Footer/>
            </div>

        )
    }
}
export default About;