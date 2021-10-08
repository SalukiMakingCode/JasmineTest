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
    let letters="";
    for (let elem of array) {
        letters=letters+elem;
    }
    return [...new Set(letters.split(''))].sort();
}

let swapKeysAndValues = (object) => {
    let obj = {};
    Object.keys(object).forEach(key => {
        obj[object[key]] = key;
    });
    return obj;
}

let sumKeysAndValues = (object) => {
    let sum = 0;
    Object.keys(object).forEach(key => {
        sum =sum + Number(object[key]) + Number(key);
    });
    return sum
}

let removeCapitals = (string) => {
    return string.replace(/[A-Z]/g,"");
}

let roundUp = (number) => {
    return Math.ceil(number);
}

let formatDateNicely = (date) => {
    let array = date.toString().split('') ;
    let mois=array[4]+array[5]+array[6];
    if (mois==="Jan") mois="01";
    if (mois==="Feb") mois="02";
    if (mois==="Mar") mois="03";
    if (mois==="Apr") mois="04";
    if (mois==="May") mois="05";
    if (mois==="Jun") mois="06";
    if (mois==="Jul") mois="07";
    if (mois==="Aug") mois="08";
    if (mois==="Sep") mois="09";
    if (mois==="Oct") mois="10";
    if (mois==="Nov") mois="11";
    if (mois==="Dec") mois="12";
    return array[8] + array[9] + "/" + mois + "/" + array[11] + array[12] + array[13] + array[14];
}

let getDomainName = (string) => {
    let arr=string.split("@");
    let arr2=arr[1].split(".")
    let result="";
    for (let i=0; i<arr2.length-1;i++) {
        result=result+arr2[i];
        if (i<arr2.length-2) result=result+".";
    }
    return result;
}

let titleize = (string) => {
    let array=string.split(" ");
    let preview="";
    let newString="";
    for (let elem of array) {
        if (preview==="") { newString=elem[0].toUpperCase()+elem.substring(1) + " "; preview=newString; }
        else if (preview===".") { newString=newString+elem[0].toUpperCase()+elem.substring(1) + " "; preview=newString; }
        else {
            if (elem==="the" || elem==="and") { newString=newString + elem + " "; preview=elem; }
            else {
                newString=newString+elem[0].toUpperCase()+elem.substring(1) + " "; preview=newString;
                if (elem.substring(elem.length-1)===".") preview=".";
            }
        }
    }
    newString=newString.substring(0, newString.length - 1);
    return newString;
}

let checkForSpecialCharacters = (string) => {
    let regex = /^[A-Za-z0-9 ]+$/;
    let nospecial = regex.test(string);
    return !nospecial;
}

let squareRoot = (number) => {
    return Math.sqrt(number);
}

let factorial = (number) => {
    if(number == 0 || number == 1){
        return 1;
    }else{
        return number * factorial(number-1);
    }
}

let findAnagrams = (string) => {
let newString=[];
    if (string.length===2) {
        newString.push(string[0]+string[1]);
        newString.push(string[1]+string[0]);
    }
    if (string.length===3) {
        newString.push(string[0]+string[1]+string[2]);
        newString.push(string[0]+string[2]+string[1]);
        newString.push(string[1]+string[0]+string[2]);
        newString.push(string[1]+string[2]+string[0]);
        newString.push(string[2]+string[0]+string[1]);
        newString.push(string[2]+string[1]+string[0]);
    }

    return newString.sort();
}

let convertToCelsius = (number) => {
    return Math.ceil((5/9) * (number - 32));
}

let letterPosition = (array) => {
    let result = [];
    for (let elem of array) {
        result.push(elem.toLowerCase().charCodeAt(0) - 96);
    }
    return result;
}
