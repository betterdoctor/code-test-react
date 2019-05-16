import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MovieListItem from "./MovieListItem";

const MovieList = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${
        process.env.REACT_APP_MOVIE_DB_KEY
      }`;
      const request = await fetch(url);
      const response = await request.json();
      setMovies(response);
    };
    getMovies();
  }, []);

  return (
    <Fragment>
      {movies &&
        movies.results.map((movie, index) => (
          <Link to={`/${movie.id}`}>
            <MovieListItem poster={movie.poster_path} />
          </Link>
        ))}
    </Fragment>
  );
};

export default MovieList;
