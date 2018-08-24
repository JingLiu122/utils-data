import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Page1 from './components/Page1';
import Page2 from './components/Page2';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/page1" component={Page1} />
          <Route path="/page2" component={Page2} />
        </div>
      </Router>
    );
  }
}

export default App;
