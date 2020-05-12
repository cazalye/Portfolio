import React, { Component } from 'react';
import './projectDetail.scss';

class Portfolio extends Component {
    render() {
        return (
            <div id="project-details">
                <div className="project-content">
                    <h2>Portfolio Site</h2>
                    <h3>The Brief</h3>
                    <p>What the brief is - Include a few photos? ie. images of the boys</p>
                    <h3>The Approach</h3>
                    <p>How I appoached it, including the stack</p>
                    <p>My specific role/tasks: ie for brands it includes photogprahy etc. For Blog describe what I did vs what Filippo did. Remote collaboration with Visual Code Studio</p>
                    <h3>The Results</h3>
                    <p>What was delivered, testimonial, increased sales, link website</p>
                </div>
            </div>
        );
    }
}

export default Portfolio;