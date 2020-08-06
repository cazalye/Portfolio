import React, { Component } from 'react';
import './projects.scss';
import ProjectCards from './projectCards';

class Projects extends Component {
    render() {
        return (
            <div id="projects">
                 <div className="card-container">
                    <ProjectCards
                        title="The Tasmanian Juice Press"
                        summary="A visually rich landing page, built with React"
                        link="/juice"
                        image="/img/juicePress.jpg"
                    />
                    <ProjectCards
                        title="Brands on Parade"
                        summary="A modern online bottle shop, built with WooCommerce"
                        link="/ecommerce"
                        image="/img/Brands_small.jpg"
                        // siteLink= "https://brandsonparade.com"
                        // siteIcon= "fa fa-globe"
                        // siteIcon= "fab fa-wordpress-simple"
                    />
                    <ProjectCards
                        title="cazalye"
                        summary="A travel blog & photo diary, built with React and Wordpress"
                        link="/travelBlog"
                        image="/img/Rafting_small.jpg"
                        // gitLink= "https://github.com/cazalye/cazalye"
                        // gitIcon= "fab fa-github"
                        // siteLink= "http://cazalye.com"
                        // siteIcon= "fa fa-globe"
                    />
                    <ProjectCards
                        title="Portfolio"
                        summary="A responsive portfolio, built with React"
                        link="/portfolio"
                        image="/img/Mountains_small.jpg"
                        // gitLink= "https://github.com/cazalye/portfolio"
                        // gitIcon= "fab fa-github"
                        // siteLink= "https://portfolio.cazalye.com"
                        // siteIcon= "fa fa-globe"
                    />
                </div>
            </div>
        );
    }
}

export default Projects;