import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './portfolio/landing';
import Contact from './portfolio/contact';
import About from './portfolio/about';
import PhotographyTravel from './portfolio/photographyTravel';
import Resume from './portfolio/resume';



const View = () => (
    <Switch>
        <Route exact={true} path="/" component={Landing}/>
        <Route exact={true} path='/contact' component={Contact}/> 
        <Route exact={true} path='/about' component={About}/>
        <Route exact={true} path='/photography' component={PhotographyTravel}/>
        <Route exact={true} path='/resume' component={Resume}/>
    </Switch>
);

export default View;