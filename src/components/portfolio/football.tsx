import React, { Component } from 'react';
import './projectDetail.scss';
import {Tooltip,Icon} from 'react-mdl';


class Football extends Component {
    render() {
        return (
            <div id="project-details">
                <div className="feature-image">
                    <img src="/img/football.jpg" height="auto" width="100%" alt="University Football Club"/>
                </div>

                <div className="project-summary"> 
                    <h2>University Football Club</h2>
                    <p className="sub-header">A local sports club</p>
                    <h3>Date</h3>
                    <p>September 2020</p>
                    <h3>My Role</h3>
                    <p>Design & Development, Copy, Hosting & Deployment</p>
                    <h3>Check it out</h3>
                    <a href="https://universityfc.org" rel="noopener noreferrer" target="_blank"> 
                        Launch Site
                        <i className='fas fa-external-link-alt' aria-hidden="true"/>
                    </a>
                    <a href="https://github.com/cazalye/universityFC" rel="noopener noreferrer" target="_blank"> 
                        Visit GitHub Repo
                        <i className='fab fa-github' aria-hidden="true"/>
                    </a>
                </div>
                
                <Tooltip className="arrow-tooltip" label="Scroll Down" position="bottom">
                    <Icon name="arrow_downward" />
                </Tooltip>

                <div className="project-content">
                    <h3>The Brief</h3>
                    <p>The University of Tasmania Football (soccer) Club is a local sporting club with a rich history and an emphasis on the fun and social aspects of sport. Their previous site had not been updated in several years and they were after a fresh new site as a resource for players, a place to share club news and events, and to act as a lead-generating site for new players.</p>
                    <h3>The Approach</h3>
                    <p>This site is built with Gatsby, with Contentful as the CMS and is hosted on Netlify. I was solely responsible for the project from start to finish, including:</p>

                    <ul>
                        <li>Image selection and parital editing</li>
                        <li>Site design, two different options were provided to the club</li>
                        <li>Development with React & Gatsby, including front-end css frameworks (Bootstrap & MDL)</li>
                        <li>Copy throughout the site, using Contentful as the CMS</li>
                        <li>Hosting with Netlify and Domain Name set up</li>
                        <li>Security: SSL certificate</li>
                    </ul>
                    <a href="https://github.com/cazalye/universityFC" rel="noopener noreferrer" target="_blank"> 
                        Visit GitHub Repo
                        <i className='fab fa-github' aria-hidden="true"/>
                    </a>
                    <h3>The Results</h3>
                    <p>A fresh new website for the club inlcuding player resources (fixtures, training, grounds), a section to share news and events, and a place to share the club culture and history. 
                    </p>
                    <a href="https://universityfc.org" rel="noopener noreferrer" target="_blank"> 
                        Visit the Site
                        <i className='fas fa-external-link-alt' aria-hidden="true"/>
                    </a>
                </div>
         
            </div>
        );
    }
}

export default Football;