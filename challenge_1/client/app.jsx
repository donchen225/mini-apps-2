import React from 'react';
import ReactDom from 'react-dom';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import EventList from './EventList.jsx';
import Form from './Form.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      pageCount: 0
    }
  }
  componentDidMount() {
    this.searchEvents('');
  }
  handlePageClick() {

  }
  searchEvents(query) {
    console.log('searching...')
    axios.get('/events', {
      params: {
        q: query,
        _page: this.state.pageCount,
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
        <Form searchEvents={this.searchEvents.bind(this)}></Form>
        <br></br>
        <EventList events={this.state.events}/>
        <ReactPaginate
          pageCount={this.state.pageCount}
          pageRangeDisplayed={4}
          marginPagesDisplayed={2}
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
      />
      </div>
    )
  }

}

ReactDom.render(<App/>, document.getElementById('app'));