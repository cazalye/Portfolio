import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

interface ExperienceProps {
    startYear: number;
    endYear?: number;
    jobName: string;

    project?: string;
    project2?: string;
    jobDescription: string;
    url?: string;
    jobDescription2?: string;
    url2?: string;
}


class Experience extends Component<ExperienceProps, ExperienceProps>{
    render() {
        return(
            <Grid className='experience-year'>
                <Cell col={4}>
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={8}>
                    <h4>{this.props.jobName}</h4>
                    <h5>{this.props.project}</h5>
                    <p>{this.props.jobDescription}</p>
                    <a href={this.props.url} target="_blank" rel="noopener noreferrer">{this.props.url}</a>
                    <h5>{this.props.project2}</h5>
                    <p>{this.props.jobDescription2}</p>
                    <a href={this.props.url2} target="_blank" rel="noopener noreferrer">{this.props.url2}</a>
                </Cell>
            </Grid>
        )
    }
}

export default Experience;