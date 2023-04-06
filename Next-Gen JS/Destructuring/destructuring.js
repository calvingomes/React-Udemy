// ARRAY DESTRUCTURING

const newArr = [1, 2, 3]
([num1, , num3] = newArr)
console.log(num1, num3)

// OBJECT DESTRUCTURING

({personName, age} = {
    personName: 'Calvin',
    age: 24
})

// Wrapping it up within paranthesis