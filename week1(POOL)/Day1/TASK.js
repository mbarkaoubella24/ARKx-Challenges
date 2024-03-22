//The Basics
//Task1
let firstname="Mbarka";
let lastname="OUBELLA";
const PI= 3.14;
var radius= 7;
let favoriteSuperhero="ironman";
let favoriteQuote="I never lose, Elther I win or learn.";
//Task2
const fullname= firstname+" "+lastname;
console.log(fullname);
let area= PI*radius*radius;
console.log(area);
let perimeter= 2*radius*PI;
console.log(perimeter);
let motivation= "A wise man named: <"+favoriteSuperhero+">: <"+favoriteQuote+ ">";
//let motivation= 'A wise man named: <${favoriteSuperhero}>: "<${favoriteQuote}>"';
console.log(motivation);
//Task3
let a = 3;
let b = 10;
 a=b;
 b=b-5;
console.log("After swapping: a = ", a, " and b = ", b);
//Conditional Statements
//Task 1
let number = 8;  
let R;        
if (number % 2 === 0) {
    R = "Even";
} else {
    R = "Odd";
}
console.log("The number: " + number + " is " + R );
//Task 2
var day = 4;
if (day === 1) {
    console.log("Monday");
  } else if (day === 2) {
    console.log("Tuesday");
  } else if (day === 3) {
    console.log("Wednesday");
  } else if (day === 4) {
    console.log("Thursday");
  } else if (day === 5) {
    console.log("Friday");
  } else if (day === 6) {
    console.log("Saturday");
  } else if (day === 7) {
    console.log("Sunday");
  } else {
    console.log("Invalid Day");
  }
//switch (day) {
   // case 1:
     //   console.log("Monday");
       // break;
   // case 2:
        //console.log("Tuesday");
       // break;
   // case 3:
       // console.log("Wednesday");
        //break;
   // case 4:
     //   console.log("Thursday");
      //  break;
   // case 5:
       // console.log("Friday");
       // break;
    //case 6:
      //  console.log("Saturday");
       // break;
   // case 7:
      //  console.log("Sunday");
       // break;
   // default:
      //  console.log("Invalid Day");}
//Task 3
let aa = -15;
let bb = 6;
let cc = 2.6;
var max ;
 if(aa > bb){
    if(aa > cc){
       max=aa;
     }
    else{
       max=cc;
    }
    }
 else{
    if(bb > cc){
    max=bb;
     }
    }
    console.log(max);
//Task 4
let score = 83;
let grade;
if (score > 85) {
    grade = "A";
} else if (score > 70) {
    grade = "B";
} else if (score > 55) {
    grade = "C";
} else if (score > 40) {
    grade = "D";
} else if (score > 15) {
    grade = "E";
} else {
    grade = "F";
}
console.log(grade);

    


