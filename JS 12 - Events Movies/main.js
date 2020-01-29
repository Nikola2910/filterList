var myMovies = [
  {
    name: "The Shawshank Redemption",
    imgSrc: "img/shawshank.jpg"
  },
  {
    name: "The Godfather",
    imgSrc: "img/kum.jpg"
  },
  {
    name: "The Godfather: Part II",
    imgSrc: "img/kumDva.jpg"
  },
  {
    name: "The Dark Knight",
    imgSrc: "img/darkKnight.jpg"
  },
  {
    name: "12 Angry Men",
    imgSrc: "img/angry.jpg"
  },
  {
    name: "Schindler's List",
    imgSrc: "img/schindler.jpg"
  },
  {
    name: "The Lord of the Rings: The Return of the King",
    imgSrc: "img/lotrking.jpg"
  },
  {
    name: "Pulp Fiction",
    imgSrc: "img/pulp.jpg"
  },
  {
    name: "The Good, the Bad and the Ugly",
    imgSrc: "img/goodBad.jpg"
  },
  {
    name: "The Lord of the Rings: The Fellowship of the Ring",
    imgSrc: "img/lotrOne.jpg"
  },
  {
    name: "Fight Club",
    imgSrc: "img/fight.jpg"
  },
  {
    name: "Forrest Gump",
    imgSrc: "img/forest.jpg"
  },
  {
    name: "Inception",
    imgSrc: "img/inception.jpg"
  },
  {
    name: "Star Wars: Episode V - The Empire Strikes Back",
    imgSrc: "img/star.jpg"
  },
  {
    name: "The Lord of the Rings: The Two Towers",
    imgSrc: "img/lotrTwo.jpg"
  },
  {
    name: "The Matrix",
    imgSrc: "img/matrix.jpg"
  },
  {
    name: "Goodfellas",
    imgSrc: "img/goodfellas.jpg"
  },
  {
    name: "One Flew Over the Cuckoo's Nest",
    imgSrc: "img/cuckoo.jpg"
  },
  {
    name: "Seven Samurai",
    imgSrc: "img/samurai.jpg"
  },
  {
    name: "Se7en",
    imgSrc: "img/seven.jpg"
  },
  {
    name: "City of God",
    imgSrc: "img/city.jpg"
  },
  {
    name: "Life Is Beautiful",
    imgSrc: "img/life.jpg"
  },
  {
    name: "It's a Wonderful Life",
    imgSrc: "img/lifew.jpg"
  },
  {
    name: "Parasite",
    imgSrc: "img/parasite.jpg"
  }
];

//defining function for creating elelements for each movie

function createMovies(data) {
  data.forEach(function(element) {
    //creating elements

    var movies = document.getElementById("movies");
    var movie = document.createElement("div");
    var movieName = document.createElement("h2");
    var movieImg = document.createElement("img");
    var removeBtn = document.createElement("span");

    //appending elements

    movies.appendChild(movie);
    movie.appendChild(movieName);
    movie.appendChild(movieImg);
    movie.appendChild(removeBtn);

    //Adding names and image paths
    movie.classList.add("movie");
    movieName.innerHTML = element.name;
    movieImg.setAttribute("src", element.imgSrc);
    removeBtn.innerHTML = '<i class="far fa-times-circle"></i>';
  });
}

//difining function for filtering movies

function filterMovies() {
  //adding event listener to input
  var filterInput = document.getElementById("filter");
  filterInput.addEventListener("keyup", filter);

  //defining filter function
  function filter() {
    //defining input value and elements
    var filterValue = filterInput.value.toLowerCase();

    var moviesDiv = document.getElementById("movies");
    var movieDivs = document.querySelectorAll("div.movie");

    // removing elements that don't mach the search

    movieDivs.forEach(function(element) {
      var nameOfTheMove = element.querySelector("h2");

      if (nameOfTheMove.innerHTML.toLowerCase().indexOf(filterValue) > -1) {
        element.style.display = "";
      } else {
        element.style.display = "none";
      }
    });
  }
  filter();
}

createMovies(myMovies);
filterMovies();

//BONUS

function removeMovie() {
  var moviesDiv = document.getElementById("movies");
  var xBtns = document.querySelectorAll("div.movie i");
  var movieDivs = Array.from(document.querySelectorAll("div.movie"));

  movieDivs.forEach(function(element, index) {
    xBtns[index].addEventListener("click", () => {
      moviesDiv.removeChild(movieDivs[index]);
    });
  });
}

removeMovie();
