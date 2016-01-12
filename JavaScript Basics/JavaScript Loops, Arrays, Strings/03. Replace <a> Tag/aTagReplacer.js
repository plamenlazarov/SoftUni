function replaceATag(str) {
    str = str.replace(/(<a)[^>]*(>)\w+(<\/a>)/g, "[URL=http://softuni.bg>SoftUni[/URL]");
    console.log(str);
};

replaceATag('<ul><li><a href=http://softuni.bg>SoftUni</a></li></ul>');
