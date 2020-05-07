import React, { Component } from 'react';
import "./about.scss";
import Footer from "../footer/footer";

class About extends Component {
    render() {
        return(
            <div className="aboutme-background">
                <div className="aboutme-text">
                    <h2>I'm a designer and front-end developer with a passion for photography and a background in data science. </h2>
                    <p>I create evocative travel websites, catchy copy and enticing e-commerce sites. I have a solid knowledge of the entire web development process and leverage my analytical skills and strong attention to detail to deliver highly effective, pixel perfect web solutions. I build new websites from start to finish and specialise in: </p>
                    <ul>    
                        <li> Discussing vision, scope, style and ideas with clients</li>
                        <li> Web Design including wireframing and prototyping</li>
                        <li> Front End Development including JavaScript/TypeScript, HTML, CSS (SASS)</li>
                        <li> Deployment including hosting & domain name, site security, payment gateways</li>
                        <li> User Experience including Usability testing</li>
                        <li> SEO optimisation</li>
                    </ul>
                    {/* <p> I hold both Australian and Italian citzenship.</p> */}
                    {/* <p>Visit me at <a href="https://www.cazalye.com">cazalye.com</a></p> */}
                </div>
                <Footer/>
            </div>

        )
    }
}
export default About;