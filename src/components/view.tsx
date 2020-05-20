import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './portfolio/landing';
import Contact from './portfolio/contact';
import About from './portfolio/about';
import PhotographyTravel from './portfolio/photographyTravel';
import Resume from './portfolio/resume';
import Projects from './portfolio/projects';
import Ecommerce from './portfolio/ecommerce';
import TravelBlog from './portfolio/travelBlog';
import Portfolio from './portfolio/portfolioProject';



const View = () => (
    <Switch>
        <Route exact={true} path="/" component={Landing}/>
        <Route exact={true} path='/contact' component={Contact}/> 
        <Route exact={true} path='/about' component={About}/>
        <Route exact={true} path='/photography' component={PhotographyTravel}/>
        <Route exact={true} path='/resume' component={Resume}/>
        <Route exact={true} path='/projects' component={Projects}/>
        <Route exact={true} path='/ecommerce' component={Ecommerce}/>
        <Route exact={true} path='/travelBlog' component={TravelBlog}/>
        <Route exact={true} path='/portfolio' component={Portfolio}/>

    </Switch>
);

export default View;