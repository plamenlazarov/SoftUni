function extractObjects(arr) {
    var i,
        element,
        newArray = [];

    for(i = 0; i < arr.length; i++) {
        element = arr[i];

        if(typeof element !== 'object' || Array.isArray(element)) {
            continue;
        }

        newArray.push(element);
    }

     return newArray;
};

console.log(extractObjects([
    "Pesho",
    4,
    4.21,
    { name : 'Valyo', age : 16 },
    { type : 'fish', model : 'zlatna ribka' },
    [1,2,3],
    "Gosho",
    { name : 'Penka', height: 1.65}
]));
