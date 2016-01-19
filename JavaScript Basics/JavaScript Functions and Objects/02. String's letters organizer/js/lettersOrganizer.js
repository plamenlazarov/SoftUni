function sortLetters(string, isAscending) {
    var letters = [],
        letter,
        sortedString,
        i;

    for(i = 0; i < string.length; i++) {
        letter = string[i];
        letters.push(letter);
    }

    if(isAscending) {
        letters.sort(function(a, b) {
            return a.toLowerCase() > b.toLowerCase();
        });
    } else {
        letters.sort(function(a, b) {
            return a.toLowerCase() < b.toLowerCase();
        });
    }

    sortedString = letters.join('');

    return sortedString;
};

console.log(sortLetters('HelloWorld', true));
console.log(sortLetters('HelloWorld', false));
