import React, {Component} from "react";
import "./footer.scss";

class Footer extends Component{
    render(){
        return(
            <div className="footer-links">
                {/* <a href="https://www.instagram.com/cazalye" rel="noopener noreferrer" target="_blank">
                    <i className="fab fa-instagram" aria-hidden="true" />
                </a>
                <a href="https://www.pinterest.com.au/cazalye/" rel="noopener noreferrer" target="_blank">
                    <i className="fab fa-pinterest-p" aria-hidden="true" />
                </a> */}
                <a href="https://github.com/cazalye" rel="noopener noreferrer" target="_blank">
                    <i className="fab fa-github" aria-hidden="true" />
                </a>
                <a href="https://www.linkedin.com/in/emmacazaly/" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-linkedin" aria-hidden="true" />
                </a>
                <a href="mailto:e.cazaly7@gmail.com" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-envelope" aria-hidden="true" />
                </a>
                {/* <a href="tel:+358417077974" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-phone" aria-hidden="true" />
                </a> */}
                {/* <a href="tel:+61421698344" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-phone" aria-hidden="true" />
                </a> */}
                {/* <a href="http://cazalye.com" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-globe" aria-hidden="true" />
                </a> */}
            </div>
        );
    }
}

export default Footer;