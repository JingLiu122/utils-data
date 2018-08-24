import React, { Component } from 'react';

class Page2 extends Component {
  render() {
    return (
        <div>
          page2
          <button onClick={() => {
            this.props.history.push("/page1")
          }}>go to page1</button>
        </div>
    );
  }
}

export default Page2;
