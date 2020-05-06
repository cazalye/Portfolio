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
                    {/* <h5> <strong>Phone:</strong> <a href="tel:+358 417077974">  +358 417077974</a></h5> */}
                    <h5> <strong>Phone:</strong> <a href="tel:+61 421698344">  +61 421698344</a></h5>
                    <h5> <strong>Email:</strong> <a href="mailto:e.cazaly7@gmail.com"> e.cazaly7@gmail.com </a></h5>
                    <h5> <strong>Web:</strong> <a href="https://cazalye.com" rel="noopener noreferrer" target="_blank"> cazalye.com </a></h5>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Contact;