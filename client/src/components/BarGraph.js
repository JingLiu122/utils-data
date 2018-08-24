import React, { Component } from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';

class BarGraph extends Component {
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
        <h2>A graph that uses model solar utility and no solar utility for representing BarGraph</h2>
          <BarChart width={730} height={250} data={this.state.data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar type="monotone" dataKey="bill" fill="#82ca9d" />
            <Bar type="monotone" dataKey="other_utils" fill="#FD0000" />
          </BarChart>
        </div>
    );
  }
}

export default BarGraph;
