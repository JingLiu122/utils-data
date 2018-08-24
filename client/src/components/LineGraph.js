import React, { Component } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

class LineGraph extends Component {
  state = {
    data: ""
  }

  async componentDidMount() {
    let res = await fetch("http://localhost:5000/data");
    const data = await res.json();
    this.setState({ data });
  }

  render() {
    return (
      <div>
        <h2>A graph that uses model month and kwh for representing LineGraph</h2>
        <LineChart width={600} height={300} data={this.state.data}
              margin={{top: 5, right: 30, left: 20, bottom: 5}}>
         <XAxis dataKey="month" />
         <YAxis/>
         <CartesianGrid strokeDasharray="3 3"/>
         <Tooltip/>
         <Legend />
         <Line type="monotone" dataKey="kwh"  stroke="#8884d8" activeDot={{r: 8}}/>
        </LineChart>
      </div>
    );
  }
}
//{JSON.stringify(this.state.data)}
export default LineGraph;
