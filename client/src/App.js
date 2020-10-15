import React, { useState, useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import AddMovie from "./Movies/AddMovie";
import axios from "axios";

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const { push } = useHistory();

  const getMovieList = () => {
    axios
      .get("http://localhost:5000/api/movies")
      .then((res) => setMovieList(res.data))
      .catch((err) => console.log(err.response));
  };

  const addToSavedList = (movie) => {
    setSavedList([...savedList, movie]);
  };

  // NEW ASSIGNMENT FUNCTIONS BELOW
  const deletefromList = (movie) => {
    axios
      .delete(`http://localhost:5000/api/movies/${movie.id}`)
      .then((res) => {
        setMovieList(res.data);
        push("/movies");
      })
      // .post(`http://localhost:5000/api/movies/${movie.id)`)
      // })
      .catch((err) => {
        console.log(err);
      });
  };

  const addMovie = ({ title, director, metascore, actor1, actor2, actor3 }) => {
    const movie = {
      id: Date.now(),
      title: `${title}`,
      director: `${director}`,
      metascore: `${metascore}`,
      stars: [`${actor1}, ${actor2}, ${actor3}`],
    };
  };

  // Function/Button to Add a New Movie

  useEffect(() => {
    getMovieList();
  }, []);

  return (
    <>
      <SavedList list={savedList} />

      <Route exact path="/">
        <MovieList movies={movieList} />
      </Route>

      <Route path="/add-movie">
        <AddMovie addMovie={addMovie} />
      </Route>

      <Route path="/movies/:id">
        <Movie
          addToSavedList={addToSavedList}
          deletefromList={deletefromList}
        />
      </Route>

      {/* <Route path="/update-movie/:id">
        <Movie />
      </Route> */}
    </>
  );
};

export default App;
