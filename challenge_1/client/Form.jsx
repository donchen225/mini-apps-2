import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.searchEvents(this.state.query, 0);
  }
  render() {
    const {query} = this.state;
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>Search Events:</label>
        <input
          name='query'
          type='text'
          value={query}
          onChange={this.handleChange.bind(this)}/>
        <input
          type='submit'
          value='Search'/>
      </form>
    )
  }
}

export default Form;