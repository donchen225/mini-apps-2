import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div> set up </div>
    )
  }
}

ReactDom.render(<App/>, document.getElementById('app'));