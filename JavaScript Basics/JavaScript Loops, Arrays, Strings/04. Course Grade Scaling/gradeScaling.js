function gradeScaling(arr){
    var filteredObj;

    for(var key in arr) {
        arr[key].score += arr[key].score * 0.1;

        if(arr[key].score > 100) {
            arr[key].hasPassed = true;
        }
    };

    filteredObj = arr.filter(filterObj);
    filteredObj.sort(sortObj);
    console.log(JSON.stringify(filteredObj));
};

function filterObj(obj) {
    return obj.score > 100 ? true : false;
}

function sortObj(a, b) {
    return a.name > b.name;
};

gradeScaling([
    {
        'name' : 'Пешо',
        'score' : 91
    },
    {
        'name' : 'Лилия',
        'score' : 290
    },
    {
        'name' : 'Алекс',
        'score' : 343
    },
    {
        'name' : 'Габриела',
        'score' : 400
    },
    {
        'name' : 'Жичка',
        'score' : 70
    }
]);
