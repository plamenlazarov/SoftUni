function findRealRoots(){
    var a = document.getElementById('a').value,
        b = document.getElementById('b').value,
        c = document.getElementById('c').value,
        result = document.getElementById('result'),
        root,
        x1,
        x2;

        root = Math.pow(b, 2) - 4 * a * c;
        x1 = (-b - Math.sqrt(root)) / (2 * a);
        x2 = (-b + Math.sqrt(root)) / (2 * a);

    if(isNaN(x1)) {
        result.innerHTML = 'No real roots';
    } else if(x1 == x2){
        result.innerHTML = 'X1 = ' + x1;
    } else {
        result.innerHTML = 'X1 = ' + x1 + ' ' + ' X2 = ' + x2;
    }
}
