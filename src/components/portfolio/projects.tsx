import React, { Component } from 'react';
import './projects.scss';
import ProjectCards from './projectCards';

class Projects extends Component {
    render() {
        return (
            <div id="projects">
                 <div className="card-container">
                    <ProjectCards
                        title="Brands on Parade"
                        summary="A modern online bottle shop, built with WooCommerce"
                        link="/ecommerce"
                        image="/img/Brands.jpg"
                        // siteLink= "https://brandsonparade.com"
                        // siteIcon= "fa fa-globe"
                        // siteIcon= "fab fa-wordpress-simple"
                    />
                    <ProjectCards
                        title="cazalye"
                        summary="A visually rich travel blog, built with React and Wordpress"
                        link="/travelBlog"
                        image="/img/Rafting.jpg"
                        // gitLink= "https://github.com/cazalye/cazalye"
                        // gitIcon= "fab fa-github"
                        // siteLink= "http://cazalye.com"
                        // siteIcon= "fa fa-globe"
                    />
                    <ProjectCards
                        title="Portfolio"
                        summary="A responsive portfolio, built with React"
                        link="/portfolio"
                        image="/img/Mountains.jpg"
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