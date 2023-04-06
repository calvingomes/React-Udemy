const numbers = [1, 2, 3]

const doubleNum = numbers.map(num => {
    return num * 2;
})

console.log(numbers);
console.log(doubleNum);

function transformToObjects(numberArray) {
    return numberArray.map(num => { 
        return {
            val: num
        }
    });
}

// GIVES
// [1, 2, 3] => [{val: 1}, {val: 2}, {val: 3}]