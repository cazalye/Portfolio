import React, { Component } from 'react';
import './projects.scss';

class Projects extends Component {
    render() {
        return (
            <div id="projects">
                <div className='ecommerce'>
                    <h2>E-commerce</h2>
                    <a href="brandsonparade.com"> Brands on Parade </a>
                    <p>A modern e-commerce site built with WooCommerce</p>
                    <h3>What I did</h3>
                    <ul>
                        <li>Product & Marketing Photography</li>
                        <li>Design customisation</li>
                        <li>Hosting setup, Domain Name & email transfer</li>
                        <li>Wordpress & WooCommerce Installation</li>
                        <li>Product listings</li>
                        <li>On brand copy: product listings, about page, contact page, T&Cs, privacy/refund policies</li>
                        <li>Security: SSL certificate</li>
                        <li>Payment Gateways, link to accounting software</li>
                        <li>Delivery option customisation</li>
                        <li>User Experience including Usability Tests</li>
                        <li>SEO, Google Indexing & Google Analytics</li>
                        <li>Social Media sharing options and image feed</li>
                        <li>Site back up</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Projects;