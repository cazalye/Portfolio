import React, {Component} from 'react';
import "./contact.scss";
import Footer from "../footer/footer";

class Contact extends Component {
    render() {
        return(
            <div className="contact-background">
                <div className="contact-content">
                    <h1>Contact Me</h1>
                    <hr/>
                    <h5>  <a href="tel:+61 421698344">  +61 421698344</a></h5>
                    <h5>  <a href="mailto:e.cazaly7@gmail.com"> e.cazaly7@gmail.com </a></h5>
                    <a href="https://github.com/cazalye" rel="noopener noreferrer" target="_blank">
                        <i className="fab fa-github" aria-hidden="true" />
                    </a>
                    <a href="https://www.linkedin.com/in/emmacazaly/" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-linkedin" aria-hidden="true" />
                    </a>
                
              
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Contact;