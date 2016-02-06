function printArgsInfo() {
    for(var i = 0; i < arguments.length; i++) {
        var argument = arguments[i];
        console.log(argument + ' (' + typeof argument + ')');
    }
};

printArgsInfo(12, 'hello', null, true);
console.log('===========================');
printArgsInfo(2, 3, 2.5, -110.5564, false);
console.log('===========================');
printArgsInfo(null, undefined, "", 0, [], {});
console.log('===========================');
printArgsInfo([1, 2], ["string", "array"], ["single value"]);
console.log('===========================');
printArgsInfo("some string", [1, 2], ["string", "array"], ["mixed", 2, false, "array"], {name: "Peter", age: 20});
console.log('===========================');
printArgsInfo([[1, [2, [3, [4, 5]]]], ["string", "array"]]);
