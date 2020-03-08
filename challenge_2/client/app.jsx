import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import Form from './Form.jsx';
import BarGraph from './BarGraph.jsx';
import LineGraph from './LineGraph.jsx';
import PieChart from './PieChart.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      graph: ''
    }
  }
  componentDidMount() {
    this.getBitcoinData();
  }
  getBitcoinData(start, end) {
    console.log('successfully able to get bitcoin data');
    axios.get('/bitcoin', {
      params: {
        start: start,
        end: end
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
  handleGraphChange(graph) {
    console.log('graph is changed to', graph);
    this.setState({
      graph: graph
    })
  }

  render() {
    return (
      <div>
        <h2> Cryptocurrency Charting Tool </h2>

        <Form
          getBitcoinData={this.getBitcoinData.bind(this)}
          handleGraphChange={this.handleGraphChange.bind(this)}>
        </Form>

        {this.state.graph==='bar' && <BarGraph data={this.state.data}/>}
        {this.state.graph==='line' && <LineGraph data={this.state.data}/>}
        {this.state.graph==='pie' && <PieChart data={this.state.data}/>}
      </div>
    )
  }
}

ReactDom.render(<App/>, document.getElementById('app'));