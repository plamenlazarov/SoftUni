var imdb = imdb || {};

(function (scope) {
    function loadHtml(selector, data) {
        var container = document.querySelector(selector),
            moviesContainer = document.getElementById('movies'),
            detailsContainer = document.getElementById('details'),
            genresUl = loadGenres(data);

        container.appendChild(genresUl);

        genresUl.addEventListener('click', function (ev) {
            if (ev.target.tagName === 'LI') {
                var genreId,
                    genre,
                    moviesHtml;

                genreId = parseInt(ev.target.getAttribute('data-id'));
                genre = data.filter(function (genre) {
                    return genre._id === genreId;
                })[0];

                moviesHtml = loadMovies(genre.getMovies());
                moviesContainer.innerHTML = moviesHtml.outerHTML;
                moviesContainer.setAttribute('data-genre-id', genreId);

                var movies = moviesContainer.firstElementChild.children;
                for(var i = 0; i < movies.length; i++) {
                    var movie = movies[i],
                        movieId,
                        movieObj,
                        actors,
                        reviews;

                    movie.addEventListener('click', function(e) {
                        detailsContainer.innerHTML = '';
                        movieId = this.getAttribute('data-id');
                        movieObj = genre.getMovies().filter(function(movie) {
                            return Number(movieId) === movie._id;
                        })[0];

                        actors = movieObj.getActors();
                        reviews = movieObj.getReviews();

                        var actorsFragment = document.createDocumentFragment();
                        var actorsHeading = document.createElement('h2');
                        var actorsUl = document.createElement('ul');
                        actorsHeading.innerHTML = 'Actors';

                        var reviewsFragment = document.createDocumentFragment();
                        var reviewsHeading = document.createElement('h2');
                        var reviewsUl = document.createElement('ul');
                        reviewsHeading.innerHTML = 'Reviews';

                        actors.forEach(function(actor) {
                            var heading = document.createElement('h4'),
                                bio = document.createElement('p'),
                                born = document.createElement('p'),
                                li = document.createElement('li');

                            heading.innerHTML = actor.name;
                            bio.innerHTML = '<strong>Bio: </strong>' + actor.bio;
                            born.innerHTML = '<strong>Born: </strong>' + actor.born;
                            li.appendChild(heading);
                            li.appendChild(bio);
                            li.appendChild(born);
                            actorsUl.appendChild(li);
                            actorsFragment.appendChild(actorsHeading);
                            actorsFragment.appendChild(actorsUl);

                        });

                        reviews.forEach(function(review) {
                            var heading = document.createElement('h4'),
                                bio = document.createElement('p'),
                                born = document.createElement('p'),
                                li = document.createElement('li'),
                                button = document.createElement('button');

                            heading.innerHTML = review.author;
                            bio.innerHTML = '<strong>Bio: </strong>' + review.content;
                            born.innerHTML = '<strong>Born: </strong>' + review.date;
                            button.innerHTML = 'Delete review';
                            button.addEventListener('click', function(e) {
                                movieObj.deleteReview(review);
                                reviewsUl.removeChild(li);
                            });

                            li.appendChild(heading);
                            li.appendChild(bio);
                            li.appendChild(born);
                            li.appendChild(button);
                            reviewsUl.appendChild(li);
                            reviewsFragment.appendChild(reviewsHeading);
                            reviewsFragment.appendChild(reviewsUl);
                        });

                        detailsContainer.appendChild(actorsFragment);
                        detailsContainer.appendChild(reviewsFragment);

                    });
                }

            }
        });

        // Task 2 - Add event listener for movies boxes

        // Task 3 - Add event listener for delete button (delete movie button or delete review button)
    }

    function loadGenres(genres) {
        var genresUl = document.createElement('ul');
        genresUl.setAttribute('class', 'nav navbar-nav');
        genres.forEach(function (genre) {
            var liGenre = document.createElement('li');
            liGenre.innerHTML = genre.name;
            liGenre.setAttribute('data-id', genre._id);
            genresUl.appendChild(liGenre);
        });

        return genresUl;
    }

    function loadMovies(movies) {
        var moviesUl = document.createElement('ul');
        movies.forEach(function (movie) {
            var liMovie = document.createElement('li');
            liMovie.setAttribute('data-id', movie._id);

            liMovie.innerHTML = '<h3>' + movie.title + '</h3>';
            liMovie.innerHTML += '<div>Country: ' + movie.country + '</div>';
            liMovie.innerHTML += '<div>Time: ' + movie.length + '</div>';
            liMovie.innerHTML += '<div>Rating: ' + movie.rating + '</div>';
            liMovie.innerHTML += '<div>Actors: ' + movie._actors.length + '</div>';
            liMovie.innerHTML += '<div>Reviews: ' + movie._reviews.length + '</div>';
            moviesUl.appendChild(liMovie);
        });

        return moviesUl;
    }

    scope.loadHtml = loadHtml;
    }(imdb));
