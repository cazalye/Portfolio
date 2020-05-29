import React, { Component } from 'react';
import './projectDetail.scss';
import {Tooltip,Icon} from 'react-mdl';
// import {Breadcrumbs} from '@material-ui/core';
// import {Link} from 'react-router-dom';


class Ecommerce extends Component {
    render() {
        return (
            <div id="project-details">
                <div className="feature-image">
                    <img src="/img/Brands.jpg" height="auto" width="100%" alt="brands on parade"/>
                    {/* <img className="brands" src="/img/The Boys-8.jpg" height="auto" width="100%" alt="brands on parade"/> */}
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
                    <h2>Brands on Parade</h2>
                    <p className="sub-header">Online Bottle Shop</p>
                    <h3>Date</h3>
                    <p>April 2020</p>
                    <h3>My Role</h3>
                    <p>Product & Marketing Photography, Design & WooCommerce Customisation, Hosting & Deployment, Product Listings, UX & Usability Testing</p>
                    <h3>Check it out</h3>
                    <a href="https://brandsonparade.com" rel="noopener noreferrer" target="_blank"> 
                        Launch Site
                        <i className='fas fa-external-link-alt' aria-hidden="true"/>
                    </a>
                </div>
                
                <Tooltip className="arrow-tooltip" label="Scroll Down" position="bottom">
                    <Icon name="arrow_downward" />
                </Tooltip>

                <div className="project-content">
                    <h3>The Brief</h3>
                    <p>Brands on Parade is a local Tasmanian small business specialising in distributing boutique booze, distilling their own vodka and managing The Tasmanian Juice Press. Their brand has a strong emphasis on sustainability, minimal-waste and supporting other local businesses.<hr/>Following recent hospitality restrictions, the company saw an almost immediate cease in wholesale orders. Uncertainty surrounding local farmers markets- their primary source of retail sales, also created an urgent need for an online presence. They sought my help for a clean, minimal e-commerce, that reflected their branding and focused on user experience and subscription based juice orders.</p>
                    <h3>The Approach</h3>
                    <p>As this was my first e-commerce site, and required a quick turn-around time, I chose WooCommerce as the e-commerce platform. I was solely responsible for the project from start to finish, including:</p>

                    <ul>
                        <li>Photography: 70+ products, editorial syle shots </li>
                        <li>Editing all photos with Lightroom & Photoshop</li>
                        <li>Hosting setup, Domain Name & email transfer</li>
                        <li>Wordpress & WooCommerce installation & customisation</li>
                        <li>Creating all product listings</li>
                        <li>Customising the site design, categories, tags and site structure</li>
                        <li>Creating on brand copy: product listings, about page, contact page, T&Cs, privacy/refund policies</li>
                        <li>Security: SSL certificate</li>
                        <li>Payment Gateways (Paypal & Stripe), linking accounting software Xero</li>
                        <li>Delivery & shipping customisation</li>
                        <li>User Experience including Usability Tests</li>
                        <li>SEO, Google Indexing & Google Analytics</li>
                        <li>Social Media sharing options and image feed</li>
                        <li>Site back up</li>
                    </ul>
                    <h3>The Results</h3>
                    <p>A modern, intuitive e-commerce. The initial site was completed within a week, with usability tests, feeback and adjustments made the following week. The site is optimised to encourage customers to subscribe to ongoing juice orders and multi-item purchases. 
                        {/* <hr/>Testimonial from Bentley Deegan, Co-Director of Brands on Parade: </p>
                        <blockquote>Quote from Bentley...</blockquote> */}
                    </p>
                    <a href="https://brandsonparade.com" rel="noopener noreferrer" target="_blank"> 
                        Visit the Site
                        <i className='fas fa-external-link-alt' aria-hidden="true"/>
                    </a>

                </div>
         
            </div>
        );
    }
}

export default Ecommerce;