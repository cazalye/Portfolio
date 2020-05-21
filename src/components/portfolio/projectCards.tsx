import React, { Component } from 'react';
import {Link} from 'react-router-dom';

interface ProjectCardProps{
    title: string, 
    summary: string,
    more: string,

    image: string,
    gitLink?: string,
    gitIcon?: string,
    siteLink?: string,
    siteIcon?: string,
    
}
class ProjectCards extends Component<ProjectCardProps,ProjectCardProps> {



    render() {
        return (
            <div className="project-cards">
                <div className="content">
                   
                    <div className="project-image">
                        <img src={this.props.image} height="" width="350px" alt="project image"/>
                    </div>
                    <Link className="project-link" to={this.props.more}>
                    <h2>{this.props.title}</h2>
                    <p>{this.props.summary}</p>
                    {/* <p>Details</p> */}
                    </Link>


                    <a href={this.props.gitLink} rel="noopener noreferrer" target="_blank">
                        <i className={this.props.gitIcon} aria-hidden="true"/>
                    </a>
                    <a href={this.props.siteLink} rel="noopener noreferrer" target="_blank">
                        <i className={this.props.siteIcon} aria-hidden="true"/>
                    </a>

                </div>
            </div>
        );
    }
}

export default ProjectCards;