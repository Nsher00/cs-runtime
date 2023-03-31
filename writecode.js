let testArr = [1,2,3,4,5]

let sumZero = (arr)=>{
    let isTrue = false
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                console.log(arr[i], arr[j]);
                isTrue = true
            }
        }
    }
    return isTrue
}

console.log(sumZero(testArr));
//The code above has a linear runtime O(n^2)

let testStr = "tuesday"
let diffChars = (str)=>{
    let isDiff = true
    let currChar = str[0]
    for (let i = 1; i < str.length; i++) {
        if (currChar === str[i]) {
            isDiff = false
        }else{
            currChar = str[i]
        }
       }
    return isDiff
}

console.log(diffChars(testStr));
//this code is has a run time of O(n)

let testPangram = 'The quick brown fox jumps over the lazy dog!'

let panSen = (str)=>{
    let isPangram = false
    let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    for (let i = 0; i < letters.length; i++) {
        if (str.includes(letters[i])) {
            isPangram = true
        }else{
            isPangram = false
        }
    }
    return isPangram
}

console.log(panSen(testPangram));
//the code above has a run time of O(n)

let testWordArr = ['hi','hello','helloworld']

let longWord = (arr)=>{
    let currWord = arr[0]
    let longestWord = 0
    for (let i = 1; i < arr.length; i++) {
        if (currWord.length > arr[i].length) {
            longestWord = currWord
        }else{
            currWord = arr[i]
            longestWord = currWord
        }
    }
    return longestWord
}

console.log(longWord(testWordArr));
//this code has a runtime of O(n)