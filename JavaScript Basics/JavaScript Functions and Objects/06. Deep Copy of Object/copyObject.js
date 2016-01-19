var a = {name: 'Pesho', age: 21};
var b = clone(a);

compareObjects(a, b);
b = a;
compareObjects(a, b);

function clone(obj) {
    var newObj = {},
        prop;

    for(prop in obj) {
        newObj[prop] = obj[prop];
    }

    return newObj;
};

function compareObjects(obj, objCopy) {
    var isDeepCopy = (obj == objCopy);
    console.log('a == b --> ' + isDeepCopy);
};
