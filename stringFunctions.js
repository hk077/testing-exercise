// getLonger
// × Exists (3 ms)
// × Is a function (2 ms)
// × Throws an error when passed no values (13 ms)
// × Throws an error when passed only one value (1 ms)
// × Throws an error when passed non-string arguments (1 ms)
// × Throws an error when passed one non-string argument (1 ms)
// × Returns a when passed a and
// × Returns  when passed  and
// × Returns blue when passed red and blue (1 ms)
// × Returns green when passed green and blue
// × Returns hopscotch when passed hopscotch and I

const getLonger = (str1, str2) => {

    if(str1 === undefined || str2 === undefined) {
        throw new Error("This function requires two arguments!")
    } else if (typeof str1 !== "string" || typeof str2 !== "string") {
        throw new Error("Arguments must be strings!");
    } else if(str1.length > str2.length) {
        return str1
    } else return str2
}

// greet
// × Exists (1 ms)
// × Is a function (1 ms)
// × Returns 'Hi!' when called with no arguments
// × Returns 'Hi!' when called with an empty string
// × Returns Hello, Julia! when passed Julia
// × Returns Hello, 2! when passed 2
// × Returns Hello, Norman! when passed Norman
// × Returns Hello, Bernadette D'Anjou! when passed Bernadette D'Anjou
// × Returns Hello, X! when passed X

let emptyGreet = "Hi!"
const greet = (name) => {
    if(!name || name === undefined) {
        return emptyGreet
    } else return `Hello, ${name}!`
        // return "Hello, " + str + "!"  //can also do it like this
}

// isSubstring
// × Exists
// × Is a function
// × Throws an error when passed no values (2 ms)
// × Throws an error when passed only one value (1 ms)
// × Throws an error when passed non-string arguments (2 ms)
// × Throws an error when passed one non-string argument (1 ms)
// × Throws an error when passed empty strings (2 ms)
// × Returns true when passed catapult and cat
// × Returns false when passed catapult and dog
// × Returns true when passed emptiness and ess
// × Returns false when passed green and blue
// × Returns true when passed hopscotch and sco (1 ms)

const isSubstring = (str, substr) => {
    if(str === undefined || substr === undefined) {
        throw new Error("This function requires two arguments!")
    } else if(typeof str != "string" || typeof substr != "string") {
        throw new Error("Arguments must be strings!")
    } else if (str.length <= 0 || substr.length <= 0) {
        throw new Error("Arguments must have a length greater than zero!")
    } else return str.includes(substr)

    //check to see if substr is a part of str -> if yes, return true // else return false

}

module.exports = {getLonger, greet, isSubstring}