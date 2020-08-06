import React, { Component } from 'react';
import {Link} from 'react-router-dom';

interface ProjectCardProps{
    title: string, 
    summary: string,
    link: string,
    image: string,
    
}
class ProjectCards extends Component<ProjectCardProps,ProjectCardProps> {



    render() {
        return (
            <Link className="project-cards" to={this.props.link}>
                <div className="card-content" >
                    <div className="project-image">
                        <img src={this.props.image} height="" width="100%" alt="project "/>
                    </div>
                    <div className="card-text">
                        <h2>{this.props.title}</h2>
                        <p>{this.props.summary}</p>
                    </div>
                </div>
            </Link>
        );
    }
}

export default ProjectCards;