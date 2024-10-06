document.addEventListener("DOMContentLoaded", () => {
  const movies = [
    {
      title: "Inception",
      description:
        "A thief who steals corporate secrets through the use of dream-sharing technology.",
      poster: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
    },
    {
      title: "The Dark Knight",
      description:
        "When the menace known as the Joker emerges from his mysterious past.",
      poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    },
    {
      title: "Interstellar",
      description:
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      poster: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    },
  ];

  let currentIndex = 0;

  const moviePoster = document.getElementById("movie-poster");
  const movieTitle = document.getElementById("movie-title");
  const movieDescription = document.getElementById("movie-description");

  const updateMovieCard = () => {
    const movie = movies[currentIndex];
    moviePoster.src = movie.poster;
    movieTitle.textContent = movie.title;
    movieDescription.textContent = movie.description;
  };

  const handleSwipe = (direction) => {
    if (direction === "left" || direction === "right") {
      const swipeClass = direction === "left" ? "swipe-left" : "swipe-right";
      movieCard.classList.add(swipeClass);
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % movies.length;
        updateMovieCard();
        movieCard.classList.remove(swipeClass);
      }, 300);
    }
  };

  const movieCard = document.querySelector(".movie-card");
  const hammer = new Hammer(movieCard);
  hammer.on("swipeleft", () => handleSwipe("left"));
  hammer.on("swiperight", () => handleSwipe("right"));

  // Initialize the first movie
  updateMovieCard();
});
