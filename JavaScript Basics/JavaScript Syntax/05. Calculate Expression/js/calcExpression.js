function calc() {
    var result = document.getElementById('output'),
        input = document.getElementById('expression').value;

        result.innerHTML = input.length > 1 ? eval(input) : 'Pease enter expression';
};
