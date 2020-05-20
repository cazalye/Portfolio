import React, { Component } from 'react';
import './projects.scss';
import ProjectCards from './projectCards';

class Projects extends Component {
    render() {
        return (
            <div id="projects">
                <ProjectCards
                    title="Brands on Parade"
                    summary="A modern online bottle shop, built with WooCommerce"
                    more="/ecommerce"
                    // siteLink= "https://brandsonparade.com"
                    // siteIcon= "fa fa-globe"
                    // siteIcon= "fab fa-wordpress-simple"
                />
                <ProjectCards
                    title="cazalye"
                    summary="A visually rich travel blog, built with React and Wordpress"
                    more="/travelBlog"
                    // gitLink= "https://github.com/cazalye/cazalye"
                    // gitIcon= "fab fa-github"
                    // siteLink= "http://cazalye.com"
                    // siteIcon= "fa fa-globe"
                />
                <ProjectCards
                    title="Portfolio"
                    summary="A modern portfolio, built with React"
                    more="/portfolio"
                    // gitLink= "https://github.com/cazalye/portfolio"
                    // gitIcon= "fab fa-github"
                    // siteLink= "https://portfolio.cazalye.com"
                    // siteIcon= "fa fa-globe"
                />
            </div>
        );
    }
}

export default Projects;