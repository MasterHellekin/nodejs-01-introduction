const person = {
    name: 'Carl',
    age: 25,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

const copiedPerson = { ...person };
console.log(copiedPerson);

const hobbies = ['Sleep', 'MMA'];

for (let hobby of hobbies) {
    console.log(hobby);
}

console.log(hobbies.map(hobby => 'Hobby: ' + hobby));

console.log(hobbies);

hobbies.push('Programming');

console.log(hobbies);

//Spread & Rest Operators
const copiedArray = hobbies.slice();
console.log(copiedArray);

const copiedArray2 = [hobbies];
console.log(copiedArray2);

const copiedArray3 = [...hobbies];
console.log(copiedArray3);

const toArray = (...args) => {
    return args;
};

console.log(toArray(1, 2, 3, 4));