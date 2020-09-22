import React, { Component } from 'react';
import './projects.scss';
import ProjectCards from './projectCards';

class Projects extends Component {
    render() {
        return (
            <div id="projects">
                 <div className="card-container">
                    <ProjectCards
                        title="University Football Club"
                        summary="A local sports club site, built with Gatsby, Contentful & Netlify"
                        link="/football"
                        image="/img/football.jpg"
                    />
                    <ProjectCards
                        title="The Tasmanian Juice Press"
                        summary="A lead-generation site, built with React & Wordpress"
                        link="/juice"
                        image="/img/juicePress.jpg"
                    />
                    <ProjectCards
                        title="Brands on Parade"
                        summary="An e-commerce site, built with Wordpress & WooCommerce"
                        link="/ecommerce"
                        image="/img/Brands_small.jpg"

                    />
                    <ProjectCards
                        title="cazalye"
                        summary="A travel blog, built with React and Wordpress"
                        link="/travelBlog"
                        image="/img/Rafting_small.jpg"
                    />
                    {/* <ProjectCards
                        title="Portfolio"
                        summary="A responsive portfolio, built with React"
                        link="/portfolio"
                        image="/img/Mountains_small.jpg"
                    /> */}
                </div>
            </div>
        );
    }
}

export default Projects;