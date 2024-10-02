// let search = document.querySelector(".search input");
// let btn = document.querySelector("#searchBtn");
// let movieContainer = document.querySelector(".movies-box"); // Container for appending movie details

// btn.addEventListener("click", function () {
//   let api = `http://www.omdbapi.com/?s=${search.value}&apikey=7a0e2e32`;

//   async function movie() {
//     let raw = await fetch(api);
//     let output = await raw.json();
//     let search = output.Search;

//     // Clear previous movie results
//     movieContainer.innerHTML = "";

//     for (let e of search) {
//       let title = e.Title;
//       let year = e.Year;
//       let poster = e.Poster;

//       // Create a new div to hold the movie information
//       let movieCard = document.createElement("div");
//       movieCard.classList.add("movie-con");

//       // Create a new h3 element for the movie title
//       let movieTitle = document.createElement("h3");
//       movieTitle.classList.add("movie-text");
//       movieTitle.textContent = title;

//       let moviePoster = document.createElement("img");
//       moviePoster.classList.add("img");
//       moviePoster.setAttribute("src", poster);

//       // Create a new p element for the movie year
//       let movieYear = document.createElement("p");
//       movieYear.classList.add("movie-text");
//       movieYear.textContent = `Year: ${year}`;

//       // Append the title and year to the movie card
//       movieCard.appendChild(moviePoster);
//       movieCard.appendChild(movieTitle);
//       movieCard.appendChild(movieYear);

//       // Append the movie card to the movie container
//       movieContainer.appendChild(movieCard);
//     }
//   }

//   movie();
// });

// let search = document.querySelector(".search input");
// let btn = document.querySelector("#searchBtn");
// let movieContainer = document.querySelector(".movies-box");
// let fullContainer = document.querySelector(".container");

// async function fetchMovies() {
//   let api = `http://www.omdbapi.com/?s=${search.value}&apikey=7a0e2e32`;
//   let response = await fetch(api);
//   let { Search: movies } = await response.json(); // Destructure and retrieve the 'Search' array from the response

//   movieContainer.innerHTML = movies
//     .map(
//       (movie) => `
//       <div class="movie-con">
//         <img class="img" src="${movie.Poster}" alt="${movie.Title} Poster">
//         <h3 class="movie-text">${movie.Title}</h3>
//         <p class="movie-text">Year: ${movie.Year}</p>
//       </div>
//     `
//     )
//     .join(""); // Joins the array into a single HTML string and injects it into the container
// }

// // Click event listener for the search button
// btn.addEventListener("click", fetchMovies);

// // Keypress event listener to trigger search on Enter key
// search.addEventListener("keypress", function (e) {
//   if (e.key === "Enter") {
//     fetchMovies();
//   }
// });

let search = document.querySelector(".search input");
let searchBtn = document.querySelector(".search i");
let moviesBox = document.querySelector(".movies-box");
let fullContainer = document.querySelector(".container");

async function fetchMovies() {
  let api = `http://www.omdbapi.com/?s=${search.value}&apikey=7a0e2e32`;
  let response = await fetch(api);
  let { Search: movies } = await response.json();

  moviesBox.innerHTML = movies
    .map(
      (movie) =>
        `
      <div class="movie-con">
                    <img src="${movie.Poster}" alt="img">
                    <div class="movie-text">
                        <h3>${movie.Title}</h3>
                        <p>${movie.Year}</p>
                    </div>
      </div>
    `
    )
    .join("");
}

searchBtn.addEventListener("click", fetchMovies);
search.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    fetchMovies();
  }
});
