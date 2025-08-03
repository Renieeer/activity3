// Starter data
const movies = [
  { title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { title: "Frozen", genre: "Animation", rating: 7.5 },
  { title: "The Godfather", genre: "Crime", rating: 9.2 },
  { title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

// Start coding here...

//filteration 
const movieGenre = movies.filter(movie => movie.rating >= 8)
.map(movie => `${movie.title} (${movie.genre}) ${movie.rating}`);
console.log(movieGenre.join(", 2 ")); 


const title = movies.map(movie => `${movie.title} (${movie.genre}) - ${movie.rating}` + '⭐');
console.log(title.join(", "));


const minRating = 8;
const recommendedMovies = movies.filter(movie => movie.rating >= minRating)
  .map(movie => `${movie.title} (${movie.genre}) - ${movie.rating}  ⭐`);
console.log(recommendedMovies .join(", "));    