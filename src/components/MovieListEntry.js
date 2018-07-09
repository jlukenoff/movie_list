import React from 'react';

const MovieListEntry = (props) => {
  return (
    <li className="list-item">{props.movie.title}</li>
  );
}

export default MovieListEntry;