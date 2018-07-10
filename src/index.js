import React from 'react';
import ReactDOM from 'react-dom';
import MovieListEntry from './components/MovieListEntry.js';
import './style.css';



class MovieList extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [
        {title: 'Mean Girls', show: true, watched: false},
        {title: 'Hackers', show: true, watched: true},
        {title: 'The Grey', show: true, watched: true},
        {title: 'Sunshine', show: true, watched: true},
        {title: 'Ex Machina', show: true, watched: false},
      ],
      searchVal: 'Search for a movie...',
      newMovieVal: '',
      watchView: true
    }
  }

  handleSearchChange(event) {
    this.setState({searchVal: event.target.value});
    if (event.which === 13) {
      this.handleClick();
    }
  }

  handleAddMovieChange() {
    this.setState({newMovieVal: event.target.value});
    if (event.which === 13) {
      this.handleNewMovie();
    }
  }

  handleSearchClick() {
    let term = new RegExp(this.state.searchVal, 'i');
    let currentMovies = this.state.movies.map((movie, i) => {
      //setting titles not matching search term to false
      movie.show = movie.title.search(term) === -1 ? true : false;
      return movie;
    });
    this.setState({movies: currentMovies, searchVal: 'Search for a movie...'});
  }

  handleNewMovie() {
    let currentList = this.state.movies;
    currentList.unshift({title: this.state.newMovieVal, show: true});
    this.setState({movies: currentList});
  }

  handleWatchToggle(idx) {
   let currentList = this.state.movies;
   currentList[idx]['watched'] = !currentList[idx]['watched'];
   this.setState({movies: currentList}); 
  }

  toggleWatched(str) {
    let currentList = this.state.movies.map((movie) => {
      if ((str === 'watched' && movie.watched) || (str === 'unwatched' && !movie.watched)) {
        movie.show = true;
      } else {
        movie.show = false;
      }
      return movie;
    });
    this.setState({movies: currentList});
  }

  render() {
    return (
      <div className="app">
        <h1>Welcome to Movie List</h1>
        <input type='text' id='add-movie' placeholder="add a movie..." onKeyUp={() => this.handleAddMovieChange(event)}/>
        <button id="add-movie-btn" onClick={() => this.handleNewMovie()}>Add</button><br/>
        <input type="text" id="search" placeholder={this.state.searchVal} onKeyDown={(event) => this.handleSearchChange(event)}/>
        <button id="search-btn" onClick={() => this.handleSearchClick()}>Search</button><br/>
        <div id="watched-btns-container">
          <button onClick={() => this.toggleWatched('watched')}>watched</button>
          <button onClick={() => this.toggleWatched('unwatched')}>unwatched</button>
        </div>
        <ul className="list-body">
          {(() => {
            let movieFound = false;
            let display = this.state.movies.map((movie, idx) => {
              if (movie.show) {
                movieFound = true;
                return <MovieListEntry movie={movie} index={idx} click={this.handleWatchToggle.bind(this)}/>
              } else {
                return null;
              }
            });
            if (movieFound) {
              return display;
            } else {
              return <p style={{color: 'red'}}> No movies with that name found. Please try again.</p>
            }
          })()
          }
        </ul>
      </div>
    );
  };
}

ReactDOM.render(<MovieList />, document.getElementById('app'));

