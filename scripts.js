document.addEventListener("DOMContentLoaded", () => {
  const movieCard = document.querySelector(".movie-card");

  const handleSwipe = (direction) => {
    if (direction === "left") {
      movieCard.classList.add("swipe-left");
      setTimeout(() => {
        alert("You disliked the movie!");
        // Load next movie
        movieCard.classList.remove("swipe-left");
      }, 300);
    } else if (direction === "right") {
      movieCard.classList.add("swipe-right");
      setTimeout(() => {
        alert("You liked the movie!");
        // Load next movie
        movieCard.classList.remove("swipe-right");
      }, 300);
    }
  };

  const hammer = new Hammer(movieCard);
  hammer.on("swipeleft", () => handleSwipe("left"));
  hammer.on("swiperight", () => handleSwipe("right"));
});
