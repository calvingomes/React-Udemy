class Human {

    constructor() {
        this.gender = 'Male'
    }

    printMyGender() {
        console.log(this.gender);
    }
}
class Person extends Human {

    constructor() {
        super()
        this.name = 'Calvin',
        this.age = 24
    }

    printMyName() {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
person.printMyGender();