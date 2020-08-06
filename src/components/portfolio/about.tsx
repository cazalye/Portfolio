import React, { Component } from 'react';
import "./about.scss";
import Footer from "../footer/footer";

class About extends Component {
    render() {
        return(
            <div className="aboutme-background">
                <div className="aboutme-image-background"> 
                    <img className="me-portrait" src="/img/me_small.jpg" height="600px" width="auto" alt="portrait of me"/>
                    {/* <div className="me-portrait"/> */}
                </div>
                <div className="aboutme-text">
                    <h2 className="title-long">I'm a front-end React developer with a passion for photography and design.</h2>
                    <h2 className="title-short">A <br/>designer <br/>who <br/> codes</h2>
                    <p>I combine my analytical skills and strong attention to detail, honed from my career in data science, with modern development tools and an understanding of UX Design, to build effective, pixel perfect web solutions from start to finish. My experience includes:</p>
                        <ul>
                            <li> Discussing vision, scope and style with clients</li>
                            <li> Web Design including wireframing and prototyping</li>
                            <li> Front-End Development: React, JavaScript/TypeScript, HTML, CSS (SASS)</li>
                            <li> WordPress and  WooCommerce</li>
                            <li> Deployment, including hosting & domain name transfer, site security, payment gateways</li>
                            <li> User Experience including Usability testing</li>
                            <li> SEO, Google Indexing & Google Analytics</li>
                        </ul>


                </div>
                <Footer/>
            </div>

        )
    }
}
export default About;