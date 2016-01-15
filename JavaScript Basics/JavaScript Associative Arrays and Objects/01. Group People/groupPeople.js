var Person = function(firstName, lastName, age) {
    this.age = age;
    this.firstName = firstName;
    this.lastName =  lastName;
};

var people = [
    new Person("Scott", "Guthrie", 38),
    new Person("Scott", "Johns", 36),
    new Person("Scott", "Hanselman", 39),
    new Person("Jesse", "Johns", 57),
    new Person("Jon", "Skeet", 38)
];

function groupBy(criteria) {
        var groups = {},
            person,
            i;

    for(i = 0; i < people.length; i++) {
        person = people[i];

        if(!(person[criteria] in groups)) {
            groups[person[criteria]] = [];
        }

        groups[person[criteria]].push(person);
    }

    return groups;
};

console.log(groupBy('firstName'));
console.log(groupBy('lastName'));
console.log(groupBy('age'));
