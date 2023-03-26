import { useEffect, useState } from "react";
import { Outlet, useParams, Link } from "react-router-dom";
import ErrorBoundary from "../ErrorBoundary";
import api from "../../services/api";
import "../Common.css";

export default function MovieDetailsPage() {
  const [movieInfo, setMovie] = useState(null);
  const [genres, saveGenres] = useState([]);

  let params = useParams();

  useEffect(() => {
    let abortController = new AbortController();
    api
      .fetchMovies(`movie/${params.movieId}`, abortController)
      .then((response) => {
        setMovie(response);
        saveGenres(
          response.genres.map((genre) => <p key={genre.name}>{genre.name}</p>)
        );
      });

    return () => abortController.abort();
  }, []);

  return (
    movieInfo && (
      <div>
        <section>
          <div className="movie-info-div">
            <img
              className="movie-info-img"
              src={
                "https://image.tmdb.org/t/p/original/" + movieInfo.poster_path
              }
            ></img>
            <div className="movie-info">
              <h2>{movieInfo.title}</h2>
              <p>User score: {movieInfo.vote_average * 10}%</p>
              <h3>Overview</h3>
              <p>{movieInfo.overview}</p>
              <h3>Genres</h3>
              <ul className="movie-info-list">{genres}</ul>
            </div>
          </div>
        </section>
        <Outlet />
      </div>
    )
  );
}
