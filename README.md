# At the Movies - Coding Challenge

At the Movies is a simple application that requests a list of the latest movies in theatres from [https://www.themoviedb.org/](https://www.themoviedb.org/) API.

# Instructions
- Clone this repo
- Get an API key from [TheMovieDB.org](https://www.themoviedb.org/)
  - [API Documentation](https://developers.themoviedb.org/3/getting-started/introduction)
- Complete at least 2 of the 4 tasks below
- GZIP your repo with your solution and send it to us.  
No need to include your node_modules folder. We will install the app and required modules defined in the package.json file.

Note: Please do not post the solution in a public repo.

# How we use this code test

We use this code test to help us have a more focused and concise discussion with you during a short phone interiew with the hiring manager or one of our engineers.

If we move on to an in-person interview, we will actually do some pair coding together where we will continue to work through tasks.


# Tasks

## Option 1: Refactor the application to only use functional components

- Remove the standard react lifecycle methods
- Refactor to use the new React Hooks.  
Some of the components are already refactored and can be referred to as examples.
  - [useEffect documentation](https://reactjs.org/docs/hooks-effect.html)
  - [useState documentation](https://reactjs.org/docs/hooks-state.html)

## Option 2: Fix the movie details page image
Currently the image on the movie details doesn't look good. Fix that page so that the image looks good.


## Option 3: Fix the movie list image hover
You'll notice that when you hover over one of the movie posters on the movie list, that the other posters move around.

See if you can find a solution to fix that problem.

## Option 4: Add some filters to the movie list
Create a filter option where users can filter which movies are display based on some data attributes such as:
- Genre
- Ratings
- Etc

## Bonus Points
If you want to try something different, go for some bonus points. Try one of these things out!

- Add some addtional formating using [styled components](https://www.styled-components.com/)
- Use the React Context API to add the Movie List response object to context.
  - [React Context API Documentation](https://reactjs.org/docs/context.html)
- Be creative and do something to suprise us!


# About the App

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

## UI and Animation Modules

### Material UI Framework
There is a theme file that defines colors and spacing units for the app. At the moment this is using the latest beta version of Material UI 4. As you look at the code, you will see how the theme is injected into the application and how components use the theme. It's not necessary to do anything with this, but it may make some things easier if you happen to be familiar with this UI Framework.

[Material UI Documentation](https://next.material-ui.com/)

### React Spring Animation Library
You will notice that the Movie List Posters have a hover effect applied when you mouse over them. Rather than use a simple onHover css event, we are using a mouse event to trigger a native animation effect using the react-spring module.

[React Spring Documentation](https://www.react-spring.io/)


--- 

# Env file

You will need to add a .env file. We've added our .env file to .gitignore so you won't find it in the repo. Here are the values you will need

```javascript
NODE_PATH=src/
REACT_APP_MOVIE_DB_KEY='your api key here'
REACT_APP_POSTER_PATH='https://image.tmdb.org/t/p/w154'
REACT_APP_BACKDROP_PATH='https://image.tmdb.org/t/p/w1280'
```
