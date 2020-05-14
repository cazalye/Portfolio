import React, { Component } from 'react';
import {Link} from 'react-router-dom';

interface ProjectCardProps{
    title: string, 
    summary: string,
    more: string,
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
                    <h2>{this.props.title}</h2>
                    <p>{this.props.summary}</p>
                    <Link className="project-link" to={this.props.more}>Project Details</Link>
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