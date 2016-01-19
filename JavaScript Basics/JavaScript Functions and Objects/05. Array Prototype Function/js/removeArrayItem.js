var arr1 = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, '1'];
var arr2 = ['hi', 'bye', 'hello' ];

Array.prototype.removeItem = function(value) {
    var newArr = [];

    this.forEach(function(element, index, array){
        if(element !== value) {
            newArr.push(element);
        }
    });

    return newArr;
};
arr1.removeItem(1);

console.log(arr1.removeItem(1));
console.log(arr2.removeItem('bye'));
