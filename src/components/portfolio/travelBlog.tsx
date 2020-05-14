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
                    <h2>Travel Blog: cazalye</h2>
                    {/* <h2 className="sub-header">Brands on Parade Online Bottle Shop</h2> */}
                    <h3>Client</h3>
                    <p>My own passion project</p>
                    <h3>Date</h3>
                    <p>Nov 2019 - Feb 2020</p>
                    <h3>My Role</h3>
                    <p>Design, Development, Photography, Content Creation</p>
                    <h3>Check it out</h3>
                    <a href="http://cazalye.com" rel="noopener noreferrer" target="_blank"> Launch Site</a>
                </div>

                <Tooltip className="arrow-tooltip" label="Scroll Down" position="bottom">
                    <Icon name="arrow_downward" />
                </Tooltip>

                <div className="project-content">
                    {/* <h2>Travel Blog: cazalye.com</h2> */}
                    <h3>The Brief</h3>
                    <p>To create a visually rich, exciting and inspiring travel blog with two main elements: a unique way to display "photo diaries" and a clean modern way to display blog posts. Both aspects were to be asthetically pleasing in a minimalist style. It was also key to have an engaging About Page and a Newsletter Sign Up Form</p>
                    <h3>The Approach</h3>
                    <p>Upon moving to Europe in 2017, I began a travel blog to share my experiences with family and friends. I chose Wordpress.com in the beginning as my day job was time consuming and mentally draining, and I wanted a ready made solution. In time I outgrew this platform and decided to switch to Wordpress.org. From here I decided to learn React as a way to further customise my blog and learn valuable development skills at the same time. This website uses Wordpress as the CMS, with the front-end built with React and connected by the Wordpress REST-API.</p>
                    <h3>My Role</h3>
                    <p>For this passion project I collaborated with a full stack developer who had 4 years experience leading large projects, particularly e-commerce sites. The first month of the projet was face-to-face, after which I moved back to Australia and predominantly worked on the site myself. We had regular remote coding sessions for bug fixes and adding new elements- for this we used Visual Studio Code's Live Share feature, including sharing the development server. Throughout the project git/GitHub was used for version control and to share code.</p>
                    <h3>The Results</h3>
                    <p>An exciting, visually rich travel blog that reflects my personal style and provides me with a unique platform to share my travel photography and writing</p>
                    <a href="http://cazalye.com" rel="noopener noreferrer" target="_blank"> Visit Site</a>
                    <a href="https://github.com/cazalye/cazalye" rel="noopener noreferrer" target="_blank"> Visit GitHub Repo</a>
                </div>
            </div>
        );
    }
}

export default TravelBlog;