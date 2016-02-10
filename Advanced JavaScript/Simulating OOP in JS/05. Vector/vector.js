var Vector = (function() {
    function Vector(arr) {
        if(arr === undefined || arr.length === 0) {
            throw new Error('Missing vector parameters!');
        }
        this.arr = arr;
    }

    Vector.prototype.toString = function() {
        return '(' + this.arr.join(',') + ')';
    }

    Vector.prototype.add = function(vector) {
        var newArr = [];

        if(vector.arr.length > this.arr.length || vector.arr.length < this.arr.length) {
            throw new Error("Error");
        }

        this.arr.forEach(function(element, index) {
            var newNumber = element + vector.arr[index];

            newArr.push(newNumber);
        });

        return new Vector(newArr);
    }

    Vector.prototype.subtract = function(vector) {
        var newArr = [];

        if(vector.arr.length > this.arr.length || vector.arr.length < this.arr.length) {
            throw new Error("Error");
        }

        this.arr.forEach(function(element, index) {
            var newNumber = element - vector.arr[index];

            newArr.push(newNumber);

        });

        return new Vector(newArr);
    }

    Vector.prototype.dot = function(vector) {
        var sum = 0;

        if(vector.arr.length > this.arr.length || vector.arr.length < this.arr.length) {
                throw new Error("Error");
        }

        this.arr.forEach(function(element, index) {
            sum += element * vector.arr[index];
        });

        return sum;
    }

    Vector.prototype.norm = function() {
        var sqrt = Math.sqrt(this.dot(this));

        return sqrt;
    }

    return Vector;
}());

var a = new Vector([1, 2, 3]);
var b = new Vector([4, 5, 6]);
var c = new Vector([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
console.log(a.toString());
console.log(c.toString());

// var wrong = new Vector();
// var anotherWrong = new Vector([]);
var a = new Vector([1, 2, 3]);
var b = new Vector([4, 5, 6]);
var c = new Vector([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
var result = a.add(b);
console.log(result.toString());

// a.add(c); // Error
var a = new Vector([1, 2, 3]);
var b = new Vector([4, 5, 6]);
var c = new Vector([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
var result = a.subtract(b);
console.log(result.toString());

// a.subtract(c); // Error
var a = new Vector([1, 2, 3]);
var b = new Vector([4, 5, 6]);
var c = new Vector([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
var result = a.dot(b);
console.log(result.toString());

// a.dot(c); // Error
var a = new Vector([1, 2, 3]);
var b = new Vector([4, 5, 6]);
var c = new Vector([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
console.log(a.norm());
console.log(b.norm());
console.log(c.norm());
console.log(a.add(b).norm());

