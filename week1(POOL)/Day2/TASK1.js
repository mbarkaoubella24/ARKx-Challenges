//Loops
//Task 1 
let num = 5;
let fn = 1;
for (let i = 1; i <= num; i++) {
    fn *= i;
}
console.log(fn);
//Task 2
var num1 = 123542;
var nd = 0;
while (num1 !== 0) {
    num1 = Math.floor(num1 / 10);
    nd++;
}
console.log( nd);
//Task 3
let levels = 4;

for (let i = 1; i <= levels; i++) {
   
    for (let j = levels - i; j > 0; j--) {
        process.stdout.write(" ");
    }

    
    for (let k = 1; k <= 2 * i - 1; k++) {
        process.stdout.write("*");
    }
    console.log( );
}
//var l= 4;
    //for(i=1; i<=l; i++)
   // { 
       // for(j=i; j<l; j++)
       // {
        //    document.write(" ");
       // }
        //for(j=1; j<=(2*i-1); j++)
        //{
          //  document.write("*");
        //}
        //document.write("<br>");
        //}
/////////////
 //let l = 4;
 //for (i = 1; i <= l; i++) {
  // for (j = i; j > l; j++) {
   // document.write(" ");
   //}
   //for(j=1; j<=(2*i-1); j++) {
    //document.write("*");
   // }
   //console.log();
 //}
 //for (i = 0; i < l - 1; i++) {
    //document.write("  ");
// }
 //console.log("|");
/////////////////
//Functions & Reusability
//Task 1 
function factorial(n) {
    let R = 1;

    for (let i = 1; i <= n; i++) {
        R *= i;
    }

    return R;
}
let factorialR = factorial(5);
console.log("Factorial is:"+ factorialR);
///////
function nDigits(number) {
    let numDigits = 0;

    while (number !== 0) {
        number = Math.floor(number / 10);
        numDigits++;
    }

    return numDigits;
}
let numDigitsR = nDigits(123542);
console.log( numDigitsR);
/////
function numberToDay(number) {
    const daysW = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    if (number >= 1 && number <= 7) {
        return daysW[number - 1];
    } else {
        return "Invalid day";
    }
}
let dayR = numberToDay(3);
console.log("Day is:"+ dayR);
//////
function myGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}
let gradeR = myGrade(85);
console.log("the grade is:"+ gradeR);
//Task 2
function combinator(n, p) {
    if (n >= p && p >= 0) {
        return factorial(n) / (factorial(p) * factorial(n - p));
    } else {
        return "Invalid.";
    }
}
let combinationR = combinator(5, 2);
console.log("Combinations (5,2):"+ combinationR);
//Task 3
function calculator(num1, operation, num2) {
    switch (operation) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        case '%':
            return num1 % num2;
        case 'c':
            
            if (Number.isInteger(num1) && Number.isInteger(num2)) {
                return combinator(num1, num2);
            } else {
                return "Invalid.";
            }
        default:
            return "Invalid.";
    }
}
console.log(calculator(5, "+", 1));
console.log(calculator(3, "*", -4)); 
console.log(calculator(5, 'c', 2)); 