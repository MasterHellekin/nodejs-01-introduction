const name = 'Carl';
let age = 25;
let hasHobbies = true;

age = 30;

const summarizeUser = (userName, userAge, userHasHobby) => {
    return 'Name is ' +
        userName +
        ', age is ' +
        userAge +
        ' and the user has hobbies: ' +
        userHasHobby
}

const add = (a, b) => a + b;

const addOne = a => a + 1;

const addRandom = () => 1 + 7;

console.log(addRandom());

console.log(addOne(2));

console.log(add(1, 4));

console.log(summarizeUser(name, age, hasHobbies));