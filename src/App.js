import dotenv from "dotenv"

import React, { Fragment, Component } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Canvas, Wrapper } from "Elements"

// Material Theme Imports
import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider } from "@material-ui/styles"
import theme from './theme'

// Import components
import MovieList from "./MovieList"
import MovieDetails from "./MovieDetails"

dotenv.config();

class App extends Component {
  render() {
    return (
      <Fragment>
        <ThemeProvider theme={theme}>
          <CssBaseline />
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
        </ThemeProvider>
      </Fragment>
    );
  }
}

export default App;
