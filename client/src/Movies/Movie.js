import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import MovieCard from "./MovieCard";

function Movie({ addToSavedList, deletefromList }) {
  const [movie, setMovie] = useState(null);
  const params = useParams();

  const fetchMovie = (id) => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err.response));
  };

  const saveMovie = () => {
    addToSavedList(movie);
  };

  // const updateMovie = () => {
  //   updateList(movie);
  // }

  const deleteMovie = () => {
    deletefromList(movie);
  };

  useEffect(() => {
    fetchMovie(params.id);
  }, [params.id]);

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  console.log(params);

  return (
    <div className="save-wrapper">
      <MovieCard movie={movie} />

      {/* Save Button */}
      <div className="save-button" onClick={saveMovie}>
        Save
      </div>

      {/* Update Button */}
      {/* <div className="update-button" onClick={updateMovie}>
        Update
      </div> */}

      {/* Delete Button */}
      <div className="delete-button" onClick={deleteMovie}>
        Delete
      </div>
    </div>
  );
}

export default Movie;
