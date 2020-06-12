import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

interface ExperienceProps {
    startYear: number;
    endYear?: number;
    jobName: string;

    project?: string;
    jobDescription: string;
    url?: string;
    site?: string;
    icon?: string;
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
                    <p>{this.props.project}</p>
                    <p>{this.props.jobDescription}</p>
                    <a href={this.props.url} target="_blank" rel="noopener noreferrer">
                        {this.props.site}
                        <i className={this.props.icon}/>
                    </a>
                </Cell>
            </Grid>
        )
    }
}

export default Experience;