import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

interface AwardProps{
    year: string;
    awardTitle: string;
    awardAmount: string;
}
class Awards extends Component<AwardProps, AwardProps> {
    render() {
        return(
            <Grid className='resume'>
                <Cell col={4}>
                    <p>{this.props.year}</p>
                </Cell>
                <Cell col={8}>
                    <h4>{this.props.awardTitle}</h4>
                    <p>{this.props.awardAmount}</p>
                </Cell>
            </Grid>
        )
    }
}

export default Awards;