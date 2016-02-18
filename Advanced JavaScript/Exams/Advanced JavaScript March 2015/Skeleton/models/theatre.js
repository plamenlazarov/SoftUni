var imdb = imdb || {};

(function(scope) {
    var id = 0;
    function Theatre(title, length, rating, country, isPuppet) {
        this._id = ++id;
        scope._Movie.apply(this, arguments);
        this.isPuppet = isPuppet || false;
    }

    Theatre.extend(scope._Movie);

    scope.getTheatre = function(title, length, rating, country) {
        return new Theatre(title, length, rating, country);
    }



}(imdb));
