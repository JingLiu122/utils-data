import React, { Component } from 'react';
import { LineChart, Line, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';


let data = [{ name: 'a', value: 12 }]

class Page1 extends Component {

  state = {
    data: ""
  }

  async componentDidMount() {
    let res = await fetch("http://localhost:3000/data");
    let data = await res.json();
    // console.log(data);
    this.setState({ data });

  }


  render() {
    return (
      <div>
        <BarChart width={730} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
        {JSON.stringify(this.state.data)}
        <button onClick={() => {
          this.props.history.push("/page2")
        }}>go to page2</button>
      </div>
    );
  }
}

export default Page1;
