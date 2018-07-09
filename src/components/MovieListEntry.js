import React from 'react';

const MovieListEntry = (props) => {
  return (
    <li>{props.movie.title}</li>
  );
}

export default MovieListEntry;