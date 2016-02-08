var HTMLGen = {
    createParagraph: function(id, text) {
        var p = document.createElement('p');
        p.innerText = text;

        document.getElementById(id).appendChild(p);
    },
    createDiv: function(id, className) {
        var div = document.createElement('div');
        div.className = className;

        document.getElementById(id).appendChild(div);
    },
    createLink: function(id, text, url) {
        var a = document.createElement('a');
        var linkText = document.createTextNode(text);

        a.appendChild(linkText);
        a.href = url;
        document.getElementById(id).appendChild(a);
    }
};

HTMLGen.createParagraph('wrapper', 'Soft Uni');
HTMLGen.createDiv('wrapper', 'section');
HTMLGen.createLink('book', 'C# basics book', 'http://www.introprogramming.info/');
