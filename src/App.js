import React, { useState } from "react";
import "./App.css";
import { Container } from "reactstrap";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CustomNavbar from "./components/Navbar";
import Home from "./pages/Home";
import BucketList from "./pages/BucketList";

const API = "http://www.omdbapi.com/?apikey=3c9bcea4&s=";

function App() {
  const [movies, setMovies] = useState([]);
  const getMovies = query =>  axios.get(API + query).then((d) => setMovies(d.data.Search));
  const handleSubmit = (event, searchValue) => {
    event.preventDefault();
    getMovies(searchValue)
  };
  return (
    <Router>
      <CustomNavbar />
      <Container>
        <Switch>
          <Route path="/home">
            <Home handleSubmit={handleSubmit} movies={movies} />
          </Route>
          <Route path="/watchlist">
            <BucketList bucketMovies={movies} />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
