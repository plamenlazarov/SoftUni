var models = models || {};

(function(scope) {
    function Container(title) {
        this.title = title;
        this.sections = [];
    }

    Container.prototype.addSection = function(section) {
        if(!(section instanceof models.Section)) {
            throw new Error('Container may contain only sections');
        }
        this.sections.push(section);
    }

    Container.prototype.addToDOM = function(selector) {
        var wrapper = document.querySelector(selector),
            container = document.createElement('div'),
            sectionWrapper = document.createElement('div'),
            title = document.createElement('h2'),
            button = document.createElement('button'),
            input = document.createElement('input'),
            body = document.body;

        container.setAttribute('id', 'todo-list');
        sectionWrapper.setAttribute('id', 'section-list');
        title.innerText = this.title;
        input.type = 'text';
        input.id = 'section-title';
        button.innerText = 'New Section';
        button.id = 'add-section';
        container.appendChild(title);
        container.appendChild(sectionWrapper);
        container.appendChild(input);
        container.appendChild(button);
        body.appendChild(container);

    }

    scope.Container = Container;

}(models));

