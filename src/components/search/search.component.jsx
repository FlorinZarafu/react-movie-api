import React from "react";
import {
  searchMovie,
  fetchMovies,
  setLoading,
} from "../../redux/actions/searchActions";
import { connect } from "react-redux";

class SearchForm extends React.Component {
  // handle submit
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.fetchMovies(this.props.text);
    this.props.setLoading();
  };
  //   handle chnage
  handleChange = (e) => {
    this.props.searchMovie(e.target.value);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="searchText" onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  text: state.movies.text,
});

export default connect(mapStateToProps, {
  searchMovie,
  fetchMovies,
  setLoading,
})(SearchForm);
