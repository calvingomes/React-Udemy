// PRIMITIVE... WORKS FOR NUMBERS BOOL ETC

const a = 5;
const b = a;
console.log(b);

// It creates a copy of the value


// REFERENCES... WORKS FOR ARRAYS AND OBJECTS

const oldObj = {
    name: 'Calvin'
}

const newObj = oldObj
oldObj.name = 'Shania'

console.log(newObj) //Prints Shania coz it is a reference 


// One way to tackle this is to use the spread operator

const newObj2 = {...oldObj}
