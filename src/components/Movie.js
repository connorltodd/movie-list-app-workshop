import React from "react";
import { Link } from "react-router-dom";

function Movie(props) {
  return (
    <div>
      <p>Movie Component</p>
      <p>title: {props.title}</p>
      <p>year: {props.year}</p>
      <p>director: {props.director}</p>
      <Link to={`/movies/${props.id}`}>View details</Link>
      {/* <img src={props.posterUrl} /> */}
    </div>
  );
}

export default Movie;
