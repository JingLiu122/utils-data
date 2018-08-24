import React, { Component } from "react";

class About extends Component{
  render(){
    return(
      <div>
        <h2>simple single page app to show the solar utility data that built with:</h2>
        <ol>
          <li>ReactJS</li>
            <ul>
              <li>Recharts</li>
            </ul>
          <li>NodeJS</li>
            <ul>
              <li>ExpressJS</li>
            </ul>
        </ol>
      </div>
    );
  }
}

export default About;
