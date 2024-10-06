const loadMovies = function(movies) {
    const m = document.getElementById("selectedMovie");

    const inputMovieName = m.value;

    var cardMovie = document.getElementById("col");
    cardMovie.innerHTML = "";

    for (let i = 0; i < movies.length; i++) {
        if (movies[i].title === inputMovieName) {

            let title = movies[i].title;
            let year = movies[i].year;
            let url = movies[i].url;

            console.log(title);

            let AddMovie = document.createElement("div");
            AddMovie.classList.add("col");

            AddMovie.innerHTML = `
                <div class="card shadow-sm">
                <img src=${url} class="card-img-top" alt="..."></img>
                <div class="card-body">
                <p class="card-text"> <strong>${title}</strong>, ${year}</p>
                </div>
                </div>
                `;
            cardMovie.appendChild(AddMovie);
        }
    }
};

const formElement = document.getElementById("movie-form");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    
    fetch("./MoviesFromJSON.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        loadMovies(data.movies);
    })
    .catch(function(error) {
        console.log(error);
    })
    
});