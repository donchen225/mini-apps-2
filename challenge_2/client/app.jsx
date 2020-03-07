import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: '2019-03-05',
      end: '2020-03-05',
      data: {}
    }
  }
  componentDidMount() {
    this.getBitcoinData();
  }
  getBitcoinData() {
    axios.get('/bitcoin', {
      params: {
        start: this.state.start,
        end: this.state.end
      }
    })
    .then((res) => {
      console.log('data', res.data);
      this.setState({
        data: res.data.bpi
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }
  render() {
    return (
      <div> Hello </div>
    )
  }
}

ReactDom.render(<App/>, document.getElementById('app'));