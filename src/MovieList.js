import React, { Component, Fragment } from "react"
import { Link } from "react-router-dom"

class MovieList extends Component {
  constructor() {
    super()
    this.state = { movies: null }
  }

  async componentWillMount() {
    const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_MOVIE_DB_KEY}`
    const request = await fetch(url)
    const response = await request.json()
    this.setState({ movies: response })
  }

  render() {
    console.log(this.state.movies)
    return (
      <Fragment>
        {this.state.movies &&
          this.state.movies.results.map(movie => (
            <Link to={`/${movie.id}`}>
              <img
                src={`${process.env.REACT_APP_POSTER_PATH}${movie.poster_path}`}
                alt="foo"
              />
            </Link>
          ))}
      </Fragment>
    )
  }
}

export default MovieList
