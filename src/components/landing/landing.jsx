import React from "react";
import SearchForm from "../search/search.component";
import { connect } from "react-redux";
import Spinner from "../spinner/spinner.component";
import MoviesContainer from "../movies-container/movies-container.component";

class Landing extends React.Component {
  render() {
    const { loading } = this.props;
    return (
      <div>
        <SearchForm />
        {loading ? <Spinner /> : <MoviesContainer />}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  loading: state.movies.loading,
});
export default connect(mapStateToProps)(Landing);
