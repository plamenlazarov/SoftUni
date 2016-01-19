var str = '<!DOCTYPE html> <html> <head lang="en"> <meta charset="UTF-8"> <title>index</title>' +
                ' <script src="/yourScript.js" defer></script> </head> <body> <div id="outerDiv"> <div class="first">' +
                ' <div><div>hello</div></div> </div> <div>hi<div></div></div> <div>I am a div</div> </div> </body> </html>';

function countDivs(htmlString) {
    var pattern = /<div(?:\sid=)*(?:\sclass=)*=*(?:"[^"]+")*>/g,
        matchedDivs = htmlString.match(pattern),
        count = matchedDivs.length;

    console.log(matchedDivs);
    console.log(count);
};

countDivs(str);


