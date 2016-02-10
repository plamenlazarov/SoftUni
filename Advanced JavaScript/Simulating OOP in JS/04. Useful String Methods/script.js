String.prototype.startsWith = function(substr) {
    return this.substring(0, substr.length) === substr;
}

String.prototype.endsWith = function(substr) {
    var startIndex = this.length - substr.length;
    return this.substring(startIndex, this.lenght) === substr;
}

String.prototype.left = function(count) {
    var result = this.substring(0, count);
    return count > this.length ? this : result;

}

String.prototype.right = function(count) {
    var startIndex = this.length - count,
        result = this.substring(startIndex, this.length);
    return count > this.length ? this : result;

}

String.prototype.repeat = function(count) {
    var str = '';
    for(var i = 0; i < count; i++) {
        str += this;
    }

    return str;
}

String.prototype.padLeft = function(count, character) {
    var str = '',
        character = character || ' ';
    for(var i = 0; i < count; i++) {
        str += character;
    }

    return str + this;
}

String.prototype.padRight = function(count, character) {
    var str = '',
        character = character || ' ';
    for(var i = 0; i < count; i++) {
        str += character;
    }

    return this + str;
}

var example = "This is an example string used only for demonstration purposes.";
// startsWith()
console.log(example.startsWith("This"));
console.log(example.startsWith("this"));
console.log(example.startsWith("other"));

// endsWith()
console.log(example.endsWith("poses."));
console.log(example.endsWith ("example"));
console.log(example.startsWith("something else"));

// left()
console.log(example.left(9));
console.log(example.left(90));

// rigth()
console.log(example.right(9));
console.log(example.right(90));

// Combinations must also work
var example = "abcdefgh";
console.log(example.left(5).right(2));

var character = "*";
console.log(character.repeat(5));
console.log("~&".repeat(3));

var hello = "hello";
// padLeft()
console.log(hello.padLeft(5));
console.log(hello.padLeft(10));
console.log(hello.padLeft(5, "."));
console.log(hello.padLeft(10, "."));
console.log(hello.padLeft(2, "."));

// padRight()
console.log(hello.padRight(5));
console.log(hello.padRight(10));
console.log(hello.padRight(5, "."));
console.log(hello.padRight(10, "."));
console.log(hello.padRight(2, "."));

console.log("*".repeat(5).padLeft(10, "-").padRight(15, "+"));
