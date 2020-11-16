import React from "react";
import axios from "axios";

class MovieDetails extends React.Component {
  state = {
    movie: {},
  };

  componentDidMount() {
    this.fetchMovie();
    console.log(this.props);
  }

  fetchMovie = () => {
    axios
      .get(
        "https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json"
      )
      .then((response) => {
        const selectedMovieId = this.props.match.params.id;
        const movie = response.data.movies.filter(
          (movie) => movie.id === Number(selectedMovieId)
        );
        console.log("movie: ", movie[0]);
        this.setState({ movie: movie[0] });
      });
  };
  render() {
    return (
      <div>
        <p>title: {this.state.movie.title}</p>
        <p>year: {this.state.movie.year}</p>
        <p>director: {this.state.movie.director}</p>
      </div>
    );
  }
}

export default MovieDetails;
