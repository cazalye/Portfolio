import React, { Component } from 'react';
import './projectDetail.scss';
import {Tooltip,Icon} from 'react-mdl';

class TravelBlog extends Component {
    render() {
        return (
            <div id="project-details">
                <div className="image-overlay-travel"/>
                <div className="feature-image">
                    <img src="/img/Rafting.jpg" height="auto" width="100%" alt="cazalye travel blog"/>
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
                    <h2>cazalye</h2>
                    <p className="sub-header">An adventure travel blog</p>
                    <h3>Date</h3>
                    <p>Nov 2019 - Feb 2020</p>
                    <h3>My Role</h3>
                    <p>Design, Development, Photography, Content Creation</p>
                    <h3>Check it out</h3>
                    <a href="https://cazalye.com" rel="noopener noreferrer" target="_blank"> 
                        Launch Site
                        <i className='fas fa-external-link-alt' aria-hidden="true"/>
                    </a>
                    <a href="https://github.com/cazalye/cazalye" rel="noopener noreferrer" target="_blank"> 
                        Visit GitHub Repo
                        <i className='fab fa-github' aria-hidden="true"/>
                    </a>
                </div>

                <Tooltip className="arrow-tooltip" label="Scroll Down" position="bottom">
                    <Icon name="arrow_downward" />
                </Tooltip>

                <div className="project-content">
                    {/* <h2>Travel Blog: cazalye.com</h2> */}
                    <h3>The Brief</h3>
                    <p>
                        This site is a personal project, with the goal of creating a visually rich blog to share my adventure photography and travel writing. 
                    </p>
                    <h3>The Approach</h3>
                    <p>The front-end of the site is built with React and linked to Wordpress as the CMS. I collaborated with a full stack developer on aspects this project.</p>
                    <a href="https://github.com/cazalye/cazalye" rel="noopener noreferrer" target="_blank"> 
                        Visit GitHub Repo
                        <i className='fab fa-github' aria-hidden="true"/>
                    </a>
                    <h3>The Results</h3>
                    <p>A travel blog that reflects my personal style and provides me with platform to share my travel photography and writing.</p>
                    <a href="https://cazalye.com" rel="noopener noreferrer" target="_blank"> 
                        Visit Site
                        <i className='fas fa-external-link-alt' aria-hidden="true"/>
                    </a>
                </div>
            </div>
        );
    }
}

export default TravelBlog;