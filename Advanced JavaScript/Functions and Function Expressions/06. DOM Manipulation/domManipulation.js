var domModule = (function() {
    var getElement = function(selector) {
        return document.querySelector(selector);
    }

    function appendChild(parent, child) {
        if(!(parent instanceof Element)) {
            parent = getElement(parent);
        }

        if(!(child instanceof Element)) {
            child = getElement(child);
        }

        parent.appendChild(child);
    }

    function removeChild(parent, child) {
        if(!(parent instanceof Element)) {
            parent = getElement(parent);
        }

        if(!(child instanceof Element)) {
            child = getElement(child);
        }

        parent.removeChild(child);
    }

    function addHandler(element, eventType, eventHandler) {
        if(!(element instanceof Element)) {
            element = getElement(element);
        }
        element.addEventListener(eventType, eventHandler);
    }

    function retrieveElements(selector) {
        return document.querySelectorAll(selector);
    }

    return {
        appendChild: appendChild,
        removeChild: removeChild,
        addHandler: addHandler,
        retrieveElements: retrieveElements
    };
}());

var liElement = document.createElement("li");
var elements = domModule.retrieveElements(".bird");
console.log(elements);

domModule.appendChild('.birds-list', liElement);
domModule.removeChild("ul.birds-list","li:first-child");
domModule.addHandler("li.bird", 'click', function(){ alert("I'm a bird!") });
