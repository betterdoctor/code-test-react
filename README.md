# At the Movies

At the Movies is a simple application that requests a list of the latest movies in theatres from [https://www.themoviedb.org/](https://www.themoviedb.org/) API.


## The app has two pages.

- Index page listing recent movies
- Individual movie page that displays the movie details

## Task

Refactor the application

- Convert from lifecycle methods to hooks
- Format the images to look good
- Ensure that the app is responsive
- Format the movie detail page and add some addtioinal data attributes from the API

## Bonus Points

- Format using [styled components](https://www.styled-components.com/)
- Add the response object to context using the [react context API](https://reactjs.org/docs/context.html)

---

# Instructions

- Fork the repo
- Get your own API key from [TheMovieDB.org](https://www.themoviedb.org/)
  - [API Documentation](https://developers.themoviedb.org/3/getting-started/introduction)
- Refactor the code
- Send us a link to your repo

--- 

# Env file

You will need to add a .env file. Here are the value you need

```javascript
NODE_PATH=src/
REACT_APP_MOVIE_DB_KEY='your api key here'
REACT_APP_POSTER_PATH='https://image.tmdb.org/t/p/w154'
REACT_APP_BACKDROP_PATH='https://image.tmdb.org/t/p/w1280'
```
