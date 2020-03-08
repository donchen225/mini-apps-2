import React, {useState, useEffect} from 'react';
import ReactDom from 'react-dom';

import axios from 'axios';
import Form from './Form.jsx';
import BarGraph from './BarGraph.jsx';
import LineGraph from './LineGraph.jsx';
import PieChart from './PieChart.jsx';

const App = () => {
  const [data, setData] = useState({});
  const [graph, setGraph] = useState('');

  useEffect(() => {
    getBitcoinData();
  }, [])

  const getBitcoinData = (start, end) => {
    console.log('successful in get bitcoin data');
    axios.get('/bitcoin', {
      params:{ start: start, end: end }
    })
    .then((res) => {
      console.log('data', res.data);
      setData(res.data.bpi);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  const handleGraphChange = (graph) => {
    console.log('change to', graph);
    setGraph(graph);
  }

  return (
    <div>
      <h2> Cryptocurrency Charting Tool </h2>

      <Form
        getBitcoinData={getBitcoinData}
        handleGraphChange={handleGraphChange}>
      </Form>

      {graph==='bar' && <BarGraph data={data}/>}
      {graph==='line' && <LineGraph data={data}/>}
      {graph==='pie' && <PieChart data={data}/>}
    </div>
  )
}

ReactDom.render(<App/>, document.getElementById('app'));