import React, { Component } from 'react';
import {Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
import { Url } from 'url';


interface ProjectCardProps{
    image?: string,
    title: string, 
    summary: string,
    // icons: [
    //     {
    //         link: string,
    //         icon: string,
    //     },
    //     {
    //         link: string,
    //         icon: string,
    //     },
    // ]
    link?: string,
    icon?: string,
}
class ProjectCards extends Component<ProjectCardProps,ProjectCardProps> {



    render() {
        return (
            <div className="project-cards">
                <div className="content">
                    <h2>{this.props.title}</h2>
                    <p>{this.props.summary}</p>
                    <a href={this.props.link} rel="noopener noreferrer" target="_blank">
                    <i className={this.props.icon} aria-hidden="true"/></a>
                </div>
            </div>
        );
    }
}

export default ProjectCards;