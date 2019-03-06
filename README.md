# At the Movies

At the Movies is a simple application that requests a list of the latest movies in theatres from [https://www.themoviedb.org/](https://www.themoviedb.org/) API.


## The app has two pages.

- Movie List  
List of recently released movies.
- Movie Details  
Individual movie page that displays the movie details.

## Data Source / API
The data for the app comes from [themoviedb.org](https://www.themoviedb.org/) API. The API end points are already in the detail and list pages and configured to use environment variables for the api key. You will need to get your own api key. It's free and simple to get.

```javascript
// Movie List
https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=yourKeyHere

// Movie Details
https://api.themoviedb.org/3/movie/12345?api_key=YourKeyHere
```

## Task

Refactor the application

- Remove the standard react lifecycle methods and refactor to use the new React Hooks
  - useEffect
  - useState
- Make sure that the images look good
- The app should be responsive
- Add at least one additional attribute to the Movie Details page

## Bonus Points

- Add some addtional formating using [styled components](https://www.styled-components.com/)
- Add the Movie List response object to context using the [react context API](https://reactjs.org/docs/context.html)
- Be Creative!

---

# Instructions

- Clone the repo
- Get an API key from [TheMovieDB.org](https://www.themoviedb.org/)
  - [API Documentation](https://developers.themoviedb.org/3/getting-started/introduction)
- Refactor the code
- Share your solution with us.  
You decide how to share it back to us. Share it privately, no public repos please.

--- 

# Env file

You will need to add a .env file. Here are the values you will need

```javascript
NODE_PATH=src/
REACT_APP_MOVIE_DB_KEY='your api key here'
REACT_APP_POSTER_PATH='https://image.tmdb.org/t/p/w154'
REACT_APP_BACKDROP_PATH='https://image.tmdb.org/t/p/w1280'
```
