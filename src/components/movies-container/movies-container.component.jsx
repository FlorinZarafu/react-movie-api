import React from "react";
import { connect } from "react-redux";
import MovieCard from "../movie-card/movie-card.component";
import NotFound from "../not-found/not-found.component";

class MovieContainer extends React.Component {
  render() {
    const { movies } = this.props;
    let content = "";
    content =
      movies.Response === "True"
        ? movies.Search.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))
        : null;
    return (
      <div>
        <h3>Movie COntainer</h3>
        {content}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  movies: state.movies.movies,
});
export default connect(mapStateToProps)(MovieContainer);
