let digits = 3;
let number = 10 ** (digits - 1);
var palindromicNumbers = [];

function isPalindrome(word){
    let length = word.length;
    for (let i = 0; i < (length / 2); i++){
        if (word[i] !== word[length - 1 - i]){
            return false;
        };
    };
    return true;
};

while (number < 10 ** digits){
    for(let i = 10 ** (digits - 1); i < 10 ** digits; i++){
        output = i * number;
        outputString = String(output);
        if (isPalindrome(outputString) == true){
            palindromicNumbers.push(output);
            // console.log(output + " is palindromic"); //DEBUG
        };
    };
    number++;
};

palindromicNumbers.sort(function(a, b){return a - b});
let lastElement = palindromicNumbers[(palindromicNumbers.length - 1)];
console.log(lastElement);
