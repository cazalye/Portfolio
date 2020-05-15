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
                    <p>My own passion project to share travel photography and writing</p>
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
                    <p>When I moved to Europe a few years ago I began a travel blog to share my experiences with family and friends. I chose Wordpress.com in the beginning as I wanted a ready made solution. In time, I outgrew this platform and decided to switch to Wordpress.org. It wasn't long before I wanted more freedom and the ability to completely customise the look of my site. Hesitant to dive into PHP, I decided to combine the Wordpress CMS/backend with a modern JavaScript framework. <hr/>
                    I wanted to create a visually rich, inspiring travel blog to share my adventure photography and writing. Two elements were particularly important to me; a unique way to display my photo diaries and a clean, modern way to display blog posts. Both aspects needed to be visually pleasing, minimalistic in style and convey a sense of adventure through the user experience. It was also important for me to have an engaging About Page and a Newsletter sign up form.</p>
                    <h3>The Approach</h3>
                    <p>This website uses Wordpress as the CMS with the default Apache server and PHP at the backend. The front-end is built with React, retrieving data from Wordpress with a REST API. I chose React for the front-end, as it is one of the most popular modern JavaScript frameworks, with extensive support and a relatively quick learning curve. <hr/>
                    For this project I collaborated with a full stack developer who had several years experience leading large projects, particularly e-commerce sites. While he predominantly wrote the APIs and more complex aspects of the code, I undersunderstand the logic of the entire site.
                    The first month of the projet we worked face-to-face for 1-2 hours a day, after which I returned to Australia and predominantly worked on the site myself. We had regular remote coding sessions for bug fixes and adding new elements- for this we used Visual Studio Code's Live Share feature, including sharing the development server. Throughout the project git/GitHub was used for version control and to share code.</p>
                    <a href="https://github.com/cazalye/cazalye" rel="noopener noreferrer" target="_blank"> Visit GitHub Repo</a>
                    <h3>The Results</h3>
                    <p>An exciting, visually rich travel blog that reflects my personal style and provides me with a unique platform to share my travel photography and writing. I was particularly pleased with the format of the photo diaries which I designed entirely with CSS to resemble the pages of a photo flip book.</p>
                    <a href="http://cazalye.com" rel="noopener noreferrer" target="_blank"> Visit Site</a>
                </div>
            </div>
        );
    }
}

export default TravelBlog;