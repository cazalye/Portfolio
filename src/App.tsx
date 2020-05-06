import React, { Component} from 'react';
// import './App.css';
import Navbar from './components/navbar/navbar';
import View from './components/view';
import Footer from './components/footer/footer';
import { withRouter } from "react-router";

class App extends Component<any,any> {

  render() {  
    return (
      <div className="App">
          <Navbar/>
          <View/>
          <Footer/>
      </div>
    );
  }
}
export default withRouter(App);
