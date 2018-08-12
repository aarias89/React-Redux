import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = { term: ''};

    //2ndthis(instance of SearchBar), has a function called onInputChange
    //bind that function to this(inside bind), replace  value of
    //1stthis.onInputChange with value of binded this.
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    console.log(event.target.value)
    this.setState({ term: event.target.value })
  }

  onFormSubmit(event) {
    event.preventDefault();

    //we need to go and fetch weather data
  }


  render() {
    return (
      //When using <form>, whenever a from element child is focused the
      // browser thinks you are trying to submit the form and it makes a
      // POST request.
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast"
          className="form-control"
          value={this.state.term}
          //Usually if a callback(like onInputChange) is being passed around,
          //and the callback has a reference to 'this', you will need to bind
          //bind the context.
          onChange={this.onInputChange}
         />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary"> Submit</button>
        </span>
      </form>
    )
  }
}
