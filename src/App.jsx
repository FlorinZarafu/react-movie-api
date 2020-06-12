import React from "react";
import Landing from "./components/landing/landing";
import Movie from "./components/movie/movie.component";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1>App</h1>
      <Route exact path="/" component={Landing} />
      <Route exact path="/movie/:id" component={Movie} />
    </div>
  );
};

export default App;
