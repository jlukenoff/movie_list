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
      ]
    }
  }
  render() {
    return (
      <div className="app">
        <h1>Welcome To Movie List</h1>
        {/* add search input/button here */}
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

