
const IMG_URL = "https://image.tmdb.org/t/p/w500";
const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'api_key=2208bb218ff6e7d51d00f5babdc1f702';
const API_URL = BASE_URL + '/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&' 
+ API_KEY;

const searchURL = BASE_URL + '/search/movie?' + API_KEY;

let containerFilm = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');



getMovies(API_URL);

function getMovies(url) {
    fetch(url).then(res => res.json()).then(data => {
        showMovies(data.results);
    })
}

function showMovies(data) {
    
    containerFilm.innerHTML = '';

    data.forEach(item => {

        const {poster_path, title, vote_average, release_date} = item;
        const kartuPilem = document.createElement('div')
        kartuPilem.classList.add('col-sm')
        kartuPilem.innerHTML = `
            <div class="card m-2" style="width: 15rem; box-shadow: 0.2px 4px 5px rgba(0,0,0,0.1); border-radius: 10px">
                <img src="${IMG_URL+poster_path}" class="card-img-top" alt="${title}">
                <div class="card-body">
                    <h4 class="card-title">${title}</h4>
                    <h6 class="card-title" style="display:flex;">
                    <iconify-icon icon="bxs:star" style="color: black; margin-right:5px;">
                    </iconify-icon>
                        ${vote_average}
                    </h6>
                    <p class="card-text" style="margin-top: 8px; margin-bottom:0;">
                        ${release_date}
                    </p>
                <div>
            </div>`
        containerFilm.appendChild(kartuPilem);
    });
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    if(searchTerm){
        getMovies(searchURL+'&query= '+searchTerm)
    } else{
        getMovies(API_URL);
    }

})