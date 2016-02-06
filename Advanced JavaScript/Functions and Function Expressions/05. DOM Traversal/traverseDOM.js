var selector = '.birds';

function traverse(selector) {
    var node = document.querySelector(selector);

    traverseNode(node, '    ');

    function traverseNode(node, spacing) {
        spacing = spacing || '   ';

        var nodeId = node.getAttribute("id");
        var nodeClass = node.getAttribute("class");

        console.log(spacing + node.nodeName + ":<br />" + (nodeId ? 'id="' + nodeId + '"' : ''));
        console.log(nodeClass ? 'class="' + nodeClass + '"' : '');

        for (var i = 0; i < node.childNodes.length; i++) {
            var child = node.childNodes[i];
            if (child.nodeType === document.ELEMENT_NODE) {
                traverseNode(child, spacing + '   ');
            }
        }
    }
}

traverse(selector);
