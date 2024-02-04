# Basic GraphQl server with Nodejs

## Setup Project
  - cd intro_to_graphql
  - npm i 
  - npm run start
### Next, navigate to localhost:8080 and click on the “Query your server” button to navigate to the GraphQL playground

*(run the queryMovies function)*

query {
 queryMovies {
  movieTitle
  dateOfRelease
 }
}

### click on the “Run” button to execute the queryMovies function and you should see the movies array output. The movies array is the hardcoded array we have written in index.js.
*(We will now execute the addMovie mutation to add a new movie to the array. First, create a new workspace by clicking on the “+” icon.)*

- mutation {
 addMovie(
  movieTitle: "Avengers - End game",
  dateOfRelease: "11-Dec-22"
 ) {
  movieTitle
  dateOfRelease
 }
}

Click on the “Run” button to execute the addMovie mutation and you should see the movieTitle and dateOfRelease returned  