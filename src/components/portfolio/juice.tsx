import React, { Component } from 'react';
import './projectDetail.scss';
import {Tooltip,Icon} from 'react-mdl';


class Juice extends Component {
    render() {
        return (
            <div id="project-details">
                <div className="feature-image">
                    <img src="/img/juicePress.jpg" height="auto" width="100%" alt="brands on parade"/>
                </div>
                <div className="project-summary"> 
                    <h2>The Tasmanian Juice Press</h2>
                    <h3>Date</h3>
                    <p>July 2020</p>
                    <h3>My Role</h3>
                    <p>Product & Marketing Photography, Copy,  Design & Development, Hosting & Deployment</p>
                    <h3>Check it out</h3>
                    <a href="https://tasjuicepress.com" rel="noopener noreferrer" target="_blank"> 
                        Launch Site
                        <i className='fas fa-external-link-alt' aria-hidden="true"/>
                    </a>
                </div>
                
                <Tooltip className="arrow-tooltip" label="Scroll Down" position="bottom">
                    <Icon name="arrow_downward" />
                </Tooltip>

                <div className="project-content">
                    <h3>The Brief</h3>
                    <p>The Tasmanian Juice Press is a local small business, producing cold pressed juices from locally sourced fruit and vegetables. They have a strong emphasis on environmentally friendly practices and supporting other local businesses.<hr/>This website is a landing page for their customers, to find out a little more about the company and range of juices on offer. Throughout the site there are shop links to their e-commerce site (Brands on Parade).</p>
                    <h3>The Approach</h3>
                    <p>The clients were after a minimal yet visually rich design, emphasising their focus on sustainability and being a local Tasmanian company. I was solely responsible for the project from start to finish, including:</p>

                    <ul>
                        <li>Photography: editorial syle shots at the Farm Gate Market and product shots</li>
                        <li>Editing all photos with Lightroom & Photoshop</li>
                        <li>Site design, including initial designs on Figma</li>
                        <li>Creating on brand copy throughout the site</li>
                        <li>Development from start to finish with React</li>
                        <li>User Experience including Usability Tests</li>
                        <li>Hosting and Domain Name set up</li>
                        <li>Security: SSL certificate</li>
                        <li>SEO, Google Indexing & Google Analytics</li>
                    </ul>
                    <h3>The Results</h3>
                    <p>An on-brand, visually appealing lead generation site with opportunities throughout to purchase their product.
                    </p>
                    <a href="https://tasjuicepress.com" rel="noopener noreferrer" target="_blank"> 
                        Visit the Site
                        <i className='fas fa-external-link-alt' aria-hidden="true"/>
                    </a>

                </div>
         
            </div>
        );
    }
}

export default Juice;