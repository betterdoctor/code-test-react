import React, { Component } from "react"
import { Link } from "react-router-dom"

class MovieDetails extends Component {
  constructor() {
    super()
    this.state = { movie: null }
  }

  async componentWillMount() {
    const url = `https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${process.env.REACT_APP_MOVIE_DB_KEY}`
    const request = await fetch(url)
    const response = await request.json()
    this.setState({ movie: response })
  }

  render() {
    console.log(this.state.movie)
    if (!this.state.movie) return null

    const { movie } = this.state
    return (
      <div>
        <h1>{movie.title}</h1>
        <img src={`${process.env.REACT_APP_BACKDROP_PATH}${movie.backdrop_path}`} alt='foo'/>
        <div  style={{marginTop:'20px'}}>{movie.overview}</div>
        <div style={{marginTop:'20px'}}>
          <Link to="/">Back</Link>
        </div>
      </div>
    )
  }
}

export default MovieDetails
