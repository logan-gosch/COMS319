// Logan Gosch
// lgosch@iastate.edu
// 11/12/2024

function fetchData() {
  // Read the DB with movies :
  fetch("http://localhost:8081/listRobots")
    .then((response) => response.json())
    .then((myRobots) => {
      console.log(myRobots);
      loadMovies(myRobots);
    })
    .catch((err) => console.log("error:" + err));
}

function loadMovies(myRobots) {
  console.log(myRobots);
  var CardMovie = document.getElementById("col");
  for (var i = 0; i < myMovies.length; i++) {
    let id = myRobots[i].id;
    let price = myRobots[i].price;
    let url = myRobots[i].url;
    let AddCardMovie = document.createElement("div");

    AddCardMovie.classList.add("col");
    AddCardMovie.innerHTML = `
              <div class="card shadow-sm">
              <img src=${url} class="card-img-top" alt="..."></img>
              <div class="card-body">
              <p class="card-text"> <strong>${price}</strong>, ${id}</p>
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
  function loadOneMovie(myFavoriteRobot) {
    console.log(myFavoriteRobot);
    var CardMovie = document.getElementById("col");
    CardMovie.innerHTML = "";
    let title = myFavoriteRobot.title;
    let year = myFavoriteRobot.year;
    let url = myFavoriteRobot.url;
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
