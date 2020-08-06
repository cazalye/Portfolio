import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

interface ExperienceProps {
    startYear: number;
    endYear?: number;
    jobName: string;

    project?: string;
    project2?: string;
    jobDescription: string;
    jobDescription2?: string;
    url?: string;
    url2?: string;
    site?: string;
    site2?: string;
    summary?: string;
}


class Experience extends Component<ExperienceProps, ExperienceProps>{
    render() {
        return(
            <Grid className='resume'>
                <Cell col={4}>
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={8}>
                    <h4>{this.props.jobName}</h4>
                    <h6>{this.props.summary}</h6>
                    <a href={this.props.url} target="_blank" rel="noopener noreferrer">{this.props.project}</a>
                    <p>{this.props.jobDescription}</p>
                    <a href={this.props.url2} target="_blank" rel="noopener noreferrer">{this.props.project2}</a>
                    <p>{this.props.jobDescription2}</p>
                </Cell>
            </Grid>
        )
    }
}

export default Experience;