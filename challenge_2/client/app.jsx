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
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  useEffect(() => {
    console.log('Success in get data when start/ end is updated in state');
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
  }, [start, end]);

  const handleDateChange = (start, end) => {
    console.log(`changed date range from ${start} to ${end}`);
    setStart(start);
    setEnd(end);
  }

  const handleGraphChange = (graph) => {
    console.log('change graph to', graph);
    setGraph(graph);
  }

  return (
    <div>
      <h2> Cryptocurrency Charting Tool </h2>

      <Form
        handleDateChange={handleDateChange}
        handleGraphChange={handleGraphChange}>
      </Form>

      {graph==='bar' && <BarGraph data={data}/>}
      {graph==='line' && <LineGraph data={data}/>}
      {graph==='pie' && <PieChart data={data}/>}
    </div>
  )
}

ReactDom.render(<App/>, document.getElementById('app'));