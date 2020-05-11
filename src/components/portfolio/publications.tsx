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
            <Grid className='publication-year'>
                <Cell col={4}>
                    <p>{this.props.publicationYear}</p>
                </Cell>
                <Cell col={8}>
                    <p>{this.props.publicationJournal}</p>
                    <a href={this.props.publicationLink} target="_blank" rel="noopener noreferrer">{this.props.publicationTitle}</a>
                </Cell>
            </Grid>
        )
    }
}

export default Publications;