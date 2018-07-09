import React from 'react';
import ReactDOM from 'react-dom';
import MovieListEntry from './components/MovieListEntry.js';
import './style.css';



class MovieList extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [
        {title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'},
      ],
      searchVal: 'Search for a movie...'
    }
  }

  handleChange(event) {
    this.setState({searchVal: event.target.value});
  }

  handleClick() {
    console.log(this);
  }

  render() {
    return (
      <div className="app">
        <h1>Welcome to Movie List</h1>
        <input type="text" id="search" value={this.state.searchVal} onChange={(event) => this.handleChange(event)}/>
        <button id="search-btn" onClick={this.handleClick.bind(this)}>Search</button>
        <ul className="list-body">
          {this.state.movies.map(movie => (
            <MovieListEntry movie={movie}/>
          ))}
        </ul>
      </div>
    );
  };
}

ReactDOM.render(<MovieList />, document.getElementById('app'));

