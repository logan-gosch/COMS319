// Logan Gosch
// lgosch@iastate.edu
// 11/12/2024

function fetchData() {
  // Read the DB with movies :
  fetch("http://localhost:8081/listMovies")
    .then((response) => response.json())
    .then((myMovies) => {
      console.log(myMovies);
      loadMovies(myMovies);
    })
    .catch((err) => console.log("error:" + err));
}

function loadMovies(myMovies) {
  console.log(myMovies);
  var CardMovie = document.getElementById("col");
  for (var i = 0; i < myMovies.length; i++) {
    let title = myMovies[i].title;
    let year = myMovies[i].year;
    let url = myMovies[i].url;
    let AddCardMovie = document.createElement("div");

    AddCardMovie.classList.add("col");
    AddCardMovie.innerHTML = `
              <div class="card shadow-sm">
              <img src=${url} class="card-img-top" alt="..."></img>
              <div class="card-body">
              <p class="card-text"> <strong>${title}</strong>, ${year}</p>
              </div>
              </div>
              `;
    CardMovie.appendChild(AddCardMovie);
  }
}
document.addEventListener("DOMContentLoaded", fetchData);

function showOneMovie() {
  // Value from the input field
  let id = document.getElementById("movieId").value;
  // Fetch the value from the input field
  fetch(`http://localhost:8081/${id}`)
    .then((response) => response.json())
    .then((myFavoriteMovie) => {
      loadOneMovie(myFavoriteMovie);
    });
  // Replace image and text per every one in HTML
  function loadOneMovie(myFavoriteMovie) {
    console.log(myFavoriteMovie);
    var CardMovie = document.getElementById("col");
    CardMovie.innerHTML = "";
    let title = myFavoriteMovie.title;
    let year = myFavoriteMovie.year;
    let url = myFavoriteMovie.url;
    let AddCardMovie = document.createElement("div");
    AddCardMovie.classList.add("col");
    AddCardMovie.innerHTML = `
        <div class="card shadow-sm">
        <img src=${url} class="card-img-top" alt="..."></img>
        <div class="card-body">
        <p class="card-text"> <strong>${title}</strong>, ${year}</p>
        </div>
        </div>
        `;
    CardMovie.appendChild(AddCardMovie);
  }
}
