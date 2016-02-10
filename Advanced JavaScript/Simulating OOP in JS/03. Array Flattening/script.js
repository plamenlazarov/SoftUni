Array.prototype.flatten = function() {
    var newArr = [];
    function checkValue(arr) {
        arr.forEach(function(el) {
            if(Array.isArray(el)) {
                checkValue(el);

            } else {
                newArr.push(el);
            }
        });
    }

    checkValue(this);
    return newArr;
};

var array = [1, 2, 3, 4];
console.log(array.flatten());

var array = [1, 2, [3, 4], [5, 6]];
console.log(array.flatten());
console.log(array); // Not changed

var array = [0, ["string", "values"], 5.5, [[1, 2, true], [3, 4, false]], 10];
console.log(array.flatten());

