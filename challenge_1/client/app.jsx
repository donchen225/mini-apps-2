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
      lastSearch: ''
    }
  }
  componentDidMount() {
    this.searchEvents('', 0);
  }
  handlePageClick(e) {
    console.log('page clicked on', e.selected+1);
    this.searchEvents(this.state.lastSearch, e.selected+1);
  }
  searchEvents(query, numPage) {
    console.log('searching...')
    axios.get('/events', {
      params: {
        q: query,
        _page: numPage,
        _limit: 10
      },
    })
    .then((response) => {
      console.log('data', response.data);
      this.setState({
        events: response.data,
        lastSearch: query
      });
    })
    .catch(error => {
      console.error(error);
    });
  }
  render() {
    return (
      <div>
        <div id="title"> Historical Event Finder </div>
        <br></br>
        <Form searchEvents={this.searchEvents.bind(this)}></Form>
        <br></br>
        <EventList events={this.state.events}/>
        <ReactPaginate
          pageRangeDisplayed={4}
          marginPagesDisplayed={2}
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          onPageChange={this.handlePageClick.bind(this)}
          breakClassName={'break-me'}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}/>
      </div>
    )
  }
}

ReactDom.render(<App/>, document.getElementById('app'));