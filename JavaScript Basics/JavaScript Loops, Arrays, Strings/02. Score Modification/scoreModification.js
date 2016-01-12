var input = [200, 120, 23, 67, 350, 420, 170, 212, 401, 615, -1], 
    validExamScores = input.filter(filterScore),
    i;


for(i = 0; i < validExamScores.length; i++) {
    validExamScores[i] -= validExamScores[i] * 0.2;
};

validExamScores.sort(sortScores);

console.log(validExamScores);

function filterScore(element){
    if(element >= 0 && element < 400) {
        return true;
    };
};

function sortScores(a, b) {
    return a > b;
}
