import React, {useState} from 'react';

const Form = ({getBitcoinData, handleGraphChange}) => {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [graph, setGraph] = useState('');

  const onGraphChange = (e) => {
    setGraph(e.target.value);
  }

  const onDateChange = (e) => {
    if (e.target.name === 'start') {
      setStart(e.target.value);
    } else if (e.target.name === 'end') {
      setEnd(e.target.value);
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    handleGraphChange(graph);
    getBitcoinData(start, end);
  }

  return (
    <form onSubmit={onSubmit}>
      <label>
      Start Date:
        <input placeholder='YYYY-MM-DD'
          type='date'
          name='start'
          value={start}
          onChange={onDateChange}/>
      </label>
      <label><br/>
      End Date:
        <input placeholder='YYYY-MM-DD'
          type="date"
          name="end"
          value={end}
          onChange={onDateChange}/>
      </label><br/>
      <label>
      Time Series Graph Type:
        <select
          onChange={onGraphChange}
          defaultValue='line'>
          <option value='bar'> Bar Graph </option>
          <option value='line'> Line Graph </option>
          <option value='pie'> Pie Chart </option>
        </select>
      </label>
      <input type="submit" value="Submit"/>
    </form>
  )
}

export default Form;