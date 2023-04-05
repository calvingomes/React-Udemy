// ARROW FUNCTIONS

const myFunctionNoArgs = () => {
    console.log("This is a new function")
}

const myFunction1Args = name => {
    console.log(name)
}

const myFunction2Args = (name, age) => {
    console.log(name, age)
}

const myFunctionReturn = num => num * 2

// This basically means

const myFunctionReturnMeans = (num) => {
    return num * 2
}

myFunctionNoArgs()
myFunction1Args('Calvin')
myFunction2Args('Calvin', 24)
myFunctionReturn(2)
myFunctionReturnMeans(2)

// Handles this keyword issues