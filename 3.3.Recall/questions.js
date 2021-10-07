let selectElementsStartingWithA = (array) => {
    let result=[];
    for (let elem of array) {
        if (elem[0]==="a") result.push(elem);
    }
    return result;
}

let selectElementsStartingWithVowel = (array) => {
    let result=[];
    for (let elem of array) {
        if (elem[0]==="a" || elem[0]==="e" || elem[0]==="i" || elem[0]==="u" || elem[0]==="o") result.push(elem);
    }
    return result;
}

let removeNullElements = (array) => {
    let result=[];
    for (let elem of array) {
        if (elem!==null) result.push(elem);
    }
    return result;
}

let removeNullAndFalseElements = (array) => {
    let result=[];
    for (let elem of array) {
        if (elem!==null && elem!==false) result.push(elem);
    }
    return result;
}

let reverseWordsInArray = (array) => {
    let result=[];
    for (let elem of array) {
        result.push(elem.split("").reverse().join(""));
    }
    return result;
}

let everyPossiblePair = (array) => {
    let result = [];
    array.sort();
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (i !== j) {
                result.push([array[i], array[j]]);
            }
        }}
    return result;
}

let allElementsExceptFirstThree = (array) => {
    let result=[];
    let i=1;
    for (let elem of array) {
        if(i>3) result.push(elem);
        i++;
    }
    return result;
}

let addElementToBeginning = (array, element) => {
    array.unshift(element);
    return array;
}

let sortByLastLetter = (array) => {
    let result=[];
    let result2=[];
    for (let elem of array) {
        result.push(elem.split("").reverse().join(""));
    }
    result.sort();
    for (let elem of result) {
        result2.push(elem.split("").reverse().join(""));
    }
    return result2;
}

let getFirstHalf = (string) => {
    return string.substr(0, Math.ceil(string.length / 2));
}

let makeNegative = (number) => {
    return -Math.abs(number);
}

let numberOfPalindromes = (array) => {
    let palindromes = 0;
    array.forEach(e => {
        let firstPart = getFirstHalf(e);
        let secondPart = getFirstHalf(e.split('').reverse().join(''));
        if (firstPart === secondPart) palindromes++;
    });
    return palindromes;
}

let shortestWord = (array) => {
    let shortWord="abcdefghijklmnopqrstuvwxyz";
    for (let elem of array) {
        if (elem.length<shortWord.length) shortWord=elem;
    }
    return shortWord;
}

let longestWord = (array) => {
    let shortWord="";
    for (let elem of array) {
        if (elem.length>shortWord.length) shortWord=elem;
    }
    return shortWord;
}

let sumNumbers = (array) => {
    let sum=0;
    for (let elem of array) {
        sum = sum+elem;
    }
    return sum;
}

let repeatElements = (array) => {
    let result=[];
    for (let elem of array) {
        result.push(elem);
    }
    for (let elem of array) {
        result.push(elem);
    }
    return result;
}

let stringToNumber = (string) => {
    return Number(string);
}

let calculateAverage = (array) => {
    let sum=0;
    for (let elem of array) {
        sum = sum+elem;
    }
    return sum/array.length;
}

let getElementsUntilGreaterThanFive = (array) => {
    let result=[];
    for (let i=0; i<6;i++) {
        result.push(array[i]);
    }
    return result;
}

let convertArrayToObject = (array) => {
    let arrObj = [];
    while (array.length > 0) {
        arrObj.push(array.splice(0,2));
    }
    return Object.fromEntries(arrObj);
}

let getAllLetters = (array) => {

    return 'Write your method here';
}

let swapKeysAndValues = (object) => {
    return 'Write your method here';
}

let sumKeysAndValues = (object) => {
    return 'Write your method here';
}

let removeCapitals = (string) => {
    return 'Write your method here';
}

let roundUp = (number) => {
    return 'Write your method here';
}

let formatDateNicely = (date) => {
    return 'Write your method here';
}

let getDomainName = (string) => {
    return 'Write your method here';
}

let titleize = (string) => {
    return 'Write your method here';
}

let checkForSpecialCharacters = (string) => {
    return 'Write your method here';
}

let squareRoot = (number) => {
    return 'Write your method here';
}

let factorial = (number) => {
    return 'Write your method here';
}

let findAnagrams = (string) => {
    return 'Write your method here';
}

let convertToCelsius = (number) => {
    return 'Write your method here';
}

let letterPosition = (array) => {
    return 'Write your method here';
}
