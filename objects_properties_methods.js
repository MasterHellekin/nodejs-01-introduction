const person = {
    name: 'Carl',
    age: 25,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

person.greet();