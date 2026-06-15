const searchInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector("#searchBtn");
const moviesContainer = document.querySelector("#moviesContainer");



async function searchMovie() {

try {
    const movie = searchInput.value;

    if (!movie.trim()) {
      moviesContainer.innerHTML = "<h2>Please enter a movie name</h2>";
      return;
    }

    moviesContainer.innerHTML = "<h2>Loading...</h2>";

    const response = await fetch(
      `https://www.omdbapi.com/?apikey=95e0ec8b&s=${movie}`,
    );
    const data = await response.json();
    console.log(data);

    if (data.Response === "False") {
      moviesContainer.innerHTML = `<h2>${data.Error}</h2>`;
      return;
    }
    renderMovies(data.Search);
    
} catch (error) {
    moviesContainer.innerHTML = "<h2>Something went wrong</h2>";
}

}



function renderMovies(movies) {
  moviesContainer.innerHTML = "";

  movies.forEach((movie) => {
    const card = document.createElement("div");
    card.classList.add("movie-card");
    card.innerHTML = `
    <img src="${movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450"}" alt="${movie.Title}" height="200px"></img>
      <h3>${movie.Title}</h3>
      <p>${movie.Year}</p>
    `;

    moviesContainer.appendChild(card);
  });
}


searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    searchMovie();
  }
});

searchBtn.addEventListener("click", () => {
  searchMovie();
});
