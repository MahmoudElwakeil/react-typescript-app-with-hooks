import * as React from "react";
import MoviesService from "../services/movies.service";
import Movie from "../models/movie-view-mode";
import Like from "./like";
import { Link } from "react-router-dom";
import { UserContext } from "../App";

function MoviesComponent() {
  const { showAlert } = React.useContext(UserContext);

  const [movies, setMovies] = React.useState<Movie[]>([]);
  const _moviesService: MoviesService = new MoviesService();

  React.useEffect(() => {
    setMovies(_moviesService.getMovies());
  }, []);

  function deleteMovie(movieId: string) {
    const newMovies = movies.filter((m) => m._id !== movieId);
    setMovies(newMovies);
    showAlert("Movie Deleted...");
  }

  function toggleLiked(movieId: string) {
    // populating array in state ==> must clone old array and manipulate this new one and set it back into state
    const newMovies = [...movies];
    const _movie = newMovies.find((m) => m._id === movieId);
    if (_movie) {
      _movie.liked = !_movie?.liked;
      setMovies(newMovies);
      showAlert("Movie Toggle Liked...");
    }
  }

  return (
    <React.Fragment>
      <h4>Rendering {movies.length} Movies</h4>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Number in Stock</th>
            <th>Production Date</th>
            <th>Daily Rent Rate</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie._id}>
              <td>
                <Link to={`/movie-details/${movie._id}`}>{movie.name}</Link>
              </td>
              <td>{movie.numberInStock}</td>
              <td>{movie.publishDate}</td>
              <td>{movie.dailyRentRate}</td>
              <td>
                <Like
                  movie={movie}
                  onClick={() => toggleLiked(movie._id)}
                ></Like>
              </td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteMovie(movie._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default MoviesComponent;
