function printArgsInfo() {
    for(var i = 0; i < arguments.length; i++) {
        var argument = arguments[i];
        console.log(argument + ' (' + typeof argument + ')');
    }
};

printArgsInfo(null, 1234, "Goshoooo");
console.log('------------------');
printArgsInfo.call(this, 1, '2', true, null);
console.log('------------------');
printArgsInfo.apply(null, [1234, "Goshooooo"]);
