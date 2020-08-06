import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

interface ReferenceProps{
    Name: string;
    Description: string;
    Email: string;
    Company: string;
    Phone?: string;

}
class References extends Component<ReferenceProps, ReferenceProps> {
    render() {
        return (
            <Grid className="reference">
                <Cell col={7}>
                    <h5>{this.props.Name}</h5>
                </Cell>
                <Cell col={5}>
                    <p>{this.props.Description}</p>
                    <p>{this.props.Company}</p>
                    <p>Email: <a href="mailto:{this.props.Email}" target="_blank" rel="noopener noreferrer">{this.props.Email}</a></p>
                    <p>Phone: {this.props.Phone}</p>
                </Cell>
            </Grid>
        );
    }
}
export default References;