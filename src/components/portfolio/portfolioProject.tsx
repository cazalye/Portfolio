import React, { Component } from 'react';
import './projectDetail.scss';
import {Tooltip,Icon} from 'react-mdl';
import {Link} from 'react-router-dom';
// import {Breadcrumbs} from '@material-ui/core';

class Portfolio extends Component {
    render() {
        return (
            <div id="project-details">
                <div className="image-overlay-portfolio"/>
                <div className="feature-image">
                    <img src="/img/Mountains.jpg" height="auto" width="100%" alt="cazalye travel blog"/>
                    {/* <img src="/img/portfolio_screenshot2.png" height="auto" width="100%" alt="cazalye travel blog"/> */}
                </div>
                {/* <Breadcrumbs maxItems={4} aria-label="breadcrumb" className="breadcrumbs">
                        <Link to="/" color="inherit">
                            Home
                        </Link>
                        <Link to="/projects" color="inherit">
                            Projects
                        </Link>
                    </Breadcrumbs> */}

                {/* <div className="job-title">
                    <h1> Emma Cazaly</h1>
                    <h2>Web Designer & Front-end Developer</h2>
                    <p> HTML | CSS / SASS | JavaScript / Typscript | React | e-commerce | Adobe Suite | Photography </p>
                </div> */}

                <div className="project-summary"> 
                    <h2>Portfolio</h2>
                    <p className="sub-header">web development projects</p>
                    <h3>Date</h3>
                    <p>May 2020</p>
                    <h3>My Role</h3>
                    <p>Design, Development, Content</p>
                    <h3>Check it out</h3>
                    <Link to="/"> Launch Site  <i className='fas fa-external-link-alt' aria-hidden="true"/></Link>
                    <a href="https://github.com/cazalye/portfolio" rel="noopener noreferrer" target="_blank">
                        Visit GitHub Repo  
                        <i className="fab fa-github" aria-hidden="true"/>
                    </a>
                </div> 


                <Tooltip className="arrow-tooltip" label="Scroll Down" position="bottom">
                    <Icon name="arrow_downward" />
                </Tooltip>

                <div className="project-content">
                    <h3>The Brief</h3>
                    <p>A modern, responsive portfolio site to share my web development projects, CV and contact information.</p>
                    <h3>The Approach</h3>
                    <p>This site is built with React.</p>
                    <a href="https://github.com/cazalye/portfolio" rel="noopener noreferrer" target="_blank">
                        Visit final GitHub Repo  
                        <i className="fab fa-github" aria-hidden="true"/>
                    </a>
                    <a href="https://github.com/cazalye/myportfoliosite" rel="noopener noreferrer" target="_blank">
                        Visit initial GitHub Repo  
                        <i className='fab fa-github' aria-hidden="true"/>
                    </a>
                    <h3>The Results</h3>
                    <p>A modern minimalist-style portfolio that showcases my skills and projects.</p>
                    <Link to="/"> 
                        Visit Site
                        <i className='fas fa-external-link-alt' aria-hidden="true"/>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Portfolio;