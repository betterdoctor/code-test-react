import dotenv from 'dotenv'

import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Canvas, Wrapper } from "Elements"

// Import components
import MovieList from "./MovieList"
import MovieDetails from "./MovieDetails"

dotenv.config()

class App extends Component {
  render() {
    return (
      <Router>
        <Canvas>
          <Wrapper>
            <Switch>
              <Route exact path="/" component={MovieList} />
              <Route path="/:id" component={MovieDetails} />
            </Switch>
          </Wrapper>
        </Canvas>
      </Router>
    )
  }
}

export default App
