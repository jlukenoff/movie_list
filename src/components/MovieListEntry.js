import React from 'react';

const MovieListEntry = (props) => {
  return (
    <li className="list-item">{props.movie.title}
    <button class="watch-toggle" 
      style={
        props.movie.watched ? {backgroundColor: 'green', borderRadius: '5px', color: 'white'} : {backgroundColor: 'white'}
      }
      onClick={
        () => {
          console.log(props);
          props.click(props.index);
        }
      }
      >Watched</button></li>
  );
}

export default MovieListEntry;