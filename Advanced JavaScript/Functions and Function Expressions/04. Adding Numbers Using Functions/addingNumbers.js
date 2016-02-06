function add(x) {
    var sum = x;

    function inner(y) {
        sum += y;
        return inner;
    };

    inner.toString = function() {
        return sum;
    };
    return inner;
};

console.log(+add(1));
console.log(+add(2)(3));
console.log(+add(1)(1)(1)(1)(1));
console.log(+add(1)(0)(-1)(-1));

var addTwo = add(2);
console.log(+addTwo);
var addTwo = add(2); 
console.log(+addTwo(3));
var addTwo = add(2); 
console.log(+addTwo(3)(5));

