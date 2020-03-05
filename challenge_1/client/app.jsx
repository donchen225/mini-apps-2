import React from 'react';
import ReactDom from 'react-dom';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import EventList from './EventList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      query: '',
      pageCount: 0
    }
  }
  componentDidMount() {
    this.searchEvents('');
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })

  }
  handleSubmit(e) {
    console.log('submitted');
    e.preventDefault();
    this.searchEvents(this.state.query, this.state.pageCount)
  }
  handlePageClick() {

  }
  searchEvents(query, pageCount) {
    console.log('searching...')
    axios.get('/events', {
      params: {
        q: query,
        _page: pageCount,
        _limit: 10,
      },
    })
    .then(response => {
      console.log('data', response.data);
      this.setState({
        events: response.data
      });
    })
    .catch(error => {
      console.error(error);
    });
  }
  render() {
    return (
      <div>
        <div style={{textAlign: "center", fontSize: "25px", fontWeight: "bold"}}> Historical Event Finder</div>
        <br></br>
        <form onSubmit={this.handleSubmit.bind(this)}
        style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
          <label>Search Events:</label>
          <input
            name='query'
            type='text'
            value={this.state.query}
            onChange={this.handleChange.bind(this)}/>
          <input
            type='submit'
            value='Search'/>
        </form>
        <br></br>
        <EventList events={this.state.events}/>
      </div>
    )
  }

}

ReactDom.render(<App/>, document.getElementById('app'));