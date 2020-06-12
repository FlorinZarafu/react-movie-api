import React from "react";
import { connect } from "react-redux";
import { fetchMovie, setLoading } from "../../redux/actions/searchActions";
import Spinner from "../spinner/spinner.component";

class Movie extends React.Component {
  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id);
    this.props.setLoading();
  }
  render() {
    const { loading, movie } = this.props;
    let movieInfo = (
      <div>
        <h3>Title- {movie.Title}</h3>
        <p>Year - {movie.Year}</p>
        <p>Released - {movie.Released}</p>
        <p>{movie.Actors}</p>
        <img src={movie.Poster} alt="" />
      </div>
    );
    let content = loading ? <Spinner /> : movieInfo;
    return <div>{content}</div>;
  }
}
const mapStateToProps = (state) => ({
  loading: state.movies.loading,
  movie: state.movies.movie,
});
export default connect(mapStateToProps, { fetchMovie, setLoading })(Movie);
