// Spread Operator

const oldArray = [1, 2, 3]
const oldObj = {
    name: 'Calvin',
    age: 24
}
const newArray = [...oldArray, 4, 5]
const newObj = {...oldObj, gender: 'Male'}

// Rest Operator

function newFunc(...args) {
    return args.sort()
}

const newFunction = (...args) => args.filter(el => el === 1)