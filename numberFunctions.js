// getBigger
// √ Exists (1 ms)
// √ Is a function (1 ms)
// √ Returns a number when passed two numbers
// √ Returns 1 when passed 1 and 0
// √ Returns 1000 when passed 3 and 1000
// √ Returns 0 when passed 0 and 0 (1 ms)
// √ Returns 5 when passed 3 and 5
// √ Returns -10 when passed -15 and -10


const getBigger = (num1, num2) => {
    if (num1 > num2) {
        return num1
    } else return num2
}


// getSmallest
// √ Exists
// √ Is a function
// √ Returns a number when passed an array of numbers (1 ms)
// √ Returns null when passed an empty array
// √ Returns 0 when passed [ 0, 0, 0 ]
// √ Returns 1 when passed [ 1, 2, 3 ]
// √ Returns -100 when passed [ -1, -10, -100 ] (1 ms)
// √ Returns null when passed []
// √ Returns 500 when passed [ 1000, 500, 900 ]
// √ Returns -2 when passed [ -1, 0, -2 ]


const getSmallest = (arr) => {
    if(!arr || arr.length === 0) {
        return null
    } 

    let smallestValue = arr[0]

    for (let i = 0; i < arr.length; i++) {
        if (smallestValue > arr[i]) {
            smallestValue = arr[i];
        }
    }
    return smallestValue
}

// countValue
// √ Exists
// √ Is a function
// √ Returns a number when passed an array and a value
// √ Returns zero when passed an empty array and a value
// √ Returns null when passed an array only
// √ Returns 1 when passed [ 0, 1, 2 ] and 0
// √ Returns 3 when passed [ 1, 1, 1, 2 ] and 1 (1 ms)
// √ Returns 0 when passed [ 2, 3, 1 ] and 4
// √ Returns 6 when passed [ 3, 3, 3, 3, 3, 3 ] and 3 (1 ms)
// √ Returns 0 when passed [ 1000, 1000, 1000 ] and -1000


// if num equals a value in the array of numbers, return a count of number values in the array that equal num

const countValue = (arrOfNum, num) => {
    if (arrOfNum.length === 0) {
        return 0
    } else if (num === undefined) {
        return null
    }

    let count = 0;

    for(let i = 0; i < arrOfNum.length; i++) {
        if (arrOfNum[i] === num) {
            count++
        }
    } 
    return count
}

module.exports = {getBigger, getSmallest, countValue};