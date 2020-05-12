import React, { Component } from 'react';
import './projectDetail.scss';

class TravelBlog extends Component {
    render() {
        return (
            <div id="project-details">
                <div className="project-content">
                    <h2>Travel Blog: cazalye.com</h2>
                    <h3>The Brief</h3>
                    <p>To create a visually rich, exciting and inspiring travel blog with two main elements: a unique way to display "photo diaries" and a clean modern way to display blog posts. Both aspects were to be asthetically pleasing in a minimalist style. It was also key to have an engaging About Page and a Newsletter Sign Up Form</p>
                    <h3>The Approach</h3>
                    <p>Upon moving to Europe in 2017, I began a travel blog to share my experiences with family and friends. I chose Wordpress.com in the beginning as my day job was time consuming and mentally draining, and I wanted a ready made solution. In time I outgrew this platform and decided to switch to Wordpress.org. From here I decided to learn React as a way to further customise my blog and learn valuable development skills at the same time. This website uses Wordpress as the CMS, with the front-end built with React and connected by the Wordpress REST-API.</p>
                    <h3>My Role</h3>
                    <p>For this passion project I collaborated with a full stack developer who had 4 years experience leading large projects, particularly e-commerce sites. The first month of the projet was face-to-face, after which I moved back to Australia and predominantly worked on the site myself. We had regular remote coding sessions for bug fixes and adding new elements- for this we used Visual Studio Code's Live Share feature, including sharing the development server. Throughout the project git/GitHub was used for version control and to share code.</p>
                    <h3>The Results</h3>
                    <p>What was delivered, testimonial, increased sales, link website</p>
                </div>
            </div>
        );
    }
}

export default TravelBlog;