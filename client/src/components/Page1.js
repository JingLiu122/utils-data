import React, { Component } from 'react';

class Page1 extends Component {

  state = {
    data: ""
  }

  async componentDidMount() {
    let res = await fetch("http://localhost:3000/data");
    let data = await res.json();
    // console.log(data);
    this.setState({data});

  }


  render() {
    return (
        <div>
          page1
          {JSON.stringify(this.state.data)}
          <button onClick={() => {
            this.props.history.push("/page2")
          }}>go to page2</button>
        </div>
    );
  }
}

export default Page1;
