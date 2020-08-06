import React, { Component} from 'react';
import {Grid, Cell} from 'react-mdl';

interface PublicationProps{
    publicationYear: number;
    publicationLink?: string;
    publicationTitle: string;
    publicationJournal: string;
}
class Publications extends Component<PublicationProps, PublicationProps> {
    render() {
        return(
            <Grid className='publications'>
                <Cell col={4}>
                    <p>{this.props.publicationYear}</p>
                </Cell>
                <Cell col={8}>
                    <h4>{this.props.publicationJournal}</h4>
                    <a href={this.props.publicationLink} target="_blank" rel="noopener noreferrer">
                        {this.props.publicationTitle}
                        <i className='fas fa-external-link-alt' aria-hidden="true"/>
                        </a>
                </Cell>
            </Grid>
        )
    }
}

export default Publications;