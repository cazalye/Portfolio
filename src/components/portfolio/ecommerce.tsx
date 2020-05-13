import React, { Component } from 'react';
import './projectDetail.scss';
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
                    <h2>E-commerce: Online Bottle Shop </h2>
                    {/* <h2 className="sub-header">Brands on Parade Online Bottle Shop</h2> */}
                    <h3>Client</h3>
                    <p>Brands on Parade</p>
                    <h3>Date</h3>
                    <p>April 2020</p>
                    <h3>My Role</h3>
                    <p>Product & Marketing Photography, Design & WooCommerce Customisation, Hosting & Deployment, Product Listings, UX & Usability Testing</p>
                    <h3>Check it out</h3>
                    <a href="https://brndsonparade.com"> Launch Site</a>
                </div>

                <div className="project-content">
                    <h3>The Brief</h3>
                    <p>Brands on Parade is a local Tasmanian small business specialising in distributing boutique booze, distilling their own vodka and managing The Tasmanian Juice Press. Their brand has a strong emphasis on sustainability, minimal-waste and supporting other local businesses.<hr/>Following recent hospitality restrictions, the company saw an almost immediate cease in wholesale orders. Uncertainty surrounding local farmers markets- their primary source of retail sales, also created an urgent need for an online presence. They sought my help for a clean, minimal e-commerce, that reflected their branding and focused on user experience and subscription based juice orders.</p>
                    <h3>The Approach</h3>
                    <p>As this was my first e-commerce site, and required a quick turn-around time, I chose WooCommerce as the e-commerce platform. I was solely responsible for the project from start to finish, including:</p>

                    <ul>
                        <li>Photographing and editing most of the 70+ products (editing with Lightroom & Photoshop)</li>
                        <li>Photographing and editing editorial syle shots of the staff at markets and at their warehouse for use in the about section and throughout the website</li>
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
                    <p>A modern, intuitive e-commerce. The initial site was completed within a week, with usability tests, feeback and adjustments made the following week.</p>
                    <p>Testimonial: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                    <a href="https://brndsonparade.com"> Visit Site</a>

                </div>
         
            </div>
        );
    }
}

export default Ecommerce;