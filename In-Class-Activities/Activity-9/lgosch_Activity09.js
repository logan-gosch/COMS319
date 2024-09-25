function fetchData() {
    fetch("./persons.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        appendData(data);
    })
    .catch(function(error) {
        console.log(error);
    })
}

function appendData(data) {
    let mainContainer = document.getElementById("myData1");
    for (i = 0; i < data.length; i++){
        let div = document.createElement("div");
        div.classList.add("col-sm-6", "col-md-4", "col-lg-3");
        div.innerHTML = `
            <div class="card mb-4" style="width: 100%;">
            <img src=${data[i].logo} class="card-img-top" alt="superhero" width="100" />
            <div class="card-body">
            <h5 class="card-title">${data[i].firstName} ${data[i].lastName}</h5>
            <p class="card-text">
            <strong>Job:</strong> ${data[i].job} <br>
            <strong>Roll:</strong> ${data[i]    .roll}
            </p>
            </div>
            </div>`;
            mainContainer.appendChild(div);
    }
}
