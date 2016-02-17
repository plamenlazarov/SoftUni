var models = models || {};

(function(scope) {
    var id = 0;
    function Section(title) {
        this.id = ++id;
        this.title = title;
        this.items = [];
    }

    Section.prototype.addItem = function(item) {
        this.items.push(item);
    }

    Section.prototype.addToDOM = function() {
        var section = document.createElement('section'),
            title   = document.createElement('h3'),
            input   = document.createElement('input'),
            button  = document.createElement('button'),
            sectionList = document.getElementById('section-list');

        section.id = this.id;
        title.innerText = this.title;
        input.type = 'text';
        input.placeholder = 'Add item...';
        button.innerText = '+';
        button.id = 'add-item';
        section.appendChild(title);
        section.appendChild(input);
        section.appendChild(button);
        sectionList.appendChild(section);
    }

    scope.Section = Section;

}(models));

