import React, {Component} from 'react';
import {Grid, Cell, ProgressBar} from "react-mdl";


interface SkillProps {
    skill: string;
    progress: number;
}

class Skills extends Component<SkillProps, SkillProps>{
    render(){
        return(
            <Grid>
                <Cell col={12}>
                    <div className="resume-skill-col">
                        <span>{this.props.skill}</span>
                        <ProgressBar
                            className="resume-skill-progress"
                            progress={this.props.progress}
                        />
                    </div>
                </Cell>
            </Grid>
        );
    }
}

export default Skills;