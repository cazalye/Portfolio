import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

interface EducationProps{
startYear: number;
endYear: number;
schoolName: string;
schoolDescription: string;
certificate?: string;
certificateUrl?: string;
}
class Education extends Component<EducationProps, EducationProps> {
    render() {
        return(
            <Grid className='resume'>
                <Cell col={4}>
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={8}>
                    <h4>{this.props.schoolName}</h4>
                    <p>{this.props.schoolDescription}</p>
                    <a href={this.props.certificateUrl} target="_blank" rel="noopener noreferrer">
                        {this.props.certificate}
                        <i className='fas fa-external-link-alt' aria-hidden="true"/>
                    </a>
                </Cell>
            </Grid>
        )
    }
}

export default Education;