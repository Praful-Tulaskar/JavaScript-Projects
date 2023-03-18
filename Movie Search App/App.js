// API gives Most Popular Movies List
const apiUrl = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const imgPath = "https://image.tmdb.org/t/p/w1280";

// API gives Search Result
const searchResult = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const movieBox = document.querySelector("#movie-box");

const getMovies = async (api) => {
    const response = await fetch(api);
    const data = await response.json();
    // console.log(data);

    showMovie(data.results);
}

const showMovie = (data) => {
    movieBox.innerHTML = "";
    data.forEach((element) => {
        console.log(element);
        const box = document.createElement("div");
        box.classList.add("box");
        box.innerHTML = `
        <img src="${imgPath + element.poster_path}" alt="" />
        <div class="overlay">
            <div class="title">
                <h2>${element.original_title}</h2>
                <span>${element.vote_average}</span>
            </div>
            <h3> Language:</h3>
            <p id="lang">${element.original_language}</p>
            <h3> Release Date: </h3
            <p id="release-date">${element.release_date}</p>
            <h3>Overview:</h3>
            <p>${element.overview}</p>
        </div>
        `;

        movieBox.appendChild(box);
    })
}

document.querySelector("#search").addEventListener(
    "keyup",
    function(e) {
        if(e.target.value != ""){
            getMovies(searchResult + e.target.value);
        }
        else{
            getMovies(apiUrl);
        }
    }
)
// getMovies(apiUrl);