var people = [
    { firstName : 'George', lastName: 'Kolev', age: 32, hasSmartphone: false },
    { firstName : 'Vasil', lastName: 'Kovachev', age: 40, hasSmartphone: true },
    { firstName : 'Bay', lastName: 'Ivan', age: 81, hasSmartphone: true },
    { firstName : 'Baba', lastName: 'Ginka', age: 40, hasSmartphone: false }
];

function findYoungestPerson(arr) {
    var peopleWithSmarthphone = [],
        youngestPerson;

    arr.forEach(function(person) {
        if(person.hasSmartphone) {
            peopleWithSmarthphone.push(person);
        }
    });

    peopleWithSmarthphone.sort(function(a, b) {
        return a.age > b.age;
    });

    youngestPerson = peopleWithSmarthphone[0].firstName + ' ' + peopleWithSmarthphone[0].lastName;

    console.log('The youngest person is ' + youngestPerson);
};

findYoungestPerson(people);
