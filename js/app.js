// Select elements from DOM 
var elWrapper = document.querySelector("#wrapper");
var elForm = document.querySelector("#form");
var elRating = document.querySelector("#rating");
var elBtn = document.querySelector("#btn");
var elTitle = document.querySelector("#h5");
var elSearchInput = document.querySelector("#search_input")
var elSearchbook = document.querySelector("#bookmarkds")
var elModalTour = document.querySelector("#klonse")
var elModalText = document.querySelector("#youngesrst")


// Get movies list 
var slicedMovies = movies.slice(0, 100);

var normolizedMovieList = slicedMovies.map(movieItem =>{
    return {
        title: movieItem.Title.toString(),
        categories: movieItem.Categories,
        rating: movieItem.imdb_rating,
        year: movieItem.movie_year,
        imageLink: `https://i.ytimg.com/vi/${movieItem.ytid}/mqdefault.jpg`,
        youtubeLink: `https://www.youtube.com/watch?v=${movieItem.ytid}`,
        foul_title: movieItem.fulltitle
    }
})



// Create render function
function renderMovies(movieArray , wrapper){
    
    movieArray.forEach(movie => {
        
        var newCard = document.createElement("div");
        var newCardBody = document.createElement("div");
        var newDateWrapper = document.createElement("div");
        var newRateWrapper = document.createElement("div");
        var newBtnWrapper = document.createElement("div");
        var newImg = document.createElement("img");
        var newTitle = document.createElement("h5");
        var newDateText = document.createElement("p");
        var newRateText = document.createElement("p");
        var newBtnTrailer = document.createElement("a");
        var newBtnInfo = document.createElement("button");
        var newBtnBookmarks = document.createElement("button");
        
        newCard.setAttribute("class" , "card me-3 mb-3");
        newCard.setAttribute("style" , "width: 22rem;");
        
        newImg.setAttribute("src" , movie.imageLink);
        newImg.setAttribute("class" , "card-img-top");
        newImg.setAttribute("style" , "height: 220px;");
        
        newCardBody.setAttribute("class" , "card-body");
        
        newTitle.setAttribute("class" , "card-title fw-bolder text-danger");
        newTitle.textContent = movie.title;   
        elSearchbook.textContent = movie.title

        
        newDateWrapper.setAttribute("class" , "d-flex");
        newDateText.setAttribute("class" , "ms-2 fw-bolder");
        newDateText.textContent = "Released: " + movie.year;
        
        newRateWrapper.setAttribute("class" , "d-flex");
        newRateText.setAttribute("class" , "ms-2 fw-bolder");
        newRateText.textContent = "Rate: " + movie.rating;
        
        newBtnWrapper.setAttribute("class" , "pb-3");
        newBtnTrailer.setAttribute("class" , "btn btn-outline-primary btn-sm me-3");
        newBtnTrailer.setAttribute("href" , movie.youtubeLink);
        newBtnTrailer.textContent = "Watch trailer";
        newBtnInfo.setAttribute("class" , "btn btn-outline-info btn-sm me-3");
        newBtnInfo.setAttribute("data-bs-toggle" , "modal");
        newBtnInfo.setAttribute("data-bs-target" , "#exampleModal");
        newBtnInfo.textContent = "More info";
        elModalText.textContent = movie.foul_title
        newBtnBookmarks.setAttribute("class" , "btn btn-outline-success btn-sm");
        newBtnBookmarks.textContent = "Bookmarks";
        
        
        
        wrapper.appendChild(newCard);
        
        newCard.appendChild(newImg);
        newCard.appendChild(newCardBody);
        
        newCardBody.appendChild(newTitle);
        
        newCardBody.appendChild(newDateWrapper);
        newDateWrapper.appendChild(newDateText);
        
        newCardBody.appendChild(newRateWrapper);
        newRateWrapper.appendChild(newRateText);
        
        newCardBody.appendChild(newBtnWrapper);
        newBtnWrapper.appendChild(newBtnTrailer);
        newBtnWrapper.appendChild(newBtnInfo);
        newBtnWrapper.appendChild(newBtnBookmarks);
    });
    elTitle.textContent = `Search results: ${movieArray.length}`;    
}

renderMovies(normolizedMovieList , elWrapper);


elSearchInput.addEventListener("keyup" , (evt) => {
    evt.preventDefault();
    var searchedMovies = []

    var searchInput = elSearchInput.value.trim()

    var searchKey = new RegExp(searchInput, "gi");
    normolizedMovieList.forEach((movieItem) => {
        var searchResult = movieItem.title.match(searchKey)
        if (searchResult) {
            searchedMovies.push(movieItem)
        }
    })

    if (searchedMovies.length > 0) {
        elWrapper.innerHTML = null
        renderMovies(searchedMovies , elWrapper);
    }else {
        elWrapper.innerHTML = "Afsuski siz izlagan kino topilmadi"
        elTitle.textContent = "0"
    }  
})

elRating.addEventListener("keyup" , (evt) => {
    evt.preventDefault();
    var raitingMovies = []

    var raitingInput = elRating.value.toNumber()

    var searchKey = new RegExp(raitingInput, "gi");
    normolizedMovieList.forEach((movieItem) => {
        var searchResult = movieItem.rating.match(searchKey)
        if (searchResult) {
            raitingMovies.push(movieItem)
        }
    })

    if (raitingMovies.length > 0) {
        elWrapper.innerHTML = null
        renderMovies(raitingMovies , elWrapper);
    }else {
        elWrapper.innerHTML = "Afsuski siz izlagan kino topilmadi"
        elRating.textContent = "0"
    }  
})

newBtnBookmarks.addEventListener()