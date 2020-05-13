import React, { Component } from 'react';
import './projectDetail.scss';

class Portfolio extends Component {
    render() {
        return (
            <div id="project-details">
                <div className="feature-image">
                    <img src="/img/Mountains.jpg" height="auto" width="100%" alt="cazalye travel blog"/>
                </div>
                {/* <Breadcrumbs maxItems={4} aria-label="breadcrumb" className="breadcrumbs">
                        <Link to="/" color="inherit">
                            Home
                        </Link>
                        <Link to="/photoDiaries" color="inherit">
                            Photo Diaries
                        </Link>
                    </Breadcrumbs> */}
                <div className="project-summary"> 
                    <h2>Portfolio Website</h2>
                    <h3>Client</h3>
                    <p>My own portfolio</p>
                    <h3>Date</h3>
                    <p>May 2020</p>
                    <h3>My Role</h3>
                    <p>Design, Development</p>
                </div>

                <div className="project-content">
                    <h3>The Brief</h3>
                    <p>I began this site as my first experience of React.. with JS and CSS. Later after my blog site I came back to the portfolio, converted it to TS and SCSS and updated the content</p>
                    <h3>The Approach</h3>
                    <p>React, TS, SCSS</p>
                    <h3>The Results</h3>
                    <p>A modern minimal-style portfolio to showcase my skills and projects</p>
                </div>
            </div>
        );
    }
}

export default Portfolio;