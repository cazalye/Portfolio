import React, { Component } from 'react';
import {Link} from 'react-router-dom';

interface ProjectCardProps{
    title: string, 
    summary: string,
    more: string,
    image: string,
    
}
class ProjectCards extends Component<ProjectCardProps,ProjectCardProps> {



    render() {
        return (
            <div className="project-cards">
                <Link className="card-content" to={this.props.more}>
                    <div className="project-image">
                        <img src={this.props.image} height="" width="100%" alt="project "/>
                    </div>
                    <div className="card-text">
                        <h2>{this.props.title}</h2>
                        <p>{this.props.summary}</p>
                    </div>
                </Link>
            </div>
        );
    }
}

export default ProjectCards;