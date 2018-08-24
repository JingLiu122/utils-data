import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import{
  NavLink,
  HashRouter
} from "react-router-dom";
import Line from './components/LineGraph';
import Bar from './components/BarGraph';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
        <h1>Solar Utility Data Viewer</h1>
        <h3>Besides being good for the planet, solar power can help people save money on their utility bills...</h3>
          <ul className="header">
            <li><NavLink exact to="/">LineGraph</NavLink></li>
            <li><NavLink to="/bar">BarGraph</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Line}/>
            <Route path="/bar" component={Bar}/>
            <Route path="/about" component={About}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
