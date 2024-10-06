var cardMovie = document.getElementById("col");

const loadMovies = function(movies, displayOption) {

    cardMovie.innerHTML = "";

    const inputField = document.getElementById('inputField');
    inputField.style.display = 'none';

    let sortedMovies = [];

    if (displayOption === 1) {
        sortedMovies = movies.sort((a, b) => {
            return (a.price > b.price) ? 1 : (b.price < a.price) ? -1 : 0;
        });
        for (let i = 0; i < sortedMovies.length; i++) {
                let title = sortedMovies[i].title;
                let year = sortedMovies[i].year;
                let url = sortedMovies[i].url;

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
    else if (displayOption === 2) {
        sortedMovies = movies.sort((a, b) => {
            return (a.price < b.price) ? 1 : (b.price > a.price) ? -1 : 0;
        });
        for (let i = 0; i < sortedMovies.length; i++) {
                let title = sortedMovies[i].title;
                let year = sortedMovies[i].year;
                let url = sortedMovies[i].url;

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
    else if (displayOption === 3) {
        for (let i = 0; i < movies.length; i++) {
            if (movies[i].description.includes(document.getElementById('descriptionInput').value)) {
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
    }

};

function showCardsSortedByPriceLowHigh() {    
    fetch("./MoviesFromJSON.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        loadMovies(data.movies, 1);
    })
    .catch(function(error) {
        console.log(error);
    })
}

function showCardsSortedByPriceHighLow() {    
    fetch("./MoviesFromJSON.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        loadMovies(data.movies, 2);
    })
    .catch(function(error) {
        console.log(error);
    })
}

function showCardsContainingDescriptionA() {
    cardMovie.innerHTML = "";
    inputField.style.display = 'block';
}

function showCardsContainingDescriptionB() {
    fetch("./MoviesFromJSON.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        loadMovies(data.movies, 3);
    })
    .catch(function(error) {
        console.log(error);
    })
}