function createParagraph(id, text) {
    var p = document.createElement('p');
    p.innerText = text;

    document.getElementById(id).appendChild(p);
}

createParagraph('wrapper', 'Some text');
