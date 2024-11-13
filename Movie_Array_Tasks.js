
const movies = [
    {
      "movieName": "The Shawshank Redemption",
      "actors": ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
      "rating": 4.8,
      "bestScenes": [
        {
          "title": "Andy Dufresne escapes from prison",
          "duration": "15 mins"
        },
        {
          "title": "Brooks was here",
          "duration": "10 mins"
        }
      ]
    },
    {
      "movieName": "The Godfather",
      "actors": ["Marlon Brando", "Al Pacino", "James Caan"],
      "rating": 4.9,
      "bestScenes": [
        {
          "title": "Horse head in bed",
          "duration": "5 mins"
        },
        {
          "title": "Cannoli scene",
          "duration": "3 mins"
        }
      ]
    },
    {
      "movieName": "The Dark Knight",
      "actors": ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
      "rating": 4.8,
      "bestScenes": [
        {
          "title": "Opening bank robbery",
          "duration": "12 mins"
        },
        {
          "title": "Why So Serious interrogation",
          "duration": "8 mins"
        }
      ]
    },
    {
      "movieName": "The Lord of the Rings: The Return of the King",
      "actors": ["Elijah Wood", "Viggo Mortensen", "Ian McKellen"],
      "rating": 4.9,
      "bestScenes": [
        {
          "title": "Ride of the Rohirrim",
          "duration": "10 mins"
        },
        {
          "title": "Frodo destroys the One Ring",
          "duration": "7 mins"
        }
      ]
    }
  ];
  
  // 1. Find Best Scene Duration per Movie
  function findLongestSceneDuration(movies) {
    return movies.map(movie => {
      const longestScene = movie.bestScenes.reduce((longest, scene) => {
        const sceneDuration = parseInt(scene.duration); 
        return sceneDuration > longest ? sceneDuration : longest;
      }, 0);
      
      return { movieName: movie.movieName, longestSceneDuration: longestScene };
    });
  }
  
  console.log("Longest scene duration per movie:", findLongestSceneDuration(movies));
  
  // 2. Total Duration of Best Scenes
  function totalBestScenesDuration(movies) {
    return movies.reduce((total, movie) => {
      const scenesDuration = movie.bestScenes.reduce((sum, scene) => {
        return sum + parseInt(scene.duration); 
      }, 0);
      return total + scenesDuration;
    }, 0);
  }
  
  console.log("Total duration of all best scenes:", totalBestScenesDuration(movies), "mins");
  
  // 3. Find All Unique Actors
  function getUniqueActors(movies) {
    const allActors = movies.flatMap(movie => movie.actors);
    return [...new Set(allActors)];
  }
  
  console.log("Unique actors:", getUniqueActors(movies));
  
  // 4. Average Rating with Reduce
  function calculateAverageRating(movies) {
    const totalRatings = movies.reduce((sum, movie) => sum + movie.rating, 0);
    return totalRatings / movies.length;
  }
  
  console.log("Average rating:", calculateAverageRating(movies));
  
  // 5. Modify Movie List (Add release year and genre)
  function modifyMovieList(movies) {
    return movies.map(movie => ({
      ...movie,
      releaseYear: 2000,  
      genre: "Drama" 
    }));
  }
  
  console.log("Modified movie list:", modifyMovieList(movies));
  
  // 6. Filter by Rating
  function filterMoviesByRating(movies, rating) {
    return movies.filter(movie => movie.rating === rating);
  }
  
  console.log("Movies with rating 4.9:", filterMoviesByRating(movies, 4.9));
  
  // 7. Sort Movie List
  function sortMovies(movies, sortBy) {
    if (sortBy === "rating") {
      return movies.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "movieName") {
      return movies.sort((a, b) => a.movieName.localeCompare(b.movieName));
    }
    return movies;
  }
  
  console.log("Movies sorted by rating (desc):", sortMovies(movies, "rating"));
  console.log("Movies sorted by name (alphabetical):", sortMovies(movies, "movieName"));
  