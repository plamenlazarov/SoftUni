(function() {
    var container = new models.Container('Tuesday TODO List');
    container.addToDOM('body');

    var addSectionBtn = document.getElementById('add-section');

    addSectionBtn.addEventListener('click', function(e) {
        var sectionTitle = document.getElementById('section-title').value,
            section = new models.Section(sectionTitle);

        section.addToDOM();
    });

}());
