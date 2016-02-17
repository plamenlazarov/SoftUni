var models = models || {};

(function(scope) {
    function Item(content) {
        this.content = content;
        this.status = false;
    }

    Item.prototype.changeStatus = function() {
        this.status = !this.status;
    }

    Item.prototype.addToDOM = function() {
        var ul = document.createElement('ul'),
            li = document.createElement('li'),
            h3 = document.querySelector('h3'),
            checkbox = document.createElement('checkbox'),
            label = document.createElement('label');

        ul.appendChild(li);
        //TODO
    }

    scope.Item = Item;

}(models));

